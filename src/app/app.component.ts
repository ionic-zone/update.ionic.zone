import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'update.ionic.zone';

  input = '';
  output = '';

  versions = [
    { name: 'v3.3.0', date: '2017-05-24' }
  ];
  version = this.versions[0].name;

  // TODO Service
  ionicJson = {
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
  };

  processInput(): void {
    if (this.isValidJson(this.input))
    {
      // TODO Service
      const json = JSON.parse(this.input);
      let ionicDependencies = this.ionicJson.dependencies;
      for (let key in ionicDependencies) {
        if (ionicDependencies.hasOwnProperty(key)) { // TODO Why is this here?
          console.log(key + ' -> ' + ionicDependencies[key]);
          json.dependencies[key] = ionicDependencies[key];
        }
      }
      // End TODO
      this.output = JSON.stringify(json, null, 2);
    }
    else
    {
      alert('input is no valid json\n(selected version is ' + this.version + ')');
    }

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

}
