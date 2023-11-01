import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private auth: Auth) { }

  getAuthInstance(): Auth {
    return this.auth;
  }
  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login({email, password}: any) {
   return signInWithEmailAndPassword(this.auth, email, password);
  }
  async resetPassword({email}: any){
    try {
      return sendPasswordResetEmail(this.auth, email)
    }catch (error){console.log(error)}
  }
}
