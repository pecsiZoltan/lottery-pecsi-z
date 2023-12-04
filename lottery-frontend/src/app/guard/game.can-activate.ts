import {CanActivateFn, Router} from "@angular/router";
import {UserState} from "../store/state/user";
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectRole} from "../store/selector/user.selector";
import {map} from "rxjs";

export const gameCanActivate: CanActivateFn = () => {

  const router: Router = inject(Router);
  const store: Store<UserState> = inject(Store<UserState>);

  return store.select(selectRole).pipe(
    map(
      role => role === 'PLAYER'
        ? true
        : router.createUrlTree(['login'])
    )
  )

}
