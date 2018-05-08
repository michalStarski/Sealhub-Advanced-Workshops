import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  private test: String = 'Ala ma kota';
  private isVisible: Boolean = true;
  private arr: Array<Number>;

  constructor() {
    this.arr = [];
    for (let i = 0; i < 5; i++) {
      this.arr.push(i + 1);
    }
  }

  ngOnInit() {
  }
  clickMe(event: Event): void {
    console.log(event.target);
  }
  show(element: any): void {
    console.log(element);
  }
}
