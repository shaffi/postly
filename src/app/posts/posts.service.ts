import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { PostModel } from './shared/post.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsService {
  constructor(private http: Http) {

  }

  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/')
      .map((res) => res.json());
  }
  getCommentsByPost(postid: Number) {
    let url = `http://jsonplaceholder.typicode.com/posts/${postid}/comments`;
    return this.http.get(url)
      .map((res) => res.json());
  }
  getPostDetail(postid: Number) {
    let url = `http://jsonplaceholder.typicode.com/posts/${postid}`;
    return this.http.get(url)
      .map((res) => res.json());
  }
  addPost(post: PostModel): Observable<PostModel> {
    let body = JSON.stringify(post);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = `http://jsonplaceholder.typicode.com/posts/`;

    return this.http.post(url, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    console.log(res);
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
