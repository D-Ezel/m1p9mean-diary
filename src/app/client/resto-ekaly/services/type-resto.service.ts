import { TypeResto } from './../models/TypeResto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeRestoService {
  private localUrl = "http://localhost:8888/api/typeResto";
  private localPort = ":4200"
  private localProtocol = "http"
  private url=  (document.domain.startsWith("localhost") ? this.localProtocol : "https")+"://"+ document.domain + (document.domain.startsWith("localhost") ? this.localPort : "")+"/api/typeResto"
 

  private typeRestoSrc = new BehaviorSubject<TypeResto>(new TypeResto());
  currentTypeResto = this.typeRestoSrc.asObservable();

  constructor(private http:HttpClient) { }

  setTypeRestoDesigned(typeResto:TypeResto) {
    this.typeRestoSrc.next(typeResto);
  }

  public getTypeResto() {
    return this.http.get(this.url);
  }
  
}
