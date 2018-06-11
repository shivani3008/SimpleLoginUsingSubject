import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.loginService.onLogin().subscribe(response => {
      if(response) {
        this.loginService.publishService(response.data.loggedIn);
        this.router.navigate(['/home']);
      }
    })
  }
}
