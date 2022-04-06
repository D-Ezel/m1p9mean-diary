import { DishesModule } from './client/dishes/dishes.module';
import { DishesComponent } from './client/dishes/dishes.component';
import { RestoEkalyComponent } from './client/resto-ekaly/resto-ekaly.component';
import { AccountComponent } from './client/account/account.component';
import { SignupComponent } from './client/account/components/signup/signup.component';
import { LoginComponent } from './client/account/components/login/login.component';
import { HomeComponent } from './client/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './backend/layouts/admin-layout/admin-layout.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
},{
  path:'admin',
  component: AdminLayoutComponent,
  children: [
    {
      path: "",
      loadChildren: () => import ("./backend/layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
    }
  ]
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
},{
  path:'resto',
  component: RestoEkalyComponent,
  children: [
    {
      path: "",
      loadChildren: () => import ("./client/resto-ekaly/resto-ekaly.module").then(m => m.RestoEkalyModule)
    }
  ]
},{
  path:'plats',
  component: DishesComponent,
  children: [
    {
      path: "",
      loadChildren: () => import ("./client/dishes/dishes.module").then(m => m.DishesModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
