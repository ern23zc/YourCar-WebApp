import { TestBed } from '@angular/core/testing';
import {RestoreTenantComponent} from "./restore-tenant.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import {MatFormFieldControl, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule} from "@angular/common/http";
import {UserService} from "../../../../services/user.service";
import {Auth} from "@angular/fire/auth";
import {RouterModule} from "@angular/router";
import {of} from "rxjs";
import {MatInputModule} from "@angular/material/input";
import {CarService} from "../../../../services/car.service";
import {RestoreOwnerComponent} from "../restore-owner/restore-owner.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



describe('Test Component restore-tenant', () => {
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
      declarations: [RestoreTenantComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RestoreTenantComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



  it('code input should be empty by default', () => {
    const fixture = TestBed.createComponent(RestoreOwnerComponent);
    const app = fixture.componentInstance;
    expect(app.code).toEqual('');
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
