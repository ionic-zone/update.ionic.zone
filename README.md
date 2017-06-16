# update.ionic.zone

Angular project built with Angular CLI.

## Development server

* `ng serve`, then `http://localhost:4200/`

## Build

* `ng build` or `ng build -prod`
* Artifacts in `dist/` directory. 

## Running tests

* unit tests: `ng test` 
* end-to-end tests: `ng e2e` (befor that: `ng serve`)

## Deploy to `gh-pages` branch

* `npm i -g angular-cli-ghpages`
* `ng build -prod`
* `echo "update.ionic.zone" > dist/CNAME`
* `ngh`
* Check [update.ionic.zone](https://update.ionic.zone)
