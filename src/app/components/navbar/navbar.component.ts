import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  favourite_number:number=3

  cart_number:number=2

  user_service=inject(UserService)


  login_service=inject(LoginService)


  makeLogin(){

    console.log("login clicked");
    


    this.login_service.openLogin()

  }



}
