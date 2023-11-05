import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoverPasswordOwnerComponent } from './recover-password-owner.component';
import {RouterTestingModule} from "@angular/router/testing";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";
import {Auth} from "@angular/fire/auth";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
/*
describe('recover-password-owner', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, MatCardModule, MatFormFieldModule],
      declarations: [RecoverPasswordOwnerComponent],
      providers:[UserService,Router, Auth]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RecoverPasswordOwnerComponent);
    const RecoverPasswordOwner = fixture.componentInstance;
    expect(RecoverPasswordOwner).toBeTruthy();
  });

});*/

