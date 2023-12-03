import {CanActivateFn, Router} from "@angular/router";
import {UserState} from "../store/state/user";
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectRole} from "../store/selector/user.selector";
import {LoginService} from "../service/login.service";
import {logUserIn} from "../store/action/user.actions";

export const gameCanActivate: CanActivateFn = async () => {

  const router: Router = inject(Router);
  const loginService: LoginService = inject(LoginService);
  const store: Store<UserState> = inject(Store<UserState>);

  let role: 'PLAYER' | 'GUEST' | null = null;

  store.select(selectRole).subscribe(
    value => {
      console.log('gotRoleFromStore');
      role = value;
      if (role != 'PLAYER') {
        'subscribing to me()'
        loginService.me().subscribe(
          user => {
            value = user.role;
            store.dispatch(
              logUserIn({
                  user: user
                }
              )
            )
          }
        )
      }
    }
  )
  console.log('guard returns');
  return role === 'PLAYER' ? true : router.navigate(['/login']);
}
