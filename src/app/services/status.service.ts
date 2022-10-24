import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private listingsUrl = '/api/listingsAndReviews';

  constructor(private http: HttpClient) { }

  // Get the status
}