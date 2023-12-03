import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PanelStatus} from "../service/panel-status";

@Component({
  selector: 'app-panel-status',
  templateUrl: './panel-status.component.html',
  styleUrls: ['./panel-status.component.css']
})
export class PanelStatusComponent {

  @Input() statusMessages!: PanelStatus[];
  @Output() panelStatusClosed: EventEmitter<void> = new EventEmitter<void>();

}
