import { Component, OnInit } from '@angular/core';
import { CakesService } from '../cakes.service';
import { FlowersService } from '../flowers.service';
import { Product } from '../models/productmodel';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent {
  flowers:Product[]=[]
  constructor(private fsobj:FlowersService)
  {
  }
  ngOnInit()
  {
    this.flowers=this.fsobj.getFlowersData();
  }
  
}
