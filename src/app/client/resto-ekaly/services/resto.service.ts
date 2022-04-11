import { Resto } from './../models/Resto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  private localUrl = "http://localhost:8888/api/resto";
  private url= "https://"+document.domain+"/api/resto"
 
  constructor(private http:HttpClient) { }

  public getResto() {
    return this.http.get(this.url);
  }

  public sortDescRestoKm(resto:Array<Resto>) {
    return resto.sort((a,b) => a.km - b.km);
  }
}
