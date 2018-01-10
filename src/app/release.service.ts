import { Injectable } from '@angular/core';
import { RollbarService } from 'angular-rollbar';

@Injectable()
export class ReleaseService {

  // tslint:disable:quotemark
  versions = [
    {
      name: 'v3.4.0',
      date: '2017-06-15',
      json: {
        "dependencies": {
          "@angular/common": "4.1.3",
          "@angular/compiler": "4.1.3",
          "@angular/compiler-cli": "4.1.3",
          "@angular/core": "4.1.3",
          "@angular/forms": "4.1.3",
          "@angular/http": "4.1.3",
          "@angular/platform-browser": "4.1.3",
          "@angular/platform-browser-dynamic": "4.1.3",
          "@ionic-native/core": "3.12.1",
          "@ionic-native/splash-screen": "3.12.1",
          "@ionic-native/status-bar": "3.12.1",
          "@ionic/storage": "2.0.1",
          "ionic-angular": "3.4.0",
          "ionicons": "3.0.0",
          "rxjs": "5.4.0",
          "sw-toolbox": "3.4.0",
          "zone.js": "0.8.12"
        },
        "devDependencies": {
          "@ionic/app-scripts": "1.3.7",
          "typescript": "2.3.4"
        }
      }
    },
    {
      name: 'v3.3.0',
      date: '2017-05-24',
      json: {
        "dependencies": {
          "@angular/common": "4.1.2",
          "@angular/compiler": "4.1.2",
          "@angular/compiler-cli": "4.1.2",
          "@angular/core": "4.1.2",
          "@angular/forms": "4.1.2",
          "@angular/http": "4.1.2",
          "@angular/platform-browser": "4.1.2",
          "@angular/platform-browser-dynamic": "4.1.2",
          "@ionic-native/core": "3.6.1",
          "@ionic-native/splash-screen": "3.6.1",
          "@ionic-native/status-bar": "3.6.1",
          "@ionic/storage": "2.0.1",
          "ionic-angular": "3.3.0",
          "ionicons": "3.0.0",
          "rxjs": "5.1.1",
          "sw-toolbox": "3.6.0",
          "zone.js": "0.8.10"
        },
        "devDependencies": {
          "@ionic/app-scripts": "1.3.7",
          "typescript": "2.3.3"
        }
      },
      notes: [
        // tslint:disable-next-line:max-line-length
        'Another optional step is to remove the `src/declarations.d.ts` file. This is a legacy file introduced early with `ionic-angular` projects to improve compatibility between TypeScript and third-party libraries. Due to improvements in TypeScript, this file is no longer necessary. By removing this file, the TypeScript compiler will be able to provide more accurate error messages for `import` statements.',
      ]
    },
    {
      name: 'v3.2.0',
      date: '2017-05-10',
      json: {
        "dependencies": {
          "@angular/common": "4.1.0",
          "@angular/compiler": "4.1.0",
          "@angular/compiler-cli": "4.1.0",
          "@angular/core": "4.1.0",
          "@angular/forms": "4.1.0",
          "@angular/http": "4.1.0",
          "@angular/platform-browser": "4.1.0",
          "@angular/platform-browser-dynamic": "4.1.0",
          "@ionic-native/core": "3.6.1",
          "@ionic-native/splash-screen": "3.6.1",
          "@ionic-native/status-bar": "3.6.1",
          "@ionic/storage": "2.0.1",
          "ionic-angular": "3.2.1",
          "ionicons": "3.0.0",
          "rxjs": "5.1.1",
          "sw-toolbox": "3.6.0",
          "zone.js": "0.8.10"
        },
        "devDependencies": {
          "@ionic/app-scripts": "1.3.7",
          "typescript": "2.2.1"
        }
      }
    }
  ];

  constructor(private rollbar: RollbarService) { }

  getAll(): any {
    return this.versions;
  }

  getDefaultVersionName(): string {
    return this.versions[0].name;
  }

  updatePackageJson(input, selectedVersionName): string {
    const json = JSON.parse(input);

    console.log('version selected in dropdown: ', selectedVersionName);
    const versionIndex = this._getVersionIndex(selectedVersionName);
    console.log('i is ', versionIndex);

    const template = this._getReleaseJson(versionIndex)
    const outputJson = json;
    outputJson.dependencies = this._processDependencies(outputJson.dependencies, template.dependencies);
    outputJson.devDependencies = this._processDependencies(outputJson.devDependencies, template.devDependencies);

    const output = JSON.stringify(outputJson, null, 2);

    // log
    this.rollbar.info('input', null, input);
    this.rollbar.info('output', null, output);

    return output;
  }

  _getReleaseJson(versionIndex): any {
    return this.versions[versionIndex].json;
  }

  _getVersionIndex(k): number {
    const arr = this.versions;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === k) {
        return i;
      }
    }
  }

  _processDependencies(current: any, template: any): any {
    const updated = current;
    for (const key in template) {
        if (template.hasOwnProperty(key)) { // tslint for-in
          console.log(key + ': ' + updated[key] + ' -> ' + template[key]);
          updated[key] = template[key];
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
}
