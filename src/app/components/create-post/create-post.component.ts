import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/Post';
import { PostsService } from '../posts/posts.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { getUniqueId } from './id'




@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit {

   post: Post;
   submitted = false;

   

  constructor(
    private postsService: PostsService,
    private router : Router,
    private location: Location,
  ) {
    this.post = new Post;
    
   }

  ngOnInit(): void {
    this.post = new Post();
  }


  back() {
    this.location.back();
  }

  save() {

    const data = {
      id: getUniqueId(),
      title: this.post.title,
      body: this.post.body
    };

    this.postsService.create(data).subscribe(
      response => {
        console.log(response);
        this.post.id = data.id;
        this.submitted = true;
        this.router.navigate(['/post',this.post.id]);
        
      },
      error => {
        console.log(error);
      });
    //   .then(post => this.router.navigate(['/post', post.id]));
  }

}
