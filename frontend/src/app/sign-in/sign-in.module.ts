import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignInRoutingModule } from './sign-in-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { SignInComponent } from './sign-in.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [SignInComponent ,FormComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class SignInModule { }
