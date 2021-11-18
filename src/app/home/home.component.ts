import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../service/restaurant.service';
import {Observable} from 'rxjs';
import {RestaurantBundleDTO} from '../models/RestaurantBundleDTO';
import {NavigationExtras, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    public restaurantService: RestaurantService,
    private router: Router
  ) {}

  public restaurantResponse$: Observable<RestaurantBundleDTO[]>;

  ngOnInit(): void {
    this.restaurantResponse$ = this.restaurantService.getAllMeals();
  }
  navigateTo(restaurantName: string, restaurantInfo: RestaurantBundleDTO): void{
    const urlSlug = restaurantName.split(' ').join('-');
    this.router.navigateByUrl(`/restaurants/${urlSlug}`, {state : {restaurant: restaurantInfo}});

  }
}
