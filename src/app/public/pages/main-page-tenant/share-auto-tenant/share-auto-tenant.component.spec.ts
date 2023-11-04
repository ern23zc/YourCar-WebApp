import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareAutoTenantComponent } from './share-auto-tenant.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSelectModule} from "@angular/material/select";
import {RentTenantComponent} from "../rent-tenant/rent-tenant.component";
import {CarService} from "../../../../services/car.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";

describe('share-auto-tenant', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
        MatSidenavModule,MatIconModule,BrowserAnimationsModule,MatSnackBarModule,MatSelectModule, MatPaginatorModule],
      declarations: [ShareAutoTenantComponent],
      providers:[CarService,HttpClient,HttpHandler]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShareAutoTenantComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});