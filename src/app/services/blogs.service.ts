import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  constructor(private httpClient: HttpClient) { }

  getBlogsList(): Observable<HttpResponse<Users[]>> {
    return this.httpClient.get<Users[]>('https://api.github.com/users', { observe: 'response' });
  }
}
