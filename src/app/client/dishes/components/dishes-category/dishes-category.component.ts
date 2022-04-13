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
      
    }
  }

  ngOnInit(): void {
    this.dishesService.currentcategDishResto.subscribe((categDishResto: any) => {
      this.listDishCateg = categDishResto;
    })
  }

}
