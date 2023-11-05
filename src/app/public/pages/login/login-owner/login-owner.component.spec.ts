import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginOwnerComponent } from './login-owner.component';
import { UserService } from '../../../../services/user.service';
/*
describe('LoginOwnerComponent', () => {
    let component: LoginOwnerComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginOwnerComponent],
            imports: [ReactiveFormsModule],
            providers: [
                { provide: UserService, useClass: MockUserService },
                { provide: Router, useClass: MockRouter },
            ],
        });

        const fixture = TestBed.createComponent(LoginOwnerComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});

class MockUserService {}
class MockRouter {}*/
