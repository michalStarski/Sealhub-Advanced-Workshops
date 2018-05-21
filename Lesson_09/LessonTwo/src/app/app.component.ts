import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private text: String = '';
  private received: String;


  onOut(received: String): void{
    this.received = received;
  }
}
