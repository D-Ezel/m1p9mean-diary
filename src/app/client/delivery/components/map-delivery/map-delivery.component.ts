import { Location } from "../../../../models/Location";
import { LocationService } from './../../../../services/location.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import { StateGroup } from "src/app/class/StateGroup";
import {startWith, map} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';


export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-map-delivery',
  templateUrl: './map-delivery.component.html',
  styleUrls: ['./map-delivery.component.scss']
})
export class MapDeliveryComponent implements OnInit {
  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  stateGroups: StateGroup[] = new Array();

  stateGroupOptions: Observable<StateGroup[]>;
  locationList: Array<Location>;
  map: mapboxgl.Map;

  constructor(
    private _formBuilder: FormBuilder,
    private locationService: LocationService, 
    private cookie: CookieService
  ) { }

  search(){}

  stateTemp: StateGroup;
  defineStateGroup(locations:Array<Location>) {
    for(let i=0; i<locations.length; i++) {
      if(this.stateGroups.length == 0) {
        this.stateTemp = new StateGroup(); 
        this.stateTemp.letter = locations[i].name.charAt(0);
        this.stateTemp.names.push(locations[i].name); 
        this.stateGroups.push(this.stateTemp);
      } else {
        for(let j=0; j<this.stateGroups.length; j++) {
          if(locations[i].name.charAt(0) == this.stateGroups[j].letter) {
            this.stateGroups[j].names.push(locations[i].name);
            break;
          } else {
            this.stateTemp = new StateGroup();
            this.stateTemp.letter = locations[i].name.charAt(0);
            this.stateTemp.names.push(locations[i].name); 
            this.stateGroups.push(this.stateTemp);
            break;
          }
        }
      }
    }
  }

  ngOnInit() {
    (mapboxgl as any).accessToken = environment.mapboxKey;
    this.map = new mapboxgl.Map({
      container: "map", // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      attributionControl: false,
      center: [47.52415096274464,-18.91389191326509], // starting position
      zoom: 14 ,// starting zoom
    });
    this.locationService.getLocation().subscribe((rs:any) => {
      this.locationList = rs;
      this.defineStateGroup(this.locationList);
      console.log(this.locationList);
    })
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value)),
    );
  }
  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

}
