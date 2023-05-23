$(".menu-hamburguer").click(function () {
  toggleMenu(true);
});

$("#botao-fechar, .click").click(function () {
  toggleMenu(false);
});

$("#img-scroll").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

function toggleMenu(open) {
  if (open) {
    $(".menu").removeClass("right");
    $("#botao-fechar").removeClass("right");
    $("#fundo-menu").css("display", "flex");
  } else {
    $(".menu").addClass("right");
    $("#botao-fechar").addClass("right");
    setTimeout(function () {
      $("#fundo-menu").css("display", "none");
    }, 450);
  }
}
