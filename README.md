# update.ionic.zone

[update.ionic.zone](https://update.ionic.zone) helps you upgrade your Ionic Framework project.

Angular project built with Angular CLI.

## Installation

* `npm install -g @angular/cli`

## Development

### Run development server

* `ng serve`, then visit `http://localhost:4200/`

### Build app

* `ng build` or `ng build -prod`
* Artifacts generated to `dist/` directory.

### Running tests

* unit tests: `ng test`
* end-to-end tests: `ng e2e` (before that: `ng serve`)

## Maintenance

### Add a new Ionic release

* https://github.com/ionic-team/ionic/releases
* TODO

## Deployment

### Deploy to `gh-pages` branch

* `npm i -g angular-cli-ghpages`
* `ng build -prod`
* `echo update.ionic.zone > dist/CNAME`
* `ngh`
* Check [update.ionic.zone](https://update.ionic.zone)
