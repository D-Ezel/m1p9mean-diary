import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import * as mapboxgl from 'mapbox-gl';

@Injectable({
    providedIn: 'root'
  })
export class ToolService {

  getLatlnMap(e, markerStyle:string, form: FormGroup, map: mapboxgl.Map, markers: any) {
    this.removeMarker(markers, markerStyle)
    let coordinates = e.lngLat;
    console.log(coordinates);   
    form.get('latitude').setValue(coordinates.lat)
    form.get('longitude').setValue(coordinates.lng)
    this.createMarker(coordinates.lng, coordinates.lat, markerStyle, form, map, markers)
  }

  removeMarker(markers: any, markerStyle: string) {
    for(let j=0; j <markers.length; j++) {
        if((markers[j] as mapboxgl.Marker).getElement().getElementsByClassName(markerStyle))
            markers[j].remove()
    }
  }

  createMarker(lng: number, lat:number, markerStyle: string, form: FormGroup, map: mapboxgl.Map, markers: Array<any>) {
    let style = document.createElement('div');
    style.className = markerStyle;
    let marker = new mapboxgl.Marker(style,{
        draggable : true,
    })
    .setLngLat([lng,lat])
    .addTo(map) 
    markers.push(marker)
    //btnZoomInPopup("btnInPopup")
    marker.on('drag', () => {
      form.get("latitude").setValue(marker.getLngLat().lat)
      form.get("longitude").setValue(marker.getLngLat().lng)
    })  
  }

  getDistance2Points(lat1,lon1,lat2,lon2) {
    var radiusEarth = 6371;                                               // Radius of the earth in km
    var dBetweenLat = this.degTorad(lat2-lat1);                           // this.degTorad below
    var dBetweenLon = this.degTorad(lon2-lon1); 
    var hav = 
      Math.sin(dBetweenLat/2) * Math.sin(dBetweenLat/2) +
      Math.cos(this.degTorad(lat1)) * Math.cos(this.degTorad(lat2)) * 
      Math.sin(dBetweenLon/2) * Math.sin(dBetweenLon/2)
    var c = 2 * Math.atan2(Math.sqrt(hav), Math.sqrt(1-hav)); 
    var d = radiusEarth * c;                                                    // Distance in km
    return Math.round(d) ;
  }

  degTorad(deg) {
    return deg * (Math.PI/180)
  }
}