import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    {id: 1, productId:1, productName:Product.name, qtd: 4, price: 20.40},
    {id: 2, productId:2, productName:Product.name, qtd: 6, price: 60.20},
    {id: 3, productId:3, productName:Product.name, qtd: 3, price: 30.90},
    {id: 4, productId:4, productName:'test 4', qtd: 2, price: 26.40},
  ];

  cartTotal=0;

  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item =>{
      this.cartTotal += (item.qtd * item.price)
    })
  }

}
