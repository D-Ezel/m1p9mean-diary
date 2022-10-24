import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private listingsUrl = '/api/listingsAndReviews';

  constructor(private http: HttpClient) { }

  // Get the status
  public getListingsAndReviews() {
    return this.http.get(this.listingsUrl);
  }

  // Error handling
  private error (error: any) {
    let message = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(message);
  }
}