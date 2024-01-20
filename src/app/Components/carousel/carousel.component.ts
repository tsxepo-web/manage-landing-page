import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 16,
      // autoplay: true,
      loop: true,

      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        768: {
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 16,
        },
      },
      on: {
        resize: function () {
          swiper.update();
        },
      },
    });
  }
}
