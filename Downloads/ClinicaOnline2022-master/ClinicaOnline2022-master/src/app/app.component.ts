import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ClinicaOnline2022';
  spinner: boolean = false;

  constructor() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }
}
