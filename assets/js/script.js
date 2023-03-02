const swiper = new Swiper('.swiper', {
    
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
  
  $(".click").click(function(){
    $(".menu").addClass("right");
    setTimeout(() => {
      $("#fundo-menu").css("display", "none");
    }, 450);
  })