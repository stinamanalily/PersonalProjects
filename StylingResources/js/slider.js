var main = function() {
   
var Visible = $('.active-slide');
   console.log( $('.active-slide').attr("class") )
   $('.opts').click(function() { 
	    
		var getSlide = $(this).attr("title");
		getSlide = '.' + getSlide;
		
		var thisSlide = $(getSlide);
		Visible.fadeOut(1000).removeClass('active-slide');
		thisSlide.fadeIn(1000).addClass('active-slide');
		Visible = thisSlide;
		
  });
}
 
$(document).ready(main); 
