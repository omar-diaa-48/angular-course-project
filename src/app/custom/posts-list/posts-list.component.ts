import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  isFetching: boolean = true;
  posts: Post[] = [];
  error = new Subject<string>();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe((posts) => {
        this.posts = posts;
      }, (error) => {
        this.error.next(error.message);
      }, () => {
        this.isFetching = false;
      })
  }
}
