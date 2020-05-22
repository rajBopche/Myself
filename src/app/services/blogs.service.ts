import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  constructor(private httpClient: HttpClient) { }

  getBlogsList(): Observable<HttpResponse<Blog[]>> {
    return this.httpClient.get<Blog[]>('http://localhost:5000/blogs', { observe: 'response' });
  }
}
