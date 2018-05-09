$(document).ready(function() 
{

	// Fade in/out Main menu and Logo on scroll
	$(window).on('scroll', function() {
	    if ($(this).scrollTop() > 100) {
	        // $(".main-menu, .menu-logo:not(.mobile)").stop(true).fadeTo(200, 0);
	    } else {
	        // $(".main-menu, .menu-logo:not(.mobile)").stop(true).fadeTo(200, 1);
	    }
	});

	// This function loops all the slider images
	$("#slider-list li").click(function(){
		$(this).fadeOut(200, function(){
			if ($(this).next().size() > 0) {
				$(this).next().fadeIn(200);
			}
			else {
				$("#slider-list li").first().fadeIn(200);
			}
		});
		$(".bx-pager-link").each(function(){
			$(this).removeClass("active");
		});
	});

	$("#about-allin").click(function(){
		$("#about-allin-popup").fadeIn();
	});

	$("#about-close").click(function(){
		$("#about-allin-popup").fadeOut();
	});

	$("#tech-btn").click(function(){
		$(".hidden-desc").toggleClass('active-desc');
	});

	

	if($('body').hasClass('page-lookbook')) return false;
	var articleCarousel = $(".article-cover .owl-carousel");
	articleCarousel.owlCarousel({
		  autoPlay: true,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
	      navigation: true,
	      navigationText : false,
	      afterInit : function(el) {
			el.trigger('owl.jumpTo', 1) ///start on 4th position
		  }
	  });

	$(".size-options li").click(function(){
		$( ".size-options li" ).each(function( index ) {
		  $(this).removeClass("active");
		});
		
		$("#product-options form input[type='hidden']").attr("value", $(this).attr("value"));
		$(this).addClass("active");
	});

	$(".product-related span").click(function(){
		$(this).next().toggleClass('active');
	});

	$("#lens-options li").click(function(){
		$("#lens-options li").removeClass('active');
		$(this).toggleClass("active");
		var lensOptions = $(this).text();

		$(".goggle-thumb").fadeOut();
		$(".price-collection").fadeOut('fast');

		$(".goggle-thumb").each(function(){
			if(lensOptions == 'polarized'){
				$(".caps-container").fadeOut("fast");
				$(".polarized").fadeIn("fast");
				$(".text-goggle").fadeIn();
			}
			else if (lensOptions == 'sun lens'){
				$(".caps-container").fadeOut("fast");
				$(".sun-lens").fadeIn("fast");
				$(".text-goggle").fadeIn();
			}
			else if (lensOptions == 'optic'){
				$(".caps-container").fadeOut("fast");
				$(".optic").fadeIn("fast");
				$(".text-goggle").fadeIn();
			}
			else if (lensOptions == 'caps'){
				$(".caps-container").fadeIn("fast");
				$(".caps-thumb").fadeIn("fast");
				$(".text-goggle").fadeOut();
			}
		});

	});
	
	$(".japon").fadeIn();
	$(".voltaire").fadeIn();

	$(".menu-btn").click(function(){
		$("#menu-wrapper").toggleClass("active");
		$("#menu-to-stick").toggleClass("active");
	});

	var typeChosen = 1;

	$("#all-toggle").click(function(){
		
		$('.toggle-types').removeClass('active');
		$(this).toggleClass('active');

		if(typeChosen == 2) {
			$('.optical-type').toggleClass('active-glasses');
		} else if (typeChosen == 3) {
			$('.sun-lenses-type').toggleClass('active-glasses');
		}
		else {}
		typeChosen = 1;
	});

	$("#sunlenses-toggle").click(function(){
		if(typeChosen == 1) {
			$('.toggle-types').removeClass('active');
			$(this).toggleClass('active');
			$('.optical-type').toggleClass('active-glasses');
			typeChosen = 2;
		}
		else if(typeChosen == 3) {
			$('.toggle-types').removeClass('active');
			$(this).toggleClass('active');
			$('.goggle-thumb').toggleClass('active-glasses');
			typeChosen = 2;
		}
		else {

		}
	});	

	$(".shop-btn").click(function(){
		$(".shop-btn").removeClass("active");
		$(this).toggleClass('active');
	});

	$("#optical-toggle").click(function(){
		if(typeChosen == 1) {
			$('.toggle-types').removeClass('active');
			$(this).toggleClass('active');
			$('.sun-lenses-type').toggleClass('active-glasses');
			typeChosen = 3;
		}
		else if(typeChosen == 2) {
			$('.toggle-types').removeClass('active');
			$(this).toggleClass('active');
			$('.goggle-thumb').toggleClass('active-glasses');
			typeChosen = 3;
		} else {}
	});

	$('#slider-list').bxSlider({
	  mode: 'fade',
	  captions: false
	});

	$('#slider-list-mobile').bxSlider({
	  mode: 'fade',
	  captions: false
	});

	$("#menu-to-stick").sticky({topSpacing:0});

	resizeCollection();

	function resizeCollection() {
		var windowWith = $(window).width();
		if ($(window).width() < 768) {
			var swiperVoltaire = new Swiper('.swiper-container-voltaire', {
			    speed: 400,
			    loop: true
			});
			  var swiperJapon = new Swiper ('.swiper-container-japon', {
			    speed: 400,
			    loop: true,
			  })   

			var swiperYork = new Swiper('.swiper-container-york', {
			    speed: 400,
			    loop: true
			});

			var swiperDunk = new Swiper('.swiper-container-dunk4', {
			    speed: 400,
			    loop: true
			});
		}

	}
  
  	var windowWith = $(window).width();
  	var firstHaftDesktop = $('#first-haft-desktop');
  if ($(window).width() < 768) {
  	$( ".full" ).prepend( firstHaftDesktop );
  }


});

$(document).on('pageinit', "[data-role='page']", function(){

	$(".goggles").on("swipeleft",function(){

		var currentPosition = parseInt($(this).css('left'));
		var windowWith = $(window).width();
		var newPos = currentPosition - windowWith;
	 	$(this).animate({
    		left: newPos
  		}, 300, function() {

  		});
	});

	$(".goggles").on("swiperight",function(){
		var currentPosition = parseInt($(this).css('left'));
		if(currentPosition != 0){
			var windowWith = $(window).width();
			var newPos = currentPosition + windowWith;
		 	$(this).animate({
	    		left: newPos
	  		}, 300, function() {

	  		});
		}
	});

});

$( document ).ready(function() {


  if ($(window).width() < 992) {
      $( "#mobile-ready" ).insertBefore( "#here" );
    }

  var $slideNumber = $('.item.active').data('carousel');

  $( ".slide-number" ).replaceWith( $slideNumber );

  
  var video = $('#theVideo');
  
  var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
  var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
  var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
  var is_safari = navigator.userAgent.indexOf("Safari") > -1;
  var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
  if ((is_chrome)&&(is_safari)) {is_safari=false;}
  if ((is_chrome)&&(is_opera)) {is_chrome=false;}
  
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    
  	$(video).prop('muted', true); //mute
  
  }
 
  
});