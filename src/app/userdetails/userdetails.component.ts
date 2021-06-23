import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user:any
  constructor(private ar:ActivatedRoute,private usobj:UserdataService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    this.usobj.getUsersDataById(id).subscribe(
      obj=>{this.user=obj},
      err=>{console.log("err is",err)}
    )
  }

}
