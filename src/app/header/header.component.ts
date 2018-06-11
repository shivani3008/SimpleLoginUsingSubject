import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: Boolean;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.loggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    })
  }

  onLogout() {    
    this.loginService.publishService(false);
    this.router.navigate(['/login']);
  }
}