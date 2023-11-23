import { TestBed } from '@angular/core/testing';
import {RestoreOwnerComponent} from "./restore-owner.component";
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


describe('Test Component restore-owner', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        RouterTestingModule,
        MatCardModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatInputModule,
      ],
      declarations: [RestoreOwnerComponent],

    }).compileComponents();
  })

  it('component must exist', () => {
    const fixture = TestBed.createComponent(RestoreOwnerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('email input should be empty by default', () => {
    const fixture = TestBed.createComponent(RestoreOwnerComponent);
    const app = fixture.componentInstance;
    expect(app.email).toEqual('');
  });

  it('code input should be empty by default', () => {
    const fixture = TestBed.createComponent(RestoreOwnerComponent);
    const app = fixture.componentInstance;
    expect(app.code).toEqual('');
  });

  it('password input should be empty by default', () => {
    const fixture = TestBed.createComponent(RestoreOwnerComponent);
    const app = fixture.componentInstance;
    expect(app.password).toEqual('');
  });

  it('newpassword input should be empty by default', () => {
    const fixture = TestBed.createComponent(RestoreOwnerComponent);
    const app = fixture.componentInstance;
    expect(app.newpassword).toEqual('');
  });

  it('clickAddTodo method should call alert with correct message', () => {
    const fixture = TestBed.createComponent(RestoreOwnerComponent);
    const app = fixture.componentInstance;
    spyOn(window, 'alert');
    app.clickAddTodo();
    expect(window.alert).toHaveBeenCalledWith('Se envio un código de acceso a su correo!');
  });
});


