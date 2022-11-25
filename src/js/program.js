$('[data-tab-index]').click(function () {
    const index = $(this).attr('data-tab-index');
    $('[data-tab-content]').removeClass('active');
    $('[data-tab-index]').removeClass('active');
    $(this).addClass('active');
    $(`[data-tab-content=${index}]`).addClass('active');
    if ($(this).attr('data-scroll')) {
        const index = $(this).attr('data-tab-index');
        $('[data-tab-index]').removeClass('active');
        $(`[data-tab-index=${index}]`).addClass('active');
        $('html,body').stop().animate({ scrollTop: $(`[data-tab-content=${index}]`).offset().top }, 1000);
        $(`[data-tab-content=${index}]`).find('.js-toggler').addClass('active');
        $(`[data-tab-content=${index}]`).find('.product-page__media-content').slideDown();
        $(`[data-tab-content=${index}]`).find('.product-page__media-content').addClass('active');
    }
});