import { CartModule } from './../cart/cart.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from "@angular/material/sidenav";
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { DishesComponent } from './dishes.component';
import { DishesCategoryComponent } from './components/dishes-category/dishes-category.component';
import { DishesDetailsComponent } from './components/dishes-details/dishes-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DishesComponent, DishesCategoryComponent, DishesDetailsComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatSidenavModule,
    RouterModule,
    CarouselModule,
    ButtonModule,
    MatButtonModule,
    ToastModule,
    DragDropModule,
    CartModule
  ]
})
export class DishesModule { }
