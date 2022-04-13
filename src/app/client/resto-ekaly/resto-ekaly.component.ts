import { RestoService } from './services/resto.service';
import { Resto } from './models/Resto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resto-ekaly',
  templateUrl: './resto-ekaly.component.html',
  styleUrls: ['./resto-ekaly.component.scss']
})
export class RestoEkalyComponent implements OnInit {
  sideBarOpen = true;
  restoListPopular: Resto[]; 
  restoListOthers: Resto[];
  constructor(
		private restoService: RestoService
  ) { }

  ngOnInit(): void {
		this.restoService.getRestoPopular().subscribe((rs:any) => {
      this.restoListPopular = rs;
			this.restoListPopular.forEach((itemRestoPopular) => {
				this.restoService.nearestResto(itemRestoPopular);
			})
			this.restoListPopular = this.restoService.sortDescRestoKm(this.restoListPopular);
      this.restoService.setRestoPopularDesigned(this.restoListPopular);
      console.log(this.restoListPopular);
    })

    this.restoService.getRestoOthers("all", -1).subscribe((rs:any) => {
      this.restoListOthers = rs;
      this.restoListOthers.forEach((itemRestoOthers) => {
				this.restoService.nearestResto(itemRestoOthers);
			})
      this.restoListOthers = this.restoService.sortDescRestoKm(this.restoListOthers);
      this.restoService.setRestoOthersDesigned(this.restoListOthers);
    })
  }

}
