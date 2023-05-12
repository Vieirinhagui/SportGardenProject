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

$("#img-scroll").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
