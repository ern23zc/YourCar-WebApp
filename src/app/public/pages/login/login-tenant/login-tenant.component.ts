import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-tenant',
  templateUrl: './login-tenant.component.html',
  styleUrls: ['./login-tenant.component.css'],
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
          console.log(response.user.uid); //-> UID
          //this.userService.setUID(response.user.uid);
          this.router.navigate(['/main-page-tenant']);
        })
        .catch(error=>console.log(error));
  }
}
