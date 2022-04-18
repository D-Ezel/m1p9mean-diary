import { Dishes } from './../../models/Dishes';
import { TypeResto } from './../../../resto-ekaly/models/TypeResto';
import { DishesService } from './../../services/dishes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes-category',
  templateUrl: './dishes-category.component.html',
  styleUrls: ['./dishes-category.component.scss']
})
export class DishesCategoryComponent implements OnInit {
  listDishCateg: TypeResto[];

  constructor(private dishesService: DishesService) { }

  searchByDishCateg(dishCateg?:TypeResto) {
    if(!dishCateg) {
      dishCateg._id = "best";
    }
    dishCateg.clicked = true;
    this.listDishCateg.forEach((valDishesCateg: TypeResto) => {
      if(valDishesCateg._id != dishCateg._id) {
        valDishesCateg.clicked = false;
      }
    })
    let dish: Dishes[];
    this.dishesService.currentDishes.subscribe((rsDish: any) => {
      console.log(rsDish);
      dish = rsDish;
    })
    if(dish.length > 0) {
      this.dishesService.getDishesByIdType(dishCateg._id, dish[0].restoref._id).subscribe((rsDataDish: any) => {
        console.log(rsDataDish);
        this.dishesService.setDishesDesigned(rsDataDish);
      })
    } else {
      this.dishesService.setDishesDesigned([]);
    }
  }

  ngOnInit(): void {
    this.dishesService.currentcategDishResto.subscribe((categDishResto: any) => {
      this.listDishCateg = categDishResto;
    })
  }

}
