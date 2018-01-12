import { Injectable } from '@angular/core';
import { RollbarService } from 'angular-rollbar';
import { RELEASES } from './releases';


@Injectable()
export class ReleaseService {

  releases = RELEASES;

  // tslint:disable:max-line-length
  notes = [
    { since: '3.9.2', dep: { '@angular/core': '5.0.0' }, text: 'Angular 5', link: 'https://angular-update-guide.firebaseapp.com/' },
    { since: '3.9.2', dep: { "rxjs": "5.5.2"}, text: 'RXJS includes a change in how operators are applied', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.9.0' },
    { since: '3.8.0', dep: null, text: 'iOS 11 support: Add Metatag to index.html', link: 'https://blog.ionicframework.com/ios-11-checklist/' },
    { since: '3.5.2', dep: { "@ionic/app-scripts": "2.0.1"}, text: 'app-scripts splits JS into two files, need to add vendor.js to index.html', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.5.2' },
    { since: '3.4.0', dep: null, text: 'LTR', link: '' },
    { since: '3.3.0', dep: null, text: 'Remove the src/declarations.d.ts file. This is a legacy file introduced early with ionic-angular projects to improve compatibility between TypeScript and third-party libraries. Due to improvements in TypeScript, this file is no longer necessary. By removing this file, the TypeScript compiler will be able to provide more accurate error messages for import statements.', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.3.0' },
    { since: '3.0.0', dep: null, text: '`BrowserModule` + `HttpModule`: ... TODO ', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.0.0' },
    { since: '2.3.0', dep: { "@ionic-native/core": "3.1.0" }, text: 'ionic-native 3 is very different: individual packages for each plugin wrapper', links: ['https://blog.ionicframework.com/ionic-native-3-x/', 'https://github.com/ionic-team/ionic-conference-app/commit/62088'] },
    { since: '2.2.0', dep: { "@ionic/storage": "2.0.0" }, text: 'If you are using Ionic Storage in your application, you need to update to this version of `ionic-storage`. Attempting to use an older version of `ionic-storage` with Ionic 2.2.0 will cause errors.', links: [ 'https://github.com/ionic-team/ionic-storage/releases/tag/v2.0.0', 'https://github.com/ionic-team/ionic/releases/tag/v2.2.0' ] }
  ];
  // tslint:enable:max-line-length

/*

Ionic Native:
       Ionic Native ionic-native has been restructured into individual packages under the
       @ionic-native/ namespace to allow for better bundling and faster apps. To fix, take the
       following step(s):

            1) Run npm uninstall --save ionic-native
            2) Refer to https://ionicframework.com/docs/native for installation & usage
       instructions

viewport-fit TODO
      [WARN] viewport-fit=cover not set in index.html

       iOS 11 introduces new "safe regions" for webviews, which can throw off component sizing,
       squish the header into the status bar, letterbox the app on iPhone X, etc. Fixing this issue

       will ensure the webview takes up the full size of the screen. See
       https://blog.ionicframework.com/ios-11-checklist for more information. To fix, take the
       following step(s):

            1) Add viewport-fit=cover to the <meta name="viewport"> tag in your index.html file

*/

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
