import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Token } from 'src/app/shared/models/token.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  public loading: boolean = false;
  public message: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';

    this.form = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  async onSubmit(){
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if(this.form.valid){
      this.loading = true;
      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      const user: User = {
        email: username,
        password: password
      };
      this.authService.signIn(user).subscribe((res: Token) => {
        this.authService.setToken(res.token);
        this.router.navigate([this.returnUrl]).then(() => {}, err => {
          this.message = 'Se ha registrado el usuario pero ha ocurrido un error al redirigir'
        }).finally(() => {
          this.loading = false;
        });
      }, err => {
        console.log(err);
        this.loginInvalid = true;
        if(err.error && err.error.message){
          this.message = err.error.message;
        }else{
          this.message = 'Ha ocurrido un error, por favor vuelve a intentarlo mas tarde';
        }
        this.loading = false;
      });
    }else{
      this.formSubmitAttempt = true;
    }
  }

}
