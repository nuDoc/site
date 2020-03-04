var swiper = new Swiper ('.swiper-container', {

    slidesPerView: 1,
    direction: 'vertical',

    mousewheel: {
    	invert: false,
  	},

    pagination: {
    	el: '.swiper-pagination',
    	type: 'bullets'
    },
    paginationClickable: true,

    spaceBetween: 30,
    loop:true,

});