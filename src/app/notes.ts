// tslint:disable:max-line-length quotemark
export const NOTES = [
  {
    version: '2.2.0',
    data: [
      { type: 'note',     dep: { "@ionic/storage": "2.0.0" },           text: 'Starting with Ionic 2.2.0 you have to use Ionic Storage 2 or higher.', link: 'https://github.com/ionic-team/ionic/releases/tag/v2.2.0' } // TODO useful?
    ]
  },
  {
    version: '2.3.0',
    data: [
      { type: 'warning',  dep: { "@ionic-native/core": "3.1.0" },       text: 'Ionic Native 3 splits the plugin wrappers into individual packages for less code to load. Static classes (e.g. `InAppBrowser`) have been replaced by dependency injected properties (`public inAppBrowser: InAppBrowser` + `this.inAppBrowser`).', link: 'https://blog.ionicframework.com/ionic-native-3-x/' },
    ]
  },
  {
    version: '3.0.0',
    data: [
      { type: 'warning',  dep: { '@angular/core': '4.0.0' },            text: 'Update to **Angular 4** might require changes to your code.', link: 'https://angular-update-guide.firebaseapp.com/' },
      { type: 'warning',  dep: null,                                    text: '`BrowserModule` + `HttpModule`: Two new module imports that have to be added to `app/app.module.ts`', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.0.0' },
      { type: 'new',      dep: null,                                    text: '`IonicPage` Decorator added', link: 'https://ionicframework.com/docs/api/navigation/IonicPage/' },
      { type: 'new',      dep: null,                                    text: 'Lazy Loading added', link: 'https://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/' },
      { type: 'note',     dep: { "@angular/platform-server": "2.4.8" }, text: 'Angular 4 changed what `@angular/platform-server` does. It is not needed any more and can be safely removed.', link: 'https://stackoverflow.com/a/42885233/252627' },
      { type: 'note',     dep: null,                                    text: 'Breaking changes to the following Ionic elements: Grid, Typography, Slides.', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.0.0' },
    ]
  },
  {
    version: '3.2.0',
    data: [
      { type: 'new',      dep: null,                                    text: 'RTL support: Future-proof your code now by removing deprecated tags like `item-left` or `item-right`.', link: 'https://blog.ionicframework.com/ionic-and-rtl/'},
    ]
  },
  {
    version: '3.3.0',
    data: [
      { type: 'note',     dep: null,                              	    text: '`src/declarations.d.ts` is a legacy file introduced with early ionic-angular projects that can now be removed.', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.3.0' },
    ]
  },
  {
    version: '3.5.0',
    data: [
      { type: 'note',     dep: { "@ionic-native/core": "3.12.1" },      text: 'Ionic Native 3.12.1 has surprising breaking change in `phonegap-local-notification` wrapper.', link: 'https://github.com/ionic-team/ionic-native/releases/tag/v3.12.1' },  // TODO Target packages more specific
    ]
  },
  {
    version: '3.5.2',
    data: [
      { type: 'warning',  dep: { "@ionic/app-scripts": "2.0.0"},        text: 'App-scripts 2.x splits JS from `node_modules` into its own file, need to add `vendor.js` to `index.html`.', link: 'https://github.com/ionic-team/ionic-app-scripts/releases/tag/v2.0.0' },
      { type: 'note',     dep: { '@ionic/app-scripts': '2.0.0'},        text: 'App-Scripts 2.x has breaking changes if you are using a custom `webpack` config.', link: 'https://github.com/ionic-team/ionic-app-scripts/releases/tag/v2.0.0' },

    ]
  },
  {
    version: '3.7.0',
    data: [
      { type: 'new',      dep: { 'angular/core': '4.3.0'},              text: 'Angular 4.3 brings the new `HttpClient` as replacement for `Http`.', link: 'https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b'},
      { type: 'note',     dep: { '@ionic/app-scripts': '3.0.0'},        text: 'App-Scripts 3.x has breaking changes if you are using a custom `webpack` config.', link: 'https://github.com/ionic-team/ionic-app-scripts/releases/tag/v3.0.0' },
    ]
  },
  {
    version: '3.7.1',
    data: [
      { type: 'new',      dep: null,                                    text: 'WKWebView: Shortly after releasing Ionic 3.7.1 WKWebView became the default web view for new Ionic apps. Follow the instructions to switch your app over.', link: 'https://github.com/ionic-team/cordova-plugin-ionic-webview#installation-instructions' },
      { type: 'note',     dep: { "@ionic-native/core": "4.0.0" },       text: 'Ionic Native 4 has breaking changes for these plugin wrappers: `safari-view-controller`, `media`, `admob`, File Transfer, Google Maps.', link: 'https://github.com/ionic-team/ionic-native/releases/tag/v4.0.0' }, // TODO Target packages more specific
    ]
  },
  {
    version: '3.8.0',
    data: [
      { type: 'new',      dep: null,                                    text: 'iOS 11 support: Add `viewport-fit` Metatag to `index.html` for iPhone X', link: 'https://blog.ionicframework.com/ios-11-checklist/' },
    ]
  },
  {
    version: '3.9.2',
    data: [
      { type: 'warning',  dep: { '@angular/core': '5.0.0' },            text: 'Update to **Angular 5** might require changes to your code:', link: 'https://angular-update-guide.firebaseapp.com/' },
      { type: 'note',     dep: { "rxjs": "5.5.2"},                      text: 'Updated RxJS dependency includes a change in how operators are applied which might require changes to your code:', link: 'https://github.com/ionic-team/ionic/releases/tag/v3.9.0' },
    ]
  }
];
// tslint:enable:max-line-length quotemark
