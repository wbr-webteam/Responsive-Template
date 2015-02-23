
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



// Bootstrap Speakers Live Search
$(document).ready(function(){
	$(".search").keyup(function(){
		var str = $(".search").val();
		$(".speaker-listing").each(function(index){
			if($(this).attr("id")){
				if(!$(this).attr("id").match(new RegExp(str, "i"))){
					$(this).fadeOut("10");
 				}else{
					$(this).fadeIn("10");
 				}
			}
		});		
	});
});

// Sponsor Strip                                 
$('.sponslider1').cycle({ fx: 'fade', speed: 300, timeout: 2000 });
$('.sponslider2').cycle({ fx: 'fade', speed: 600, timeout: 2000 });
$('.sponslider3').cycle({ fx: 'fade', speed: 900, timeout: 2000 });
                                                  