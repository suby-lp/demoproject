import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable} from 'rxjs';
import {User} from '../_model/user';




@Injectable({
  providedIn: 'root'
})
export class ServService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private   http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser") || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
   }
  getLogin(data:any){

    
    return this.http.post<any>('https://l3harris-dev-api.logicplum.com/api/v1/user/login',data)
  }
}
