import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from 'src/app/_models/Ipost';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-bloglist-page',
  templateUrl: './bloglist-page.component.html',
  styleUrls: ['./bloglist-page.component.scss']
})
export class BloglistPageComponent implements OnInit {
  public posts$: Observable<Ipost[]>;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getAllPosts();
  }

}
