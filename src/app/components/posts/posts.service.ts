import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from '../../model/Post'
import {catchError,tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {getUniqueId} from '../create-post/id';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  

  private postsUrl = 'api/posts';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private handleError (error:any): Promise<any>{
    console.error('An Error Occurred',error);
    return Promise.reject(error.message || error);
  }

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Post[]> {
    return this.httpClient.get<Post[]>
    (this.postsUrl).pipe(
      catchError(this.handleError)
    );
  }
  one(id: number): Observable<Post>{
    const url = `${this.postsUrl}/${id}`;

    return this.httpClient.get<Post>(url).pipe(
      catchError(this.handleError)
    );
  }
  create(post: Post): Observable<Post>{
     
    return this.httpClient.post<Post>
    (this.postsUrl,
     post,
      { headers: this.headers }
      ).pipe(
      catchError(this.handleError)
    );
  }
  
}
