import { TypeResto } from './../../resto-ekaly/models/TypeResto';
import { Dishes } from './../models/Dishes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  private localUrl = "http://localhost:8888/api/dishes";
  private localPort = ":4200"
  private localProtocol = "http"
  private url=  (document.domain.startsWith("localhost") ? this.localProtocol : "https")+"://"+ document.domain + (document.domain.startsWith("localhost") ? this.localPort : "")+"/api/dishes"
 
  private dishesSrc = new BehaviorSubject<Dishes[]>([new Dishes()]);
  currentDishes = this.dishesSrc.asObservable();
  private categDishRestoSrc = new BehaviorSubject<TypeResto[]>([new TypeResto()]);
  currentcategDishResto = this.categDishRestoSrc.asObservable();

  constructor(private http:HttpClient) { }

  setDishesDesigned(dishes:Dishes[]) {
    this.dishesSrc.next(dishes);
  }

  setCategDishRestoDesigned(typeResto:TypeResto[]) {
    this.categDishRestoSrc.next(typeResto);
  }

  public getDishesByIdType(idType: string, idResto: string) {
    return this.http.get(this.url+"/searchByTypeRef/"+idType+"/"+idResto); 
  }

  public getDishesByRestoId(restoId: string) {
    return this.http.get(this.url+"/restoref/"+restoId); 
  }
}
