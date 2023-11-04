import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOwnerComponent } from './register-owner.component';
import {RouterTestingModule} from "@angular/router/testing";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

describe('Register-owner', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RegisterOwnerComponent],
      providers:[UserService,Router]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RegisterOwnerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});