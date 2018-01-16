import { ReleaseService } from './release.service';
import { MdlSnackbarService, IMdlTableModelItem, MdlDefaultTableModel } from '@angular-mdl/core/components';
import { Component } from '@angular/core';

export interface ITableItem extends IMdlTableModelItem {
  packageName: string;
  old: string;
  new: string;
}

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

  public tableModel = new MdlDefaultTableModel([
    {key: 'packageName', name: 'Package'},
    {key: 'old', name: 'Old version', numeric: true},
    {key: 'new', name: 'Updated version', numeric: true}
  ]);

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
      this.changes = result['changes'];
      this.tableModel.addAll(this._convertToMdlTable(this.changes));
      this.output = result['output'];
      this.activeTab = 1;
    } else {
      this._showSnackbar('Input has to be valid JSON');
    }

  }

  // ######################################################## //

  private _convertToMdlTable(data) {
    const results: ITableItem[] = [];
    for(const key in data) {
      if (data.hasOwnProperty(key)) {
        results.push({packageName: data[key][0], old: data[key][1], new: data[key][2], selected: false});
      }
    }
    return results;
  }

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
