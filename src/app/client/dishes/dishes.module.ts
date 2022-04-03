import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesComponent } from './dishes.component';
import { DishesCategoryComponent } from './components/dishes-category/dishes-category.component';
import { DishesDetailsComponent } from './components/dishes-details/dishes-details.component';



@NgModule({
  declarations: [DishesComponent, DishesCategoryComponent, DishesDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class DishesModule { }
