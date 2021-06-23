import { Injectable } from '@angular/core';
import { Product } from './models/productmodel';
import { ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class FlowersService {

  constructor() { }
  private flowers:Product[]=[{productImage:"https://img.floweraura.com/sites/default/files/Same-Day-02-C.jpg?tr=w-264,q-70",
      productTitle:"Purple Orchid Bouquet",
     productPrice:"Rs.649",
     productDelivery:"Today"},
     {productImage:"https://img.floweraura.com/sites/default/files/2017-10-04.jpg?tr=w-264,q-70",
      productTitle:"Mixed Roses Bouquet",
     productPrice:"Rs.449",
     productDelivery:"Today"},
     {productImage:"https://img.floweraura.com/sites/default/files/roses-poses-9894030fl-C.jpg?tr=w-264,q-70",
      productTitle:"Roses Poses",
     productPrice:"Rs.849",
     productDelivery:"Today"},
     {productImage:"https://img.floweraura.com/sites/default/files/Flower-04-D.jpg?tr=w-264,q-70",
      productTitle:"Lilies N Carnation Bunch",
     productPrice:"Rs.999",
     productDelivery:"Tomorrow"},
     {productImage:"https://img.floweraura.com/sites/default/files/Flower-03-A.jpg?tr=w-264,q-70",
      productTitle:"Roses N Carnation Bunch",
     productPrice:"Rs.799",
     productDelivery:"Tomorrow"},
     {productImage:"https://img.floweraura.com/sites/default/files/styles/new_image_style_339/public/Suave%20Dream_0.jpg",
      productTitle:"Red Cornation Bouquet",
     productPrice:"Rs.499",
     productDelivery:"Tomorrow"},
     ];
     getFlowersData():Product[]
     {
       return this.flowers
     }
}

