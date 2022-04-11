import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private localUrl = "http://localhost:8888/api/location";
  private url= "https://"+document.domain+"/api/location"
 
  constructor(private http:HttpClient) { }

  public getLocation() {
    return this.http.get(this.url);
  }
}
