(function ($) {
  $(function () {});
})(jQuery);

$("html,h4,.glitchy_wrapper").click(function () {
  //location.reload();
  $(".glitchy_wrapper").load(" .glitchy_wrapper > *");
});

$(document).ready(function () {
  $(window).scroll(function () {
    $("#glitchy").css("opacity", 1 - $(window).scrollTop() / 900);
  });
});
