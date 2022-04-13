import { TypeResto } from './../models/TypeResto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeRestoService {
  private localUrl = "http://localhost:8888/api/typeResto";
  private url= "https://"+document.domain+"/api/typeResto";

  private typeRestoSrc = new BehaviorSubject<TypeResto>(new TypeResto());
  currentTypeResto = this.typeRestoSrc.asObservable();

  constructor(private http:HttpClient) { }

  setTypeRestoDesigned(typeResto:TypeResto) {
    this.typeRestoSrc.next(typeResto);
  }

  public getTypeResto() {
    return this.http.get(this.localUrl);
  }
  
}
