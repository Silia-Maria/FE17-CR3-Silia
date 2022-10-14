import { Injectable } from '@angular/core';
import { IDishes } from './IDishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IDishes[] = [];

  constructor() { }

  addToCart (dish: IDishes) {
    this.items.push(dish);
  }

  getItems () {
    return this.items;
  }
  clearCart () {
    this.items = [];
    return this.items;
  }

  result () {
    let total = 0;
    for (let item of this.items) {
      total += item.price;

    }
    return total;
  }
}
