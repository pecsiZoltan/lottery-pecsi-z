import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {gameCanActivate} from "./guard/game.can-activate";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'game',
    canActivate: [gameCanActivate],
    loadChildren:
      () => import('./lottery-game/lottery-game.module')
        .then(m => m.LotteryGameModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
