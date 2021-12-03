$(window).scroll(function(){
    if ($(document).scrollTop() > 0) {
        $('.heading-section').css({
            'background': 'white',
            'box-shadow': '0px 5px 10px #333'
        });
        $('.logo').attr('src','./Assets/images/logo_black.png');

        $('.heading-section ul li a').css('color', 'black');
        $('.fa-bars').css('color', 'black')
    } 
    
    else {
        $('.heading-section').css({
            'background': 'linear-gradient(180deg, #000, transparent)',
            'box-shadow': 'none'
        });
        $('.logo').attr('src', './Assets/images/logo.png');

        $('.heading-section ul li a').css('color', '#fff');
        $('.fa-bars').css('color', 'white')
    }
})

$(function(){

    $('.circlechart').circlechart();
  
});