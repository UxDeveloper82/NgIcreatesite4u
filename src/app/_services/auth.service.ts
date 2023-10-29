import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
   user$: Observable<firebase.User>;

  constructor(private fireauth: AngularFireAuth, private router: Router) {
    this.user$ = fireauth.authState;
  }

  //Login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then( res=> {
        localStorage.setItem('token', 'true');
        if (res.user?.emailVerified == true) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['/verify-email']);
        }
      }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  //Register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res=> {
        alert('Registration Successful');
        this.sendEmailForVerification(res.user);
        this.router.navigate(['/login']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  //Signout
  logout() {
    this.fireauth.signOut().then(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }, err=> {
        alert(err.message);
      }
    );
  }
  //Forgot Password
  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
        this.router.navigate(['/verify-email']);
      }, err => {
        alert('Something went wrong');
      }
    );
  }
  //Email verification
  sendEmailForVerification(user: any) {
     return this.fireauth.currentUser
     .then((user) => {
      return user?.sendEmailVerification();
     })
     .then(() => {
      this.router.navigate(['/verify-email']);
     })
  }

  // Sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res=> {
        this.router.navigate(['/dashboard']);
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
    }, err => {
      alert(err.message)
    })
  }
}
