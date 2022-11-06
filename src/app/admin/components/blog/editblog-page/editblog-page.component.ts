import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from 'src/app/_models/Ipost';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-editblog-page',
  templateUrl: './editblog-page.component.html',
  styleUrls: ['./editblog-page.component.scss']
})
export class EditblogPageComponent implements OnInit {
  private image: any;
  private imageOriginal: any;

  @Input() post: Ipost;

  constructor(private postService: PostService) { }

  public editPostForm = new FormGroup({
     id: new FormControl('', Validators.required),
     titlePost: new FormControl('', Validators.required),
     contentPost: new FormControl('', Validators.required),
     tagsPost: new FormControl('', Validators.required),
     imagePost: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
  }

  onEditPost(post: Ipost) {
    console.log('Edit Post', post);
  }

}
