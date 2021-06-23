import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private hc:HttpClient) { }
  getUsersData():Observable<any>
  {
    return this.hc.get<any>('https://jsonplaceholder.typicode.com/users')
  }
  getUsersDataById(id):Observable<any>
  {
    return this.hc.get<any>('https://jsonplaceholder.typicode.com/users/'+id)
  }
  getrapidapi():Observable<any>
  {
    return this.hc.get<any>('https://covid-193.p.rapidapi.com/statistics',{
      "headers":{
        "x-rapidapi-key": "c418020fb9msh9def51b3c99c73cp143dc3jsn1bde356a3715",
	"x-rapidapi-host": "covid-193.p.rapidapi.com"
      }
      
    })
  }
  getcovid():Observable<any>
  {
    return this.hc.get<any>('https://api.covid19india.org/v4/min/data.min.json')
}
getsouth():Observable<any>
    {
      return this.hc.get<any>('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/southamerica',
      {
        "headers":{
          "x-rapidapi-key": "c418020fb9msh9def51b3c99c73cp143dc3jsn1bde356a3715",
	"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
        }
      })

  }
  
}
