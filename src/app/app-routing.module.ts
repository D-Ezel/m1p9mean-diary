import { AccountComponent } from './account/account.component';
import { SignupComponent } from './account/components/signup/signup.component';
import { LoginComponent } from './account/components/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
},{
  path:'account',
  component: AccountComponent,
  children:[{
    path:'login',
    component: LoginComponent
  },{
    path:'signup',
    component: SignupComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
