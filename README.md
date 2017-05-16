# update.ionic.zone

This tools helps you to upgrade your Ionic Framework project to a specific version

## How it works
You paste your whole `package.json` into the form field, select the target Ionic Framework version and click a button. The tool then updates your dependencies to the version belonging to the selected Ionic Framework version. You copy the result back into your `package.json` file and run `npm install`.

## What it does in the background
This tool goes through your dependencies, compares them with the versions specified with the release of the selected Ionic version, and updates the values. It additionally analyzes the types of version changes and tries to give you helpful hints on what to keep in mind after running the install (e.g. where breaking changes might have been introduced etc).

## What dependencies this tool will update
- Ionic Framework
- Angular
- Ionic Native
- Ionic Storage
- Other: ionicons, rxjs, sw-toolbox, zone.js
- DevDependencies: Ionic App-Scripts, Ionic-CLI-Plugins, typescript

### What this tool will not update
- All your custom dependencies
- Your code
