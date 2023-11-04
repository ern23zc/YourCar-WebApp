import { Injectable } from '@angular/core';
import {addDoc, collection,collectionData, deleteDoc,doc,Firestore,getDoc, updateDoc} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService {

  constructor(private firestore: Firestore) { }

  async guardarDatos(nombre:any, cargo:any){
    const obj=Object.assign({
      "nombre":nombre,
      "cargo":cargo,
    })

    const Ref= collection(this.firestore, "Arrendatarios");
    await addDoc(Ref,obj)
  }

  getDate(): Observable<any[]>{
    const ref = collection(this.firestore, "Arrendatarios");
    return collectionData(ref,{idField: 'id'}) as Observable<any>
  }

  async updateDatos(idDoc: any, nombre?:any, cargo?:any){

  }

  async deleteData(arg: any){

  }
}
