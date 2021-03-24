$(window).scroll(function(){
  let topOffSet = $(window).scrollTop();
  if(topOffSet >= 60){
    $(".navbar a").css({"color":"#0078FF","transition":"all 1s"});
    $(".navbar").css({"background-color": "#FFFFFF","box-shadow":"  0 2px 5px 0 rgba(0, 0, 0, 0.2)","transition":"all 1s"});
    $('.nav-link').addClass('line');
  }
  else{
    $(".navbar a").css("color","#FFFFFF");
    $(".navbar").css("background-color", "transparent");
    $('.nav-link').removeClass('line');
   
    
  }

});

var typed = new Typed('.element', {
  strings: ["CEO DevFolio","Web Developer","Web Designer","Frontend Developer","Graphic Designer"],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true
});


