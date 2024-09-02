import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  public showPassword: boolean = false;
  public showPassword1: boolean = false;
  public showPassword2: boolean = false;
  toggleClass = 'ri-eye-off-line';
  toggleClass1 = 'ri-eye-off-line';
  toggleClass2 = 'ri-eye-off-line';

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'ri-eye-line') {
      this.toggleClass = 'ri-eye-off-line';
    } else {
      this.toggleClass = 'ri-eye-line';
    }
  }
  public togglePassword1() {
    this.showPassword1 = !this.showPassword1;
    if (this.toggleClass1 === 'ri-eye-line') {
      this.toggleClass1 = 'ri-eye-off-line';
    } else {
      this.toggleClass1 = 'ri-eye-line';
    }
  }
  public togglePassword2() {
    this.showPassword2 = !this.showPassword2;
    if (this.toggleClass2 === 'ri-eye-line') {
      this.toggleClass2 = 'ri-eye-off-line';
    } else {
      this.toggleClass2 = 'ri-eye-line';
    }
  }
}
