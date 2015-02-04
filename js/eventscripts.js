
//Agenda Show toggle
$('#toggle').click(function(){
  $('.panel-collapse.in')
    .collapse('hide');
  	$(this).text(function(i, text){
  	    return text === "- Show Less" ? "+ Show More" : "- Show Less";
  	})
});
$('#toggle').click(function(){
  $('.panel-collapse:not(".in")')
    .collapse('show');
});
