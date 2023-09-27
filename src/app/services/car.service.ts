import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ShareAutoTenantComponent } from '../public/pages/main-page-tenant/share-auto-tenant/share-auto-tenant.component';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  
  base_URL = 'http://localhost:3000/cars';
  
  constructor( private http: HttpClient) {}

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

  getCars(): Observable<Car>{
    return this.http.get<Car>(this.base_URL)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
/*
  getCar(id: number): Observable<any>{
    return this.http.get<any>(this.base_URL + '/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  createCar(car: any): Observable<any>{
    return this.http.post<any>(this.base_URL, JSON.stringify(car), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  updateCar(id: number, car: any): Observable<any>{
    return this.http.put<any>(this.base_URL + '/' + id, JSON.stringify(car), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  deleteCar(id: number): Observable<any>{
    return this.http.delete<any>(this.base_URL + '/' + id, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  */
}
