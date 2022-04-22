import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './../account/services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  sideBarOpen = true;
  
  constructor(
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.accountService.isLogged().subscribe((cart: any) => {
      if(cart.sumQty == 0) {
        this.router.navigate(["/resto"]);
      }       
  
    }, (httpError) => {
      if(httpError.status == 403) this.router.navigate(["/unauthorized"]);
      //this.router.navigate(["/unauthorized"]);
    })
  }

  ngOnInit(): void {
  }

}
