import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User} from "../store/state/user";
import {LoginData} from "./login-data";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(loginData: LoginData): Observable<User> {
    return of({
      id: 2,
      name: 'Géza',
      role: 'PLAYER'
    })
  }

  logout(): Observable<string> {
    console.log('logout service');
    return of('');
  }

  me(): Observable<User> {
    return of({
      id: 2,
      name: 'Béla',
      role: 'PLAYER'
    })
  }

}
