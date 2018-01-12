import { Injectable } from '@angular/core';
import { RollbarService } from 'angular-rollbar';

@Injectable()
export class ReleaseService {

  // tslint:disable:quotemark
  releases = [
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
      name: 'v3.4.1',
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
          "ionic-angular": "3.4.1",
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
      },
      notes: [
        // tslint:disable-next-line:max-line-length
        'Another optional step is to remove the `src/declarations.d.ts` file. This is a legacy file introduced early with `ionic-angular` projects to improve compatibility between TypeScript and third-party libraries. Due to improvements in TypeScript, this file is no longer necessary. By removing this file, the TypeScript compiler will be able to provide more accurate error messages for `import` statements.',
      ]
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
