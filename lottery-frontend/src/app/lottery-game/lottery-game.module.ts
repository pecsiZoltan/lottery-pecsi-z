import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LotteryGameRoutingModule} from "./lottery-game-routing.module";
import {LotteryGameComponent} from "./lottery-game.component";
import {NumberBoxComponent} from "./number-box/number-box.component";
import {PanelComponent} from "./panel/panel.component";
import {PanelContainerComponent} from "./panel-container/panel-container.component";
import {PanelStatusComponent} from "./panel-status/panel-status.component";
import {PanelStatusService} from "./service/panel-status.service";
import {OptionsComponent} from './options/options.component';
import {ReactiveFormsModule} from "@angular/forms";
import {GameOptionsService} from "./service/game-options.service";
import {GameComponent} from './game/game.component';


@NgModule({
  declarations: [
    LotteryGameComponent,
    NumberBoxComponent,
    PanelComponent,
    PanelContainerComponent,
    PanelStatusComponent,
    OptionsComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    LotteryGameRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PanelStatusService,
    GameOptionsService
  ],
})
export class LotteryGameModule {
}
