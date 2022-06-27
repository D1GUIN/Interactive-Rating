var rate = [];

var circleButton = $(".circle");
var submitButton = $(".btn-submit");

var isHide = false;

circleButton.bind('click', function(){
    rate.push(this);
    circleButton.removeClass("circlePressed");
    $(this).addClass("circlePressed");
 });

 submitButton.bind('click', function(){
    $(this).addClass("submitPressed");
    setTimeout(() => {
        submitButton.removeClass("submitPressed");
    }, 100);

    isHide = !isHide ;
    
    if (isHide) {
        $('#rating').addClass('is-hide');
        $('#congratulation').removeClass('is-hide');
    } else {
        $('#congratulation').addClass('is-hide');
        $('#rating').removeClass('is-hide');
    }
 });

function changeNo(num){
    $(".selectedRate").text('You selected ' + num + " out of 5");
}

