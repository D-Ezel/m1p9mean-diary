import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private localUrl = "http://localhost:8888/api/location";
  private localPort = ":4200"
  private localProtocol = "http"
  private url=  (document.domain.startsWith("localhost") ? this.localProtocol : "https")+"://"+ document.domain + (document.domain.startsWith("localhost") ? this.localPort : "")+"/api/location"
 
  constructor(private http:HttpClient) { }

  public getLocation() {
    return this.http.get(this.url);
  }
}
