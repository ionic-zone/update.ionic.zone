import { RollbarService } from 'angular-rollbar';
import { MdlSnackbarService } from '@angular-mdl/core/components';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'update.ionic.zone';

  input = '';
  output = '';

  activeTab = 0;

  constructor(private mdlSnackbarService: MdlSnackbarService, private rollbar: RollbarService) {}

  public tabChanged({index}) {
    this.activeTab = index;
  }

  // TODO Service
  // tslint:disable:quotemark
  // tslint:disable-next-line:member-ordering
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
  version = this.versions[0].name;

  getIndexOfVersion(arr, k): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === k) {
        return i;
      }
    }
  }

  _processDependencies(current: any, template: any): any {
    let updated = current;
    for (const key in template) {
        if (template.hasOwnProperty(key)) { // tslint for-in
          console.log(key + ': ' + updated[key] + ' -> ' + template[key]);
          updated[key] = template[key];
        }
      }
    return updated;
  }


  processInput(): void {
    if (this.input.length === 0) {
      this.showSnackbar('Input can not be empty.');
      return;
    }
    if (this.isValidJson(this.input))
    {
      // TODO Service
      const json = JSON.parse(this.input);
      console.log('this.version is ', this.version);

      const i = this.getIndexOfVersion(this.versions, this.version);
      console.log('i is ', i);

      json.dependencies = this._processDependencies(json.dependencies, this.versions[i].json.dependencies);
      json.devDependencies = this._processDependencies(json.devDependencies, this.versions[i].json.devDependencies);
      // End TODO

      this.output = JSON.stringify(json, null, 2);
      this.activeTab = 1; // TODO method
      // log
      this.rollbar.info('input', null, this.input);
      this.rollbar.info('output', null, this.output);
    }
    else
    {
      this.showSnackbar('Input has to be valid JSON');
    }

  }

  showSnackbar(message: string): void {
    this.mdlSnackbarService.showSnackbar({
      message:message,
    });
  }

  // TODO Util Service?
  isValidJson(str: string): boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }

  addExampleData(): void {
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
    this.input = JSON.stringify(example, null, 2);
  }

}
