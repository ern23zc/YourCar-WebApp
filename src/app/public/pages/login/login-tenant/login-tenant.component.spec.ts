import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { LoginTenantComponent } from './login-tenant.component';
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "../../../../services/user.service";
import { RouterModule, Router } from "@angular/router";
import { of, throwError } from "rxjs";
import { MatInputModule } from "@angular/material/input";
import { Auth } from "@angular/fire/auth";

class MockUserService {
    login(credentials: { email: string; password: string }): Promise<any> {
        // Simulate successful login
        return Promise.resolve({ user: { uid: 'dummyUID' } });
    }
}

describe('Test Component Login-Tenant', () => {
    let component: LoginTenantComponent;
    let fixture: ComponentFixture<LoginTenantComponent>;
    let userService: UserService;
    let router: Router;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                FormsModule,
                HttpClientModule,
                MatSidenavModule,
                MatToolbarModule,
                MatIconModule,
                RouterModule,
                RouterTestingModule,
                MatCardModule,
                MatFormFieldModule,
                BrowserAnimationsModule,
                MatInputModule
            ],
            declarations: [LoginTenantComponent],
            providers: [
                { provide: UserService, useClass: MockUserService },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginTenantComponent);
        component = fixture.componentInstance;
        userService = TestBed.inject(UserService);
        router = TestBed.inject(Router);
    });

    it('component must exist', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize form controls', () => {
        expect(component.formLog_Tenant.get('email')).toBeDefined();
        expect(component.formLog_Tenant.get('password')).toBeDefined();
    });

    it('should call userService.login and navigate to main-page-tenant on successful login', fakeAsync(() => {
        const loginSpy = spyOn(userService, 'login').and.callThrough();
        const navigateSpy = spyOn(router, 'navigate');

        component.formLog_Tenant.setValue({ email: 'valid@example.com', password: 'validpassword' });
        component.onSubmit();
        tick();

        expect(loginSpy).toHaveBeenCalledWith({ email: 'valid@example.com', password: 'validpassword' });
        expect(navigateSpy).toHaveBeenCalledWith(['/main-page-tenant']);
    }));

    it('should handle invalid credentials during login', fakeAsync(() => {
        const loginSpy = spyOn(userService, 'login').and.returnValue(Promise.reject('Invalid credentials'));
        const navigateSpy = spyOn(router, 'navigate');

        component.formLog_Tenant.setValue({ email: 'invalid@example.com', password: 'invalidpassword' });
        component.onSubmit();
        tick();

        expect(loginSpy).toHaveBeenCalledWith({ email: 'invalid@example.com', password: 'invalidpassword' });
        expect(navigateSpy).not.toHaveBeenCalled(); // Ensure that navigation doesn't happen on invalid credentials
    }));


});
