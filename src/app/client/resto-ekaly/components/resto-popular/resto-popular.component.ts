import { Resto } from './../../models/Resto';
import { RestoService } from './../../services/resto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resto-popular',
  templateUrl: './resto-popular.component.html',
  styleUrls: ['./resto-popular.component.scss']
})
export class RestoPopularComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string = "#fd775e";
  panelOpenState = true;
  listResto: Resto[]; 
  responsiveOptions;
  constructor( private restoService: RestoService) { 
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 3
    },{
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }];
  }

  ngOnInit(): void {
    this.restoService.currentRestoPopular.subscribe((data: any) => {
      if(data != null) {
        this.listResto = data
        //this.cdRef.detectChanges();
      }
    });

  }


}
