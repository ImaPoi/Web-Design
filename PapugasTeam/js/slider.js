 $(document).ready(function()
 {

    $('.quote-pep').slick({
        infinite: true,
        fade: true,
        asNavFor: '.quote-pic'
    });

    $('.quote-pic').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        centerMode: true,
        asNavFor: 'quote-pep'
    });
 });