import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {PanelStatus} from "./panel-status";

@Injectable({
  providedIn: null
})
export class PanelStatusService {

  status: Subject<PanelStatus> = new Subject<PanelStatus>();
  requested: Subject<void> = new Subject<void>();

  constructor() {
  }
}
