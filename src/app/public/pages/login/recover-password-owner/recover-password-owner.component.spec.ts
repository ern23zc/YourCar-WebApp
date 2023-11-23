import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule, FormControl} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { RecoverPasswordOwnerComponent } from './recover-password-owner.component';
import { UserService } from '../../../../services/user.service';
import { Auth } from '@angular/fire/auth';
import {AngularFireModule} from "@angular/fire/compat";

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



describe('Test Component Recover-Password-Owner', () => {
    let component: RecoverPasswordOwnerComponent;
    let fixture: ComponentFixture<RecoverPasswordOwnerComponent>;
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
                declarations: [RecoverPasswordOwnerComponent],
                providers: [
                    { provide: Auth, useClass: MockAuth },
                    { provide: Router, useClass: MockRouter },
                    UserService,
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(RecoverPasswordOwnerComponent);
        component = fixture.componentInstance;
        userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
        router = TestBed.inject(Router);
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have a defined formRec_Owner control', () => {
        expect(component.formRec_Owner).toBeDefined();
    });


    it('should initialize the form correctly', () => {
        expect(component.formRec_Owner).toBeDefined();
        expect(component.formRec_Owner instanceof FormControl).toBeTruthy();
        // Add more expectations based on your form initialization if needed.
    });

});
