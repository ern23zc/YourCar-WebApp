import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoanService } from 'src/app/services/loan.service';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car.model';
import { Loan } from 'src/app/models/loan.model';

@Component({
  selector: 'app-rent-tenant',
  templateUrl: './rent-tenant.component.html',
  styleUrls: ['./rent-tenant.component.css']
})
export class RentTenantComponent implements OnInit {
  CarsData: Car[] = [];
  filteredLoans: Loan[] = [];
  searchBrand: string = '';
  codeUser!: string;
  loading: boolean = true;
  error: string = '';

  constructor(private userService: UserService, private loanService: LoanService) { }

  ngOnInit(): void {
    this.codeUser = this.userService.getUID();
    console.log('CodeUser:', this.codeUser); // Añade esta línea para verificar el valor de codeUser
    console.log('CodeExtraido de userservice:', this.userService.getUID()); // Añade esta línea para verificar el valor de codeUser
    if (this.codeUser) {
      this.getLoansByUser();
    } else {
      this.loading = false;
      this.error = 'CodeUser no está definido.';
    }
  }

  getLoansByUser() {
    this.loanService.getLoansByCodeUser(this.codeUser).subscribe(
      (loans: Loan[]) => {
        this.filteredLoans = loans;
        //this.getCarsByUser(loans);
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener los préstamos', error);
        this.error = 'Error al obtener los préstamos. Por favor, verifica la consola para más detalles.';
        this.loading = false;
      }
    );
  }

}
