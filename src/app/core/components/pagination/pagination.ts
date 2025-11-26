import { Component, computed, inject, input } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  postsService = inject(PostsService);
  totalPages = computed(() => Math.ceil(this.postsService.totalResources() / 20));
  pages = computed(() => Array.from({length: this.totalPages()}, (_, i) => i + 1));


  changePage(page: number) {
    this.postsService.currentPage.set(page);
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
