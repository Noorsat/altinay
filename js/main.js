$('.offtop__slider').slick({
    arrows:true,
    autoplay:true,
    infiinite:true,
    fade:true,
    speed:500,
});

function change(element){
    if (element.textContent === 'Политика'){
        $('.politics').toggleClass('active');
        $('.world').removeClass('active');
        $('.show').removeClass('active');
    }else if (element.textContent === 'Мир'){
        $('.world').toggleClass('active');
        $('.politics').removeClass('active');
        $('.show').removeClass('active');
    }else if (element.textContent === 'Шоубиз'){
        $('.show').toggleClass('active');
        $('.politics').removeClass('active');
        $('.world').removeClass('active');
    }
}

$("#politics").click(function() {
    $('html, body').animate({
        scrollTop: $('.politics').offset().top
    }, 1000);   
});

$("#world").click(function() {
    $('html, body').animate({
        scrollTop: $('.world').offset().top
    }, 1000);   
});

$("#show").click(function() {
    $('html, body').animate({
        scrollTop: $('.show').offset().top
    }, 1000);   
});
