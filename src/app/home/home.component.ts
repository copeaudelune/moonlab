import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  food01 = 'assets/images/food01.jpg';
  food02 = 'assets/images/food02.jpg';
  food03 = 'assets/images/food03.jpg';
  food04 = 'assets/images/food04.jpg';

  constructor() { }

  ngOnInit() {
  }

}
