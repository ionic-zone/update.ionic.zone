export interface DepJson {
  dependencies: {};
  devDependencies: {};
}

export interface Release {
  name: string;
  date: string;
  json: DepJson;
}

// tslint:disable:quotemark
export const RELEASES: Release[] = [
  {
    name: 'current (v3.9.2 + updated dependencies)',
    date: '2018-12-17',
    json: {
      "dependencies": {
        "@angular/animations": "5.2.11",
        "@angular/common": "5.2.11",
        "@angular/compiler": "5.2.11",
        "@angular/compiler-cli": "5.2.11",
        "@angular/core": "5.2.11",
        "@angular/forms": "5.2.11",
        "@angular/http": "5.2.11",
        "@angular/platform-browser": "5.2.11",
        "@angular/platform-browser-dynamic": "5.2.11",
        "@ionic-native/core": "~4.17.0",
        "@ionic-native/splash-screen": "~4.17.0",
        "@ionic-native/status-bar": "~4.17.0",
        "@ionic/storage": "2.2.0",
        "ionic-angular": "3.9.2",
        "ionicons": "3.0.0",
        "rxjs": "5.5.11",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.26"
      },
      "devDependencies": {
        "@ionic/app-scripts": "3.2.1",
        "typescript": "~2.6.2"
      }
    }
  },
  {
    name: 'v3.9.2',
    date: '2017-11-08',
    json: {
      "dependencies": {
        "@angular/common": "5.0.0",
        "@angular/compiler": "5.0.0",
        "@angular/compiler-cli": "5.0.0",
        "@angular/core": "5.0.0",
        "@angular/forms": "5.0.0",
        "@angular/http": "5.0.0",
        "@angular/platform-browser": "5.0.0",
        "@angular/platform-browser-dynamic": "5.0.0",
        "@ionic-native/core": "4.3.2",
        "@ionic-native/splash-screen": "4.3.2",
        "@ionic-native/status-bar": "4.3.2",
        "@ionic/storage": "2.1.3",
        "ionic-angular": "3.9.2",
        "ionicons": "3.0.0",
        "rxjs": "5.5.2",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.18"
      },
      "devDependencies": {
        "@ionic/app-scripts": "3.1.0",
        "typescript": "2.4.2"
      }
    }
  },
  {
    name: 'v3.8.0',
    date: '2017-10-26',
    json: {
      "dependencies": {
        "@angular/common": "4.4.4",
        "@angular/compiler": "4.4.4",
        "@angular/compiler-cli": "4.4.4",
        "@angular/core": "4.4.4",
        "@angular/forms": "4.4.4",
        "@angular/http": "4.4.4",
        "@angular/platform-browser": "4.4.4",
        "@angular/platform-browser-dynamic": "4.4.4",
        "@ionic-native/core": "4.3.2",
        "@ionic-native/splash-screen": "4.3.2",
        "@ionic-native/status-bar": "4.3.2",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.8.0",
        "ionicons": "3.0.0",
        "rxjs": "5.4.3",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.18"
      },
      "devDependencies": {
        "@ionic/app-scripts": "3.0.1",
        "typescript": "2.3.4"
      }
    }
  },
  {
    name: 'v3.7.1',
    date: '2017-09-29',
    json: {
      "dependencies": {
        "@angular/common": "4.4.3",
        "@angular/compiler": "4.4.3",
        "@angular/compiler-cli": "4.4.3",
        "@angular/core": "4.4.3",
        "@angular/forms": "4.4.3",
        "@angular/http": "4.4.3",
        "@angular/platform-browser": "4.4.3",
        "@angular/platform-browser-dynamic": "4.4.3",
        "@ionic-native/core": "4.3.0",
        "@ionic-native/splash-screen": "4.3.0",
        "@ionic-native/status-bar": "4.3.0",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.7.1",
        "ionicons": "3.0.0",
        "rxjs": "5.4.3",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.18"
      },
      "devDependencies": {
        "@ionic/app-scripts": "3.0.0",
        "typescript": "2.3.4"
      }
    }
  },
  {
    name: 'v3.7.0',
    date: '2017-09-28',
    json: {
      "dependencies": {
        "@angular/common": "4.4.3",
        "@angular/compiler": "4.4.3",
        "@angular/compiler-cli": "4.4.3",
        "@angular/core": "4.4.3",
        "@angular/forms": "4.4.3",
        "@angular/http": "4.4.3",
        "@angular/platform-browser": "4.4.3",
        "@angular/platform-browser-dynamic": "4.4.3",
        "@ionic-native/core": "3.12.1",
        "@ionic-native/splash-screen": "3.12.1",
        "@ionic-native/status-bar": "3.12.1",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.7.0",
        "ionicons": "3.0.0",
        "rxjs": "5.4.3",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.17"
      },
      "devDependencies": {
        "@ionic/app-scripts": "3.0.0",
        "typescript": "2.3.4"
      }
    }
  },
  {
    name: 'v3.6.1',
    date: '2017-09-07',
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
        "ionic-angular": "3.6.1",
        "ionicons": "3.0.0",
        "rxjs": "5.4.0",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.12"
      },
      "devDependencies": {
        "@ionic/app-scripts": "2.1.4",
        "typescript": "2.3.4"
      }
    }
  },
  {
    name: 'v3.6.0',
    date: '2017-07-27',
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
        "ionic-angular": "3.6.0",
        "ionicons": "3.0.0",
        "rxjs": "5.4.0",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.12"
      },
      "devDependencies": {
        "@ionic/app-scripts": "2.1.3",
        "typescript": "2.3.4"
      }
    }
  },
  {
    name: 'v3.5.3',
    date: '2017-07-14',
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
        "ionic-angular": "3.5.3",
        "ionicons": "3.0.0",
        "rxjs": "5.4.0",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.12"
      },
      "devDependencies": {
        "@ionic/app-scripts": "2.0.2",
        "typescript": "2.3.4"
      }
    }
  },
  {
    name: 'v3.5.2',
    date: '2017-07-13',
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
        "ionic-angular": "3.5.2",
        "ionicons": "3.0.0",
        "rxjs": "5.4.0",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.12"
      },
      "devDependencies": {
        "@ionic/app-scripts": "2.0.2",
        "typescript": "2.3.4"
      }
    }
  },
  {
    name: 'v3.5.0',
    date: '2017-06-28',
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
        "ionic-angular": "3.5.0",
        "ionicons": "3.0.0",
        "rxjs": "5.4.0",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.12"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.3.12",
        "typescript": "2.3.4"
      }
    }
  },
  {
    name: 'v3.4.2',
    date: '2017-06-16',
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
        "@ionic-native/core": "3.10.2",
        "@ionic-native/splash-screen": "3.10.2",
        "@ionic-native/status-bar": "3.10.2",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.4.2",
        "ionicons": "3.0.0",
        "rxjs": "5.4.0",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.12"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.3.7",
        "typescript": "2.3.3"
      }
    }
  },
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
        "@ionic-native/core": "3.10.2",
        "@ionic-native/splash-screen": "3.10.2",
        "@ionic-native/status-bar": "3.10.2",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.4.0",
        "ionicons": "3.0.0",
        "rxjs": "5.4.0",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.12"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.3.7",
        "typescript": "2.3.3"
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
        "@ionic-native/core": "3.10.2",
        "@ionic-native/splash-screen": "3.10.2",
        "@ionic-native/status-bar": "3.10.2",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.3.0",
        "ionicons": "3.0.0",
        "rxjs": "5.1.1",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.11"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.3.7",
        "typescript": "2.3.3"
      }
    }
  },
  {
    name: 'v3.2.1',
    date: '2017-05-12',
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
        "@ionic-native/core": "3.7.0",
        "@ionic-native/splash-screen": "3.7.0",
        "@ionic-native/status-bar": "3.7.0",
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
        "@ionic-native/core": "3.7.0",
        "@ionic-native/splash-screen": "3.7.0",
        "@ionic-native/status-bar": "3.7.0",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.2.0",
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
  },
  {
    name: 'v3.1.1',
    date: '2017-04-28',
    json: {
      "dependencies": {
        "@angular/common": "4.0.2",
        "@angular/compiler": "4.0.2",
        "@angular/compiler-cli": "4.0.2",
        "@angular/core": "4.0.2",
        "@angular/forms": "4.0.2",
        "@angular/http": "4.0.2",
        "@angular/platform-browser": "4.0.2",
        "@angular/platform-browser-dynamic": "4.0.2",
        "@ionic-native/core": "3.4.2",
        "@ionic-native/splash-screen": "3.4.2",
        "@ionic-native/status-bar": "3.4.2",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.1.1",
        "ionicons": "3.0.0",
        "rxjs": "5.1.1",
        "sw-toolbox": "3.4.0",
        "zone.js": "^0.8.5"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.3.6",
        "typescript": "~2.2.1"
      }
    }
  },
  {
    name: 'v3.1.0',
    date: '2017-04-26',
    json: {
      "dependencies": {
        "@angular/common": "4.0.2",
        "@angular/compiler": "4.0.2",
        "@angular/compiler-cli": "4.0.2",
        "@angular/core": "4.0.2",
        "@angular/forms": "4.0.2",
        "@angular/http": "4.0.2",
        "@angular/platform-browser": "4.0.2",
        "@angular/platform-browser-dynamic": "4.0.2",
        "@ionic-native/core": "3.4.2",
        "@ionic-native/splash-screen": "3.4.2",
        "@ionic-native/status-bar": "3.4.2",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.1.0",
        "ionicons": "3.0.0",
        "rxjs": "5.1.1",
        "sw-toolbox": "3.4.0",
        "zone.js": "^0.8.5"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.3.6",
        "typescript": "~2.2.1"
      }
    }
  },
  {
    name: 'v3.0.1',
    date: '2017-04-06',
    json: {
      "dependencies": {
        "@angular/common": "4.0.0",
        "@angular/compiler": "4.0.0",
        "@angular/compiler-cli": "4.0.0",
        "@angular/core": "4.0.0",
        "@angular/forms": "4.0.0",
        "@angular/http": "4.0.0",
        "@angular/platform-browser": "4.0.0",
        "@angular/platform-browser-dynamic": "4.0.0",
        "@ionic-native/core": "3.4.2",
        "@ionic-native/splash-screen": "3.4.2",
        "@ionic-native/status-bar": "3.4.2",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.0.1",
        "ionicons": "3.0.0",
        "rxjs": "5.1.1",
        "sw-toolbox": "3.4.0",
        "zone.js": "^0.8.4"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.3.0",
        "typescript": "~2.2.1"
      }
    }
  },
  {
    name: 'v3.0.0',
    date: '2017-04-05',
    json: {
      "dependencies": {
        "@angular/common": "4.0.0",
        "@angular/compiler": "4.0.0",
        "@angular/compiler-cli": "4.0.0",
        "@angular/core": "4.0.0",
        "@angular/forms": "4.0.0",
        "@angular/http": "4.0.0",
        "@angular/platform-browser": "4.0.0",
        "@angular/platform-browser-dynamic": "4.0.0",
        "@ionic-native/core": "3.4.2",
        "@ionic-native/splash-screen": "3.4.2",
        "@ionic-native/status-bar": "3.4.2",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.0.0",
        "ionicons": "3.0.0",
        "rxjs": "5.1.1",
        "sw-toolbox": "3.4.0",
        "zone.js": "^0.8.4"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.3.0",
        "typescript": "~2.2.1"
      }
    }
  },
  {
    name: 'v2.3.0',
    date: '2017-03-22',
    json: {
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
        "@ionic/storage": "2.0.0",
        "ionic-angular": "2.3.0",
        "ionicons": "3.0.0",
        "rxjs": "5.0.1",
        "sw-toolbox": "3.4.0",
        "zone.js": "0.7.2"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.1.4",
        "typescript": "2.0.9"
      }
    }
  },
  {
    name: 'v2.2.0',
    date: '2017-03-08',
    json: {
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
        "@ionic/storage": "2.0.0",
        "ionic-angular": "2.2.0",
        "ionic-native": "2.4.1",
        "ionicons": "3.0.0",
        "rxjs": "5.0.1",
        "sw-toolbox": "3.4.0",
        "zone.js": "0.7.2"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.1.4",
        "typescript": "2.0.9"
      }
    }
  },
  {
    name: 'v2.1.0',
    date: '2017-02-23',
    json: {
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
        "ionic-angular": "2.1.0",
        "ionic-native": "2.4.1",
        "ionicons": "3.0.0",
        "rxjs": "5.0.0-beta.12",
        "sw-toolbox": "3.4.0",
        "zone.js": "0.6.26"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.1.3",
        "typescript": "2.0.9"
      }
    }
  },
  {
    name: 'v2.0.1',
    date: '2017-02-08',
    json: {
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
        "ionic-angular": "2.0.1",
        "ionic-native": "2.4.1",
        "ionicons": "3.0.0",
        "rxjs": "5.0.0-beta.12",
        "zone.js": "0.6.26",
        "sw-toolbox": "3.4.0"
      },
      "devDependencies": {
        "@ionic/app-scripts": "1.0.0",
        "typescript": "2.0.9"
      }
    }
  },
  {
    name: 'v2.0.0',
    date: '2017-01-25',
    json: {
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
      }
    }
  }
];
