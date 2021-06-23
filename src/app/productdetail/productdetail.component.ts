import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Product } from '../models/productmodel';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {

 @Input() prod:Product;
 @Output() myEvent=new EventEmitter()
sendData(productTitle)
{
this. myEvent.emit(productTitle)
}
}
