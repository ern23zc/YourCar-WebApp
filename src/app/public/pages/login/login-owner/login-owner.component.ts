import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.css']
})
export class LoginOwnerComponent {
  formLog_Owner: FormGroup;

  constructor(private userService: UserService,
              private router:Router) {
    this.formLog_Owner = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(){
    this.userService.login(this.formLog_Owner.value)
        .then(response=>{
          console.log(response);
          this.router.navigate(['/main-page-owner']);
        })
        .catch(error=>console.log(error));
  }
}
