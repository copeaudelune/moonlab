import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //<app-root></app-root> on peut le modifier dans angular.json dans le "prefix"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
