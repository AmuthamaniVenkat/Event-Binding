import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { APP_CONFIG, AppConfig } from '../app-config.module';
// import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(
    private http: Http,
    private router: Router,
    // private authHttp: AuthHttp,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  public getUsers() {
    return this.http.get("/api/users")
        .map((res: Response) =>
         res.json())
        .catch((err) => {
            
            // Do messaging and error handling here
           
            return Observable.throw(err)
        })
}

  /**
   * Logs a user into the application.
   * @param payload
   */
  public login(payload: { username: string, password: string }) {
    return this.http
      .post(`${this.config.apiEndpoint}/login`, payload)
      .map((response: Response) => {
        const token = response.json().token;
        sessionStorage.setItem('token', token); // TODO: can this be done else where? interceptor
        return response;
        // return this.handleResponse(response); // TODO:  unset token shouldn't return the token to login
      })
     // .catch(this.);
  }

  // ...
}