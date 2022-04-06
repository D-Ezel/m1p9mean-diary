import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: "app-dishes-to-delivery",
  templateUrl: "dishes-to-delivery.component.html",
  styleUrls: ["./dishes-to-delivery.component.scss"]
})
export class DishesToDeliveryComponent implements OnInit {
  map: mapboxgl.Map;

  constructor() {}

  @ViewChild('map') mapElement: ElementRef;

  ngOnInit() {
    (mapboxgl as any).accessToken = environment.mapboxKey;
  }

  ngAfterViewInit() {
    this.map = new mapboxgl.Map({
      container: this.mapElement.nativeElement, // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      attributionControl: false,
      center: [47.52415096274464,-18.91389191326509], // starting position
      zoom: 14 ,// starting zoom
    });
    this.map.on("load", () => {
      this.map.resize();
    })
  }

  
}
