import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LotteryGameComponent} from "./lottery-game.component";

const routes: Routes = [
  {
    path: '',
    component: LotteryGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryGameRoutingModule {
}
