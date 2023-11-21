import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-share-auto-tenant',
  templateUrl: './share-auto-tenant.component.html',
  styleUrls: ['./share-auto-tenant.component.css'],
})
export class ShareAutoTenantComponent implements OnInit{

  CarsData: Car[] = [];
  filteredCars: Car[] = [];
  searchBrand: string = '';

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.carService.getCars().subscribe(
      (response: Car[]) => {
        this.CarsData = response;
        this.filteredCars = response;
      },
      (error) => {
        console.error('Error fetching cars', error);
      }
    );
  }

  applyFilter() {
    this.filteredCars = this.CarsData.filter(car =>
      car.brand.toLowerCase().includes(this.searchBrand.toLowerCase())
    );
  }
}
