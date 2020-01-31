import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberEventEmitter = new EventEmitter<{currentNumber: number}>();
  intervalId: number;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    let counter = 0;
    this.intervalId = setInterval(() => {
      counter++;
      this.numberEventEmitter.emit({currentNumber: counter});
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.intervalId);
  }
}
