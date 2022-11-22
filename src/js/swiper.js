window.addEventListener('load', function (event) {

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    lazy: true,
    autoplay:{
      delay: 3000
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

});
