
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-companies',
  standalone: true,                       // ✅ IMPORTANT
  imports: [CommonModule, CarouselModule],// ✅ Now these imports take effect
  
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'] // ✅ plural
  // ❌ remove schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompaniesComponent implements OnInit {

  slidesStore:any[]=[]


  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
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
  

  this.slidesStore=[



    {id:"1",src:"company1.png"},
    {id:"2",src:"company2.png"},
    {id:"3",src:"company3.png"},
    {id:"4",src:"company4.png"},
    {id:"5",src:"company5.png"},
    {id:"6",src:"company6.png"},




  ]


}


}
