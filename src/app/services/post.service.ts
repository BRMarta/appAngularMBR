import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { variables } from 'src/app/shared/variables';
import { IPost } from '../models/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = variables.apiUrl + '/posts';
  constructor(private apiService: ApiService) { }

  getQuery(): Observable<any> {
    return this.apiService.get(this.baseUrl);
  }
  get(id: string): Observable<any> {
    return this.apiService.get(`${this.baseUrl}/${id}`);
  }
  delete(id: string): Observable<IPost>{
    return this.apiService.delete(`${this.baseUrl}/${id}`);
  }
  post(post: IPost): Observable<IPost> {
    return this.apiService.post(this.baseUrl, post);
  }
  put(post: IPost, id: string): Observable<IPost>  {
    return this.apiService.put(`${this.baseUrl}/${id}`, post);
  }
  save(post: IPost): Observable<IPost> {
    if (post.id){
      return this.apiService.put(`${this.baseUrl}/${post.id}`, post);
    }
    else{
      return this.apiService.post(this.baseUrl, post);
    }
  }
}

