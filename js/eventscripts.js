// Dyanmically add the plus/minus toggle to the header 
$(document).ready(function() {
	$('.panel-collapse').has('.panel-body').prev().children('.panel-title').prepend('<i class="fa fa-plus-circle"></i> ');
	$('.panel-collapse').has('in').prev().children('.panel-title').children().removeClass('fa-plus-circle').addClass('fa-minus-circle');
});

// Agenda Panel Show More/Less Toggle
$(document).ready(function() {
	$('#toggle').click(function() {
		if ($('.panel-collapse').hasClass('in')) {
			$('.panel-collapse').removeClass('in');
			$('#toggle').html('+ Show More');
			$('.panel-title').children().removeClass('fa-minus-circle').addClass('fa-plus-circle');
		} else {
			$('.panel-collapse').addClass('in');
			$('#toggle').html('- Show Less');
			$('.panel-title').children().removeClass('fa-plus-circle').addClass('fa-minus-circle');
		}
	});
});

// Agenda Single Panel Toggle
$(document).ready(function() {
	$('.panel-title').click(function() {
		$(this).children().toggleClass('fa-plus-circle').toggleClass('fa-minus-circle');
 	});
});

 
// Bootstrap Speakers Live Search
$(document).ready(function() {
	//$('.search').attr( "placeholder", "Jabberwocky" ); // Change Search Box Dispaly Text
	$(".search").keyup(function() {
		var str = $(".search").val();
		$(".speaker-listing").each(function(index) {
			if ($(this).attr("id")) {
				if (!$(this).attr("id").match(new RegExp(str, "i"))) {
					$(this).fadeOut("10");
					$(".errorbox").removeClass("hidden");
				} else {
					$(this).fadeIn("10");
					$(".errorbox").addClass("hidden");
				}
			}
		});
	});
});

// Sponsor Strip                                 
$('.sponslider1').cycle({
	fx: 'fade',
	speed: 900,
	timeout: 2000
});
$('.sponslider2').cycle({
	fx: 'fade',
	speed: 900,
	timeout: 2000
});
$('.sponslider3').cycle({
	fx: 'fade',
	speed: 900,
	timeout: 2000
});
