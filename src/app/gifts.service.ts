import { Injectable } from '@angular/core';
import { Product } from './models/productmodel';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  constructor() { }
   
  gifts:Product[]=[{productImage:"https://img.floweraura.com/sites/default/files/for-a-coffee-lover-9975467gf-A.jpg?tr=w-264,q-70",
  productTitle:"For A Coffee Lover",
 productPrice:"Rs.299",
 productDelivery:"Today"},
 {productImage:"https://img.floweraura.com/sites/default/files/personalised-photo-clock-9965207gf-A.jpg?tr=w-264,q-70",
  productTitle:"Personalised Photo Clock",
 productPrice:"Rs.399",
 productDelivery:"Today"},
 {productImage:"https://img.floweraura.com/sites/default/files/cute-couple-showpiece-9898397gf-A_0.JPG?tr=w-264,q-70",
  productTitle:"Cute Couple Showpiece",
 productPrice:"Rs.849",
 productDelivery:"Today"},
 {productImage:"https://img.floweraura.com/sites/default/files/cute-teddy-with-rose-9902147gf-A_0.jpg?tr=w-264,q-70",
  productTitle:"Cute Teddy With Rose",
 productPrice:"Rs.999",
 productDelivery:"Tomorrow"},
 {productImage:"https://img.floweraura.com/sites/default/files/jasmine-eau-de-perfume-ven-25-agsc5471-A.jpg?tr=w-264,q-70",
  productTitle:"Jasmine Eau De Perfume",
 productPrice:"Rs.799",
 productDelivery:"Tomorrow"},
 {productImage:"https://img.floweraura.com/sites/default/files/mothers-day-themed-cushion-cover-9894397gf-A.jpg?tr=w-264,q-70",
  productTitle:"Mothers Day Themed Cushion Cover",
 productPrice:"Rs.499",
 productDelivery:"Tomorrow"}]
     
  getGiftsData():Product[]
  {
    return this.gifts;
  }

}
