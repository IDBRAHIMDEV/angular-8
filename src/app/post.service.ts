import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:5000/posts");
  }

  persistPost(data: Post) {
    return this.http.post("http://localhost:5000/posts", data);
  }

  deletePost(id: number) {
    return this.http.delete(`http://localhost:5000/posts/${id}`);
  }
}
