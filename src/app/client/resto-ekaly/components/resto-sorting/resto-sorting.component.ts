import { TypeResto } from './../../models/TypeResto';
import { TypeRestoService } from './../../services/type-resto.service';
import { RestoService } from './../../services/resto.service';
import { SearchForm } from './../../class/SearchForm';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Resto } from '../../models/Resto';

@Component({
  selector: 'app-resto-sorting',
  templateUrl: './resto-sorting.component.html',
  styleUrls: ['./resto-sorting.component.scss']
})
export class RestoSortingComponent implements OnInit {
  sortingForm: FormGroup = new FormGroup({
    minimumPrice: new FormControl(-1),
    searchInput: new FormControl(''),
    nearestResto: new FormControl(true)
  });
  minimumPriceValues: number[] = [3000, 5000, 10000, 12500, 20000];
  searchForm: SearchForm;
  typeResto: TypeResto;
  restoListOthers: Resto[];
  constructor(private restoService: RestoService, private typeRestoService: TypeRestoService) { }

  /*changeMapStyle(event: MatRadioChange) {
    this.mapStyle=event.value
    this.map.setStyle('mapbox://styles/mapbox/' + this.mapStyle)
}*/

searchBySorting() {
  //this.colorChip = "primary";
  this.searchForm.searchInput = this.sortingForm.value.searchInput;
  this.searchForm.minimumPrice = this.sortingForm.value.minimumPrice;
  this.searchForm.nearestResto = this.sortingForm.value.nearestResto;
  this.typeRestoService.currentTypeResto.subscribe((currentTypeRs: any) => {
    if(currentTypeRs != null) {
      this.typeResto = currentTypeRs;
    }

    if(this.typeResto._id == "") {
      this.typeResto._id = "all";
    }
    this.restoService.getRestoOthers(this.typeResto._id, this.searchForm.minimumPrice)
      .subscribe((rsSearchOthers: any) => {
        if(rsSearchOthers != null) {
          this.restoListOthers = rsSearchOthers;
          if(this.searchForm.nearestResto) {
            this.restoListOthers.forEach((itemRsSearchOthers) => {
            this.restoService.nearestResto(itemRsSearchOthers);
            this.restoListOthers = this.restoService.sortDescRestoKm(this.restoListOthers);
          })
          this.restoService.setSearchFormDesigned(this.searchForm);
        }
        this.restoService.setRestoOthersDesigned(this.restoListOthers);
      }
    })
  })
} 
  searchInputOnType() {
    this.searchBySorting();
  }

  onNearestRestoChanged() {
    this.searchBySorting();
  }

  onMinimumPriceChanged(event) {
    this.sortingForm.value.minimumPrice = event.value
    this.searchBySorting();
  }

  ngOnInit(): void {
    this.searchForm = new SearchForm();
    this.restoService.setSearchFormDesigned(this.searchForm);
  }

}
