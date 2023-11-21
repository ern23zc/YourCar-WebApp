import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoanService } from 'src/app/services/loan.service';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car.model';
import { Loan } from 'src/app/models/loan.model';

@Component({
  selector: 'app-rent-owner',
  templateUrl: './rent-owner.component.html',
  styleUrls: ['./rent-owner.component.css']
})
export class RentOwnerComponent implements OnInit {
  filteredLoans: Loan[] = [];
  ownerUid!: string;
  loading: boolean = true;
  error: string = '';

  constructor(private userService: UserService, private loanService: LoanService) { }

  ngOnInit(): void {
    this.ownerUid = this.userService.getUID();
    console.log('Owner UID:', this.ownerUid);

    if (this.ownerUid) {
      this.getLoansByOwner();
    } else {
      this.loading = false;
      this.error = 'Owner UID no está definido.';
    }
  }

  getLoansByOwner() {
    this.loanService.getLoansByOwnerUid(this.ownerUid).subscribe(
      (loans: Loan[]) => {
        this.filteredLoans = loans;
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener los préstamos del propietario', error);
        this.error = 'Error al obtener los préstamos del propietario. Por favor, verifica la consola para más detalles.';
        this.loading = false;
      }
    );
  }
}