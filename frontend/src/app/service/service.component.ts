import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable, catchError, of, pipe, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { GetAllCustomersComponent } from '../get-all-customers/get-all-customers.component';

const BASIC_URL ="http://localhost:8080/api";

@Injectable({
  providedIn :'root'
})
@Component({
  selector: 'app-service',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  constructor(private http:HttpClient  ){}

  postCustomer(customer: any): Observable<any> {
    return this.http.post(`${BASIC_URL}/customer`, customer);  // Removed extra "/api/customer"
  }

  GetAllCustomers():Observable<any>{
    return this.http.get<any[]>(`${BASIC_URL}/customers`);
  }

  postRegisterData(user: any): Observable<any> {
    return this.http.post<any>(`${BASIC_URL}/user`, user)  // Adjusted URL
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 201) {
          // Handle 201 (Created) as a success
          return of(error);
        } else {
          // Pass other errors through
          return throwError(error);
        }
      })
    );
  }
}

