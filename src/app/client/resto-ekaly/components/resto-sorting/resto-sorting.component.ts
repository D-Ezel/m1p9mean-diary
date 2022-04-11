import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-resto-sorting',
  templateUrl: './resto-sorting.component.html',
  styleUrls: ['./resto-sorting.component.scss']
})
export class RestoSortingComponent implements OnInit {

  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
    console.log(this.cookie.get("locationName"))  
  }

}
