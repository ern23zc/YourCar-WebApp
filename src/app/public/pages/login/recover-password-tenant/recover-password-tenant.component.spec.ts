import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RecoverPasswordTenantComponent} from "./recover-password-tenant.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import {MatFormFieldControl, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {UserService} from "../../../../services/user.service";
import {Auth} from "@angular/fire/auth";
import {Router, RouterModule} from "@angular/router";
import {of} from "rxjs";
import {MatInputModule} from "@angular/material/input";
import {CarService} from "../../../../services/car.service";
import {Car} from "../../../../models/car.model";

class MockAuth {
    user = of({ uid: 'mockedUID' });
}

class MockRouter {
    navigateByUrl(url: string) {
        return url;
    }

    navigate(path: string[]) {
        // Implement this method if your component calls router.navigate
    }
}

describe('Test Component Recover-Password-Tenant', () => {
    let component: RecoverPasswordTenantComponent;
    let fixture: ComponentFixture<RecoverPasswordTenantComponent>;
    let userService: jasmine.SpyObj<UserService>;
    let router: Router;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
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
                declarations: [RecoverPasswordTenantComponent],
                providers: [
                    { provide: Auth, useClass: MockAuth },
                    { provide: Router, useClass: MockRouter },
                    UserService,
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(RecoverPasswordTenantComponent);
        component = fixture.componentInstance;
        userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
        router = TestBed.inject(Router);
    });

    it('component must exist', () => {
        expect(component).toBeTruthy();
    });

    it('should have a defined formRec_Tenant control', () => {
        expect(component.formRec_Tenant).toBeDefined();
    });

    it('should initialize the form correctly', () => {
        expect(component.formRec_Tenant).toBeDefined();
        expect(component.formRec_Tenant instanceof FormControl).toBeTruthy();
        // Add more expectations based on your form initialization if needed.
    });

    // Add more tests as needed for your specific component functionality.
});
