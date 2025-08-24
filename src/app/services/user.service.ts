import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


private apiUrl="https://flower.elevateegy.com/api/v1/auth/"


  constructor(private http:HttpClient) {

    this.checkAuthenticity();

   }


  is_login:any=new BehaviorSubject<boolean>(false)

  


  register(user: User): Observable<any>{
    return this.http.post<User>(`${this.apiUrl}signup`, user);
  }


  authenticateUser(user:any):Observable<any>{

    return this.http.post<User>(`${this.apiUrl}signin`, user);

  }


  logout() {
    localStorage.removeItem("token");   
    this.is_login.next(false);
    console.log("make a logout");
             
  }

checkAuthenticity(){

if (localStorage.getItem("token")) {

  this.is_login.next(true)
  
}

else{

  this.is_login.next(false)
  
  

}


  }




}
