import { Injectable } from '@angular/core';
import { RollbarService } from 'angular-rollbar';
import { RELEASES } from './releases';
import { NOTES } from './notes';
import { SemVer } from 'semver';

@Injectable()
export class ReleaseService {

  releases = RELEASES;
  notes = NOTES;

  changes = [];

  constructor(private rollbar: RollbarService) { }

  getAll(): any {
    return this.releases;
  }

  getDefaultVersionName(): string {
    return this.releases[0].name;
  }

  updatePackageJson(input, selectedVersionName): any {
    this.changes = [];

    // unchanged input
    const inputJson = JSON.parse(input);

    // get template to "apply"
    console.log('version selected in dropdown: ', selectedVersionName);
    const releaseIndex = this._getReleaseIndex(selectedVersionName);
    console.log('i is ', releaseIndex);
    const template = this._getReleaseJson(releaseIndex)

    // apply template to dependencies
    const outputJson = Object.assign({}, inputJson);
    outputJson.dependencies = this._processDependencies(inputJson.dependencies, template.dependencies);
    // get changes from property - ugly but works
    const changes = this.changes;
    this.changes = []; // reset for devDeps
    // apply template to devDependencies
    outputJson.devDependencies = this._processDependencies(inputJson.devDependencies, template.devDependencies);
    // get changes from property - ugly but works
    const devChanges = this.changes;

    // versions we are working with
    const currentVersion = inputJson.dependencies['ionic-angular'];
    const updatedVersion = outputJson.dependencies['ionic-angular'];

    // notes
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
      console.log('note-version > currentVersion?', SemVer.gt(release['version'], currentVersion), release['version'], currentVersion);
      console.log('note-version > updatedVersion? ', SemVer.gt(release['version'], updatedVersion), release['version'], updatedVersion);
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
    // get all keys
    const currentKeys = Object.keys(current);
    const templateKeys = Object.keys(template);
    let allKeys = currentKeys.concat(templateKeys);
    allKeys = this._arrayUnique(allKeys);
    console.log(allKeys);

    // prepare return value
    const updated = Object.assign({}, current);

    for (const key in allKeys) {
      if (allKeys.hasOwnProperty(key)) {

        const packageName = allKeys[key];
        console.log(packageName);

        if (current.hasOwnProperty(packageName) && template.hasOwnProperty(packageName)) {
          updated[packageName] = template[packageName];
          if (current[packageName] === updated[packageName]) {
            // unchanged dependency
            this.changes.push([packageName, current[packageName], updated[packageName], '💤']);
            console.log('unchanged: ' + packageName + ' ' + current[packageName] + ' -> ' + updated[packageName]);
          } else if(current[packageName] < updated[packageName]) {
            // updated dependency
            this.changes.push([packageName, current[packageName], updated[packageName], '↗️']);
            console.log('update: ' + packageName + ' ' + current[packageName] + ' -> ' + updated[packageName]);
          } else {
            // downgraded dependency
            this.changes.push([packageName, current[packageName], updated[packageName], '💣']);
            console.log('downgrade: ' + packageName + ' ' + current[packageName] + ' -> ' + updated[packageName]);
          }
        } else if (current.hasOwnProperty(packageName) && !template.hasOwnProperty(packageName)) {
          // removed dependency
          // TODO ?
          this.changes.push([packageName, current[packageName], '-', '⛔']);
          console.log('"removed": ' + packageName + ' ' + current[packageName]);
        } else if (!current.hasOwnProperty(packageName) && template.hasOwnProperty(packageName)) {
          // added dependency
          updated[packageName] = template[packageName];
          this.changes.push([packageName, '-', updated[packageName], '✳️']);
          console.log('added: ' + packageName + ' ' + updated[packageName]);
        }
      }
    }


    return updated;
  }

  public getExample(): string {
    // tslint:disable:quotemark
    const example = {
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
    return JSON.stringify(example, null, 2);
  }


  public getExample2(): string {
    // tslint:disable:quotemark
    const example = {
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
    "description": "yatsa: An Ionic project"
    };
    return JSON.stringify(example, null, 2);
  }


}
