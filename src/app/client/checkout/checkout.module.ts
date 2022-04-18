import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';

import { CheckoutComponent } from './checkout.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { OperatorsComponent } from './components/content/operators/operators.component';
import { BankCardComponent } from './components/content/bank-card/bank-card.component';
import { CheckoutRoutes } from './checkout.routing';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [CheckoutComponent, SidebarLeftComponent, SidebarRightComponent, OperatorsComponent, BankCardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CartModule,
    RouterModule.forChild(CheckoutRoutes)
  ],
  exports:[

  ]
})
export class CheckoutModule { }
