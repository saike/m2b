
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
  //initialize parse app
//  Parse.initialize("6c7PoiqrEQcqfOArTl1v1LertvT6CyjmvcWecxEu", "eVZsJCCgr5fC27FZXOio9hk9oKXiFRijo1La8Gt6");

	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').height());
	});
	// show/hide menu
	$('.show-menu a').on('click', function(e) {
		e.preventDefault();
		$(this).fadeOut(100, function(){ $('nav').slideDown(); });
	});
	$('.hide-menu a').on('click', function(e) {
		e.preventDefault();
		$('nav').slideUp(function(){ $('.show-menu a').fadeIn(); });
	});	
	
    /*
        Fullscreen background
    */
    $('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.single-feature-container.section-container-full-bg').backstretch("assets/img/backgrounds/1.jpg");
    $('.call-to-action-container').backstretch("assets/img/backgrounds/1.jpg");
    $('.contact-container').backstretch("assets/img/backgrounds/2.jpg");
    
    /*
        Wow
    */
    new WOW().init();
	
	/*
        FAQ
    */
	$('.single-faq span').on('click', function(){
		var this_p = $(this).siblings('.single-faq-text');
		var this_icon = $(this).find('i');
		if(this_p.css('display') == 'none') {
			this_p.slideDown(400);
			this_icon.removeClass('fa-plus').addClass('fa-minus');
		} 
		else {
			this_p.slideUp(400);
			this_icon.removeClass('fa-minus').addClass('fa-plus');
		}
	});
	
	/*
	    Testimonials
	*/
	$('.testimonial-active').html('<p>' + $('.testimonial-single:first p').html() + '</p>');
	$('.testimonial-single:first .testimonial-single-image img').css('opacity', '1');
	
	$('.testimonial-single-image img').on('click', function() {
		$('.testimonial-single-image img').css('opacity', '0.5');
		$(this).css('opacity', '1');
		var new_testimonial_text = $(this).parent('.testimonial-single-image').siblings('p').html();
		$('.testimonial-active p').fadeOut(300, function() {
			$(this).html(new_testimonial_text);
			$(this).fadeIn(400);
		});
	});
	
	/*
	    Subscription form
	*/
	$('.success-message').hide();
	$('.error-message').hide();
	
//	$('.subscribe form').submit(function(e) {
//		e.preventDefault();
//	    var postdata = $('.subscribe form').serialize();
//	    $.ajax({
//	        type: 'POST',
//	        url: 'assets/subscribe.php',
//	        data: postdata,
//	        dataType: 'json',
//	        success: function(json) {
//	            if(json.valid == 0) {
//	                $('.success-message').hide();
//	                $('.error-message').hide();
//	                $('.error-message').html(json.message);
//	                $('.error-message').fadeIn();
//	            }
//	            else {
//	                $('.error-message').hide();
//	                $('.success-message').hide();
//	                $('.subscribe form').hide();
//	                $('.success-message').html(json.message);
//	                $('.success-message').fadeIn();
//	            }
//	        }
//	    });
//	});
	
	/*
	    Contact form
	*/
	$('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
		$('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
	});
//	$('.contact-form form').submit(function(e) {
//		e.preventDefault();
//	    $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
//	    var postdata = $('.contact-form form').serialize();
//	    $.ajax({
//	        type: 'POST',
//	        url: 'assets/contact.php',
//	        data: postdata,
//	        dataType: 'json',
//	        success: function(json) {
//	            if(json.emailMessage != '') {
//	                $('.contact-form form .contact-email').addClass('contact-error');
//	            }
//	            if(json.subjectMessage != '') {
//	                $('.contact-form form .contact-subject').addClass('contact-error');
//	            }
//	            if(json.messageMessage != '') {
//	                $('.contact-form form textarea').addClass('contact-error');
//	            }
//	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
//	                $('.contact-form form').fadeOut('fast', function() {
//	                    $('.contact-form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
//	                    // reload background
//	    				$('.contact-container').backstretch("resize");
//	                });
//	            }
//	        }
//	    });
//	});

  //our code
  var gif = document.createElement('img');
  gif.src = 'assets/img/screens/animation.gif';
  $(gif).addClass('gif_screen');
  $(gif).on('load', function(){
    $('.phone_keeper.gif').append(gif);
  });

  //cheats
  function rotate (elm) {

    var plusOrMinus, randAngle, randDelay;

    var $rota = $(elm),
      degree = 0,
      timer;

    function spin() {
      $rota.css({ transform: 'rotate(' + degree + 'deg) scale(' + (Math.random() * (2 - 0.5) + 0.5) +')', zIndex: (Math.random() * 100) });   // rotate element
      plusOrMinus = Math.random() < 0.5 ? -1 : 1;       // random spin direction
      randAngle = Math.floor(Math.random()*70+50) * plusOrMinus; // random degrees
      randDelay = Math.floor(Math.random()*3000);  //random delay
      timer = setTimeout(function() {  // set delay
        degree += randAngle;  // add random degree to current variable
        spin(); // loop it
      },randDelay);
    }

    spin();    // start first spin for element

  }

  var cheatStreak = '';

  $(document).on('keyup', function (e) {
    if (cheatStreak.length > 30) cheatStreak = '';
    if (e.keyCode <= 90 && e.keyCode >= 65) {
      cheatStreak += String.fromCharCode(e.keyCode);
    }
    activateCheat(cheatStreak);
  });

  function activateCheat(phrase){
    if(phrase.indexOf('BABOS') >= 0) {
      $.each($('div,p,span,a,img,section,h1,h2'), function(k,v){
        rotate(v);
        $(v).addClass('cheat_item');
      });
      cheatStreak = '';
    }
  }

  $('.callback_form').on('submit', function(e){

    e.preventDefault();

    var form = this;

    $.ajax({
      url: 'https://api.kickofflabs.com/v1/48063/subscribe',
      data: $(form).serialize(),
      dataType: 'jsonp',
      jsonp: 'jsonp',
      jsonpCallback: 'message_callback',
      timeout: 2000,
      error: function() {
        var message = 'Возникла ошибка при отправке сообщения';
        alert(message);
      }
    });

    return false;
  });

  window.message_callback = function(data)
  {
    console.dir(data);
    $('.contact-form form').fadeOut('fast', function() {
      $('.contact-form').append('<p>Ваше сообщение отправлено. Мы сделаем все, чтобы ответить на него в течение 45 минут.</p>');
      // reload background
      $('.contact-container').backstretch("resize");
    });
  };

  $('.pres_form').on('submit', function(e){

    e.preventDefault();

    var form = this;

    $.ajax({
      url: 'https://api.kickofflabs.com/v1/48064/subscribe',
      data: $(form).serialize(),
      dataType: 'jsonp',
      jsonp: 'jsonp',
      jsonpCallback: 'request_callback',
      timeout: 2000,
      error: function() {
        var message = 'Возникла ошибка при запросе, попробуйте еще раз';
        $('.success-message').hide();
        $('.error-message').hide();
        $('.error-message').html(message);
        $('.error-message').fadeIn();
      }
    });

    return false;
  });

  window.request_callback = function(data)
  {
    console.dir(data);
    $('.error-message').hide();
    $('.success-message').hide();
    $('.subscribe form').hide();
    $('.success-message').html('Спасибо. Мы вышлем Вам презентацию в ближайшее время на адрес: ' + data.email);
    $('.success-message').fadeIn();
  };

});



