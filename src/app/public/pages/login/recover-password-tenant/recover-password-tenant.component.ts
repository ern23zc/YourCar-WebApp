import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recover-password-tenant',
  templateUrl: './recover-password-tenant.component.html',
  styleUrls: ['./recover-password-tenant.component.css'],
  providers:[UserService]
})
export class RecoverPasswordTenantComponent {
  formRec_Tenant = new FormControl('');

  constructor(private userService:UserService, private router:Router) {
  }
  async onReset(){
    try {
      const email = this.formRec_Tenant.value;
      await this.userService.resetPassword({email: email});
      window.alert('Se ha enviado un correo, Revisa tu correo')
      this.router.navigate(['/login-tenant'])
    }
    catch (error)
    {
      console.log(error)
    }

  }
}
