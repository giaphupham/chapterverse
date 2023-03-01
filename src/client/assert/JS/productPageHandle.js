const swiper = new Swiper('.slider', {
    // Optional parameters
    slidesPerView: 1,
    centerSilde: 'true',
    //grapCursor: 'true',
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

  });


const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const num = document.querySelector('.num')
var counter = 1

plus.addEventListener("click", ()=>{
    counter++;
    counter = (counter < 10) ? "0" + counter : counter ;
    num.innerText = counter;
})

minus.addEventListener("click", ()=>{
    if(counter > 1){
        counter--;
        counter = (counter < 10) ? "0" + counter : counter ;
        num.innerText = counter;
    }
});


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
