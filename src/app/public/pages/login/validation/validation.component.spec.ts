import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationComponent } from './validation.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";

describe('validation', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, MatCardModule, MatFormFieldModule],
      declarations: [ValidationComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ValidationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
