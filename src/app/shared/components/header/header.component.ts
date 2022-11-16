import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchTerm !:string;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.projectsService.search.next(this.searchTerm);
  }
}
