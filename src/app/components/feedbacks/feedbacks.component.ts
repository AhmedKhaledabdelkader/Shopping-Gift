import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-feedbacks',
  imports: [CarouselModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent implements OnInit {

  feedbacks:any[]=[]


  responsiveOptions: any[] = [
    {
      breakpoint: '1024px', // tablets & small desktops
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '768px', // small tablets
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px', // mobile
      numVisible: 1,
      numScroll: 1
    }
  ];
  



  ngOnInit(): void {
    


    this.feedbacks = [
      {
        username: "John Carter",
        userImage: "https://randomuser.me/api/portraits/men/1.jpg",
        feedback: "I was really impressed with how quickly my order arrived. The product quality is outstanding, and it looks even better in person. I’ve already recommended it to several friends and will definitely purchase again from this store in the future."
      },
      {
        username: "Emma Watson",
        userImage: "https://randomuser.me/api/portraits/women/2.jpg",
        feedback: "The packaging was so neat and professional, which really made me feel that the company values its customers. The item itself is flawless, works perfectly, and the price was reasonable. I’m beyond happy with my shopping experience here."
      },
      {
        username: "Michael Brown",
        userImage: "https://randomuser.me/api/portraits/men/3.jpg",
        feedback: "From start to finish, the process was smooth and hassle-free. The website was easy to navigate, checkout was fast, and my order came earlier than expected. Everything was well-packed and in perfect condition. I’ll definitely be coming back soon."
      },
      {
        username: "Sophia Miller",
        userImage: "https://randomuser.me/api/portraits/women/4.jpg",
        feedback: "I really appreciate the effort that was put into making sure the product arrived safely. It’s clear that a lot of thought went into the design as well. The material feels premium, and it’s exactly what I was hoping for."
      },
      {
        username: "Daniel Wilson",
        userImage: "https://randomuser.me/api/portraits/men/5.jpg",
        feedback: "While the delivery took a bit longer than expected, I was pleasantly surprised by the quality when it arrived. The craftsmanship is excellent, and it’s clear that this is made to last. I’m very happy with my purchase overall."
      },
      {
        username: "Olivia Davis",
        userImage: "https://randomuser.me/api/portraits/women/6.jpg",
        feedback: "I’ve had mixed experiences shopping online, but this time everything went perfectly. The product matched the description exactly, the color was accurate, and it feels durable. I can see myself using it for years to come without any issues."
      },
      {
        username: "James Smith",
        userImage: "https://randomuser.me/api/portraits/men/7.jpg",
        feedback: "The customer support team was extremely helpful when I had a question before ordering. They responded quickly and gave me all the information I needed. The product is fantastic, and the whole process felt very smooth and professional."
      },
      {
        username: "Isabella Garcia",
        userImage: "https://randomuser.me/api/portraits/women/8.jpg",
        feedback: "Everything about this order went beyond my expectations. The website was easy to use, shipping updates were regular, and the item itself was in perfect shape. It’s rare to find such a reliable store, but this is definitely one."
      },
      {
        username: "William Johnson",
        userImage: "https://randomuser.me/api/portraits/men/9.jpg",
        feedback: "The design of the product is both functional and stylish, which is exactly what I wanted. It feels very sturdy and well-made. I’ve received a lot of compliments already and have recommended this store to my colleagues and friends."
      },
      {
        username: "Mia Martinez",
        userImage: "https://randomuser.me/api/portraits/women/10.jpg",
        feedback: "I was worried about ordering online without seeing the item in person, but I’m glad I took the chance. The quality is fantastic, and it arrived well-packaged. I’m already considering buying another one as a gift for someone else."
      },
      {
        username: "Ethan Lee",
        userImage: "https://randomuser.me/api/portraits/men/11.jpg",
        feedback: "This was my first time ordering from this store, and I’m really impressed. The whole experience was stress-free, and the final product exceeded my expectations. I will definitely be a returning customer after such a smooth and pleasant purchase."
      },
      {
        username: "Charlotte Taylor",
        userImage: "https://randomuser.me/api/portraits/women/12.jpg",
        feedback: "I love how this product looks and feels. It’s clear that a lot of care went into making it. It also came with detailed instructions, which made it easy to set up and start using right away without any hassle."
      },
      {
        username: "Alexander White",
        userImage: "https://randomuser.me/api/portraits/men/13.jpg",
        feedback: "The service I received was excellent from start to finish. The team kept me updated on the progress of my order, and it arrived exactly when they said it would. The product is of high quality and works perfectly as intended."
      },
      {
        username: "Amelia Thomas",
        userImage: "https://randomuser.me/api/portraits/women/14.jpg",
        feedback: "I’ve ordered similar products before, but none have matched the level of quality I found here. The details are spot on, and it feels very durable. I can confidently say I will be shopping here again without hesitation in the future."
      },
      {
        username: "Benjamin Harris",
        userImage: "https://randomuser.me/api/portraits/men/15.jpg",
        feedback: "The ordering process was so straightforward, and the delivery was quicker than I expected. The product is exactly as described and feels very solid. I’m sure it will last a long time, and I couldn’t be happier with my purchase."
      },
      {
        username: "Harper Clark",
        userImage: "https://randomuser.me/api/portraits/women/16.jpg",
        feedback: "This product has already made a big difference for me. It’s practical, well-designed, and easy to use. I can see that it was built to last, and it has made my daily routine much more convenient and enjoyable overall."
      },
      {
        username: "Lucas Rodriguez",
        userImage: "https://randomuser.me/api/portraits/men/17.jpg",
        feedback: "I wasn’t sure what to expect when I placed my order, but I’ve been pleasantly surprised. The item is exactly as shown in the photos, and the craftsmanship is excellent. I feel like I’ve made a very smart purchase here."
      },
      {
        username: "Evelyn Lewis",
        userImage: "https://randomuser.me/api/portraits/women/18.jpg",
        feedback: "The updates I received during the shipping process were very reassuring. The product arrived in great condition, and I could tell it had been packed with care. It works perfectly, and I’m confident it will last me for a long time."
      },
      {
        username: "Henry Walker",
        userImage: "https://randomuser.me/api/portraits/men/19.jpg",
        feedback: "I’m very pleased with the level of service and attention to detail from this company. The item is exactly what I needed, and it’s been performing wonderfully. I will definitely continue to buy from them in the future without hesitation."
      },
      {
        username: "Abigail Hall",
        userImage: "https://randomuser.me/api/portraits/women/20.jpg",
        feedback: "Overall, I had a fantastic experience shopping here. The customer service team was quick to respond to my questions, the product is top-notch, and the delivery was right on schedule. I will certainly be recommending this store to others."
      }
    ];
    
    




  }


}
