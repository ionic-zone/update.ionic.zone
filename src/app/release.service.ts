import { Injectable } from '@angular/core';
import { RollbarService } from 'angular-rollbar';
import { RELEASES } from './releases';


@Injectable()
export class ReleaseService {

  releases = RELEASES;

  // tslint:disable:max-line-length
  notes = [
    { since: '3.9.0', dep: { "rxjs": "5.5.2"}, text: 'RXJS includes a change in how operators are applied', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.9.0' },
    { since: '3.5.0', dep: { "@ionic/app-scripts": "2.0.1"}, text: 'app-scripts splits JS into two files, need to add vendor.js to index.html', link: '' },
    { since: '2.3.0', dep: { "@ionic-native/core": "3.1.0" }, text: 'ionic-native 3 is very different: individual packages for each plugin wrapper', link: '' },

  ];
  // tslint:enable:max-line-length

  constructor(private rollbar: RollbarService) { }

  getAll(): any {
    return this.releases;
  }

  getDefaultVersionName(): string {
    return this.releases[0].name;
  }

  updatePackageJson(input, selectedVersionName): string {
    // unchanged input
    const json = JSON.parse(input);

    // get template to "apply"
    console.log('version selected in dropdown: ', selectedVersionName);
    const releaseIndex = this._getReleaseIndex(selectedVersionName);
    console.log('i is ', releaseIndex);
    const template = this._getReleaseJson(releaseIndex)

    // apply template
    const outputJson = json;
    outputJson.dependencies = this._processDependencies(outputJson.dependencies, template.dependencies);
    outputJson.devDependencies = this._processDependencies(outputJson.devDependencies, template.devDependencies);

    // create string ouput
    const output = JSON.stringify(outputJson, null, 2);

    // log
    this.rollbar.info('updateButton', null, { input: input, output: output });

    return output;
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
