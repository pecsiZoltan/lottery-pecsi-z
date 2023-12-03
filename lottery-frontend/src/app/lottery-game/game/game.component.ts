import {Component, OnInit} from '@angular/core';
import {GameOptionsService} from "../service/game-options.service";
import {GameOptions} from "../service/game-options";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameOptions!: GameOptions;

  constructor(
    private gameOptionsService: GameOptionsService
  ) {
  }

  ngOnInit(): void {
    this.gameOptionsService
      .gameOptionsChanged$.subscribe(
      (options) => {
        this.gameOptions = options;
      }
    )
  }

}
