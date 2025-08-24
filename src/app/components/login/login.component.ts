import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  successMessage: string = '';
  errorMessage: string = '';
  


  login_service=inject(LoginService)


  userForm:any
  user_service = inject(UserService);



  constructor(private fb:FormBuilder){



this.userForm = this.fb.group({
    
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/)]],
  
   
  });


  }


  get button_disabled():boolean{

 
    return !this.userForm.valid
    
     }




     authenticateUser(){


      if (this.userForm.valid) {
    
    
        this.user_service.authenticateUser(this.userForm.value).subscribe({
    
    
          next:(response)=>{
    
    
            console.log(response.message);
            console.log("signin sucess");
            
            
            this.successMessage = "login successfully!";
            this.errorMessage = "";

            localStorage.setItem("token",response.token)
            
            
            this.user_service.is_login.next(true);
    
    
    
    
          },
    
          error:(err)=>{
    
    
            console.log("there is an error",err);
            
            this.errorMessage = err.error.error;
            this.successMessage = "";
    
    
          }
    
    
    
    
        })
        
      }
    
    
    
    
    }


  


  closeLogin(){


    this.login_service.closeLogin()

  }

  
}
