window.addEventListener('load', function (event) {

  $('.to__title').each(function (){
    $(this).click(function (){
      $('.to-item').not($(this).closest('.to-item')).removeClass('active')
      $(this).closest('.to-item').toggleClass('active')
    })
  })

});
