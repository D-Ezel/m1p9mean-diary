import { RestoService } from './services/resto.service';
import { Resto } from './models/Resto';
import { ToolService } from 'src/app/services/tools.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-resto-ekaly',
  templateUrl: './resto-ekaly.component.html',
  styleUrls: ['./resto-ekaly.component.scss']
})
export class RestoEkalyComponent implements OnInit {
  sideBarOpen = true;
  restoList: Array<Resto> = new Array();
  constructor(
    private toolService: ToolService,
    private cookie: CookieService,
		private restoService: RestoService
  ) { }

  nearestResto(itemResto: Resto) {
    itemResto.km = this.toolService.getDistance2Points(Number(this.cookie.get("latLocation")), Number(this.cookie.get("lngLocation")), itemResto.coordinate.lat, itemResto.coordinate.lng)
  }

  ngOnInit(): void {
		this.restoService.getResto().subscribe((rs:any) => {
      this.restoList = rs;
			console.log(this.restoList);
			this.restoList.forEach((itemResto) => {
				this.nearestResto(itemResto);
			})
			this.restoList = this.restoService.sortDescRestoKm(this.restoList);
			console.log(this.restoList);
    })
  }

}
