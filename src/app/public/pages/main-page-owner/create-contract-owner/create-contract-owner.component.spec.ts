import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContractOwnerComponent } from './create-contract-owner.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('create-contract', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, MatCardModule, MatFormFieldModule,MatSidenavModule,MatIconModule,BrowserAnimationsModule ],
      declarations: [CreateContractOwnerComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CreateContractOwnerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
