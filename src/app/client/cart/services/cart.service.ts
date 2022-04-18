import { Cart } from './../class/Cart';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private localUrl = "http://localhost:8888/api/cart";
  private localPort = ":4200"
  private localProtocol = "http"
  private url=  (document.domain.startsWith("localhost") ? this.localProtocol : "https")+"://"+ document.domain + (document.domain.startsWith("localhost") ? this.localPort : "")+"/api/cart"
 
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
    let urlParam = this.url + "/add/"+dishId;
    const headers = {
      'withCredentials':true
    }
    return this.http.get(urlParam, headers); 
  }

  public dropCart(dishId:string) {
    let urlParam = this.url + "/drop/"+dishId;
    const headers = {
      'withCredentials':true,
    }
    return this.http.get(urlParam, headers) 
  }

  public getCart() {
    const headers = {
      'withCredentials':true,
    }
    return this.http.get(this.url, headers);
  }
}
