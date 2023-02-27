const swiper1 = new Swiper('.container', {
    // Optional parameters
    slidesPerView: 5,
    centerSilde: 'true',
    spaceBetween: 30,
    //grapCursor: 'true',
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
    breakpoints:{
      0:{
        slidesPerView:1
      },
      520:{
        slidesPerView:2
      },
      950:{
        slidesPerView:3
      },
      1000:{
        slidesPerView:4
      },
      1200:{
        slidesPerView:5
      }
    }
  });

const swiper2 = new Swiper('.mySwiper', {
  // Optional parameters
  slidesPerView: 1,
  centerSilde: 'true',
  loop: true,
  //grapCursor: 'true',
  // If we need pagination
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

});