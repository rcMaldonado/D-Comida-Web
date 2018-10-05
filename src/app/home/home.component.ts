// Importing Angular Component Libraries
import { Component, OnInit } from '@angular/core';

// Importing Services
import { RestaurantService } from '../services/restaurant/restaurant.service';

// Importing Models
import { RestaurantModel } from '../../model/restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Declaration of the object that will sent once the form is submited.
  public restaurant: RestaurantModel = <RestaurantModel>{};

  /* Declaration of variables & objects to be assigned to the
     object from the model
  */
  public restaurantName: String;
  public restaurantDescription: String;
  public restaurantPhone: String;
  public restaurantCategory: String;

  // Declaration on the location object
  public location = {
    'latitude': 0,
    'longitude': 0
  };
  // Declaration of the object containing the restaurants offering
  public restaurantOffering = {
    'parking': false,
    'security': false,
    'pets': false,
    'drinks': false,
    'wifi': false,
    'power': false
  };
  // Declaration of the object containing the restuarant's payment method
  public restaurantPaymentMethod = {
    'cash': false,
    'ath': false,
    'creditCard': false,
    'athMovil': false,
    'paypal': false,
    'stripe': false
  };
  // Declaration of the object containing the schedule for the restuarant
  public restaurantSchedule = {
    'monday': {
      'open': '',
      'closed': ''
    },
    'tuesday': {
      'open': '',
      'closed': ''
    },
    'wednesday': {
      'open': '',
      'closed': ''
    },
    'thursday': {
      'open': '',
      'closed': ''
    },
    'friday': {
      'open': '',
      'closed': ''
    },
    'saturday': {
      'open': '',
      'closed': ''
    },
    'sunday': {
      'open': '',
      'closed': ''
    }
  };

  constructor(private restaurantService: RestaurantService) {
   }

  ngOnInit() {
    // this.restaurantService.sendRestaurants();
  }

  public findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location.latitude = position.coords.latitude;
        this.location.longitude = position.coords.longitude;
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  public onSubmit() {
    this.joinData();

    console.log(this.restaurant);
  }

  public joinData() {
    this.restaurant.name = this.restaurantName;
    this.restaurant.description = this.restaurantDescription;
    this.restaurant.location = this.location;
    this.restaurant.phone = this.restaurantPhone;
    this.restaurant.offering = this.restaurantOffering;
    this.restaurant.paymentMethod = this.restaurantPaymentMethod;
    this.restaurant.schedule = this.restaurantSchedule;
  }

}
