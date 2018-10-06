import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  public sendRestaurants(restaurantData) {
    console.log('Serviced linked the right way');
    this.http.post('http://localhost:3000/restaurant/add', restaurantData, {headers: this.headers})
    .subscribe( data => {
      console.log('POST is succesful', data);
    }, error => {
      console.log('Error: ', error);
    });
  }
}
