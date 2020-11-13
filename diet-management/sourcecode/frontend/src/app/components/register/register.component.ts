import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public matchError: boolean = false;
  public isLogin: boolean = true;
  public errorMessage = '';
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  registerUser(f: NgForm) {
    const user = {...f.value};
    if(f.valid) {
      this.authService.register(user).subscribe(data => {
        this.router.navigate(['/home']);
        this.authService.changeLoginStatus(true);
      }, (err) => {
        this.errorMessage = err.error.message;
        this.authService.changeLoginStatus(false);
      });
    }
  }

  loginUser(f:NgForm) {
    this.authService.loginUser(f.value).subscribe(data => {
      this.router.navigate(['/home']);
      this.authService.changeLoginStatus(true);
    }, (err) => {
      this.errorMessage = err.error.message;
      this.authService.changeLoginStatus(false);
    })
  }

  toggleLink() {
    this.isLogin =!this.isLogin;
    this.errorMessage ='';
    this.matchError = false;
  }

  checkPasswordMatch(password1, password2) {
    this.matchError = password1 !== password2;
  }

}
