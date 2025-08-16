import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Button } from "primeng/button";
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-slider',
  imports: [CarouselModule,CommonModule],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent implements OnInit {


  product_service=inject(ProductsService)


  products:any=[]


  responsiveOptions: any[] = [
    {
      breakpoint: '1024px', // tablets & small desktops
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px', // small tablets
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '575px', // mobile
      numVisible: 1,
      numScroll: 1
    }
  ];
  



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
