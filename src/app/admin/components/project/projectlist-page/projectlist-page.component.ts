import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproject } from 'src/app/_models/Iproject';
import { ProjectsService } from 'src/app/_services/projects.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-projectlist-page',
  templateUrl: './projectlist-page.component.html',
  styleUrls: ['./projectlist-page.component.scss']
})
export class ProjectlistPageComponent implements OnInit {
  toggleNav = false;

  public projects$: Observable<Iproject[]>;

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
     this.projects$ = this.projectService.getAllProjectList();
  }

  toggleNavbar() {
     console.log("You click");
     this.toggleNav= !this.toggleNav
  }

  onShowNavbar() {
    this.toggleNav= !this.toggleNav
  }

}
