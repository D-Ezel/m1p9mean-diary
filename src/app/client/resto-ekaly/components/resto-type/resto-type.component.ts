import { CookieService } from 'ngx-cookie-service';
import { SearchForm } from './../../class/SearchForm';
import { Resto } from './../../models/Resto';
import { RestoService } from './../../services/resto.service';
import { TypeResto } from './../../models/TypeResto';
import { TypeRestoService } from './../../services/type-resto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resto-type',
  templateUrl: './resto-type.component.html',
  styleUrls: ['./resto-type.component.scss']
})
export class RestoTypeComponent implements OnInit {
  typeRestoList: TypeResto[];
  restoListOthers: Resto[];
  searchForm: SearchForm;
  colorChip: string;
  locationName: string;

  constructor(
    private typeRestoService:TypeRestoService, 
    private restoService: RestoService,
    private cookie: CookieService
  ) { }

  searchByType(itemTypeResto?: TypeResto) {
    //this.colorChip = "primary";
    if(!itemTypeResto) {
      itemTypeResto._id = "all"
    }
    this.restoService.currentSearchForm.subscribe((searchFormRs: any) => {
      this.searchForm = searchFormRs;
      this.restoService.getRestoOthers(itemTypeResto._id, this.searchForm.minimumPrice)
        .subscribe((rsSearchOthers: any) => {
          if(rsSearchOthers != null) {
            this.restoListOthers = rsSearchOthers;
            if(this.searchForm.nearestResto) {
              this.restoListOthers.forEach((itemRsSearchOthers) => {
              this.restoService.nearestResto(itemRsSearchOthers);
              this.restoListOthers = this.restoService.sortDescRestoKm(this.restoListOthers);
            })
            this.typeRestoService.setTypeRestoDesigned(itemTypeResto);
          }
          this.restoService.setRestoOthersDesigned(this.restoListOthers);
        }
      })
    })
  }  
  ngOnInit(): void {
    this.locationName = this.cookie.get("locationName");
    this.typeRestoService.getTypeResto().subscribe((rs:any) => {
      this.typeRestoList = rs;
    })
  }

}
