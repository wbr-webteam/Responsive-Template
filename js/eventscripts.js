//Agenda Show toggle
$(document).ready(function(){
	// Dyanmically add the plus/minus toggle to the header 
	$('.panel-collapse').has('.panel-body').prev().children('h4').prepend('<i class="fa fa-plus-circle text-grey"></i> ');
  
	$('#toggle').click(function() {
	    if ($('.panel-collapse').hasClass('in')){
	        $('.panel-collapse').removeClass('in');  
			$('#toggle').html('+ Show More'); 
			$('.panel-title i').toggleClass('fa-minus-circle').toggleClass('fa-plus-circle');
	     
	    } else {
	        $('.panel-collapse').addClass('in');
			$('#toggle').html('- Show Less'); 
			$('.panel-title i').toggleClass('fa-minus-circle').toggleClass('fa-plus-circle');
  	      }
	});
});

// Handles the toggle of a single onclick panel event 
$(document).ready(function() {
   $(".panel-title").click(function() {
	  $(this).children().toggleClass('fa-minus-circle');
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
$('.sponslider1').cycle({ fx: 'fade', speed: 900, timeout: 2000 });
$('.sponslider2').cycle({ fx: 'fade', speed: 900, timeout: 2000 });
$('.sponslider3').cycle({ fx: 'fade', speed: 900, timeout: 2000 });
                          