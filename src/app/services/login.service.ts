import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoginClicked = new BehaviorSubject(false);

  openLogin() {
    this.isLoginClicked.next(true);
    this.isCreateAccountClicked.next(false);
  }

  closeLogin() {
    this.isLoginClicked.next(false);
  }


  isCreateAccountClicked = new BehaviorSubject(false);

  openCreateAccount() {
    this.isCreateAccountClicked.next(true);
    this.isLoginClicked.next(false);
    console.log("open create account");
    
  }

  closeCreateAccount() {
    this.isCreateAccountClicked.next(false);
  }




}
