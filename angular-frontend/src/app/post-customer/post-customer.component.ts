import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceComponent } from '../service/service.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-post-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-customer.component.html',
  styleUrls:[ './post-customer.component.css']
})
export class PostCustomerComponent {

  postCustomerForm!: FormGroup;

  constructor(private customerService: ServiceComponent,
    private fb: FormBuilder){ }

    ngOnInit(){
      this.postCustomerForm = this.fb.group({
        name:[null,[Validators.required]],
        phone:[null,[Validators.required]],
        email:[null,[Validators.required,Validators.email]]
      })
    }

    postCustomer(){
      console.log(this.postCustomerForm.value);
      this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res)=>{
        console.log(res)
      })
    }

}
