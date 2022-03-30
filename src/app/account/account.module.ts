import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountComponent } from './account.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, AccountComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AccountModule { }
