import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserState} from "../store/state/user";
import {Observable} from "rxjs";
import {selectName} from "../store/selector/user.selector";
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

  constructor(
    private store: Store<UserState>,
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loggedInUserName$ = this.store.select(selectName);
  }

  logout(): void {
    this.loginService.logout().subscribe(
      () => {
        console.log('next');
        this.store.dispatch(logUserOut());
        this.router.navigate(['login']);
      }
    )
  }

}
