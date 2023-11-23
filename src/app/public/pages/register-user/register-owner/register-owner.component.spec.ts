import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RegisterOwnerComponent} from "./register-owner.component";
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

class MockUserService {
    getUID(): string {
        return 'mockedUID';
    }
}

/*
describe('Test Component Register-owner', () => {
    let component: RegisterOwnerComponent;
    let fixture: ComponentFixture<RegisterOwnerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule, HttpClientModule,
                MatSidenavModule, MatToolbarModule, MatIconModule, RouterModule,
                RouterTestingModule, MatCardModule, MatFormFieldModule, BrowserAnimationsModule,
            ],
            declarations: [RegisterOwnerComponent],
            providers: [
                // Provides the mock instead of the real service
                { provide: UserService, useClass: MockUserService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterOwnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have a defined form', () => {
        expect(component.formReg_Owner).toBeDefined();
    });

    it('form should be invalid when empty', () => {
        expect(component.formReg_Owner.valid).toBeFalsy();
    });

    it('should navigate to /validation after successful registration', () => {
        const navigateSpy = spyOn(component.router, 'navigate');
        const userServiceSpy = spyOn(component.userService, 'register').and.returnValue(Promise.resolve('some response'));

        component.onSubmit();

        fixture.whenStable().then(() => {
            expect(userServiceSpy).toHaveBeenCalledOnceWith(component.formReg_Owner.value);
            expect(navigateSpy).toHaveBeenCalledWith(['/validation']);
        });
    });

    it('should handle registration error', () => {
        const consoleSpy = spyOn(console, 'log');
        const userServiceSpy = spyOn(component.userService, 'register').and.returnValue(Promise.reject('some error'));

        component.onSubmit();

        fixture.whenStable().then(() => {
            expect(userServiceSpy).toHaveBeenCalledOnceWith(component.formReg_Owner.value);
            expect(consoleSpy).toHaveBeenCalledWith('some error');
        });
    });
});
*/