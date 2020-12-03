import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  public regInvalid: boolean;
  public message: string;
  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async onSubmit(){
    this.regInvalid = false;
    if(this.form.valid){
      const username = this.form.get('username').value;
      const name = this.form.get('name').value;
      const password = this.form.get('password').value;
      const user: User = {
        email: username,
        name: name,
        password: password
      }
      this.loading = true;
      this.authService.signUp(user).subscribe((res) => {
        this.router.navigate(['/login']).then(() => {}, err => {
          this.message = 'Se ha registrado el usuario pero ha ocurrido un error al redirigir'
        }).finally(() => {
          this.loading = false;
        });
      }, err => {
        console.log('Hay error');
        console.log(err);
        this.regInvalid = true;
        if(err.error && err.error.message){
          this.message = err.error.message;
        }else{
          this.message = 'Ha ocurrido un error, por favor vuelve a intentarlo mas tarde';
        }
        this.loading = false;
      });
    }
  }

}
