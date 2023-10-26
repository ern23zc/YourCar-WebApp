import { Component } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recover-password-owner',
  templateUrl: './recover-password-owner.component.html',
  styleUrls: ['./recover-password-owner.component.css'],
  providers:[UserService]
})
export class RecoverPasswordOwnerComponent {
  formRec_Owner: FormGroup;

  constructor(private userService:UserService, private router:Router) {
    this.formRec_Owner = new FormGroup({
      email: new FormControl(),
    });
  }
  onReset(){
    this.userService.resetPassword(this.formRec_Owner.value).then(response=>{
      console.log(response);
      alert('Se envio un código de acceso a su correo!');
    }).catch(error=>console.log(error));

  }

}
