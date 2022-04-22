import { VoidCartErrorComponent } from './components/void-cart-error/void-cart-error.component';
import { LoginComponent } from './../account/components/login/login.component';
import { AccountService } from './../account/services/account.service';
import { TypeRestoService } from './../resto-ekaly/services/type-resto.service';
import { Dishes } from './models/Dishes';
import { DishesService } from './services/dishes.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    private router: Router,
    private route: ActivatedRoute,
    private dishesService: DishesService,
    private accountService: AccountService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

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

  openSnackBar() {
    this._snackBar.openFromComponent(VoidCartErrorComponent , {
      duration: 5 * 1000,
    });
  }

  buyLink() { 
    this.accountService.isLogged().subscribe((cart: any) => {
      if(cart.sumQty > 0) {
        this.router.navigate(["/cart/checkout/operators"]);
      } else {
        this.openSnackBar();
      }       
    }, (httpError) => {
      this.openDialogLogin();
    })
  }

  ngOnInit(): void {
    this.dishesService.getDishesByRestoId(this.route.snapshot.params.idResto)
    .subscribe((dishesRs: any) => {
      this.listDishes = dishesRs;
      this.dishesService.setDishesDesigned(this.listDishes);
      this.dishesService.setCategDishRestoDesigned(this.listDishes[0].restoref.type);
    })
  }

}
