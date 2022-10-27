import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Ipost } from 'src/app/_models/Ipost';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  public post$: Observable<Ipost>

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    const idPost = this.route.snapshot.params.id;
    this.post$ = this.postService.getOnePost(idPost);
  }

}
