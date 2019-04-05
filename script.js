$(document).ready(function(){
$('.nav-button').click(function() {
$('.nav-button').toggleClass('change');
 });
 $(window).scroll(function(){
     let position=$(this).scrollTop();
     if(position>=200){
         $('.nav-menu').addClass('custom-navbar');
     } else{
        $('.nav-menu').removeClass('custom-navbar');
     }
 })
});

$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
      $('.nav-button').toggleClass('change');
    });
  });
  
    













