import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { UserService } from 'src/app/services/user.service';
import { CarService } from 'src/app/services/car.service';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-vehicle-registration-owner',
  templateUrl: './vehicle-registration-owner.component.html',
  styleUrls: ['./vehicle-registration-owner.component.css'],
})
export class VehicleRegistrationOwnerComponent {
  car: Car = {
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
  };
  cars: Car[] = [];
  uid!: string;
  constructor(
    private carService: CarService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Obtener el UID del usuario actual
    this.uid = this.userService.getUID();
    console.log(this.uid);
    this.car.ownerUid = this.uid;

    // Obtener autos por ownerUid
    this.carService.getCarsByOwnerUid(this.uid).subscribe(
      (cars: Car[]) => {
        this.cars = cars;
      },
      (error) => {
        console.error('Error al obtener autos del propietario', error);
      }
    );
  }


  submitCar() {
    /*
    //Obtener el UID del usuario actual
    this.uid=this.userService.getUID();
    console.log(this.uid);
    this.car.ownerUid = this.uid;
    // Muestra en la consola la data que estás intentando postear
    */
   
    console.log('Data a enviar:', this.car);
    this.carService.createCar(this.car).subscribe(
      (response) => {
        console.log('Auto registrado con éxito', response);
      },
      (error) => {
        console.error('Error al registrar el auto', error);
      }
    );
  }
}
