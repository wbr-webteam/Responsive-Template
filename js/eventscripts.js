//Agenda Show toggle
$(document).ready(function(){
	$('#toggle').click(function() {
	    if ($('.panel-collapse').hasClass('in')){
	        $('.panel-collapse').removeClass('in');  
			$('#toggle').html('+ Show More');  
	    } else {
	        $('.panel-collapse').addClass('in');
			$('#toggle').html('- Show Less');  
	      }
	});
});

// Bootstrap Speakers Live Search
$(document).ready(function(){
	//$('.search').attr( "placeholder", "Jabberwocky" ); // Change Search Box Dispaly Text
	$(".search").keyup(function(){
		var str = $(".search").val();
		$(".speaker-listing").each(function(index){
			if($(this).attr("id")){
				if(!$(this).attr("id").match(new RegExp(str, "i"))){
					$(this).fadeOut("10");
					$( ".errorbox" ).removeClass( "hidden");
     			}
			else{
					$(this).fadeIn("10");
					$( ".errorbox" ).addClass( "hidden");
  				}
			}
		});		
	});
});





// Sponsor Strip                                 
$('.sponslider1').cycle({ fx: 'fade', speed: 300, timeout: 2000 });
$('.sponslider2').cycle({ fx: 'fade', speed: 600, timeout: 2000 });
$('.sponslider3').cycle({ fx: 'fade', speed: 900, timeout: 2000 });
                          