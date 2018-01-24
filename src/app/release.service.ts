import { Injectable } from '@angular/core';
import { RollbarService } from 'angular-rollbar';
import { RELEASES } from './releases';
import { NOTES } from './notes';
import { SemVer } from 'semver';

@Injectable()
export class ReleaseService {

  releases = RELEASES;
  notes = NOTES;
  siblings = {
    '@ionic-native/core': '@ionic-native/',
    '@angular/core': '@angular/'
    // TODO Special case for @angular/cli: Explicitly list which packages to update
    // e.g. `@angular/(animations|router|...)` and use regex instead of .startWith()
  };
  remove = [
    // TODO Text and link
    '@angular/platform-server',
    '@ionic/cli-plugin-cordova',
    '@ionic/cli-plugin-ionic-angular',
    '@ionic/cli-plugin-ionic1',
    '@ionic/cli-plugin-gulp'
  ];

  changes = [];

  constructor(private rollbar: RollbarService) { }

  getAll(): any {
    return this.releases;
  }

  getDefaultVersionName(): string {
    return this.releases[0].name;
  }

  getInputVersion(input): string {
    try {
      const inputJson = JSON.parse(input);
      const currentVersion = inputJson.dependencies['ionic-angular'];
      console.log('getInputVersion currentVersion', currentVersion)
      if (currentVersion) {
        return 'v' + SemVer.coerce(currentVersion);
      } else {
        return '';
      }
    } catch (error) {
      return '';
    }
  }

  updatePackageJson(input, selectedVersionName): any {
    this.changes = [];

    // unchanged input
    const inputJson = JSON.parse(input);

    // get template to "apply"
    const releaseIndex = this._getReleaseIndex(selectedVersionName);
    const template = this._getReleaseJson(releaseIndex);

    // apply template to dependencies
    const outputJson = Object.assign({}, inputJson);
    outputJson.dependencies = this._processDependencies(inputJson.dependencies, template.dependencies);
    // get changes from property (instead of method return) - ugly but works
    const changes = this.changes;
    this.changes = []; // reset for devDeps
    // apply template to devDependencies
    outputJson.devDependencies = this._processDependencies(inputJson.devDependencies, template.devDependencies);
    // get changes from property (instead of method return) - ugly but works
    const devChanges = this.changes;

    // versions we are working with
    const currentVersion = SemVer.coerce(inputJson.dependencies['ionic-angular']).raw;
    const updatedVersion = outputJson.dependencies['ionic-angular'];

    // generate "static" notes (that only depend on start and target version)
    console.log('currentVersion = ', currentVersion, 'updateVersion = ', updatedVersion);
    const notes = [];
    this.notes.forEach(release => {
      for (const key in release['data']) {
        if (release['data'].hasOwnProperty(key)) {
          const note = release['data'][key];
          note['dep2'] = JSON.stringify(note['dep'], null, 2);
          note['links2'] = JSON.stringify(note['links'], null, 2);
          switch (note['type']) {
            case 'new':
              note['emoji'] = '✳️';
              break;
            case 'note':
              note['emoji'] = '📑';
              break;
            case 'warning':
              note['emoji'] = '⚠️';
              break;
            default:
              break;
          }
        }
      }
      // console.log('note-version > currentVersion?', SemVer.gt(release['version'], currentVersion), release['version'], currentVersion);
      // console.log('note-version > updatedVersion? ', SemVer.gt(release['version'], updatedVersion), release['version'], updatedVersion);
      if (SemVer.gt(release['version'], currentVersion) && !SemVer.gt(release['version'], updatedVersion)) {
        notes.push(release);
      }
    });
    console.log('notes:', notes);

    // create string ouput
    const output = JSON.stringify(outputJson, null, 2);

    // log
    this.rollbar.info('updateButton', null, { input: input, output: output, notes: notes });

    return { output: output, changes: changes, devChanges: devChanges, notes: notes, versions: { currentVersion, updatedVersion } };
  }

  _compareSemver(ver1, ver2) {
    ver1 = ver1.split('.').map( s => s.padStart(10) ).join('.');
    ver2 = ver2.split('.').map( s => s.padStart(10) ).join('.');
    return ver1 <= ver2;
  }

  _getReleaseJson(releaseIndex): any {
    return this.releases[releaseIndex].json;
  }

  _getReleaseIndex(k): number {
    const arr = this.releases;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === k) {
        return i;
      }
    }
  }

  // source: https://stackoverflow.com/a/1584377/252627
  _arrayUnique(array) {
    const a = array.concat();
    for (let i = 0; i < a.length; ++i) {
      for (let j = i + 1; j < a.length; ++j) {
        if (a[i] === a[j]) {
          a.splice(j--, 1);
        }
      }
    }

    return a;
  }

  _processDependencies(current: any, template: any): any {
    // get all keys by combining current and template
    const currentKeys = Object.keys(current);
    const templateKeys = Object.keys(template);
    let allKeys = currentKeys.concat(templateKeys);
    allKeys = this._arrayUnique(allKeys);
    console.log('allkeys', allKeys);

    // prefill return value with current state
    const updated = Object.assign({}, current);

    for (const key in allKeys) {
      if (allKeys.hasOwnProperty(key)) {
        let _type = '';
        let _emoji = '';
        const packageName = allKeys[key];
        // template replacements
        if (current.hasOwnProperty(packageName) && template.hasOwnProperty(packageName)) {
          updated[packageName] = template[packageName];
          if (SemVer.coerce(current[packageName]).raw === updated[packageName]) {
            // unchanged dependency
            _type = 'unchanged';
            _emoji = '💤';
          } else if (SemVer.coerce(current[packageName]).raw < updated[packageName]) {
            // updated dependency
            _type = 'update';
            _emoji = '↗️';
          } else {
            // downgraded dependency
            _type = 'downgrade';
            _emoji = '💣';
          }
        } else if (current.hasOwnProperty(packageName) && !template.hasOwnProperty(packageName)) {
          // "undefined" dependency (no instructions what to do with that package in template)
          _type = 'undefined';
          _emoji = '❔';
        } else if (!current.hasOwnProperty(packageName) && template.hasOwnProperty(packageName)) {
          updated[packageName] = template[packageName];
          // added new dependency
          _type = 'added new';
          _emoji = '✳️';
        } else {
          console.error('no idea what to do with ' + packageName);
        }
        this._addChange(_type, _emoji, packageName, current, updated);
      }
    }

    // sibling replacements
    for (const key in this.siblings) {
      if (this.siblings.hasOwnProperty(key)) {
        const packageName = key;
        const pattern = this.siblings[key];
        for (const updatedPackageName in updated) {
          if (updated.hasOwnProperty(updatedPackageName)) {
            const targetVersion = updated[packageName];
            if (updatedPackageName.startsWith(pattern) && targetVersion !== updated[updatedPackageName]) {
              // tslint:disable-next-line:max-line-length
              console.log('sibling for ' + packageName + ' (' + pattern + '): ' + updatedPackageName + ' ' + updated[updatedPackageName] + ' -> ' + targetVersion);
              updated[updatedPackageName] = targetVersion;
              // TODO add note (somehow)
              this._updateChange(updatedPackageName, targetVersion, '↗️');
            }
          }
        }
      }
    }

    // remove unneeded packages
    this.remove.forEach(packageNameToRemove => {
      for (const updatedPackageName in updated) {
        if (updated.hasOwnProperty(updatedPackageName)) {
          if (updatedPackageName === packageNameToRemove) {
            this._removePackage(packageNameToRemove, updated);
          }
        }
      }
    });

    // special, hardcoded cases:
    // 1. remove `ionic-native` if `@ionic-native/core` is present
    if (updated['@ionic-native/core']) {
      this._removePackage('ionic-native', updated);
    }

    return updated;
  }


  _removePackage(packageName, dependencies) {
    console.log('remove ' + packageName);
    delete dependencies[packageName];
    // TODO add note (somehow)
    this._updateChange(packageName, null, '⛔');
  }

  _addChange(label, emoji, packageName, current, updated): void {
    this.changes.push([packageName, current[packageName], updated[packageName], emoji]);
    // this.changes[packageName] = [packageName, current[packageName], updated[packageName], emoji];
    console.log(label + ': ' + packageName + ' ' + current[packageName] + ' -> ' + updated[packageName]);
  }

  _updateChange(packageName, version, emoji): void {
    this.changes.forEach(change => {
      if (change[0] === packageName) {
        change[2] = version;
        change[3] = emoji;
      }
    });
  }

  public getExample(): {} {
    // tslint:disable:quotemark
    return {
  "name": "ionic-hello-world",
  "author": "Ionic Framework",
  "homepage": "http://ionicframework.com/",
  "private": true,
  "scripts": {
    "clean": "ionic-app-scripts clean",
    "build": "ionic-app-scripts build",
    "ionic:build": "ionic-app-scripts build",
    "ionic:serve": "ionic-app-scripts serve"
  },
  "dependencies": {
    "@angular/common": "2.4.8",
    "@angular/compiler": "2.4.8",
    "@angular/compiler-cli": "2.4.8",
    "@angular/core": "2.4.8",
    "@angular/forms": "2.4.8",
    "@angular/http": "2.4.8",
    "@angular/platform-browser": "2.4.8",
    "@angular/platform-browser-dynamic": "2.4.8",
    "@angular/platform-server": "2.4.8",
    "@ionic-native/core": "3.1.0",
    "@ionic-native/splash-screen": "3.1.0",
    "@ionic-native/status-bar": "3.1.0",
    "@ionic/cloud-angular": "^0.11.0",
    "@ionic/storage": "2.0.0",
    "ionic-angular": "2.3.0",
    "ionicons": "3.0.0",
    "rxjs": "5.0.1",
    "sw-toolbox": "3.4.0",
    "zone.js": "0.7.2"
  },
  "devDependencies": {
    "@ionic/app-scripts": "1.1.4",
    "@ionic/cli-plugin-ionic-angular": "1.3.0",
    "typescript": "2.0.9"
  },
  "cordovaPlugins": [
    "cordova-plugin-whitelist",
    "cordova-plugin-console",
    "cordova-plugin-statusbar",
    "cordova-plugin-device",
    "cordova-plugin-splashscreen",
    "ionic-plugin-keyboard"
  ],
  "cordovaPlatforms": [],
  "description": "yatsa: An Ionic project"
};
  }


  public getExample2(): {} {
    // tslint:disable:quotemark
    return {
    "name": "ionic-hello-world",
    "author": "Ionic Framework",
    "homepage": "http://ionicframework.com/",
    "private": true,
    "scripts": {
      "clean": "ionic-app-scripts clean",
      "build": "ionic-app-scripts build",
      "ionic:build": "ionic-app-scripts build",
      "ionic:serve": "ionic-app-scripts serve"
    },
    "dependencies": {
      "@angular/common": "2.2.1",
      "@angular/compiler": "2.2.1",
      "@angular/compiler-cli": "2.2.1",
      "@angular/core": "2.2.1",
      "@angular/forms": "2.2.1",
      "@angular/http": "2.2.1",
      "@angular/platform-browser": "2.2.1",
      "@angular/platform-browser-dynamic": "2.2.1",
      "@angular/platform-server": "2.2.1",
      "@ionic/storage": "1.1.7",
      "ionic-angular": "2.0.0",
      "ionic-native": "2.4.1",
      "ionicons": "3.0.0",
      "rxjs": "5.0.0-beta.12",
      "zone.js": "0.6.26",
      "sw-toolbox": "3.4.0"
    },
    "devDependencies": {
      "@ionic/app-scripts": "1.0.0",
      "typescript": "2.0.9"
    },
    "cordovaPlugins": [
      "cordova-plugin-whitelist",
      "cordova-plugin-console",
      "cordova-plugin-statusbar",
      "cordova-plugin-device",
      "cordova-plugin-splashscreen",
      "ionic-plugin-keyboard"
    ],
    "cordovaPlatforms": [],
    "description": "A pretty old Ionic project"
    };
  }

  public getExample3(): {} {
    // tslint:disable:quotemark
    return {
      "name": "...",
      "author": "...",
      "homepage": "...",
      "private": true,
      "scripts": {
        "clean": "ionic-app-scripts clean",
        "build": "ionic-app-scripts build",
        "ionic:build": "ionic-app-scripts build",
        "ionic:serve": "ionic-app-scripts serve"
      },
      "dependencies": {
        "@angular/animations": "4.4.4",
        "@angular/common": "4.4.4",
        "@angular/compiler": "4.4.4",
        "@angular/compiler-cli": "4.4.4",
        "@angular/core": "4.4.4",
        "@angular/forms": "4.4.4",
        "@angular/http": "4.4.4",
        "@angular/platform-browser": "4.4.4",
        "@angular/platform-browser-dynamic": "4.4.4",
        "@angular/platform-server": "4.4.4",
        "@angular/router": "4.4.4",
        "@ionic-native/app-minimize": "^4.2.1",
        "@ionic-native/app-version": "^4.1.0",
        "@ionic-native/core": "^4.3.1",
        "@ionic-native/device": "^4.1.0",
        "@ionic-native/facebook": "^4.1.0",
        "@ionic-native/firebase-analytics": "^4.4.2",
        "@ionic-native/geolocation": "^4.1.0",
        "@ionic-native/google-maps": "^4.4.2",
        "@ionic-native/google-plus": "^4.1.0",
        "@ionic-native/in-app-browser": "^4.5.2",
        "@ionic-native/keyboard": "^4.3.2",
        "@ionic-native/spinner-dialog": "^4.1.0",
        "@ionic-native/splash-screen": "^4.1.0",
        "@ionic-native/status-bar": "^4.4.2",
        "@ionic-native/vibration": "^4.1.0",
        "@ionic/storage": "^2.0.1",
        "@types/google-maps": "^3.2.0",
        "@types/googlemaps": "^3.26.14",
        "@types/phonegap-plugin-push": "^2.0.0",
        "ajv": "^5.3.0",
        "angularfire2": "^4.0.0-rc.1",
        "angularfire2-offline": "^4.3.1",
        "cordova": "^7.0.1",
        "cordova-android": "6.3.0",
        "cordova-plugin-app-version": "^0.1.9",
        "cordova-plugin-appminimize": "^1.0.0",
        "cordova-plugin-crosswalk-webview": "^2.3.0",
        "cordova-plugin-device": "^1.1.6",
        "cordova-plugin-email-composer": "^0.8.12",
        "cordova-plugin-facebook4": "^1.9.1",
        "cordova-plugin-firebase-analytics": "^0.12.1",
        "cordova-plugin-geolocation": "^3.0.0",
        "cordova-plugin-googlemaps": "^2.1.1",
        "cordova-plugin-googlemaps-sdk": "git+https://github.com/mapsplugin/cordova-plugin-googlemaps-sdk.git",
        "cordova-plugin-googleplus": "^5.1.1",
        "cordova-plugin-inappbrowser": "^2.0.1",
        "cordova-plugin-ionic-webview": "^1.1.16",
        "cordova-plugin-native-spinner": "^1.1.3",
        "cordova-plugin-splashscreen": "^4.0.3",
        "cordova-plugin-statusbar": "^2.3.0",
        "cordova-plugin-vibration": "^2.1.5",
        "cordova-plugin-whitelist": "^1.3.2",
        "cordova-support-google-services": "^1.0.0",
        "firebase": "^4.4.0",
        "hyphenation.de": "^0.2.1",
        "hypher": "^0.2.5",
        "ionic-angular": "^3.8.0",
        "ionic-plugin-keyboard": "^2.2.1",
        "ionic2-super-tabs": "^4.1.4",
        "ionicons": "3.0.0",
        "ios-sim": "^6.0.0",
        "moment": "^2.18.1",
        "phonegap-plugin-push": "^2.1.2",
        "promise-polyfill": "6.0.2",
        "rxjs": "5.4.3",
        "sw-toolbox": "3.6.0",
        "typescript": "2.3.4",
        "webpack": "^3.8.1",
        "zone.js": "0.8.18",
        "cordova-ios": "~4.5.4"
      },
      "devDependencies": {
        "@angular/cli": "^1.0.3",
        "@ionic/app-scripts": "^3.1.2",
        "ionic": "3.19.0"
      },
      "cordovaPlugins": [
        {
          "locator": "phonegap-plugin-push"
        },
        "cordova-plugin-whitelist",
        "cordova-plugin-console",
        "cordova-plugin-statusbar",
        "cordova-plugin-device",
        "cordova-plugin-splashscreen",
        "ionic-plugin-keyboard",
        "cordova-plugin-native-spinner"
      ],
      "cordovaPlatforms": [],
      "description": "...",
      "cordova": {
        "platforms": [
          "android",
          "ios"
        ],
        "plugins": {
          "cordova-plugin-device": {},
          "cordova-plugin-splashscreen": {},
          "cordova-plugin-statusbar": {},
          "cordova-plugin-vibration": {},
          "cordova-plugin-whitelist": {},
          "ionic-plugin-keyboard": {},
          "cordova-plugin-facebook4": {
            "APP_ID": "...",
            "APP_NAME": "..."
          },
          "cordova-plugin-googleplus": {
            "REVERSED_CLIENT_ID": "..."
          },
          "cordova-plugin-native-spinner": {},
          "cordova-plugin-app-version": {},
          "cordova-plugin-geolocation": {
            "GEOLOCATION_USAGE_DESCRIPTION": "..."
          },
          "cordova-plugin-appminimize": {},
          "cordova-plugin-crosswalk-webview": {
            "XWALK_VERSION": "23+",
            "XWALK_LITEVERSION": "xwalk_core_library_canary:17+",
            "XWALK_COMMANDLINE": "--disable-pull-to-refresh-effect",
            "XWALK_MODE": "embedded",
            "XWALK_MULTIPLEAPK": "true"
          },
          "cordova-plugin-googlemaps": {
            "API_KEY_FOR_ANDROID": "...",
            "API_KEY_FOR_IOS": "...",
            "LOCATION_WHEN_IN_USE_DESCRIPTION": "...",
            "LOCATION_ALWAYS_USAGE_DESCRIPTION": "..."
          },
          "cordova-plugin-ionic-webview": {},
          "cordova-support-google-services": {},
          "phonegap-plugin-push": {
            "FCM_VERSION": "11.0.1"
          },
          "cordova-plugin-inappbrowser": {},
          "cordova-plugin-email-composer": {},
          "cordova-plugin-firebase-analytics": {
            "FIREBASE_VERSION": "11.0.+"
          }
        }
      },
      "config": {
        "ionic_purge_unused_fonts": false
      }
    };
  }

}
