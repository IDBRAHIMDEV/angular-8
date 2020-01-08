import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  display = false;
  myPost: Post = {
    title: '',
    body: ''
  }

  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts()
  }

  getAllPosts() {
    this.postService.getAll().subscribe((res: Post[]) => {
      this.posts = res;
    })
  }

  savePost() {
    this.postService.persistPost(this.myPost)
        .subscribe((res: Post) => {

          this.posts = [res, ...this.posts];

          this.myPost = {
            title: '',
            body: ''
          }
        })
  }

  destroyPost(id: number) {

    Swal.fire({
      title: 'Are you sure to delete?',
      text: 'this operation is for deleting the post in the database',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {


        this.postService.deletePost(id)
        .subscribe(() => {
           
           this.posts = this.posts.filter((post) => post.id !== id)
           Swal.fire({
             title: 'Deleted!',
             text: 'This Post is deleted!',
             icon: 'success',
             timer: 5000
           })
        })

     
      } 
    })
  }

  toggleForm() {
    this.display = !this.display
  }

}
