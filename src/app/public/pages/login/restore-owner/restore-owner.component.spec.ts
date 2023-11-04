import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreOwnerComponent } from './restore-owner.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";

describe('restore-owner', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, MatCardModule, MatFormFieldModule],
      declarations: [RestoreOwnerComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RestoreOwnerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
