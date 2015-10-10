var main = function() {
   
   $('.opts').click(function() { 
		var getSlide = $(this).attr("title");
		getSlide = '.' + getSlide;
		var currentSlide = $('.active-slide');
		var thisSlide = $(getSlide);
		currentSlide.fadeOut(600).removeClass('active-slide');
		thisSlide.fadeIn(1000).addClass('active-slide'); 
  });
}
 
$(document).ready(main); 
