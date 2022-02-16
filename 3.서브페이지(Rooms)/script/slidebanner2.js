 $(function(){
    /*시설*/
    var swiper = new Swiper(".mySwiper", {
      loop: false,
      spaceBetween: 55,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });

    var swiper = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 55,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  
});