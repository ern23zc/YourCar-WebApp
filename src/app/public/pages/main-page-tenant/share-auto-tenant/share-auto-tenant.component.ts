import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car.model';
import { response } from 'express';
import { RentconfirmationComponent } from '../rent-confirmation/rentconfirmation/rentconfirmation.component';
import { LoanService } from 'src/app/services/loan.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Loan } from 'src/app/models/loan.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-share-auto-tenant',
  templateUrl: './share-auto-tenant.component.html',
  styleUrls: ['./share-auto-tenant.component.css'],
})
export class ShareAutoTenantComponent implements OnInit {
  loan: Loan = {
    id: null,
    codeUser: '',
    loanDate: '',
    devolutionDate: '',
    carLoan: true,
    car: {} as Car,
    ownerUid: '',
  };
  CarsData: Car[] = [];
  filteredCars: Car[] = [];
  searchBrand: string = '';
  userId!: string;

  constructor(
    private carService: CarService,
    private loanService: LoanService,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCarsAvailable();
  }

  getCarsAvailable() {
    this.carService.getCarsAvailable().subscribe(
      (response: Car[]) => {
        this.CarsData = response;
        this.filteredCars = response;
      },
      (error) => {
        console.error('Error al registrar el auto', error);
      }
    );
  }

  applyFilter() {
    this.filteredCars = this.CarsData.filter((car) =>
      car.brand.toLowerCase().includes(this.searchBrand.toLowerCase())
    );
  }

  rentCar(car: Car): void {

    this.loan.car = car;
    this.loan.loanDate = new Date().toLocaleDateString('es-ES'),
    this.loan.devolutionDate = car.timeloan,
    this.loan.carLoan = true,
    this.loan.ownerUid = car.ownerUid,
    this.userId = this.userService.getUID();
    console.log(this.userId);
    this.loan.codeUser = this.userId;

    // Muestra en la consola la data que estás intentando postear
    console.log('Data to be sent in the POST request:', this.loan); // Agrega esta línea

    this.loanService.createLoan(car.id, this.loan).subscribe(
      (createdLoan: Loan) => {
        // Muestra una notificación (toast) de éxito
        this.snackBar.open('Auto rentado', 'Cerrar', {
          duration: 3000, // Duración en milisegundos (3 segundos)
        });

        // Recarga la página después de 3 segundos
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
      (error) => {
        // Maneja el error, muestra una notificación (toast) de error si es necesario
        console.error('Error creating loan', error);
        this.snackBar.open('Error al rentar el auto', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }
  reloadPage() {
    console.log('reloadPage called');
    window.location.reload();
  }

}
