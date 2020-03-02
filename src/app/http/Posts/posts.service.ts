import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postCreated = new Subject();
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createPost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http.post<{ name: string }>(
      'https://angular-study-cipriano.firebaseio.com/posts.json', postData,
      {
        // 'body' default body only, 'response' to full response
        observe: 'response'
      }
    ).subscribe(
      responseData => {
        this.postCreated.next();
      }, error => {
        this.error.next(error.message);
      }
    );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http.get<{ [key: string]: Post }>(
      'https://angular-study-cipriano.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        // params: new HttpParams().set('print', 'pretty'),
        params: searchParams,

        // responseType: 'text', 'json to defautl
        responseType: 'json'
      }
    ).pipe(
      map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      }),
      catchError(errorRes => throwError(errorRes))
    );
  }

  deletePosts() {
    return this.http.delete('https://angular-study-cipriano.firebaseio.com/posts.json',
      { observe: 'events' }
    ).pipe(
      tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {
          // do something when sent something
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
