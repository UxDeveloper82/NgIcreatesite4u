import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproject } from 'src/app/_models/Iproject';
import { ProjectsService } from 'src/app/_services/projects.service';


@Component({
  selector: 'app-projectlist-page',
  templateUrl: './projectlist-page.component.html',
  styleUrls: ['./projectlist-page.component.scss']
})
export class ProjectlistPageComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  public projects$: Observable<Iproject[]>;

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
     this.projects$ = this.projectService.getAllProjectList();
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
