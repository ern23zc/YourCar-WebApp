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
export class ShareAutoTenantComponent {

  formValues : any = {};
  CarsData!: Car;

  dataSource = new MatTableDataSource();  
  displayedColumns: string[] = ['id', 'brand', 'photo', 'price'];


  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  isEditMode = false;

  @ViewChild(MatSort)
  Sort!: MatSort;

  car = [];

  constructor(private carService: CarService ) {
    this.CarsData = {} as Car;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.Sort;
    this.getAllCars();
  }

  getAllCars() {
    this.carService.getCars().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
