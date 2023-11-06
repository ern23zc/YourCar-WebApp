import { Component } from '@angular/core';
import {Tenant} from "../profile-model/profile-model.module";
import {OnInit} from "@angular/core";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-profile-tenant',
  templateUrl: './profile-tenant.component.html',
  styleUrls: ['./profile-tenant.component.css']
})
export class ProfileTenantComponent {
  constructor(public userService:UserService) {
  }

  tenant : Tenant={
    uid: '',
    nombre: '',
    apellido: '',
    Fecha_de_Nacimiento: '',
    telefono: '',
    email: '',
    foto: '',
  };

  async ngOnInit(){
    const uid = await this.userService.getUID();
    console.log(uid)
  }
  async actualizar(){
    const uid = await this.userService.getUID();
    console.log(uid)
  }
}
