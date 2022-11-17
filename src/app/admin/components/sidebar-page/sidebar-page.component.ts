import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.scss']
})
export class SidebarPageComponent implements OnInit {
  hideSideNav: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() : void {
    this.hideSideNav = !this.hideSideNav;
  }

}
