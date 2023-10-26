import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-tenant',
  templateUrl: './register-tenant.component.html',
  styleUrls: ['./register-tenant.component.css']
})
export class RegisterTenantComponent {
  formReg_Tenant: FormGroup;

  constructor(
      private userService: UserService,
      private router:Router
  ) {
    this.formReg_Tenant = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(){
    this.userService.register(this.formReg_Tenant.value)
        .then(response=>{
          console.log(response);
          this.router.navigate(['/validation']);
        })
        .catch(error=>console.log(error));
  }
}
