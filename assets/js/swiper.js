const swiper = new Swiper(".swiper", {  
  
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });
  const swiper1 = new Swiper(".swiperhome", {
    slidesPerView: 2,
    loop: true,
    speed:7000,
    disableOnInteraction:false,
    autoplay: {
      delay: 1000,
    },
  });
  