import { Injectable, NgZone } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { from, map, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { url } from '../../app.router';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: any;
  afAuth: any;
  afs: any;
  public showLoader: boolean = false;

  constructor(
    private afu: AngularFireAuth,
    private router: Router,
    public ngZone: NgZone,
    private http: HttpClient
  ) {
    this.afu.authState.subscribe((auth: any) => {
      this.authState = auth;
    });
  }

  // all firebase getdata functions

  get isUserAnonymousLoggedIn(): boolean {
    return this.authState !== null ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  get currentUserName(): string {
    return this.authState['email'];
  }

  get currentUser(): any {
    return this.authState !== null ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if (this.authState !== null && !this.isUserAnonymousLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  registerWithEmail(email: string, password: string) {
    return this.afu
      .createUserWithEmailAndPassword(email, password)
      .then((user: any) => {
        this.authState = user;
      })
      .catch((_error: any) => {
        console.log(_error);
        throw _error;
      });
  }

  loginWithEmail(email: string, password: string): Observable<any> {
    return this.getIPAddress().pipe(
      switchMap((ipAddress) => {
        return from(this.getGeolocation()).pipe(
          switchMap((location) => {
            const loginData = {
              email,
              password,
              ipAddress,
              location: {
                lat: location.lat.toString(),
                long: location.long.toString(),
              },
            };

            // Make the API request with the combined data
            return this.http.post<any>(url.login, loginData).pipe(
              map((user) => {
                if (user && user.data.accessToken) {
                  localStorage.setItem(
                    'token',
                    JSON.stringify(user?.data?.accessToken)
                  );
                }
                return user;
              })
            );
          })
        );
      })
    );
  }

  singout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // Sign up with email/password
  SignUp(email: any, password: any) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        /* Call the SendVerificaitonMail() function when new user sign
          up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error: any) => {
        window.alert(error.message);
      });
  }

  // main verification function
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['/dashboard']);
      });
  }
  // Set user
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL || 'src/favicon.ico',
      emailVerified: user.emailVerified,
    };
    userRef
      .delete()
      .then(function () {})
      .catch(function (error: any) {});
    return userRef.set(userData, {
      merge: true,
    });
  }
  // sign in function
  SignIn(email: any, password: any) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        if (result.user.emailVerified !== true) {
          this.SetUserData(result.user);
          this.SendVerificationMail();
          this.showLoader = true;
        } else {
          this.showLoader = false;
          this.ngZone.run(() => {
            this.router.navigate(['/auth/login']);
          });
        }
      })
      .catch((error: any) => {
        throw error;
      });
  }
  ForgotPassword(passwordResetEmail: any) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error: any) => {
        window.alert(error);
      });
  }

  private getIPAddress(): Observable<string> {
    return this.http
      .get<{ ip: string }>('https://api.ipify.org?format=json')
      .pipe(map((response: any) => response.ip));
  }

  private getGeolocation(): Promise<{ lat: number; long: number }> {
    return new Promise((resolve, reject) => {
      resolve({
        lat: 21.151744,
        long: 72.8236032,
      });

      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(
      //     (position) => {
      //       resolve({
      //         lat: position.coords.latitude,
      //         long: position.coords.longitude,
      //       });
      //     },
      //     (error) => reject(error)
      //   );
      // } else {
      //   reject("Geolocation not supported");
      // }
    });
  }

  public getToken() {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
  
  }
}
