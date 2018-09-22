import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public restaurantName: string;
  public restaurantDescription: string;
  public restaurantPhone: string;
  public restaurantCategory: string;

  public restaurantOffering = {
    'parking': false,
    'security': false,
    'pets': false,
    'drinks': false,
    'wifi': false,
    'power': false
  };

  public restaurantPaymentMethod = {
    'cash': false,
    'ath': false,
    'creditCard': false,
    'athMovil': false,
    'paypal': false,
    'stripe': false
  };

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

  constructor() { }

  ngOnInit() {
  }

  public onSubmit() {
    alert(this.restaurantName + ' Tambien la categoria es: ' + this.restaurantCategory +
    ' Ahora vamos a ver si tiene parking: ' + this.restaurantOffering.parking);

    console.log(this.restaurantOffering);
    console.log(this.restaurantPaymentMethod);
    console.log(this.restaurantSchedule)
  }

}
