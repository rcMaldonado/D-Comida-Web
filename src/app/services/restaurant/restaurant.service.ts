import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  public sendRestaurants(restaurantData) {
    console.log('Serviced linked the right way');
    // this.http.post('http://localhost:3000/restaurant/add', restaurantData);
  }
}
