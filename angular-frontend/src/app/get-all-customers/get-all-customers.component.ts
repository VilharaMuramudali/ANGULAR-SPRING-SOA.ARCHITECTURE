import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceComponent } from '../service/service.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-all-customers',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './get-all-customers.component.html',
  styleUrl: './get-all-customers.component.css'
})
export class GetAllCustomersComponent {
  
  customers: any[] =[];

  constructor(private router: Router, private customerService:ServiceComponent) {} // Inject the Router service in the constructor
  
  
  onClick() {
    // Navigate to the login page when the login button is clicked
    this.router.navigate(['/customer']);
  }

  ngOnInit(){
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.customerService.GetAllCustomers().subscribe((res) => {
      

      this.customers=res;
    })
  }

}
