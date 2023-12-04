import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";
import {defaultGameOptions, GameOptions} from "./game-options";

@Injectable()
export class GameOptionsService {

  gameOptionsChanged$: Subject<GameOptions> = new BehaviorSubject<GameOptions>(defaultGameOptions);

}
