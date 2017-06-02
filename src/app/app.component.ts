import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'update.ionic.zone';

  input = '';
  output = '';

  processInput(): void {
    if(this.isValidJson(this.input))
    {
      this.output = this.input;
    }
    else
    {
      alert('input is no valid json');
    }

  }

  isValidJson(str): boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }

}
