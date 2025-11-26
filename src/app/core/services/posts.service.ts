import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Post, PostAPI, User, } from '../models/post';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);
  currentPage = signal<number>(1);
  private postsUrl = computed(() => `https://jsonplaceholder.typicode.com/posts?_page=${this.currentPage()}&_limit=20`);
  private usersUrl = computed(() => `https://jsonplaceholder.typicode.com/users`);
  totalResources = signal<number>(0)
  posts = signal<Post[]>([]);


  constructor() {
    effect(() => {
      const url = this.postsUrl()
      this.getAllPost(url)
    })
  }

  getAllPost(url: string) {
    forkJoin({
      posts : this.http.get<PostAPI[]>(this.postsUrl(), {observe: 'response'}),
      users: this.http.get<User[]>(this.usersUrl())
    }).subscribe(({posts, users}) => {
      const totalCount = Number(posts?.headers?.get('x-total-count')) ?? 0;
      this.totalResources.set(totalCount);
      
      const postWithUser = posts.body?.map((post) => {
        const user: User = users.find(user => user.id === post.userId)! 
        return {
          ...post,
          userName: user.name
        }
      });

      this.posts.set(postWithUser!)
    })
  }
}
