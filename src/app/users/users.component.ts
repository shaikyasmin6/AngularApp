import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any=[]
  yasmin:any=[]
  coviddata:any=[]
  south:any=[]
  constructor(private usobj:UserdataService,private router:Router) { }

  ngOnInit(): void {
   /* this.usobj.getUsersData().subscribe(
      data=>{this.users=data;
        console.log(data)
      },
      err=>{console.log('err is ',err)})*/
    /* this.usobj.getrapidapi().subscribe(
        rapid=>{this.yasmin=rapid;    
        console.log("rapid=",rapid)}

      )*/
     /* this.usobj.getcovid().subscribe(
        covid=>{this.coviddata=covid
        console.log(this.coviddata)}
      )*/
      this.usobj.getsouth().subscribe(
        country=>{this.south=country
        console.log(country)}
      )
  }
  onSelectId(id)
  {
      this.router.navigateByUrl('user/'+id)
      console.log(id)
  }

}
