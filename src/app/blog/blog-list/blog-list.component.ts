import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from 'src/app/_models/Ipost';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  } [] = [];

  public posts$: Observable<Ipost[]>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    //this.postService.getAllPosts().subscribe(res => console.log('Posts', res));
    this.posts$ = this.postService.getAllPosts();
  }
}
