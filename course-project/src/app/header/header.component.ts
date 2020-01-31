import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedPage = new EventEmitter<String>();
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  onSelect(page: string) {
    this.selectedPage.emit(page);
  }
}
