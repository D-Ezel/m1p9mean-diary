import { Cart } from './class/Cart';
import { CartService } from './services/cart.service';
import { Dishes } from './../dishes/models/Dishes';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  listDishes: Dishes[] = new Array();
  hidden = false;
  cart: Cart = new Cart();
  constructor(private cartService:CartService) { }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  minusQty(cartItem: Dishes) {
    this.cartService.dropCart(cartItem._id).subscribe((rsCart: any) => {
      let cart={items:{},sumQty:0, sumPrice:0};
      cart = rsCart;
      this.cart = this.cartService.itemDishDisplay(cart);
      this.cartService.setCartDesigned(this.cart);
    })
  }

  plusQty(cartItem: Dishes) {
    this.cartService.addCart(cartItem._id).subscribe((cartData: any) => {
      let cart={items:{},sumQty:0, sumPrice:0};
      cart = cartData;
      this.cart = this.cartService.itemDishDisplay(cart);
      this.cartService.setCartDesigned(this.cart);
    })
  }
  
  drop(event: CdkDragDrop<Dishes[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      
      this.cartService.addCart(event.container.data[event.currentIndex]._id).subscribe((cartData: any) => {
        let cart={items:{},sumQty:0, sumPrice:0};
        cart = cartData;
        this.cart = this.cartService.itemDishDisplay(cart);
        this.cartService.setCartDesigned(this.cart);
      })
    }
  }
  
  ngOnInit(): void {
    this.cartService.currentCart.subscribe((cartRs: any) => {
      if(cartRs != null && cartRs.itemDish.length > 0) {  
        this.cart = cartRs;
      } else {
        this.cartService.getCart().subscribe((cartRs: any) => {
          let cart={items:{},sumQty:0, sumPrice:0};
          cart = cartRs;
          if(cart) {
            this.cart = this.cartService.itemDishDisplay(cart);
            this.cartService.setCartDesigned(this.cart);
          }
        })
      }
    })
  }

}
