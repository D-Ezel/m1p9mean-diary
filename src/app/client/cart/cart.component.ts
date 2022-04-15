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

  constructor() { }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  
  drop(event: CdkDragDrop<Dishes[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(this.listDishes);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
        );
    }
  }
  
  ngOnInit(): void {
  }

}
