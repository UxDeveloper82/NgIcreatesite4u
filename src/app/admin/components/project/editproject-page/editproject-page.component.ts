import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iproject } from 'src/app/_models/Iproject';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-editproject-page',
  templateUrl: './editproject-page.component.html',
  styleUrls: ['./editproject-page.component.scss']
})
export class EditprojectPageComponent implements OnInit {
  private image: any;
  private imageOriginal: any;

  @Input() project: Iproject;

  constructor(private projectService: ProjectsService) { }

  public editProjectForm = new FormGroup({
    id: new FormControl('', Validators.required),
    projectTitle: new FormControl('', Validators.required),
    projectContent: new FormControl('', Validators.required),
    projectTags: new FormControl('', Validators.required),
    imageProject: new FormControl('',Validators.required),
  })

  ngOnInit(): void {
  }

  onEditProject(project: Iproject) {
    console.log('Edit Project', project)
  }

}
