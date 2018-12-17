# update.ionic.zone

[update.ionic.zone](https://update.ionic.zone) helps you update your Ionic Framework project.

Angular project built with Angular CLI.

## "Features"

- Input tab
  - Dropdown with version selection
  - Example button that populates input field with example `package.json` content
  - Display `ionic-angular` version from `package.json` content if present (using `semver`)
  - "Update" button that "calculates" updated output
    - Shows "Snackbar" if 
      - no input is present or 
      - not valid JSON (using `@angular-mdl/core/components`)
    - Input and Output are submitted to Rollbar for (potential) debugging (using `angular-rollbar`)
- Output tab
  - Shows updated `package.json`
  - Displays "Changed Dependencies" table
  - Displays "Manual Changes" table
    - Markdown in text is rendered as HTML (using `ngx-md`)
- Material Design (using `@angular-mdl/*`)
- Visits and actions are tracked via Google Analytics and Facebook Pixel (using `angulartics2`)

## Installation

* `npm install -g @angular/cli`

## Development

### Run development server

* `ng serve`, then visit `http://localhost:4200/`

### Build app

* `ng build` or `ng build --prod`
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
* `ng build --prod`
* `ngh --cname=update.ionic.zone`
* Check [update.ionic.zone](https://update.ionic.zone)
