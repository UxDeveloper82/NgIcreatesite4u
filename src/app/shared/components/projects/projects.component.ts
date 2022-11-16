import { Component, OnInit } from '@angular/core';
import { Iproject } from 'src/app/_models/Iproject';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  showImage: boolean;
  projects: Iproject[] = [];
  public filterCategory: any;
  public searchTerm !:string;
  searchKey: string = "";

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
     this.projectsService.getProjects()
      .subscribe( res=> {
      this.projects = res;
      this.filterCategory = res;
      console.log(this.projects);
     });
     this.projectsService.search.subscribe((val:any) => {
      this.searchKey = val;
    })
  }

  filter(category: string) {
     this.filterCategory = this.projects
     .filter((a: any) => {
      if(a.category == category || category == '') {
        return a;
      }
     })
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.projectsService.search.next(this.searchTerm);
  }

}
