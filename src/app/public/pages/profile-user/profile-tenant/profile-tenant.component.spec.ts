import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTenantComponent } from './profile-tenant.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatListModule} from "@angular/material/list";
import {ProfileOwnerComponent} from "../profile-owner/profile-owner.component";
import firebase from "firebase/compat";
import firestore = firebase.firestore;
import {Firestore} from "@angular/fire/firestore";

describe('profile-tenant', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
        MatSidenavModule,MatIconModule,BrowserAnimationsModule,MatSnackBarModule,MatSelectModule, MatPaginatorModule,
        MatListModule],
      declarations: [ProfileTenantComponent],
      providers:[firestore,Firestore,Firestore]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProfileTenantComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
