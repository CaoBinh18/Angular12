import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = 'Cao Bình';
  age = 10;

  constructor() { }

  ngOnInit(): void {
  }

  public resetName(): void {
    this.name = '';
  }

}
