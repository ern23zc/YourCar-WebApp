import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Firestore} from "@angular/fire/firestore";
import {FirestoreServiceService} from "../firestore-service.service";

@Component({
  selector: 'app-profile-tenant',
  templateUrl: './profile-tenant.component.html',
  styleUrls: ['./profile-tenant.component.css']
})
export class ProfileTenantComponent {
  nombreGet:any;
  cargoGet:any;
  getData:any=[];

  form = new FormGroup({
    nombre: new  FormControl('', Validators.required),
    cargo: new  FormControl('', Validators.required),
  })

  constructor(private fireService:FirestoreServiceService) {
  }

  async agregarData(){
    console.log(this.form.value.cargo)
    this.nombreGet = this.form.value.nombre
    this.cargoGet = this.form.value.cargo
  }

  crearData(){
    this.agregarData()
    this.fireService.guardarDatos(this.nombreGet,this.cargoGet)
  }
}
