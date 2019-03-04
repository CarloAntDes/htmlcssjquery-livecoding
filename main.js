/*
Rendere visibile la scritta “Live Coding” dentro il cerchio arancione
quando passo con il mouse sul cerchio.
*/

var event_in_h3 = $(".live_coding");

event_in_h3.mouseenter(function() {
  $("h3").css("display", "block");
});

event_in_h3.mouseleave(function() {
  $("h3").css("display", "none");
});
