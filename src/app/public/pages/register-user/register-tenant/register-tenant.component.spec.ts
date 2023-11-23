import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RegisterTenantComponent} from "./register-tenant.component";
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
describe('Test Component Register-Tenant', () => {
    let component: RegisterTenantComponent;
    let fixture: ComponentFixture<RegisterTenantComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule, HttpClientModule,
                MatSidenavModule, MatToolbarModule, MatIconModule, RouterModule,
                RouterTestingModule, MatCardModule, MatFormFieldModule, BrowserAnimationsModule,
            ],
            declarations: [RegisterTenantComponent],
            providers: [
                // Provides the mock instead of the real service
                { provide: UserService, useClass: MockUserService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterTenantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have a defined form', () => {
        expect(component['formReg_Tenant']).toBeDefined(); // Access private property using ['property']
    });

    it('form should be invalid when empty', () => {
        expect(component['formReg_Tenant'].valid).toBeFalsy(); // Access private property using ['property']
    });

    it('should navigate to /validation after successful registration', () => {
        const navigateSpy = spyOn(component['router'], 'navigate'); // Access private property using ['property']
        const userServiceSpy = spyOn(component['userService'], 'register').and.returnValue(Promise.resolve('some response')); // Access private property using ['property']

        component.onSubmit();

        fixture.whenStable().then(() => {
            expect(userServiceSpy).toHaveBeenCalledOnceWith(component['formReg_Tenant'].value); // Access private property using ['property']
            expect(navigateSpy).toHaveBeenCalledWith(['/validation']);
        });
    });

    it('should handle registration error', () => {
        const consoleSpy = spyOn(console, 'log');
        const userServiceSpy = spyOn(component['userService'], 'register').and.returnValue(Promise.reject('some error')); // Access private property using ['property']

        component.onSubmit();

        fixture.whenStable().then(() => {
            expect(userServiceSpy).toHaveBeenCalledOnceWith(component['formReg_Tenant'].value); // Access private property using ['property']
            expect(consoleSpy).toHaveBeenCalledWith('some error');
        });
    });
});

*/