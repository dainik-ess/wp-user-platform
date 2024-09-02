import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  MatStepperModule,
  StepperOrientation,
} from '@angular/material/stepper';
import { Observable, map } from 'rxjs';
import { SharedModule } from '../../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    RouterModule
  ],
  animations:[],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})

export class CheckoutComponent {
  // Select1
  selectedSimpleItem = 'Georgetown';
  simpleItems: any = [];
  // Select2
  selectedSimpleItem1 = 'Texas';
  simpleItems1: any = [];

  ngOnInit(): void {
    this.simpleItems = ['Alexgandria', 'Fredrick', 'Georgetown', 'Rock Villa'];
    this.simpleItems1 = ['Alaska', 'California', 'Texas', 'WashingTon Dc'];
  }

  closeResult!: string;

  constructor(
    private modalService: NgbModal,
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  openWindowCustomClass(content: any) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true,
    });
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  forthFormGroup = this._formBuilder.group({
    forthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;
}
