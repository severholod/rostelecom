$(document).ready(function(){
	var $page = $('html, body');
	$('.header-nav__item a').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 85
	    }, 1000);
	    return false;
	});
	/*------------------Попапы--------------------*/
	$('.fancybox').fancybox({
		maxWidth: 400,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	$('.message').fancybox({
		maxWidth: 690,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	/*--------------------------------------------*/
	/*----------------Мобильное меню-------------*/
	$('.mobile-toggler').click(function(){
		$('.overlay').toggleClass('overlay-active');
		$(".mobile-menu").toggleClass('mobile-menu-active');
		$('.mobile-toggler').toggleClass('mobile-close');
	});
	$('.overlay').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu").removeClass('mobile-menu-active');
		$('.mobile-toggler').removeClass('mobile-close');
	});
	/*------------------------------------------------*/
	/*----------------Слайдер на главной-------------*/
	var owl = $('.team-slider')
	owl.owlCarousel({
		responsiveClass:true,
		dots: false,
		nav: false,
		loop: true,
		responsive:{
      0:{
          items:1,
      },
      768:{
          items:2,
      },
      992: {
      		items: 3,
      },
      1200: {
      		items: 4,
      },
      1250:{
          items:5,
      }
    }
	});
	$('#team-prev').click(function () {
		owl.trigger('prev.owl.carousel');
	});
	$('#team-next').click(function () {
		owl.trigger('next.owl.carousel');
	});
	
	/*-----------------------------------------------*/
	/*---------------Фиксированная шапка-------------*/
	function scrollHead () {
		setInterval (function() {
			if (window.pageYOffset > 5) {
				$('.header').addClass('header-scroll');
			} else {
				$('.header').removeClass('header-scroll');
			}
		}, 300);
	};
	scrollHead();
	$(document).scroll(function() {
		scrollHead();
	});
	/*-----------------------------------------------*/

	/*-------------------- Тогглы --------------------*/
	$('.index-toggler').on('click', function(e) {
			e.preventDefault();
			if(window.innerWidth < 576) {
				$(this).toggleClass('open');
				$(this).next('.index-toggle').toggle(400);
			}
	});
	/*------------------------------------------------*/
		/*--------------------Табы-----------------------*/
		$('.tab').on('click', function() {
			var dataTab = ($(this).data('tab'));
			if($(this).hasClass('tab-disable')) {
				return false;
			}
			$('.tab').removeClass('tab-active');
			$(this).addClass('tab-active');
			$('.tab-content').removeClass('tab-content-active');
			$('.tab-content.' + dataTab).addClass('tab-content-active');
		});
	/*------------------------------------------------*/
	/*-------------------Фото-табы--------------------*/
		$('.card-photos__small-item img').on('click', function() {
			var id = $(this).data('id')
			$('.card-photos__big img').removeClass('card-photos__big-active')
			$('#' + id).addClass('card-photos__big-active')
		})
	/*------------------------------------------------*/
});