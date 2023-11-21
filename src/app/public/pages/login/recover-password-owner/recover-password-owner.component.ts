import { Component } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recover-password-owner',
  templateUrl: './recover-password-owner.component.html',
  styleUrls: ['./recover-password-owner.component.css'],
  providers:[UserService]
})
export class RecoverPasswordOwnerComponent {
  formRec_Owner = new FormControl('');

  constructor(private userService:UserService, private router:Router) {
  }
  async onReset(){
    try {
      const email = this.formRec_Owner.value;
      await this.userService.resetPassword({email: email});
      window.alert('Se ha enviado un correo, Revisa tu correo')
      this.router.navigate(['/login-owner'])
    }
    catch (error)
    {
      console.log(error)
    }

  }
}
