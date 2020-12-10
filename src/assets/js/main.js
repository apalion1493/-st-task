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

$('.btn-map-check').click(function () {
    $(this).toggleClass('active')
})

$('.btnMain').click(function () {
    $('.btn-map-check').removeClass('active');
    $(this).toggleClass('active');
})

let mapTitle = document.createElement('div');
let wrapMap = document.querySelector('#wrapMap');

mapTitle.className = 'mapTitle';
mapTitle.textContent = 'Для активации карты нажмите по ней';

wrapMap.appendChild(mapTitle);
wrapMap.onclick = function() {
    this.classList.add('active');
    this.children[0].removeAttribute('style');
    mapTitle.parentElement.removeChild(mapTitle);
};
wrapMap.onmousemove = function(event) {
    mapTitle.style.display = 'block';
    if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
    if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
};
wrapMap.onmouseleave = function() {
    mapTitle.style.display = 'none';
};
