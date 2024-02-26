import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceComponent } from '../service/service.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-registration.component.html',
  styleUrls:[ './user-registration.component.css']
})
export class UserRegistrationComponent {

  postRegisterForm!: FormGroup;
  registrationResponse: string = ''; // Variable to hold registration response



  constructor(private userService: ServiceComponent,
    private fb: FormBuilder){ }

    ngOnInit(){
      this.postRegisterForm = this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:[null,[Validators.required]]
      });
    }

    postRegisterData(){
    console.log(this.postRegisterForm.value);
    this.userService.postRegisterData(this.postRegisterForm.value).subscribe(
      (res) => {
        // Handle successful registration
        console.log(res);
        this.registrationResponse = 'User registered successfully';
      },
      (error) => {
        // Handle registration error
        console.error(error);
        if (error.status === 409) {
          this.registrationResponse = 'Email already exists';
        } else {
          this.registrationResponse = 'An error occurred during registration';
        }
      }
    );
  }

}
