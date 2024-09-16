import Swiper from 'swiper';
import { Navigation, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

function lineMenuSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, FreeMode],
    direction: 'horizontal',
    loop: false,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 36,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 18
      },
      767: {
        spaceBetween: 36
      }
    }
  });
}

export default lineMenuSwiper;


