import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
import { Post } from '../../model/Post';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
  ) { 
    this.post = new Post;
   }

  ngOnInit(): void {
    this.getOne(this.route.snapshot.params.id);

    // this.route.paramMap.subscribe
    //   (params => this.postsService.one(+ params.get('id'))),
    //   (post => this.post = post);
  }

  getOne(id: number): void {
    this.postsService.one(id)
      .subscribe(
        data => {
          this.post = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
