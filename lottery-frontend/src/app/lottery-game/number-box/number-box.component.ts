import {Component, Input} from '@angular/core';
import {NumberBoxState} from "./number-box-state";

@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.css']
})
export class NumberBoxComponent {

  @Input() boxState!: NumberBoxState;

  onClick(): void {
    this.boxState.checked = !this.boxState.checked;
  }

}
