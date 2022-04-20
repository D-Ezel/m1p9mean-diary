import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-void-cart-error',
  templateUrl: './void-cart-error.component.html',
  styleUrls: ['./void-cart-error.component.scss']
})
export class VoidCartErrorComponent implements OnInit {
  cartVoidError: string = "Votre panier est vide"
  constructor() { }

  ngOnInit(): void {
  }

}
