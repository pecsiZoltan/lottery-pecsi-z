import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../store/state/user";
import {LoginData} from "./login-data";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) {
  }

  login(loginData: LoginData): Observable<User> {
    console.log(loginData);
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(loginData.userName + ':' + loginData.password),
    });
    return this.http.get<User>('http://localhost:8080/api/users/me', {headers: headers})
  }

  logout(): Observable<void> {
    return this.http.get<void>('http://localhost:8080/api/logout');
  }

  me(): Observable<User> {
    return this.http.get<User>('http://localhost:8080/api/users/me')
  }

}
