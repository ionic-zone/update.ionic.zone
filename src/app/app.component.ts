import { ReleaseService } from './release.service';
import { MdlSnackbarService } from '@angular-mdl/core/components';
import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2Facebook } from 'angulartics2/facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'update.ionic.zone';

  input = '';
  output = '';
  activeTab = 0;
  selectedVersionName = '';
  releases = {};
  changes = [];
  devChanges = [];
  notes = [];
  versions = {};
  inputVersion = '';

  constructor(
    private mdlSnackbarService: MdlSnackbarService,
    private releaseService: ReleaseService,
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private angulartics2Facebook: Angulartics2Facebook
  ) {
    this.releases = this.releaseService.getAll();
    this.selectedVersionName = this.releaseService.getDefaultVersionName();
  }

  public tabChanged({index}) {
    this.activeTab = index;
  }

  public addExampleData(): void {
    this.input = JSON.stringify(this.releaseService.getExample(), null, 2);
    this.onTextfieldChange('example1');
  }

  public addExampleData2(): void {
    this.input = JSON.stringify(this.releaseService.getExample2(), null, 2);
    this.onTextfieldChange('example2');
  }

  public addExampleData3(): void {
    this.input = JSON.stringify(this.releaseService.getExample3(), null, 2);
    this.onTextfieldChange('example3');
  }

  public processInput(): void {
    if (this.input.length === 0) {
      this._showSnackbar('Input can not be empty.');
      return;
    }
    if (this._isValidJson(this.input)) {
      const result = this.releaseService.updatePackageJson(this.input, this.selectedVersionName);
      console.log('result', result);
      this.output = result['output'];
      this.changes = result['changes'];
      this.devChanges = result['devChanges'];
      this.notes = result['notes'];
      this.versions = result['versions'];
      this.activeTab = 1;
    } else {
      this._showSnackbar('Input has to be valid JSON');
    }

  }

  public onTextfieldChange(event): void {
    console.log('onTextfieldChange', event);
    this.inputVersion = this.releaseService.getInputVersion(this.input);
  }

  // ######################################################## //

  private _showSnackbar(message: string): void {
    this.mdlSnackbarService.showSnackbar({
      message: message,
    });
  }

  // TODO Util Service?
  private _isValidJson(str: string): boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }

}
