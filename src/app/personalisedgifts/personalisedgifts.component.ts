import { Component, OnInit } from '@angular/core';
import { CakesService } from '../cakes.service';
import { GiftsService } from '../gifts.service';
import { Product } from '../models/productmodel';

@Component({
  selector: 'app-personalisedgifts',
  templateUrl: './personalisedgifts.component.html',
  styleUrls: ['./personalisedgifts.component.css']
})
export class PersonalisedgiftsComponent{
  gifts:Product[]=[]
 constructor(private gsobj:GiftsService)
 {

 }
 ngOnInit()
 {
   this.gifts=this.gsobj.getGiftsData();
 }

}
