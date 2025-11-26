import { Component, input } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
  selector: 'post-card',
  imports: [],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css',
})
export class PostCard {
  post = input.required<Post>();
}
