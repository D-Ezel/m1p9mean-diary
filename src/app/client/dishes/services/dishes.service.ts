import { Dishes } from './../models/Dishes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  private localUrl = "http://localhost:8888/api/dishes";
  private url= "https://"+document.domain+"/api/dishes";
  private dishesSrc = new BehaviorSubject<Dishes[]>([new Dishes()]);
  currentDishes = this.dishesSrc.asObservable();

  constructor(private http:HttpClient) { }

  setDishesDesigned(dishes:Dishes[]) {
    this.dishesSrc.next(dishes);
  }

  public getDishesByRestoId(restoId: string) {
    return this.http.get(this.localUrl+"/restoref/"+restoId); 
  }
}
