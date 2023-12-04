import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User, UserListItem} from "../store/state/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUsers(): Observable<UserListItem[]> {
    return this.http.get<UserListItem[]>('http://localhost:8080/api/users');
  }

}
