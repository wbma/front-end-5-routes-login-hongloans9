import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MediaService {

  username: string;
  password: string;
  status: string;
  email: string;
  baseUrl = 'http://media.mw.metropolia.fi/wbma/';

  constructor(private http: HttpClient, private route: Router) { }

  formValidation(): boolean {
    if (!this.username) {
      alert('please check that all required fields have been filled');
      return false;
    } else if (!this.password) {
      alert('please check that all required fields have been filled');
      return false;
    } else if (!this.email) {
      alert('please check that all required fields have been filled');
      return false;
    } else {
      return true;
    }
  }

  hasValidToken() {
    const reqSettings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token'))
    };
    return this.http.get(this.baseUrl + 'users/user', reqSettings);
  }

  register() {
    const body = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.http.post(this.baseUrl + 'users', body).subscribe(data => {
      console.log(data);
      this.login();
    });
  }

  login() {
    const body = {
      username: this.username,
      password: this.password
    };
    // optional
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    this.http.post(this.baseUrl + 'login', body, settings).subscribe(response => {
      console.log(response['token']);
      localStorage.setItem('token', response['token']);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
      this.status = error.error.message;
    });
  }
}

