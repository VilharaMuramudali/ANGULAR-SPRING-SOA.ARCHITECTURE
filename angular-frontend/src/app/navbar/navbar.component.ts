import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {} // Inject the Router service in the constructor

  onLoginClick() {
    // Navigate to the login page when the login button is clicked
    this.router.navigate(['/login']);
  }
  onsigninClick(){
    this.router.navigate(['/register']);
  }

}
