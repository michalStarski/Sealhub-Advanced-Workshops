import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private transfer1to2: String;
  private transfer2to1: String;
  receiveFromOne(receivedText: String) {
    this.transfer1to2 = receivedText;
  }
  receiveFromTwo(receivedText: String) {
    this.transfer2to1 = receivedText;
  }
}
