import { ReleaseService } from './release.service';
import { MdlSnackbarService } from '@angular-mdl/core/components';
import { Component } from '@angular/core';

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
  notes = [];

  constructor(private mdlSnackbarService: MdlSnackbarService, private releaseService: ReleaseService) {
    this.releases = this.releaseService.getAll();
    this.selectedVersionName = this.releaseService.getDefaultVersionName();
  }

  public tabChanged({index}) {
    this.activeTab = index;
  }

  public addExampleData(): void {
    this.input = this.releaseService.getExample();
  }

  public processInput(): void {
    if (this.input.length === 0) {
      this._showSnackbar('Input can not be empty.');
      return;
    }
    if (this._isValidJson(this.input)) {
      const result = this.releaseService.updatePackageJson(this.input, this.selectedVersionName);
      this.output = result['output'];
      this.changes = result['changes'];
      this.notes = result['notes'];
      this.activeTab = 1;
    } else {
      this._showSnackbar('Input has to be valid JSON');
    }

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
