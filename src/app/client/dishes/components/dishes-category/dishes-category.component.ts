import { LoginComponent } from './../../../account/components/login/login.component';
import { Dishes } from './../../models/Dishes';
import { TypeResto } from './../../../resto-ekaly/models/TypeResto';
import { DishesService } from './../../services/dishes.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dishes-category',
  templateUrl: './dishes-category.component.html',
  styleUrls: ['./dishes-category.component.scss']
})
export class DishesCategoryComponent implements OnInit {
  listDishCateg: TypeResto[];

  constructor(
    private dishesService: DishesService,
    public dialog: MatDialog
  ) { }

  openDialogLogin() {
    const dialogRef = this.dialog.open(
    LoginComponent,
    {
      height: '70%',
      width: '500px', 
      panelClass: 'custom-dialog',
      backdropClass: 'custom-backDrop'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

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
