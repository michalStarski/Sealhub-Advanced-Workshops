import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner-two',
  templateUrl: './inner-two.component.html',
  styleUrls: ['./inner-two.component.css']
})
export class InnerTwoComponent implements OnInit {

  private textTwo: String;
  @Output() private out: EventEmitter<String> = new EventEmitter();
  @Input() private receivedText: String;


  sendMessage() {
    this.out.emit(this.textTwo);
  }
  constructor() { }

  ngOnInit() {
  }

}
