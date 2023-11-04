import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-login-tenant',
  templateUrl: './login-tenant.component.html',
  styleUrls: ['./login-tenant.component.css'],
  providers: [
    Auth
  ]
})
export class LoginTenantComponent {
  formLog_Tenant: FormGroup;

  constructor(private userService: UserService,
              private router:Router) {
    this.formLog_Tenant = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(){
    this.userService.login(this.formLog_Tenant.value)
        .then(response=>{
          console.log(response);
          this.router.navigate(['/main-page-tenant']);
        })
        .catch(error=>console.log(error));
  }
}
