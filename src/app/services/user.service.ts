import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { variables } from 'src/app/shared/variables';
import { IUser } from '../models/iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = variables.apiUrlUsers + '/users';
  constructor(private apiService: ApiService) { }

  getQuery(): Observable<any> {
    return this.apiService.get(this.baseUrl);
  }
  get(id: string): Observable<any> {
    return this.apiService.get(`${this.baseUrl}/${id}`);
  }
  delete(id: string): Observable<IUser>{
    return this.apiService.delete(`${this.baseUrl}/${id}`);
  }
  post(user: IUser): Observable<IUser> {
    return this.apiService.post(this.baseUrl, user);
  }
  put(user: IUser, id: string): Observable<IUser>  {
    return this.apiService.put(`${this.baseUrl}/${id}`, user);
  }
  save(user: IUser): Observable<IUser> {
    if (user.id){
      return this.apiService.put(`${this.baseUrl}/${user.id}`, user);
    }
    else{
      return this.apiService.post(this.baseUrl, user);
    }
  }
}
