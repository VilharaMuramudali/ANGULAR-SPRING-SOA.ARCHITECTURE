import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { PostCustomerComponent } from './post-customer/post-customer.component';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
export const routes: Routes = [
    {
        path:'',
        component:NavbarComponent
    },
    {
        path:'login',
        component:LoginComponent
    },

    {
        path:'customer',
        component:PostCustomerComponent

    },
    {
        path:'customers',
        component:GetAllCustomersComponent
    },
    {
        path:'register',
        component:UserRegistrationComponent
    }


];
