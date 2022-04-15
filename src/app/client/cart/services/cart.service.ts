import { Cart } from './../class/Cart';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private localUrl = "http://localhost:8888/api/cart";
  private url= "https://"+document.domain+"/api/cart";
  private cartSrc = new BehaviorSubject<Cart>(new Cart());
  currentCart = this.cartSrc.asObservable();

  constructor(private http:HttpClient) { }

  setCartDesigned(cart:Cart) {
    this.cartSrc.next(cart);
  }

  itemDishDisplay(cart) {
    let shoppingCart = new Cart();
    let cartLength = Object.keys(cart.items).length;
    for(let i=0; i<cartLength; i++) {
      shoppingCart.itemDish.push(cart.items[Object.keys(cart.items)[i]]);
    }
    shoppingCart.sumQty = cart.sumQty;
    shoppingCart.sumPrice = cart.sumPrice;
    return shoppingCart;
  }

  public addCart(dishId:string) {
    let urlParam = this.localUrl + "/add/"+dishId;
    const headers = {
      'withCredentials':true
    }
    return this.http.get(urlParam, headers); 
  }

  public dropCart(dishId:string) {
    let urlParam = this.localUrl + "/drop/"+dishId;
    const headers = {
      'withCredentials':true,
    }
    return this.http.get(urlParam, headers) 
  }

  public getCart() {
    const headers = {
      'withCredentials':true,
    }
    return this.http.get(this.localUrl, headers);
  }
}
