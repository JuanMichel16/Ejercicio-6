import { Component, inject, } from '@angular/core';
import { PostCard } from "./core/components/posts/post-card/post-card";
import { PostsService } from './core/services/posts.service';
import { Pagination } from "./core/components/pagination/pagination";

@Component({
  selector: 'app-root',
  imports: [PostCard, Pagination],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Catalogo de posts'
  postsService = inject(PostsService);

}
