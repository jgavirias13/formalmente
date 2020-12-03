import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService,
    private router:Router) { }

  ngOnInit(): void {
    if(this.authService.isLogged()){
      this.router.navigate(['/home']);
    }
  }

}
