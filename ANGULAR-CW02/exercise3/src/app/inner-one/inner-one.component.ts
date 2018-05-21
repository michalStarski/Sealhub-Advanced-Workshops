import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-inner-one',
  templateUrl: './inner-one.component.html',
  styleUrls: ['./inner-one.component.css']
})
export class InnerOneComponent implements OnInit {

  private textOne: String;
  @Output() private out: EventEmitter<String> = new EventEmitter();
  @Input() private receivedText: String;

  sendMessage(){
    this.out.emit(this.textOne);
  }

  constructor() { }

  ngOnInit() {
  }

}
