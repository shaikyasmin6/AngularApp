import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CakesService } from '../cakes.service';
import { Product } from '../models/productmodel';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent{
    cakes:Product[]=[]
    constructor(private csobj:CakesService){}
    ngOnInit(){
        this.cakes=this.csobj.getCakesData();
    }

}
