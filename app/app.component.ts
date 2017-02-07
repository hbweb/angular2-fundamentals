import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <passenger-dashboard></passenger-dashboard>
    </div>
  `
})
export class AppComponent {
  name: string = '';
  handleClick(value: string){
    console.log(value);
  }

  handleChange(value: string){
    this.name = value;
  }
}
