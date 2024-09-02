import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [SharedModule,NgbModule,ReactiveFormsModule,FormsModule,NgbRatingModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent {
  squareRate = 3;
  faRate = 3;
  currentRate = 5;
  customCurrentRate = 5;
  customCurrentRateInput = 5;
  selected = 2;
  selected1 = 3;
  hovered = 1;
  hovered1 = 2;
  readonly = false;
  heartRate = 3.45;
  ctrl: UntypedFormControl;
  ctrl1: UntypedFormControl;
  constructor() {
    this.ctrl = new UntypedFormControl(null, Validators.required);
    this.ctrl1 = new UntypedFormControl(null, Validators.required);
  }

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }

  ngOnInit(): void {}

  toggle = () => {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  };
}
