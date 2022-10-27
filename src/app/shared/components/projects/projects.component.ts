import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  public filterCategory: any;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
     this.projectsService.getProjects().subscribe((res) => {
      this.projects = res;
      this.filterCategory = res;
     });
  }

  filter(category: string) {
     this.filterCategory = this.projects
     .filter((a: any) => {
      if(a.category == category || category == '') {
        return a;
      }
     })
  }

}
