var main = function() {
   
var Visible = $('.active-slide');
   console.log( $('.active-slide').attr("class") )
   $('.opts').click(function() { 
	    
		var getSlide = $(this).attr("title");
		getSlide = '.' + getSlide;
		
		var thisSlide = $(getSlide);
		//console.log('Current: ' + Visible.attr("class"))
		//console.log('New: ' + thisSlide.attr("class"))
		// REMOVE THIS SLIDE 
		Visible.fadeOut(1000).removeClass('active-slide');
		//Visible.addClass('hidden');
		//console.log('Current: ' + Visible.attr("class"))
		//console.log('New: ' + thisSlide.attr("class"))	
		// ADD THIS SLIDE
		thisSlide.fadeIn(1000).addClass('active-slide');
		//console.log('Current: ' + Visible.attr("class"))
		//console.log('New: ' + thisSlide.attr("class"))
		Visible = thisSlide;
		
  });
  
  $('.getclass').click(function() {
	
	var getClass= $('.active-slide').attr("class");
	alert(getClass);
	
  });
}
 
$(document).ready(main); 
