import { CartService } from './../../../cart/services/cart.service';
import { Cart } from './../../../cart/class/Cart';
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
  dishDisplayDesc: Dishes;
  cart: Cart;
  responsiveOptions;
  constructor(
    private dishesService: DishesService,
    private cartService: CartService
    ) { 

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

  clickCardDefault = false;

  displayDescOnClick(dishToDisplay: Dishes) {
    this.dishDisplayDesc = dishToDisplay;
    dishToDisplay.clickColor = true;
    this.listDishes.forEach((valDishes: Dishes)=> {
      if(valDishes._id != this.dishDisplayDesc._id) {
        valDishes.clickColor = this.clickCardDefault;
      }
    })
  }

  addToCart(dish: Dishes) {
    this.cartService.addCart(dish._id).subscribe((cartData: any) => {
      let cart={items:{},sumQty:0, sumPrice:0};
      cart = cartData;
      this.cart = this.cartService.itemDishDisplay(cart);
      this.cartService.setCartDesigned(this.cart);
    });
  }

  ngOnInit(): void {
    this.dishesService.currentDishes.subscribe((dishesData: any) => {
      this.listDishes = dishesData;
      this.dishDisplayDesc = this.listDishes[0];
    })
  }

}
