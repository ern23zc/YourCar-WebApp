import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreTenantComponent } from './restore-tenant.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";

describe('restore-tenant', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, MatCardModule, MatFormFieldModule],
      declarations: [RestoreTenantComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RestoreTenantComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
