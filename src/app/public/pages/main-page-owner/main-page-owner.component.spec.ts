import { TestBed } from '@angular/core/testing';
import {MainPageOwnerComponent} from "./main-page-owner.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import {MatFormFieldControl, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {Auth} from "@angular/fire/auth";
import {RouterModule} from "@angular/router";
import {of} from "rxjs";
import {MatInputModule} from "@angular/material/input";



describe('Test Component Main-Page-Owner', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule,
        MatSidenavModule,MatToolbarModule,MatIconModule,RouterModule,
        RouterTestingModule,MatCardModule, MatFormFieldModule,BrowserAnimationsModule,
      ],
      declarations: [MainPageOwnerComponent],
      providers: [
      ],
    }).compileComponents();
  })

  it('component must exist', () => {
    const fixture = TestBed.createComponent(MainPageOwnerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



})
