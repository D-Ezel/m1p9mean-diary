import { Accounts } from './../models/Accounts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private localUrl = "http://localhost:8888/api/account";
  private localPort = ":4200"
  private localProtocol = "http"
  private url=  (document.domain.startsWith("localhost") ? this.localProtocol : "https")+"://"+ document.domain + (document.domain.startsWith("localhost") ? this.localPort : "")+"/api/account"
 

  constructor(private http: HttpClient, private cookie: CookieService) { }

  public logout() {
    const headers = {
        'content-type':'application/json',
        'Authorization':'Bearer '+ this.cookie.get('token'),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
    }
    return this.http.post(this.url + '/logout', null, {'headers':headers})
}

public isLogged() {
    const headers = {
        'content-type':'application/json',
        'Authorization':'Bearer '+ this.cookie.get('token'),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
    }
    return this.http.get(this.url + '/isLogged', {'headers': headers});
}

public login(users: Accounts) {
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(users);
    return this.http.post(this.url + '/login', body, {'headers':headers})
}
}
