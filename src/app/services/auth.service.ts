import { Injectable, NgZone } from '@angular/core';
import { User } from '../models/user';
import * as auth from 'firebase/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['sidebar']);
          };
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(firstname:string, lastname:string, email: string, password: string, address: string, neighborhood: string, zipcode:string) {

    let additionalData = {
      firstname: firstname,
      lastname: lastname,
      address: address,
      neighborhood: neighborhood,
      zipcode: zipcode,
      userType: "Neighbor"
    }

    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        //this.SendVerificationMail();
        this.SetUserData(result.user, additionalData);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['sidebar']);
          };
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forgot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
    //&& user.emailVerified !== false ? true : false
  }

  // Delete user by uid
 

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['sidebar']);
        //this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  DeleteUserAccount(uid: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${uid}`
    );
    userRef.delete();
  }

  DeleteThisAccount() {
    return this.afAuth.currentUser
    .then((user:any) => {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(
        `users/${user.uid}`
      );
      user.delete().then(() => {
        userRef.delete();
      }).catch((err:any) => {
        window.alert("Error al borrar cuenta. Porfavor ingresa nuevamente");
        this.SignOut();
      });
      
    
      
    })
    .then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['header']);
    });
    
  }

  UpdateUserData( firstname:string, lastname:string, email: string, address: string, neighborhood: string, zipcode:string) {

    let additionalData = {
      firstname: firstname,
      lastname: lastname,
      address: address,
      neighborhood: neighborhood,
      zipcode: zipcode
    }
    
    this.afAuth.currentUser.then((user:any) => {

      const userData: User = {
        uid: user.uid,
        email: email,
        emailVerified: user.emailVerified,
      };
  
  
      if (additionalData) {
        userData.firstname = additionalData.firstname;
        userData.lastname = additionalData.lastname;
        userData.address = additionalData.address;
        userData.neighborhood = additionalData.neighborhood;
        userData.zipcode = additionalData.zipcode;
      }
  
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(
        `users/${user.uid}`
      );

      userRef.update(userData).catch((error) => {
        window.alert(error);
      }).then(() => {
        if(user.email !== email) {
          user.updateEmail(email).then(() => {
            window.alert("Tu nuevo email es " + email);
            this.SignOut();
          })
        }
      }).then(() => {
        window.alert('Datos de usuario actualizados');
        window.location.reload();
      });
    
    })
    


  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any, moreData?: any) {
    
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    
    const userData: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
    };

    if (moreData) {
      userData.firstname = moreData.firstname;
      userData.lastname = moreData.lastname;
      userData.address = moreData.address;
      userData.neighborhood = moreData.neighborhood;
      userData.zipcode = moreData.zipcode;
      userData.userType = moreData.userType;
    }

    return userRef.set(userData, {
      merge: true,
    }); 
  }

  serUserType(uid: string, userType: string) {

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${uid}`
    );

    userRef.update({userType: userType}).then(() => {
      //window.location.reload();
    })

  }





  GetUserData(user: any) {
    console.log(user);
    
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    return userRef.get()
  }

  GetAllUsers() {

    return this.afs.collection('users').get();

  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['header']);
    });
  }

}