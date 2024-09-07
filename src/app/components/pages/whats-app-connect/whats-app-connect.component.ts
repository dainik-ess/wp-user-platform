import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import Swal from 'sweetalert2';
import { BaseService } from '../../../shared/services/base.service';
import { url } from '../../../app.router';

@Component({
  selector: 'app-whats-app-connect',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatStepperModule],
  templateUrl: './whats-app-connect.component.html',
  styleUrl: './whats-app-connect.component.scss',
})
export class WhatsAppConnectComponent {
  public businessDetailsForm: FormGroup;
  public formComplete: boolean = false;
  public currentStepIndex: number = 0;
  public businessDetailsValue: any;
  public tokenVisible: boolean = false;
  public isFormEdit:boolean = false;
  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private fb: FormBuilder, private _baseService: BaseService) {
    this.businessDetailsForm = this.fb.group({
      businessPhoneNumberId: [
        '',
        [Validators.required, Validators.pattern(/^(?!\s*$).+/)],
      ],
      businessPhoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^(?!\s*$).+/)],
      ],
      whatsappBusinessAccountId: [
        '',
        [Validators.required, Validators.pattern(/^(?!\s*$).+/)],
      ],
      webhookVerifyToken: [
        null,
        [Validators.required, Validators.pattern(/^(?!\s*$).+/)],
      ],
      whatsappApiAccessToken: [
        '',
        [Validators.required, Validators.pattern(/^(?!\s*$).+/)],
      ],
    });
  }

  ngOnInit() {
    this.dataInitializer();
  }
  /*---------------------------------
  Private  methods
  -----------------------------------*/

  /**
   * Method to initialize data
   */
  private dataInitializer(): void {
    this.businessDetailFormInitialize();
    this.getToken();
  }

  /**
   * method for the business details form
   */
  private businessDetailFormInitialize() {
    if (this.businessDetailsForm.valid) {
      this.verifyFinished();
    }
  }

  /**
   * token Get Method
   */
  private getToken(): void {
    this._baseService.get(url.getToken, {}).subscribe({
      next: (response) => {
        console.log('response: ', response?.data);
        if(response){
          this.businessDetailsForm.get('businessPhoneNumberId')?.setValue(response?.data?.businessPhoneNumberId);
          this.businessDetailsForm.get('businessPhoneNumber')?.setValue(response?.data?.businessPhoneNumber);
          this.businessDetailsForm.get('whatsappBusinessAccountId')?.setValue(response?.data?.whatsappBusinessAccountId);
          this.businessDetailsForm.get('webhookVerifyToken')?.setValue(response?.data?.webhookVerifyToken);
          this.businessDetailsForm.get('whatsappApiAccessToken')?.setValue(response?.data?.whatsappApiAccessToken);
          this.formComplete = true;
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  /**
   * reset forms
   */
  private resetForms(): void {
    this.businessDetailsForm.reset();
    this.businessDetailsValue = this.businessDetailsForm?.value;
    this.formComplete = true;
    this.isFormEdit = false
  }

  /*---------------------------------
  Public  methods
  -----------------------------------*/

  verifyFinished() {
    if (this.businessDetailsForm?.invalid) return;

    const urlData = this.isFormEdit ? url.updateBusinessDetails : url.addBusinessDetails;
    
    if (this.isFormEdit) {
      this._baseService.patch(urlData, this.businessDetailsForm?.value).subscribe({
        next: (response) => {
          if (response) {
            this.resetForms();
            this.getToken();
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
    } else {
      this._baseService.post(urlData, this.businessDetailsForm?.value).subscribe({
        next: (response) => {
          if (response) {
            this.resetForms();
            this.getToken();
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  editBusinessDetailForm() {
    this.isFormEdit = true
    this.formComplete = false;
    this.currentStepIndex = 1;
  }

  tokenVerify() {
    this._baseService.post(url.tokenWebHook, {}).subscribe({
      next: (res) => {
        Swal.fire({
          title: 'Success!',
          text: res?.message,
          icon: 'success',
          timer: 3000, // Auto-dismiss after 3 seconds
          showConfirmButton: false, // No confirm button
          showCancelButton: false, // No cancel button
          timerProgressBar: true, // Show a progress bar for the timer
        });
        this.businessDetailsForm
          ?.get('webhookVerifyToken')
          ?.setValue(res?.data?.verfiyToken);
      },
      error: (error) => {
        Swal.fire({
          title: 'Error!',
          text: error?.message ?? error,
          icon: 'error',
          timer: 3000, // Auto-dismiss after 3 seconds
          showConfirmButton: false, // No confirm button
          showCancelButton: false, // No cancel button
          timerProgressBar: true, // Show a progress bar for the timer
        });
      },
    });
  }

  toggleTokenVisibility(input: HTMLInputElement): void {
    this.tokenVisible = !this.tokenVisible;
    input.type = this.tokenVisible ? 'text' : 'password'; // Toggle between 'text' and 'password'
  }
}
