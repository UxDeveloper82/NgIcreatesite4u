import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistPageComponent } from './components/blog/bloglist-page/bloglist-page.component';
import { CreateblogPageComponent } from './components/blog/createblog-page/createblog-page.component';
import { MessagePageComponent } from './components/message-page/message-page.component';

const routes: Routes = [
   {path:"", component: MessagePageComponent},
   {path:"", component: CreateblogPageComponent},
   {path:"", component: BloglistPageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
