import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ToolService {
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