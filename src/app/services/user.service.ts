import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly UID_KEY = 'user_uid';

  constructor(private auth: Auth) {
    this.uid = localStorage.getItem(this.UID_KEY) || '';

  }

  getAuthInstance(): Auth {
    return this.auth;
  }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password).then(response =>{
      this.uid = response.user.uid;
      localStorage.setItem(this.UID_KEY, this.uid);
      return response;
    })
    ;
  }

  async resetPassword({email}: any){
    try {
      return sendPasswordResetEmail(this.auth, email)
    }catch (error){console.log(error)}
  }

  private uid!: string;

  getUID(): string {
    return this.uid;
  }
  clearUID() {
    // Limpiar el UID y también eliminarlo del localStorage
    this.uid = '';
    localStorage.removeItem(this.UID_KEY);
  }

}
