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
    delay: 5000,
  },
});

$(".menu-hamburguer").click(function () {
  $(".menu").removeClass("right");
  $("#fundo-menu").css("display", "flex");
});

$("#botao-fechar").click(function () {
  $(".menu").addClass("right");
  setTimeout(() => {
    $("#fundo-menu").css("display", "none");
  }, 450);
});

$(".click").click(function () {
  $(".menu").addClass("right");
  setTimeout(() => {
    $("#fundo-menu").css("display", "none");
  }, 450);
});
