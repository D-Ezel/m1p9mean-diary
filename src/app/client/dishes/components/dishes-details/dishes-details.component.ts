import { Dishes } from './../../models/Dishes';
import { DishesService } from './../../services/dishes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes-details',
  templateUrl: './dishes-details.component.html',
  styleUrls: ['./dishes-details.component.scss']
})
export class DishesDetailsComponent implements OnInit {
  listDishes: Dishes[];
  responsiveOptions;
  constructor(private dishesService: DishesService) { 
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 3
    },{
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }];
  }

  ngOnInit(): void {
    this.dishesService.currentDishes.subscribe((dishesData: any) => {
      this.listDishes = dishesData;
    })
  }

}
