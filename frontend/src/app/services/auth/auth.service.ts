import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from 'src/app/shared/models/token.model';
import { User } from 'src/app/shared/models/user.model';
import { DecodedToken } from 'src/app/shared/models/decodedToken.model';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() isLoggedIn: EventEmitter<boolean> = new EventEmitter();

  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private httpClient: HttpClient,
    private cookieService: CookieService) { }

  public signUp(user: User): Observable<User>{
    const url = `${this.apiUrl}/signup`;
    return this.httpClient.post<User>(url, user);
  }

  public signIn(user: User): Observable<Token>{
    const url = `${this.apiUrl}/signin`;
    return this.httpClient.post<Token>(url, user);
  }

  public setToken(token: string): void{
    this.cookieService.set('token', token);
    this.isLoggedIn.emit(true);
  }

  public getToken(): string{
    return this.cookieService.get('token');
  }

  public getUser(): User{
    try{
      const token = this.cookieService.get('token');
      const user = jwt_decode<DecodedToken>(token).user;
      return user;
    }catch(err){
      console.error(err);
    }
  }

  public isLogged(): boolean{
    return this.cookieService.check('token')
  }

  public logout(): void{
    this.cookieService.delete('token');
    this.isLoggedIn.emit(false);
  }
}
