import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { variables } from 'src/app/shared/variables';
import { IComment } from '../models/icomment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = variables.apiUrl + '/posts';
  constructor(private apiService: ApiService) { }

  getQuery(): Observable<any> {
    return this.apiService.get(this.baseUrl);
  }
  get(id: string): Observable<any> {
    return this.apiService.get(`${this.baseUrl}/${id}/comments`);
  }
  delete(id: string): Observable<IComment>{
    return this.apiService.delete(`${this.baseUrl}/${id}`);
  }
  post(comment: IComment): Observable<IComment> {
    return this.apiService.post(this.baseUrl, comment);
  }
  put(comment: IComment, id: string): Observable<IComment>  {
    return this.apiService.put(`${this.baseUrl}/${id}`, comment);
  }
  save(comment: IComment): Observable<IComment> {
    if (comment.id){
      return this.apiService.put(`${this.baseUrl}/${comment.id}`, comment);
    }
    else{
      return this.apiService.post(this.baseUrl, comment);
    }
  }
}
