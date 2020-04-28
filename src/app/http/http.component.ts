import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Post } from './Posts/post.model';
import { PostsService } from './Posts/posts.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit, OnDestroy {

  loadedPosts: Post[] = [];

  isFetching = false;

  error = null;

  private errorSub: Subscription;

  private postsCreatedSub: Subscription;

  @ViewChild('postForm', {static: false}) postForm: NgForm;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
    this.errorSub = this.postsService.error.subscribe(error => this.error = error);
  }

  onCreatePost(postData: Post) {
    this.postsService.createPost(postData.title, postData.content);
    this.postsCreatedSub = this.postsService.postCreated.subscribe(() => {
      this.onFetchPosts();
      this.postForm.resetForm();
      this.postsCreatedSub.unsubscribe();
    });
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onDeletePosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

}
