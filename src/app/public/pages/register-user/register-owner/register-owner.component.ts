import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})

export class RegisterOwnerComponent {

  formReg_Owner: FormGroup;

  constructor(
    private userService: UserService,
    private router:Router
  ) {
    this.formReg_Owner = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(){
  this.userService.register(this.formReg_Owner.value)
    .then(response=>{
      console.log(response);
      this.router.navigate(['/validation']);
    })
    .catch(error=>console.log(error));
  }
}
