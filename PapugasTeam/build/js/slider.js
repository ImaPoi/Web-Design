 $(document).ready(function()
 {

    $('.slider-for').slick({
        infinite: true,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 1500,
        order: 3
    });

    $('.slider-nav').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.slider-for'
    });
 });