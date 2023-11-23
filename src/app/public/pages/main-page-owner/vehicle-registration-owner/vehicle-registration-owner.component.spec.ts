import {ComponentFixture, TestBed} from '@angular/core/testing';
import { VehicleRegistrationOwnerComponent } from './vehicle-registration-owner.component';
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

class MockUserService {
  getUID(): string {
    return 'mockedUID';
  }
}

const car1: Car = {
  id: 1,
  brand: 'Toyota',
  model: 'Camry',
  year: '2023',
  photo: '',
  maxspeed: '',
  fuelconsumption: '',
  dimension: '',
  weight: '',
  engine: '',
  timeloan: '',
  price: '',
  ubication: '',
  ownerUid: '',
  available: true,
};

const car2: Car = {
  id: 2,
  brand: 'Honda',
  model: 'Accord',
  year: '2023',
  photo: '',
  maxspeed: '',
  fuelconsumption: '',
  dimension: '',
  weight: '',
  engine: '',
  timeloan: '',
  price: '',
  ubication: '',
  ownerUid: '',
  available: true,
};

const car3: Car = {
  id: 3,
  brand: 'Nissan',
  model: 'Altima',
  year: '2023',
  photo: '',
  maxspeed: '',
  fuelconsumption: '',
  dimension: '',
  weight: '',
  engine: '',
  timeloan: '',
  price: '',
  ubication: '',
  ownerUid: '',
  available: true,
};

const car4: Car = {
  id: 4,
  brand: 'Ford',
  model: 'Fusion',
  year: '2023',
  photo: '',
  maxspeed: '',
  fuelconsumption: '',
  dimension: '',
  weight: '',
  engine: '',
  timeloan: '',
  price: '',
  ubication: '',
  ownerUid: '',
  available: true,
};

describe('Test Component vehicle-registration-owner', () => {
  let component: VehicleRegistrationOwnerComponent;
  let fixture: ComponentFixture<VehicleRegistrationOwnerComponent>;

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
      declarations: [VehicleRegistrationOwnerComponent],
      providers: [
        { provide: UserService, useClass: MockUserService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleRegistrationOwnerComponent);
    component = fixture.componentInstance;
  });

  it('component must exist', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty car', () => {
    expect(component.car).toEqual({
      id: null,
      brand: '',
      model: '',
      year: '',
      photo: '',
      maxspeed: '',
      fuelconsumption: '',
      dimension: '',
      weight: '',
      engine: '',
      timeloan: '',
      price: '',
      ubication: '',
      ownerUid: '',
      available: true,
    });
  });

  it('should fetch cars by owner UID on initialization', () => {
    // Mock the carService.getCarsByOwnerUid method
    spyOn(component.carService, 'getCarsByOwnerUid').and.returnValue(of([car1, car2]));

    // Call ngOnInit
    component.ngOnInit();

    // Expect the component's cars array to be populated with the mock data
    expect(component.cars).toEqual([car1, car2]);
  });

  it('should submit car and call createCar service', () => {
    // Simular la inicialización del componente
    component.ngOnInit();

    // Simular un envío de auto
    spyOn(component.carService, 'createCar').and.returnValue(of(car1)); // o cualquier otro objeto Car

    // Llamar a submitCar
    component.submitCar();

    // Verificar la llamada al servicio createCar
    expect(component.carService.createCar).toHaveBeenCalledWith(component.car);
  });



  it('should handle error during car registration', () => {
    // Mock the carService.createCar method to return an error
    spyOn(component.carService, 'createCar').and.returnValue(throwError('Error'));

    // Spy on console.error
    spyOn(console, 'error');

    // Call submitCar
    component.submitCar();

    // Expect an error message to be logged
    expect(console.error).toHaveBeenCalledWith('Error al registrar el auto', 'Error');
  });

});