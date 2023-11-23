import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ShareAutoTenantComponent} from "./share-auto-tenant.component";
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
import {of, throwError} from "rxjs";
import {MatInputModule} from "@angular/material/input";
import {CarService} from "../../../../services/car.service";
import {Car} from "../../../../models/car.model";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {Loan} from "../../../../models/loan.model";
import {LoanService} from "../../../../services/loan.service";

class MockUserService {
    getUID(): string {
        return 'mockedUID';
    }
}

describe('Test Component share-auto-tenant', () => {
    let component: ShareAutoTenantComponent;
    let fixture: ComponentFixture<ShareAutoTenantComponent>;
    let carServiceSpy: jasmine.SpyObj<CarService>;
    let loanServiceSpy: jasmine.SpyObj<LoanService>;
    let snackBarSpy: jasmine.SpyObj<MatSnackBar>;
    let userServiceSpy: jasmine.SpyObj<UserService>;

    beforeEach(async () => {
        carServiceSpy = jasmine.createSpyObj('CarService', ['getCarsAvailable']);
        loanServiceSpy = jasmine.createSpyObj('LoanService', { createLoan: jasmine.createSpy() });
        snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
        userServiceSpy = jasmine.createSpyObj('UserService', ['getUID']);

        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule, HttpClientModule,
                MatSidenavModule, MatToolbarModule, MatIconModule, RouterModule,
                RouterTestingModule, MatCardModule, MatFormFieldModule, BrowserAnimationsModule,
                MatSnackBarModule, MatInputModule
            ],
            declarations: [ShareAutoTenantComponent],
            providers: [
                { provide: CarService, useValue: carServiceSpy },
                { provide: LoanService, useValue: loanServiceSpy },
                { provide: MatSnackBar, useValue: snackBarSpy },
                { provide: UserService, useValue: userServiceSpy },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ShareAutoTenantComponent);
        component = fixture.componentInstance;
        carServiceSpy.getCarsAvailable.and.returnValue(of([]));
        fixture.detectChanges();
        spyOn(component as any, 'reloadPage').and.callThrough(); // Permite que la llamada real ocurra
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should call getCarsAvailable on ngOnInit', () => {
        expect(carServiceSpy.getCarsAvailable).toHaveBeenCalled();
    });

    it('should filter cars based on brand', () => {
        const car1 = { brand: 'Toyota' } as Car;
        const car2 = { brand: 'Honda' } as Car;
        component.CarsData = [car1, car2];

        component.searchBrand = 'Toy';
        component.applyFilter();

        expect(component.filteredCars).toEqual([car1]);
    });




    it('should handle rent car error', () => {
        const car = { id: '1', brand: 'Toyota' } as Car;

        userServiceSpy.getUID.and.returnValue('mockedUID');
        loanServiceSpy.createLoan.and.returnValue(throwError('some error'));

        component.rentCar(car);

        expect(loanServiceSpy.createLoan).toHaveBeenCalledWith(car.id, jasmine.any(Object));
        expect(snackBarSpy.open).toHaveBeenCalledWith('Error al rentar el auto', 'Cerrar', { duration: 3000 });
    });
});
