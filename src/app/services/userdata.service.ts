import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url="http://localhost:4200/assets/datas/products.json"

  constructor(private http:HttpClient) { }

  user(){
    return this.http.get(this.url)
  }
//   users(){
//    return [
//     {name:'anil', age:28, email:"nishant@gmail.com"},
//     {name:'am', age:25, email:"sam@gmail.com"}
// ,
// {name:'peter', age:38, email:"peter@gmail.com"}

//    ]
//   }
}
