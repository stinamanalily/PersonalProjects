$('#dropmenu ul li')
.css({cursor: "pointer"})
.on('click', function(){
  $(this).find('ul').toggle();
})
