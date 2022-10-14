import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IDishes } from '../IDishes';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Array<IDishes> = [];
  total: number = this.cartService.result();
  
  info = new FormGroup({
    name: new FormControl("", Validators.required),
    adress: new FormControl ("", Validators.required)
  })

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();  
  }

  onSubmit(){
    if(this.info.valid){
      console.log(this.info.value);
   }else{
    console.log("invalid")
   }
}

orderSent() {
  window.alert("Your Order was successfull!");
  this.info.reset();
  this.total = 0;
  this.items = [];
}

}
