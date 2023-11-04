import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCarRentalComponent } from './pay-car-rental.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSelectModule} from "@angular/material/select";
import {MaintenanceTenantComponent} from "../maintenance-tenant/maintenance-tenant.component";

describe('paycard-tenant', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
        MatSidenavModule,MatIconModule,BrowserAnimationsModule,MatSnackBarModule,MatSelectModule],
      declarations: [PayCarRentalComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PayCarRentalComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});