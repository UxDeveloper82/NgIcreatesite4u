import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarPageComponent } from './components/sidebar-page/sidebar-page.component';
import { MessagePageComponent } from './components/message-page/message-page.component';
import { CreateblogPageComponent } from './components/blog/createblog-page/createblog-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BloglistPageComponent } from './components/blog/bloglist-page/bloglist-page.component';
import { EditblogPageComponent } from './components/blog/editblog-page/editblog-page.component';
import { CreateprojectPageComponent } from './components/project/createproject-page/createproject-page.component';
import { ProjectlistPageComponent } from './components/project/projectlist-page/projectlist-page.component';


@NgModule({
  declarations: [
    SidebarPageComponent,
    MessagePageComponent,
    CreateblogPageComponent,
    BloglistPageComponent,
    EditblogPageComponent,
    CreateprojectPageComponent,
    ProjectlistPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
