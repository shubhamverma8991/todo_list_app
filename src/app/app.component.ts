import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: any = 'Welcome 🙃';
  Navbar_Title: any = 'TODO';
  constructor() {
    setTimeout(() => {
      this.title = 'My Todos App 📜';
    }, 2500);
  }
}
