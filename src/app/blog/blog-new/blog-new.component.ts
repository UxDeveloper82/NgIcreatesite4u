import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from 'src/app/_models/Ipost';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.scss']
})
export class BlogNewComponent implements OnInit {
  private image: any;

  constructor(private postService: PostService) { }

  public newPostForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
    contentPost: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imagePost: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  addNewPost(data: Ipost) {
    console.log('New post', data);
    this.postService.preAddAndUpdatePost(data, this.image);
  }
  handleImage(event: any): void {
    this.image = event.target.files[0];
  }
}
