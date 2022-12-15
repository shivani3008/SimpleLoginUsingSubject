import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: Boolean;
  loggedInSubscription: Subscription;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loggedInSubscription = this.loginService.loggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }

  onLogout() {
    this.loginService.publishService(false);
    this.router.navigate(['/login']);
  }
}