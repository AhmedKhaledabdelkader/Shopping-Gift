import { passwordMatchValidator } from './../../validators/password-match.validator';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-account',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit{


  successMessage: string = '';
  errorMessage: string = '';
  

login_service=inject(LoginService)


userForm:FormGroup
user_service = inject(UserService);



constructor(private fb:FormBuilder){



  this.userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/)]],
    rePassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^\+20[0-9]{10}$/)]],
    gender: ['', [Validators.required, Validators.pattern(/^(male|female)$/)]]
  });
  

}

get button_disabled():boolean{

 
  return !this.userForm.valid
  
   }

ngOnInit(): void {
}


  
  








addUser(){


  if (this.userForm.valid) {


    this.user_service.register(this.userForm.value).subscribe({


      next:(response)=>{


        console.log(response.message);
        
        this.successMessage = "User created successfully!";
        this.errorMessage = "";
        
        




      },

      error:(err)=>{


        console.log("there is an error",err);
        
        this.errorMessage = err.error.error;
        this.successMessage = "";


      }




    })
    
  }




}





}
