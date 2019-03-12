//Переключение табов
$(document).on('click', '.header-menu__link:not(active)', function(){
    $(this).addClass('active').siblings('.header-menu__link').removeClass('active');   
    if($(this).index() != 0) {
        $('.main-container').removeClass('active');
    } else {
        $('.main-container').addClass('active'); 
    }
});