import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ShareAutoTenantComponent } from '../public/pages/main-page-tenant/share-auto-tenant/share-auto-tenant.component';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  
  //base_URL = 'http://localhost:3000/cars';
  //base_URL = 'http://localhost:8080/api/car-unity/v1/cars';
  base_URL = 'https://yourcar.zeabur.app/api/car-unity/v1/cars'

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

  //Get all cars
  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>(this.base_URL)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //Get cars available
  getCarsAvailable(): Observable<Car[]>{
    return this.http.get<Car[]>(this.base_URL + '/available')
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //Get cars by ownerUid
  getCarsByOwnerUid(ownerUid: string): Observable<Car[]>{
    return this.http.get<Car[]>(this.base_URL + '/filterByOwnerUid' + '?ownerUid=' + ownerUid)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //Post car
  createCar(car: Car): Observable<Car>{
    return this.http.post<Car>(this.base_URL, JSON.stringify(car), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
