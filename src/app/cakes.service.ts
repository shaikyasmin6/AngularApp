import { Injectable } from '@angular/core';
import { Product } from './models/productmodel';

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor() { }
  private cakes:Product[]=[{productImage:"https://img.floweraura.com/sites/default/files/Re-Shoot-Cake-09-A.jpg?tr=w-264,q-70",
            productTitle:"Black Forest Cake",
        productPrice:"Rs.559",
        productDelivery:"Tomorrow"},
        {productImage:"https://img.floweraura.com/sites/default/files/lovingly-yours-12052017-A.jpg?tr=w-264,q-70",
            productTitle:"Blackforest Rose Cake Combo",
        productPrice:"Rs.1049",
        productDelivery:"Tomorrow"},
        {productImage:"https://img.floweraura.com/sites/default/files/say-it-with-love-combo-9897170co-A.jpg?tr=w-264,q-70",
            productTitle:"Say It With Love Combo",
        productPrice:"Rs.1549",
        productDelivery:"Tomorrow"},
        {productImage:"https://img.floweraura.com/sites/default/files/red-velvet-cake-n-roses-arrangement-9897270co-A.jpg?tr=w-264,q-70",
            productTitle:"Red Velvet Cake N Roses",
        productPrice:"Rs.1199",
        productDelivery:"Tomorrow"},
        {productImage:"https://img.floweraura.com/sites/default/files/round-choco-pinata-cake-9891030ca-A.jpg?tr=w-264,q-70",
            productTitle:"Round Choco Pinata Cake",
        productPrice:"Rs.1899",
        productDelivery:"Tomorrow"},
        {productImage:"https://img.floweraura.com/sites/default/files/best-compliment-12052017-A.jpg?tr=w-264,q-70",
            productTitle:"Choco Truffle Cake Pink Rose COmbo",
        productPrice:"Rs.1099",
        productDelivery:"Tomorrow"},

      ];
     
      getCakesData():Product[]
      {
        return this.cakes;
      }
     
}

