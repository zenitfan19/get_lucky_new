//Переключение табов
$(document).on('click', '.header-menu__link:not(active)', function(){
    $(this).addClass('active').siblings('.header-menu__link').removeClass('active');    
    $('.main-container').removeClass('active').eq($(this).index()).addClass('active'); 
    var page_number = $(this).index()+1;
    var active_header_link = $('.left-tabs__link-header*[data-page='+page_number+'].active').index()+1;
    if(((page_number==4) && (active_header_link==2)) || (((page_number==5) && (active_header_link==2)))) {
        $('.add-btn').css('display', 'block');
    } else {
        $('.add-btn').css('display', 'none');
    }   
});
$(document).on('click', '.category-name:not(active)', function(){
    $(this).addClass('active').siblings('.category-name').removeClass('active');        
});
$(document).on('click', '.left-tabs__link-header:not(active)', function(){
    var page_number = $(this).data('page');
    var active_header_link = $(this).index() + 1; 
    var active_link = $('.left-tabs__link*[data-page='+page_number+'][data-header-link='+active_header_link+'].active').index()+1;
    var active_sublink = $('.left-tabs__sublink*[data-page='+page_number+'][data-header-link='+active_header_link+'][data-link='+active_link+'].active').index()+1;
    if((page_number==5) && (active_header_link==3)) {
        $('.right-controls').css('display', 'none');
    } else {
        $('.right-controls').css('display', 'flex');
    }
    if(((page_number==4) && (active_header_link==2)) || (((page_number==5) && (active_header_link==2)))) {
        $('.add-btn').css('display', 'block');
    } else {
        $('.add-btn').css('display', 'none');
    }


    $(this).addClass('active').siblings('.left-tabs__link-header*[data-page='+page_number+']').removeClass('active');
    $('.link-header-container*[data-page='+page_number+']').removeClass('active').eq($(this).index()).addClass('active');
    $('.link-container*[data-page='+page_number+']').removeClass('active');
    $('.link-container*[data-page='+page_number+'][data-header-link='+active_header_link+'][data-link='+active_link+']').addClass('active');
    $('.link-subcontainer*[data-page='+page_number+']').removeClass('active');
    $('.link-subcontainer*[data-page='+page_number+'][data-header-link='+active_header_link+'][data-link='+active_link+'][data-sublink='+active_sublink+']').addClass('active');    
});
$(document).on('click', '.left-tabs__link:not(active)', function(){
    var page_number = $(this).data('page');
    var active_header_link = $(this).data('header-link');
    var active_link = $(this).index() + 1;
    var active_sublink = $('.left-tabs__sublink*[data-page='+page_number+'][data-header-link='+active_header_link+'][data-link='+active_link+'].active').index()+1; 
    $(this).addClass('active').siblings('.left-tabs__link*[data-page='+page_number+'][data-header-link='+active_header_link+']').removeClass('active');
    $('.link-container*[data-page='+page_number+']').removeClass('active');    
    $('.link-container*[data-page='+page_number+'][data-header-link='+active_header_link+'][data-link='+active_link+']').addClass('active'); 
    $('.link-subcontainer*[data-page='+page_number+']').removeClass('active');
    $('.link-subcontainer*[data-page='+page_number+'][data-header-link='+active_header_link+'][data-link='+active_link+'][data-sublink='+active_sublink+']').addClass('active'); 
});
$(document).on('click', '.left-tabs__sublink:not(active)', function(){
    var page_number = $(this).data('page');
    var active_header_link = $(this).data('header-link');
    var active_link = $(this).data('link');
    var active_sublink = $(this).index() + 1;       
    $(this).addClass('active').siblings('.left-tabs__sublink*[data-page='+page_number+']').removeClass('active');
    $('.link-subcontainer*[data-page='+page_number+']').removeClass('active');
    $('.link-subcontainer*[data-page='+page_number+'][data-header-link='+active_header_link+'][data-link='+active_link+'][data-sublink='+active_sublink+']').addClass('active');
});
$(document).ready(function () {
    $('.form-group__select select').SumoSelect();
    $('.optWrapper').prepend('<span><img class="select-up-arrow" src="assets/images/select-up.svg"></span>');
});
$(document).on('click', '.select-up-arrow', function(){  
    $('.SumoSelect').removeClass('open');    
});
$(document).on('click', '.CaptionCont i', function(){  
    $('.SumoSelect').addClass('open');    
});
