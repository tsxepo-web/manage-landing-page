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
      spaceBetween: 1,
      slidesPerView: 3,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      // autoplay: true,

      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
