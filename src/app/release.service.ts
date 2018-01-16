import { Injectable } from '@angular/core';
import { RollbarService } from 'angular-rollbar';
import { RELEASES } from './releases';


@Injectable()
export class ReleaseService {

  releases = RELEASES;

  // tslint:disable:max-line-length quotemark
  notes = [
    { since: '3.9.2', type: 'warning',  dep: { '@angular/core': '5.0.0' },            text: 'Update to Angular 5 might require changes to your code:', link: 'https://angular-update-guide.firebaseapp.com/' },
    { since: '3.9.2', type: 'note',     dep: { "rxjs": "5.5.2"},                      text: 'Updated RxJS dependency includes a change in how operators are applied which might require changes to your code:', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.9.0' },
    { since: '3.8.0', type: 'new',      dep: null,                                    text: 'iOS 11 support: Add `viewport-fit` Metatag to `index.html` for iPhone X', link: 'https://blog.ionicframework.com/ios-11-checklist/' },
    { since: '3.7.1', type: 'note',     dep: { "@ionic-native/core": "4.0.0" },       text: 'Ionic Native 4 has breaking changes for these plugin wrappers: `safari-view-controller`, `media`, `admob`, File Transfer, Google Maps.', link: 'https://github.com/ionic-team/ionic-native/releases/tag/v4.0.0' }, // TODO Target packages more specific
    { since: '3.7.1', type: 'new',      dep: null,                                    text: 'WKWebView: Shortly after releasing Ionic 3.7.1 WKWebView became the default web view for Ionic apps. Follow the instructions at the link:', link: 'https://github.com/ionic-team/cordova-plugin-ionic-webview#installation-instructions' },
    { since: '3.7.0', type: 'new',      dep: { 'angular/core': '4.3.0'},              text: 'Angular 4.3 brings the new `HttpClient` as replacement for `Http`.', link: 'https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b'},
    { since: '3.7.0', type: 'note',     dep: { '@ionic/app-scripts': '3.0.0'},        text: 'App-Scripts 3.x has breaking changes if you are using a custom `webpack` config', link: 'https://github.com/ionic-team/ionic-app-scripts/releases/tag/v3.0.0' },
    { since: '3.5.2', type: 'warning',  dep: { "@ionic/app-scripts": "2.0.0"},        text: 'App-scripts 2.x splits JS from `node_modules` into its own file, need to add `vendor.js` to `index.html`.', links: ['https://github.com/ionic-team/ionic/releases/tag/v3.5.2', 'https://github.com/ionic-team/ionic-app-scripts/releases/tag/v2.0.0'] },
    { since: '3.7.1', type: 'note',     dep: { "@ionic-native/core": "3.12.1" },      text: 'Ionic Native 3.12.1 has surprising breaking change in `phonegap-local-notification` wrapper.', link: 'https://github.com/ionic-team/ionic-native/releases/tag/v3.12.1' },  // TODO Target packages more specific
    { since: '3.3.0', type: 'note',     dep: null,                              	    text: '`src/declarations.d.ts` is a legacy file introduced with early ionic-angular projects that can now be removed.', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.3.0' },
    { since: '3.2.0', type: 'new',      dep: null,                                    text: 'RTL support: Future-proof your code now by removing deprecated tags like `item-left` or `item-right`.', links: ['https://blog.ionicframework.com/ionic-and-rtl/', 'https://ionicframework.com/docs/theming/rtl-support/', 'https://ionicframework.com/docs/theming/rtl-support/#directional-properties']},
    // cliff with Ionic Native 3.6: https://github.com/ionic-team/ionic-native/pull/1425
    { since: '3.0.0', type: 'note',     dep: null,                                    text: 'Breaking changes to the following Ionic elements: Grid, Typography, Splides', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.0.0' },
    { since: '3.0.0', type: 'warning',  dep: null,                                    text: '`BrowserModule` + `HttpModule`: Two new module imports that have to be added to `app/app.module.ts`', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.0.0' },
    { since: '3.0.0', type: 'new',      dep: null,                                    text: '`IonicPage` Decorator added', link: 'https://ionicframework.com/docs/api/navigation/IonicPage/' },
    { since: '3.0.0', type: 'new',      dep: null,                                    text: 'Lazy Loading added', links: ['https://docs.google.com/document/d/1vGokwMXPQItZmTHZQbTO4qwj_SQymFhRS_nJmiH0K3w/edit', 'https://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/', 'https://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/'] },
    { sinve: '3.0.0', type: 'note',     dep: { "@angular/platform-server": "2.4.8" }, text: 'Angular 4 changed what `@angular/platform-server` does. It is not needed any more and can be safely removed.', link: 'https://stackoverflow.com/a/42885233/252627' },
    { since: '3.0.0', type: 'warning',  dep: { '@angular/core': '4.0.0' },            text: 'Update to Angular 4 might require changes to your code:', link: 'https://angular-update-guide.firebaseapp.com/' },
    { since: '2.3.0', type: 'warning',  dep: { "@ionic-native/core": "3.1.0" },       text: 'Ionic Native 3 splits the plugin wrappers into individual packages for less code to load', links: ['https://blog.ionicframework.com/ionic-native-3-x/', 'https://github.com/ionic-team/ionic-conference-app/commit/62088'] },
    { since: '2.2.0', type: 'note',     dep: { "@ionic/storage": "2.0.0" },           text: 'Starting with Ionic 2.2.0 you **have** to use Ionic Storage 2 or higher. (If you use the generated `package.json` this is taken care of)', links: [ 'https://github.com/ionic-team/ionic-storage/releases/tag/v2.0.0', 'https://github.com/ionic-team/ionic/releases/tag/v2.2.0' ] }
  ];
  // tslint:enable:max-line-length quotemark

  changes = [];

  constructor(private rollbar: RollbarService) { }

  getAll(): any {
    return this.releases;
  }

  getDefaultVersionName(): string {
    return this.releases[0].name;
  }

  updatePackageJson(input, selectedVersionName): any {
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

    //const changes = [ ['foo', 0, 8], ['bar', 15, 27] ];
    const changes = this.changes;

    // create string ouput
    const output = JSON.stringify(outputJson, null, 2);

    // log
    this.rollbar.info('updateButton', null, { input: input, output: output });

    const result = { output: output, changes: changes };

    return result;
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
    const updated = current;

    for (const key in allKeys) {
      if (allKeys.hasOwnProperty(key)) {
        const packageName = allKeys[key];
        console.log(packageName);
        if (current.hasOwnProperty(packageName) && template.hasOwnProperty(packageName)) {
          // updated dependency
          updated[packageName] = template[packageName];
          this.changes.push([packageName, current[packageName], updated[packageName]]);
          console.log('update: ' + packageName + ' ' + current[packageName] + ' -> ' + updated[packageName]);
        } else if (current.hasOwnProperty(packageName) && !template.hasOwnProperty(packageName)) {
          // removed dependency
          // TODO ?
          this.changes.push([packageName, current[packageName], '-']);
          console.log('"removed": ' + packageName + ' ' + current[packageName]);
        } else if (!current.hasOwnProperty(packageName) && template.hasOwnProperty(packageName)) {
          // added dependency
          updated[packageName] = template[packageName];
          this.changes.push([packageName, '-', updated[packageName]]);
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
}
