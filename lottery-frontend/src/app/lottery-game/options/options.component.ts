import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameOptionsService} from "../service/game-options.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  gameForm!: FormGroup;

  constructor(
    private gameOptionsService: GameOptionsService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      panels: [4, Validators.min(1)],
      rows: [7, Validators.min(1)],
      columns: [7, Validators.min(1)],
      numbersDrawn: [6, Validators.min(1)]
    })
  }

  onSubmit(): void {

    this.gameOptionsService
      .gameOptionsChanged$
      .next(this.gameForm.value)
  }

}
