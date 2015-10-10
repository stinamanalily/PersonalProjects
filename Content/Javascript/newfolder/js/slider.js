var main = function() {
   
   $("#about").click(function() {
    var currentSlide = $('.active-slide');

    var thisSlide = $('.about');
    
    currentSlide.fadeOut(600).removeClass('active-slide');
	thisSlide.fadeIn(600).addClass('active-slide');

  });

   $("#contact").click(function() {
    var currentSlide = $('.active-slide');

    var thisSlide = $('.contact');
    
    currentSlide.fadeOut(600).removeClass('active-slide');
	thisSlide.fadeIn(600).addClass('active-slide');
  });
  
   $("#portfolio").click(function() {
    var currentSlide = $('.active-slide');

    var thisSlide = $('.portfolio');
    
    currentSlide.fadeOut(600).removeClass('active-slide');
	thisSlide.fadeIn(600).addClass('active-slide');

  });
}
 
$(document).ready(main);