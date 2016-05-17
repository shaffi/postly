import { Component, Input } from '@angular/core';
import { PostModel } from '../shared/post.model';
import { MdButton, MdAnchor } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import {  Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'post-item',
  templateUrl: 'post.component.html',
  directives: [MdAnchor, MdButton, MD_CARD_DIRECTIVES],
  providers: []
})
export class PostComponent {
  @Input() postitem: PostModel;
  constructor(
    private router: Router) {

  }

  onSelect(post: PostModel) {
    this.router.navigate(['/postdetail', post.id]);
  }
}

