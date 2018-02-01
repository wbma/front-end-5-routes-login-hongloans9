import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private mediaService: MediaService,
    private route: Router) { }

  ngOnInit() {

    if (localStorage.getItem('token')) {
      this.mediaService.hasValidToken().subscribe(response => {
        this.route.navigate(['front']);
      }, err => {
        console.log('error validate login token');
      });
    }
  }
}
