import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PanelStatus} from "../service/panel-status";
import {PanelStatusService} from "../service/panel-status.service";


@Component({
  selector: 'app-panel-container',
  templateUrl: './panel-container.component.html',
  styleUrls: ['./panel-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelContainerComponent implements OnInit, OnChanges {

  @Input() numberOfPanels!: number;
  @Input() width!: number;
  @Input() height!: number;
  @Input() numbersDrawn!: number;

  ids: number[] = [];
  showStatus: boolean = false;
  statusMessages: PanelStatus[] = [];

  constructor(private panelStatusService: PanelStatusService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //TODO remove log
    console.log('Container OnChanges');
    this.ids = [];
    for (let i = 1; i <= this.numberOfPanels; i++) {
      this.ids.push(i);
    }
  }

  ngOnInit(): void {
    this.panelStatusService.status.subscribe(
      (status) => {
        this.statusMessages.push(status);
        this.statusMessages.sort(
          (a, b) => a.id - b.id
        )
      }
    )

  }

  onPlay(): void {
    this.statusMessages = [];
    this.panelStatusService.requested.next();
    this.showStatus = true;
  }


}
