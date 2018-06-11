import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn$: Subject<Boolean> = new Subject();
  constructor(private http: HttpClient) {
  }

  publishService(data: Boolean) {
    this.loggedIn$.next(data);
  }

  onLogin() {
    return this.http.get('../../assets/Data/login.json').pipe(map((response: any) => response));
  }
}
