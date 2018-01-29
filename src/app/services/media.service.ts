import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class MediaService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://media.mw.metropolia.fi/wbma/';
  login(username: string, password: string) {
    const body = {
      'username': `${username}`,
      'password': `${password}`
    };
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post(this.baseUrl + 'login', body, settings);
  }

  register(username: string, password: string, email: string) {
    const body = {
      'username': `${username}`,
      'password': `${password}`,
      'email': `${email}`
    };
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post(this.baseUrl + 'users', body, settings);
  }
}
