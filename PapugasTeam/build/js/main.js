var modaleButton = $(".contact-but");
var  modale = $(".modale");

modaleButton.on("click", function(){
   modale.toggleClass("visually-hidden");
});

var closeButton = $(".close");
closeButton.on("click", function(){
   modale.toggleClass("visually-hidden");
});