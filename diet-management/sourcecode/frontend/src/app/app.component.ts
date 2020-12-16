import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public isLoggedIn = false;
  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this.isLoggedIn = true;
    }
      this.authService.isLoggedIn.subscribe(data => {
        console.log(data)
        this.isLoggedIn = data;
      })

  }

  logoutUser() {
    this.authService.doLogout();
    this.isLoggedIn = false;
    this.router.navigate(['/user']);
  }
}
