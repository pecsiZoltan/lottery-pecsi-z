import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NumberBoxState} from "../number-box/number-box-state";
import {PanelStatusService} from "../service/panel-status.service";
import {PanelStatus} from "../service/panel-status";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit, OnChanges {

  @Input() panelId!: number;
  @Input() height!: number;
  @Input() width!: number;
  @Input() numbersDrawn!: number;

  public boxContainerWidth!: string;
  public boxContainerBackgroundWidth!: string;
  public boxContainerBackgroundHeight!: string;
  public boxContainerBackgroundFontSize!: string;

  boxes: NumberBoxState[][] = [];

  constructor(private panelStatusService: PanelStatusService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateBoxContainerSize();
    this.initBoxes();
  }

  ngOnInit(): void {
    this.panelStatusService.requested.subscribe(
      () => {
        this.panelStatusService.status.next(
          this.createPanelStatus()
        )
      }
    )

  }

  clear(): void {
    this.boxes.forEach(
      row => row.forEach(
        box => box.checked = false
      )
    )
  }

  randomize(): void {

    this.clear();

    for (
      let i = 0;
      i < (this.numbersDrawn < this.width * this.height
        ? this.numbersDrawn
        : this.width * this.height);
      i++)
    {
      let randomChecked = false;
      while (!randomChecked) {
        let y = Math.floor((Math.random() * this.height));
        let x = Math.floor((Math.random() * this.width));
        if (!this.boxes[x][y].checked) {
          this.boxes[x][y].checked = true;
          randomChecked = true;
        }
      }
    }
  }

  getWidth(): string {
    const width = this.width * 38;
    const minWidth = 5 * 38;
    return `${Math.max(width, minWidth)}px`;
  }

  getBackgroundWidth = (): string => `${this.width * 34}px`;

  getBackgroundHeight = (): string => `${this.height * 34}px`;

  getFontSize(): string {
    let smallerSide: number = this.width < this.height ? this.width : this.height;
    return `${smallerSide * 38}px`
  }

  private calculateBoxContainerSize() {
    this.boxContainerWidth = this.getWidth();
    this.boxContainerBackgroundWidth = this.getBackgroundWidth();
    this.boxContainerBackgroundHeight = this.getBackgroundHeight();
    this.boxContainerBackgroundFontSize = this.getFontSize();
  }

  private initBoxes(): void {

    let boxes: NumberBoxState[][] = []

    for (let i = 0; i < this.width; i++) {
      boxes[i] = [];
    }

    let counter = 1;
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        boxes[j][i] = {
          theNumber: counter++,
          checked: false
        }
      }
    }

    this.boxes = boxes;
  }

  private createPanelStatus(): PanelStatus {

    let checkedNumbers = this.getCheckedNumbers();

    let status: PanelStatus = {id: this.panelId, status: ''};

    if (this.numbersDrawn > this.height * this.width) {
      status.status = 'Invalid config: more numbers to choose than available!';
    } else if (checkedNumbers.length === 0) {
      status.status = 'empty';
    } else if (checkedNumbers.length === this.numbersDrawn) {
      status.status = checkedNumbers.toString();
    } else if (checkedNumbers.length < this.numbersDrawn) {
      status.status = `Error: ${this.numbersDrawn - checkedNumbers.length} marks are missing`;
    } else {
      status.status = `Error: Please remove ${checkedNumbers.length - this.numbersDrawn} marks`;
    }

    return status;
  }

  private getCheckedNumbers(): number[] {

    const checkedNumbers: number[] = [];

    this.boxes.forEach(
      row => row.forEach(
        box => {
          if (box.checked) {
            checkedNumbers.push(box.theNumber);
          }
        }
      )
    )
    return checkedNumbers.sort((a, b) => a - b);
  }

}
