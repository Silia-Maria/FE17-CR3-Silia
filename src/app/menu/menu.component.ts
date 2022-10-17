import { Component, OnInit } from '@angular/core';
import { IDishes } from '../IDishes';
import { dishes } from '../dishes';
import { CartService } from '../cart.service'; 






@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: IDishes [] = dishes;
  

  constructor(private cartService: CartService) { }

  addToCart(dish: IDishes) {
    window.alert('Your meal has been added to the cart!');
    this.cartService.addToCart(dish);
  
  }

  

  ngOnInit(): void {
   
  }

}
