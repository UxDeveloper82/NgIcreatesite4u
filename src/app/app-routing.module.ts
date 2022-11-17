import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistPageComponent } from './admin/components/blog/bloglist-page/bloglist-page.component';
import { CreateblogPageComponent } from './admin/components/blog/createblog-page/createblog-page.component';
import { CreateprojectPageComponent } from './admin/components/project/createproject-page/createproject-page.component';
import { EditprojectPageComponent } from './admin/components/project/editproject-page/editproject-page.component';
import { ProjectlistPageComponent } from './admin/components/project/projectlist-page/projectlist-page.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogNewComponent } from './blog/blog-new/blog-new.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { VideosComponent } from './shared/components/videos/videos.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'message-page',
    loadChildren: () => import('./admin/admin.module').then(m =>m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'createblog-page', component: CreateblogPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'bloglist', component: BloglistPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'createproject-page', component: CreateprojectPageComponent,
  canActivate: [AuthGuard],
},
{ path: 'projectlist', component: ProjectlistPageComponent,
canActivate: [AuthGuard],
},
{ path: 'editproject', component: EditprojectPageComponent,
canActivate: [AuthGuard],
},
  { path: 'videos', component: VideosComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'blog-list', component: BlogListComponent},
  { path: 'blog/:id', component: BlogDetailComponent},
  { path: 'new-post', component: BlogNewComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: HomePageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
