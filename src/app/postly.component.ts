import { Component, OnInit } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {HTTP_PROVIDERS, Http } from '@angular/http';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { PostsComponent } from './posts';
import { PostdetailComponent } from './+postdetail';
import { PostsService } from './posts/posts.service';
import { CreatepostComponent } from './+createpost';

@Component({
  moduleId: module.id,
  selector: 'postly-app',
  templateUrl: 'postly.component.html',
  styleUrls: ['postly.component.css'],
  directives: [MdToolbar, MdAnchor, MdButton, MD_CARD_DIRECTIVES, MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES, MdIcon, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, MdIconRegistry, ROUTER_PROVIDERS, PostsService]
})
@Routes([
  { path: '/posts', component: PostsComponent },
  { path: '/postdetail/:id', component: PostdetailComponent },
  { path: '/createpost', component: CreatepostComponent }
])

export class PostlyAppComponent implements OnInit {
  title = 'postly works!';
  constructor(private http: Http, private router: Router, private postService: PostsService) {

  }
  ngOnInit() {
    this.router.navigate(['/posts']);
  }
  createPostBtnClickhandler() {
    this.router.navigate(['/createpost']);
    // this.postService.addPost(post)
    //   .subscribe(
    //   npost => this.router.navigate(['/posts']),
    //   error => console.log(error));
  }

}
