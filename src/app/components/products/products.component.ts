import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  product_service=inject(ProductsService)


  products:any=[]


  ngOnInit(): void {


    console.log("component is intialized");

    this.getData()
    

  }


  getData(){



    this.product_service.getProducts().subscribe({


      next:(data)=>{


        console.log("data returned sucessfully");

        console.log(data);


        this.products=data
        

      },


      error:(err)=>{


        console.log("there is an error",err);
        


      },


      complete:()=>{


        console.log("returning data is completed");
        


      }

    })







  }






}
