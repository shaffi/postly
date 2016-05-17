import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Observable } from 'rxjs/Observable';
import { PostModel } from './shared';
import { PostComponent } from './post/post.component';


@Component({
  moduleId: module.id,
  selector: 'posts-component',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css'],
  directives: [PostComponent],
  providers: [PostsService]
})

export class PostsComponent implements OnInit {
  posts: Observable<PostModel>;
  constructor(public postService: PostsService) { }

  ngOnInit() {
    this.getAllposts();
  }

  getAllposts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }


}
