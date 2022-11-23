import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product | undefined;
  list: Product[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.product = new Product();
    this.list = [];
  }
  save(){
    // @ts-ignore
    this.product.like = 0;
    console.log(this.product);
    // @ts-ignore
    this.list.push(this.product);
    console.log(this.list);
  }
}
