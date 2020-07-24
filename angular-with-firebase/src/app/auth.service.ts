import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularfireAuth : AngularFireAuth,
    private ngZone:  NgZone,
    private router : Router
  ) { }

  isLoggedIn(){
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  signInWithGoogle(){
    console.log("signWithGoogle");
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider){
    return this.angularfireAuth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() => {
         this.router.navigate(['employee']);
       })
    //  this.SetUserData(result.user);
   }).catch((error) => {
     window.alert(error)
   })

  }


}
