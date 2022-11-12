import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Products:Product[] =[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  IncreaseLike(p:any)
  {
   let index=this.Products.indexOf(p)
    this.Products[index].like++
  }
  DecreaseQuantiy(p:any)
  {
    this.Products[p].quantity--
  }
  search=0;



}
