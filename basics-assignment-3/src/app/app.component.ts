import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonToggleText = 'Display';
  showDetails = false;
  buttonClicks = [];

  onToggleDetails() {
    this.buttonToggleText = this.showDetails ? 'Display' : 'Hide';
    this.showDetails = !this.showDetails;
    this.buttonClicks.push(new Date());
  }

  getBackgroundColor(index) {
    return index > 3 ? 'blue' : 'transparent';
  }
}
