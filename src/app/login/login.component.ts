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
  }

  login() {
    this.mediaService.login(this.username, this.password).subscribe(
      (data: any) => {
        console.log(data);
        const token: string = data.token;
        localStorage.setItem('token', token);
      }
    );
    this.route.navigate(['front']);
  }
}
