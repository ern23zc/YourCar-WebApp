import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { LoginOwnerComponent } from './login-owner.component';
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
import { CarService } from "../../../../services/car.service";
import { Car } from "../../../../models/car.model";

class MockUserService {
    login(credentials: { email: string; password: string }): Promise<any> {
        // Resolve the promise with a dummy user object on successful login
        return Promise.resolve({ user: { uid: 'dummyUID' } });
    }
}

describe('Test Component Login-Owner', () => {
    let component: LoginOwnerComponent;
    let fixture: ComponentFixture<LoginOwnerComponent>;
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
            declarations: [LoginOwnerComponent],
            providers: [
                { provide: UserService, useClass: MockUserService },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginOwnerComponent);
        component = fixture.componentInstance;
        userService = TestBed.inject(UserService);
        router = TestBed.inject(Router);
    });

    it('component must exist', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize form controls', () => {
        expect(component.formLog_Owner.get('email')).toBeDefined();
        expect(component.formLog_Owner.get('password')).toBeDefined();
    });

    it('should call userService.login and navigate to main-page-owner on successful login', fakeAsync(() => {
        const loginSpy = spyOn(userService, 'login').and.callThrough();
        const navigateSpy = spyOn(router, 'navigate');

        component.formLog_Owner.setValue({ email: 'valid@example.com', password: 'validpassword' });
        component.onSubmit();
        tick();

        expect(loginSpy).toHaveBeenCalledWith({ email: 'valid@example.com', password: 'validpassword' });
        expect(navigateSpy).toHaveBeenCalledWith(['/main-page-owner']);
    }));

    it('should handle invalid credentials during login', fakeAsync(() => {
        const loginSpy = spyOn(userService, 'login').and.returnValue(Promise.reject('Invalid credentials'));
        const navigateSpy = spyOn(router, 'navigate');

        component.formLog_Owner.setValue({ email: 'invalid@example.com', password: 'invalidpassword' });
        component.onSubmit();
        tick();

        expect(loginSpy).toHaveBeenCalledWith({ email: 'invalid@example.com', password: 'invalidpassword' });
        expect(navigateSpy).not.toHaveBeenCalled(); // Ensure that navigation doesn't happen on invalid credentials
    }));

    it('should handle errors during login', fakeAsync(() => {
        const loginSpy = spyOn(userService, 'login').and.returnValue(Promise.reject('Some error'));
        const consoleErrorSpy = spyOn(console, 'error');

        component.formLog_Owner.setValue({ email: 'valid@example.com', password: 'validpassword' });
        component.onSubmit();
        tick();

        expect(loginSpy).toHaveBeenCalledWith({ email: 'valid@example.com', password: 'validpassword' });
        expect(consoleErrorSpy).toHaveBeenCalledWith('Error during login:', 'Some error'); // Adjust the expectation here
    }));
});
