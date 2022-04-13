import { RestoService } from './../../services/resto.service';
import { Resto } from './../../models/Resto';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resto-others',
  templateUrl: './resto-others.component.html',
  styleUrls: ['./resto-others.component.scss']
})
export class RestoOthersComponent implements OnInit {
  panelOpenState = true;
  listResto: Resto[]; 
  responsiveOptions;
  constructor(private restoService: RestoService, private cdRef:ChangeDetectorRef) { 
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
    this.restoService.currentRestoOthers.subscribe((data: any) => {
      if(data != null) {
        this.listResto = data
        //this.cdRef.detectChanges();
      }
    });
  }

  /*ngAfterViewChecked() {
    this.restoService.currentRestoOthers.subscribe((data: any) => {
      if(data != null) {
        //console.log(data);
        this.listResto = data
        //this.cdRef.detectChanges();
      }
    });
  }*/

}
