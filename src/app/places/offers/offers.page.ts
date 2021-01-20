import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  private offers: Place[];
  constructor(private placeService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.offers = this.placeService.places;
  }

  onEdit(offerId: string, slidingitem: IonItemSliding){
    slidingitem.close();
    this.router.navigate(['/','places','tabs','offers', 'edit', offerId]);
    console.log(offerId);
  }

}
