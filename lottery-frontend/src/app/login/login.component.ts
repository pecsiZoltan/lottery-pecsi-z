import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {logUserIn, storeUserList} from "../store/action/user.actions";
import {selectUserById, selectUserByName, selectUserList} from "../store/selector/user.selector";
import {User, UserState} from "../store/state/user";
import {UserService} from "../service/user.service";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userList$!: Observable<User[]>;

  loginForm!: FormGroup;

  constructor(
    private store: Store<UserState>,
    private userService: UserService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.userList$ = this.store.select(selectUserList);

    this.userService.getUsers().subscribe(
      users => this.store.dispatch(
        storeUserList(
          {
            users: users
          }
        )
      )
    );

    this.loginForm = this.formBuilder.group({
      userId: [null],
      userName: [''],
      password: [''],
    })

  }

  login(): void {
    this.loginService.login(this.loginForm.value).subscribe(
      user => {
        this.store.dispatch(
          logUserIn({user: user}
          )
        );
        this.router.navigate(["/game"]);
      }
    )
  }

  onIdChange(): void {
    this.store.select(selectUserById(this.loginForm.value.userId)).subscribe(
      user => this.loginForm.get('userName')?.setValue(user?.name)
    )
  }

  onNameSelect(): void {
    console.log('change detected, name: ', this.loginForm.value.userName);
    this.store.select(selectUserByName(this.loginForm.value.userName)).subscribe(
      user => this.loginForm.get('userId')?.setValue(user?.id)
    )
  }

}
