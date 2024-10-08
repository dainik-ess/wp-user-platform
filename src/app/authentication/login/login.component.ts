import { Component, Renderer2 } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../shared/services/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule,ReactiveFormsModule,NgbModule,AngularFireModule,AngularFireAuthModule,AngularFireDatabaseModule,
    AngularFirestoreModule],
  providers: [FirebaseService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // public showPassword = false;
  disabled = '';
  active: any;
  showLoader:boolean | undefined;

  constructor(
    public authservice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private firebaseService: FirebaseService,
    private toastr: ToastrService 
  ) {
    // AngularFireModule.initializeApp(environment.firebase);

     const bodyElement = this.renderer.selectRootElement('body', true);
    //  this.renderer.setAttribute(bodyElement, 'class', 'cover1 justify-center');
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['user@gmail.com', [Validators.required, Validators.email]],
      password: ['User@123', Validators.required],
    });

  }
   firestoreModule = this.firebaseService.getFirestore();
   databaseModule = this.firebaseService.getDatabase();
   authModule = this.firebaseService.getAuth();
  // firebase
  email = 'user@gmail.com';
  password = 'User@123';
  errorMessage = ''; // validation _error handle
  _error: { name: string; message: string } = { name: '', message: '' }; // for firbase _error handle

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  login() {
    // console.log(this.loginForm)

    // this.disabled = "btn-loading"
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password).subscribe({
        next: (res) => {
          console.log('res: ', res);
          this.router.navigate(['/pages/ecommerce/products']);
          this.toastr.success('log in successful', 'ynex', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        },
        error: (_error: any) => {
          console.log('_error: ', _error?.error);
          if (_error?.error?.message) {
            this.errorMessage = _error?.error?.message;
          } else {
            this.errorMessage = _error;
          }
          this.router.navigate(['/']);
        },
      });
    }
  }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = 'please enter email id';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  //angular
  public loginForm!: FormGroup;
  public error: any = '';

  get form() {
    return this.loginForm.controls;
  }

  Submit() {
    // console.log(this.loginForm)
    if (
      this.loginForm.controls['username'].value === 'spruko@admin.com' &&
      this.loginForm.controls['password'].value === 'sprukoadmin'
    ) {
      this.router.navigate(['/crm']);
    } else {
      this.error = 'Please check email and passowrd';
    }
  
  }

  // public togglePassword() {
  //   this.showPassword = !this.showPassword;
  // }

  ngOnDestroy(): void {
    const bodyElement = this.renderer.selectRootElement('body', true);
    this.renderer.removeAttribute(bodyElement, 'class');
  }
  showPassword = false;
  toggleClass = "ri-eye-off-line";
  toggleVisibility() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === "ri-eye-line") {
      this.toggleClass = "ri-eye-off-line";
    } else {
      this.toggleClass = "ri-eye-line";
    }
  }
}
