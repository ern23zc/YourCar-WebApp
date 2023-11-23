import { TestBed } from '@angular/core/testing';
import {ValidationComponent} from "./validation.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import {MatFormFieldControl, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {UserService} from "../../../../services/user.service";
import {Auth} from "@angular/fire/auth";
import {RouterModule} from "@angular/router";
import {of} from "rxjs";
import {MatInputModule} from "@angular/material/input";
import {CarService} from "../../../../services/car.service";
import {Car} from "../../../../models/car.model";


describe('Test Component Validation', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule,
        MatSidenavModule,MatToolbarModule,MatIconModule,RouterModule,
        RouterTestingModule,MatCardModule, MatFormFieldModule,BrowserAnimationsModule,
      ],
      declarations: [ValidationComponent],
      providers: [
      ],
    }).compileComponents();
  })

  it('component must exist', () => {
    const fixture = TestBed.createComponent(ValidationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



})
