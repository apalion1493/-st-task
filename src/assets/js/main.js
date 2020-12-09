import './config/jqueryLoad';
import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/popper.min';
import 'slick-carousel/slick/slick.min';

$('.carousel').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    fade: true,
    cssEase: 'linear'
});

$('.slider').slick({
    infinite: false,
    variableWidth: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: $('.slider-btn_prev'),
    nextArrow: $('.slider-btn_next'),
    responsive: [
        {
            breakpoint: 767.98,
            settings: {
                centerMode: true,
                infinite: true,
            }
        }
    ]
});


// import 'owl.carousel/dist/owl.carousel';

// $('.owl-carousel').owlCarousel({
//     margin:27,
//     loop:false,
//     autoWidth:true,
//     items:3
// });

// let owl = $('.carousel');
//
// owl.owlCarousel({
//     items: 1,
//     lazyLoad: true,
//     dots: false,
//     nav: false,
// });
//
// $(".next").click(function(){
//     owl.trigger("next.owl.carousel");
// });
// $(".prev").click(function(){
//     owl.trigger("prev.owl.carousel");
// });

let header = $('#header');
let modalContainer = $('.modal-block');
let modalHeader = $('#modal-header');
let scrollPrev = 0;

function scrollFixedBlock(num, header) {
    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
        if ( scrolled > num && scrolled > scrollPrev ) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });
}
scrollFixedBlock(78, header);


$(modalContainer).scroll(function() {
    let scrolled = $(modalContainer).scrollTop();
    if ( scrolled > 160) {
        modalHeader.addClass('out');
    } else {
        modalHeader.removeClass('out');
    }
    scrollPrev = scrolled;
});


$('#instagram-btn').click(function () {
    if ($('.instagram-item').hasClass('d-none')) {
        $('.instagram-item').removeClass('d-none')
    }
})




