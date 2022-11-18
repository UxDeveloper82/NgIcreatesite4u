import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.scss']
})
export class SidebarPageComponent implements OnInit {

  @Output() showToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onShowNavbar() {
    this.showToggle.emit(false);
  }

}
