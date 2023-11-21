import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ShareAutoTenantComponent } from '../public/pages/main-page-tenant/share-auto-tenant/share-auto-tenant.component';
import { Car } from '../models/car.model';
import { Loan } from '../models/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  //base_URL = 'http://localhost:8080/api/car-unity/v1/loans';
  base_URL = 'https://yourcar.zeabur.app/api/car-unity/v1/loans'
  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('An error occurred: ', error.error.message)
    }
    else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      )
    }
    return throwError('Something bad happened; please try again later.')
  }

  //Get loans for tenant
  getLoansByCodeUser(codeUser: string): Observable<any>{
    return this.http.get<any>(this.base_URL + '/filterByCodeUser' + '?codeUser=' + codeUser)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //Get loans for owner
  getLoansByOwnerUid(ownerUid: string): Observable<any>{
    return this.http.get<any>(this.base_URL + '/filterByOwnerUid' + '?codeOwner=' + ownerUid)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //Post loan
  createLoan(carId: number, loan: Loan): Observable<any> {
    const url = `${this.base_URL}/${carId}/loans`;  // Construye la URL con el parámetro carId
    return this.http.post<any>(url, loan, this.httpOptions)  // Pasa newLoan como el cuerpo de la solicitud
      .pipe(
        catchError((error: any) => {
          console.error('Error creating loan:', error);
          return throwError(error); // Reenviar el error para que pueda ser manejado en el componente
        })
      );
  }
}
