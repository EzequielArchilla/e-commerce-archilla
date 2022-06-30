import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  logged: boolean;
  email: string;

  constructor(private router: Router, private userAuthService: AuthService) {
    this.logged = false;
    this.email = '';
  }

  ngOnInit(): void {
    this.userAuthService.loggedChange.subscribe((value) => {
      this.logged = value;
      this.email = this.userAuthService.userLogged.email;
      console.log(this.email);
      console.log(this.userAuthService.userLogged.email);
    });
  }

  navigateToLogin() {
    this.router.navigate(['ingreso']);
  }

  signOut() {
    this.userAuthService.signOut();
    this.userAuthService.setLogged(false);
    //this.localStorageService.removeData('userEmail');
  }
}
