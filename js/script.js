new Swiper('.swiper',{
	navigation: {
	    nextEl: '.swiper-btn-prew',
	    prevEl: '.swiper-btn-next',
    },
	pagination: {
		el: '.swiper-pagination',
	},
	slidesPerView: 1.4,
	loop: true,
	spaceBetween: 20,
	slidesPerGroup: 1,
}); 

$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });

    $('.block2-title').click(function() {
    	$('.block2-list').toggleClass('open-blok');
    });

    $('.block3-title').click(function() {
    	$('.block3-list').toggleClass('open-blok');
    });
});

