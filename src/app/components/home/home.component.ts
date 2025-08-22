import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductSliderComponent } from "../product-slider/product-slider.component";
import { ProductsComponent } from "../products/products.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { FeedbacksComponent } from "../feedbacks/feedbacks.component";
import { CompaniesComponent } from "../companies/companies.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductSliderComponent, ProductsComponent, AboutUsComponent, GalleryComponent, FeedbacksComponent, CompaniesComponent,
  CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  categories:any[]=[]
  isMobile:boolean=false

  
  customOptions: OwlOptions = {
    loop: true,
    margin: 100,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    navSpeed:700,
    autoplaySpeed: 800, // 0.8s smooth animation
    navText:['',''],
    autoplayHoverPause: true,
    responsive: {
      0:   { items: 2 },
      400: { items: 3 },
      740: { items: 4 },
      940: { items: 6 }
    }
  };




  ngOnInit(): void {
    

    this.categories=[

      {id:"1",categoryImage:"gift-box.svg.png",categoryName:"Gifts Box",categoryItemsNumber:30},
      {id:"2",categoryImage:"home.svg fill.png",categoryName:"Home &<br>Living Gifts",categoryItemsNumber:25},
      {id:"3",categoryImage:"jewelry.svg.png",categoryName:"Jewelry &<br>Accessories",categoryItemsNumber:15},
      {id:"4",categoryImage:"garment.svg.png",categoryName:"Garment<br>Care",categoryItemsNumber:5},
      {id:"5",categoryImage:"office.svg.png",categoryName:"Office &<br>Stationery",categoryItemsNumber:30},

    ]


    this.checkScreen();
    window.addEventListener('resize', () => this.checkScreen());




  }


  checkScreen() {
    this.isMobile = window.innerWidth <= 900;
  }

}
