import { TypeRestoService } from './../resto-ekaly/services/type-resto.service';
import { Dishes } from './models/Dishes';
import { DishesService } from './services/dishes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  sideBarOpen = true;
  idResto: string;
  listDishes: Dishes[];
  constructor(
    private route: ActivatedRoute,
    private dishesService:DishesService
  ) {}

  ngOnInit(): void {
    this.dishesService.getDishesByRestoId(this.route.snapshot.params.idResto)
    .subscribe((dishesRs: any) => {
      this.listDishes = dishesRs;
      this.dishesService.setDishesDesigned(this.listDishes);
      this.dishesService.setCategDishRestoDesigned(this.listDishes[0].restoref.type);
    })
  }

}
