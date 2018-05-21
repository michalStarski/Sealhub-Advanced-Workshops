import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner-one',
  templateUrl: './inner-one.component.html',
  styleUrls: ['./inner-one.component.css']
})
export class InnerOneComponent implements OnInit {

  @Input() private receivedText: String;
  @Output() private out: EventEmitter<String> = new EventEmitter();

  sendText(): void{
   this.out.emit(this.receivedText + ' was sent');
  }

  constructor() { }

  ngOnInit() {
  }

}
