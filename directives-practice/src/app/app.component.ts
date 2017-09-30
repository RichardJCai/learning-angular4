import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleOn = false;
  clickCounter = 0;
  numClicks = [];

  helloOnClick(){
    this.numClicks.push(this.clickCounter);
    this.clickCounter++;
    this.toggleOn = !this.toggleOn;
  }
}
