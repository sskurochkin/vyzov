window.addEventListener('load', function (event) {

  $('.burger-icon').click(function (){
    $(this).toggleClass('active')
    $(this).closest('.header-nav').toggleClass('active')
  })

});
