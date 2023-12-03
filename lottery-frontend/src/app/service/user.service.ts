import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User} from "../store/state/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getUsers(): Observable<User[]> {
    return of([
        {
          id: 1,
          name: 'Béla',
          role: 'PLAYER'
        },
        {
          id: 2,
          name: 'Géza',
          role: 'PLAYER'
        },
        {
          id: 3,
          name: 'Klárika',
          role: 'PLAYER'
        }
      ]
    )
  }

}
