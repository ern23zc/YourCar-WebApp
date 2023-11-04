import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterTenantComponent } from './register-tenant.component';
import {RouterTestingModule} from "@angular/router/testing";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

describe('Register-Tenant', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RegisterTenantComponent],
      providers:[UserService,Router]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RegisterTenantComponent);
    const RegisterTenant = fixture.componentInstance;
    expect(RegisterTenant).toBeTruthy();
  });

});
