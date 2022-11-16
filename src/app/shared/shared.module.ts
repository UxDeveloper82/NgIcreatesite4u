import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    FooterComponent,
    HomePageComponent,
    NavComponent,
    VideosComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [
    BsDropdownModule,
    CarouselModule,
    TabsModule,
    FooterComponent,
    HomePageComponent,
    NavComponent,
    VideosComponent,
    ContactComponent,
    FilterPipe
  ]
})
export class SharedModule { }
