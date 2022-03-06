import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = 'Cao Bình';
  age = 10;
  fruit = ['Táo', 'Nho', 'Cam', 'Bưởi'];

  constructor() { }

  ngOnInit(): void {
    // console.log('trai cay = ', this.fruit)
  }

  public resetName(): void {
    this.name = '';
  }

}
