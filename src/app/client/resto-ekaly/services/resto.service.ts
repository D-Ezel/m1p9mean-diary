import { ToolService } from './../../../services/tools.service';
import { SearchForm } from './../class/SearchForm';
import { TypeResto } from './../models/TypeResto';
import { Resto } from './../models/Resto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  private localUrl = "http://localhost:8888/api/resto";
  private localPort = ":4200"
  private localProtocol = "http"
  private url=  (document.domain.startsWith("localhost") ? this.localProtocol : "https")+"://"+ document.domain + (document.domain.startsWith("localhost") ? this.localPort : "")+"/api/resto"
 
  
  private restoPopularSrc = new BehaviorSubject<Resto[]>([new Resto()]);
  currentRestoPopular = this.restoPopularSrc.asObservable();
  private restoOthersSrc = new BehaviorSubject<Resto[]>([new Resto()]);
  currentRestoOthers = this.restoOthersSrc.asObservable();
  private searchFormSrc = new BehaviorSubject<SearchForm>(new SearchForm());
  currentSearchForm = this.searchFormSrc.asObservable();
 
  constructor(
    private http:HttpClient, 
    private toolService: ToolService, 
    private cookie: CookieService
  ) { }

  setSearchFormDesigned(searchForm:SearchForm) {
    this.searchFormSrc.next(searchForm);
  }

  setRestoPopularDesigned(restoPopular:Resto[]) {
    this.restoPopularSrc.next(restoPopular);
  }

  setRestoOthersDesigned(restoOthers:Resto[]) {
    this.restoOthersSrc.next(restoOthers);
  }

  public getResto() {
    return this.http.get(this.url);
  }

  public getRestoPopular() {
    return this.http.get(this.url+"/popular");
  }

  public getRestoOthers(categRestoId:string, searchMinimumPrice:Number, searchInput?:string) {
    let urlParam = this.url + "/others/"+categRestoId+"/"+searchMinimumPrice;
    if(searchInput) {
      urlParam += "/"+searchInput;
    }
    return this.http.get(urlParam);
  }

  public sortDescRestoKm(resto:Array<Resto>) {
    return resto.sort((a,b) => a.km - b.km);
  }

  public nearestResto(itemResto: Resto) {
    itemResto.km = this.toolService.getDistance2Points(Number(this.cookie.get("latLocation")), Number(this.cookie.get("lngLocation")), itemResto.coordinate.lat, itemResto.coordinate.lng)
  }

}
