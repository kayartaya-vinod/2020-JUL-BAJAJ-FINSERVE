import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isUserLoggedIn) {
      // redirect the user to '/view-all'
      this.router.navigate(['/view-all']);
    }
  }

  login() {
    this.authService
      .login(this.email, this.password)
      .subscribe(
        () => this.router.navigate(['/view-all']),
        err => window.alert(err.message)
      );
  }
}
