
jQuery(document).ready(function($){
	$('.slick_banner').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  autoplay: true,
	});

	$('.slick_follow').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  centerMode: true,
	  focusOnSelect: false,
	  arrows: false,
	  infinite: true,
	  responsive: [{
	    breakpoint: 1024,
	    settings: {
	      slidesToShow: 2,
	      slidesToScroll: 1,
	      centerPadding: '40px',
	    }
	  }]
	});
});

