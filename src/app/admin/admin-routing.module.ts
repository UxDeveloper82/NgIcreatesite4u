import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateblogPageComponent } from './components/blog/createblog-page/createblog-page.component';
import { MessagePageComponent } from './components/message-page/message-page.component';

const routes: Routes = [
   {path:"", component: MessagePageComponent},
   {path:"", component: CreateblogPageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
