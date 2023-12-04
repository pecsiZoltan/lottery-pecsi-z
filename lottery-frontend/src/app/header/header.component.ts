import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserState} from "../store/state/user";
import {map, Observable} from "rxjs";
import {selectName, selectRole} from "../store/selector/user.selector";
import {LoginService} from "../service/login.service";
import {logUserOut} from "../store/action/user.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInUserName$!: Observable<String | null>;

  showPlayButton$!: Observable<boolean | null>;

  constructor(
    private store: Store<UserState>,
    private loginService: LoginService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.loggedInUserName$ = this.store.select(selectName);
    this.showPlayButton$ = this.store.select(selectRole)
      .pipe(
        map(
          role => role === 'PLAYER'
        )
      )
  }

  logout(): void {
    this.loginService.logout().subscribe(
      () => {
        this.store.dispatch(logUserOut());
        this.router.navigate(['login']);
      }
    )
  }

}
