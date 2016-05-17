import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';
import { PostsService } from '../posts/posts.service';
import { PostModel } from '../posts/shared/post.model';
import { Observable } from 'rxjs/Observable';


@Component({
  moduleId: module.id,
  selector: 'app-postdetail',
  templateUrl: 'postdetail.component.html',
  styleUrls: ['postdetail.component.css'],
  providers: [PostsService]
})
export class PostdetailComponent implements OnActivate {
  post: Observable<PostModel>;
  comments: any[];
  constructor(private router: Router, private postservice: PostsService) { }
  routerOnActivate(curr: RouteSegment): void {
    let id = +curr.getParam('id');
    this.getPostDetails(id);
    this.getComments(id);
  }
  getPostDetails(postid) {
    this.postservice.getPostDetail(postid).subscribe(postdetail => {
      this.post = postdetail;
    }, error => console.error('Error: ' + error), () => console.log('Completed!'));
  }
  getComments(postid) {
    this.postservice.getCommentsByPost(postid).subscribe(comments => {
      this.comments = comments;
    }, error => console.error('Error: ' + error), () => console.log('Completed!'));
  }
}
