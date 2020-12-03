import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from '../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() inputSideNav: MatSidenav;

  public loggedIn = false;
  public user: User;

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private authService: AuthService,
    private router:Router,
    private snackBar: MatSnackBar) {
    this.matIconRegistry.addSvgIcon(
      'logo_formalmente',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/roted-logo.svg')
    );
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLogged();
    if(this.logout){
      this.user = this.authService.getUser();
    }
    this.authService.isLoggedIn.subscribe( (logged: boolean) => {
      this.loggedIn = logged;
      if(this.loggedIn){
        this.user = this.authService.getUser();
      }else{
        this.user = null;
      }
    });
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/home']);
    this.snackBar.open('Sesión cerrada con exito', '', {
      duration: 2000
    });
  }

  login(): void{
    this.router.navigate(['/login']);
  }

}
