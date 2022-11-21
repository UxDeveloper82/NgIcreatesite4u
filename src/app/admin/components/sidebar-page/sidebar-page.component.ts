import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.scss']
})
export class SidebarPageComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeSidenav.emit();
  }



}
