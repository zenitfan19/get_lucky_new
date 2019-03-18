//Переключение табов

$(document).ready(function () {  
    $('.scrollbar-rail').scrollbar(); 
    $(document).on('click', '.hamburger', function () {
        $(document).find('.header-mobile-menu').addClass('active fadeInRight animated');
        if ($(this).hasClass('is-active')) {
              $(document).find('.header-mobile-menu').removeClass('fadeInRight');
              $(document).find('.header-mobile-menu').addClass('fadeOutRight');
        } else {
              $(document).find('.header-mobile-menu').removeClass('fadeOutRight');
        }
        $(this).toggleClass('is-active');
  });
  $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
              $(document).find('.header-mobile-menu').removeClass('fadeInRight');
              $(document).find('.header-mobile-menu').addClass('fadeOutRight');
              $(document).find('.hamburger').removeClass('is-active');
        }
  });
  $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $('.header-mobile-menu'); // тут указываем сласс элемента
        if ($('.hamburger').is(e.target) || $('.hamburger-box').is(e.target) || $('.hamburger-inner').is(e.target)) {
              return;
        }
        if (!div.is(e.target) && div.has(e.target).length === 0) { // если клик был не по нашему блоку и не по его дочерним элементам
              div.removeClass('fadeInRight');
              div.addClass('fadeOutRight'); // скрываем его
              $(document).find('.hamburger').removeClass('is-active'); // меняем значок гамбургера
        }
  });
  $(function () {
        $(window).resize(function () {
              if (screen.width > 1024) {
                    $(document).find('.hamburger').removeClass('is-active');
                    $(document).find('.header-mobile-menu').removeClass('active');
                    $(document).find('.header-mobile-menu').removeClass('fadeOutRight');
                    $(document).find('.header-mobile-menu').removeClass('animated');
              }
        });
  });

    
    
    var ps; 
    $('#acc-reg-date').mask('99-99-9999');
    $('#acc-activity-time').mask('99:99:99');
    $('#gift-offer-period').mask('99-99-9999');
    $('#gift-creation-date').mask('99-99-9999');
    $('#gift-collection-date').mask('99-99-9999');
    $('#gift-recieving-date').mask('99-99-9999');
    $('#supergift-creation-date').mask('99-99-9999');
    $('#supergift-ending-date').mask('99-99-9999');

    $('.form-group__select select').SumoSelect();
    $('.optWrapper').prepend('<span><img class="select-up-arrow" src="assets/images/select-up.svg"></span>');
    $(document).on('click', '.header-menu__link:not(active)', function(){
        var page_number = $(this).index()+1;
        $(this).addClass('active').siblings('.header-menu__link').removeClass('active');    
        $('.header-mobile-menu > .header-menu__link').removeClass('active').eq(page_number-1).addClass('active');
        $('.main-container').removeClass('active').eq($(this).index()).addClass('active');   
        var active_header_link = $('.left-tabs__link-header*[data-page='+page_number+'].active').index()+1;
        if(((page_number==4) && (active_header_link==2)) || (((page_number==5) && (active_header_link==2)))) {
            $('.add-btn').css('display', 'block');
        } else {
            $('.add-btn').css('display', 'none');
        }          
        
    });
    $(document).on('click', '.header-mobile-menu > .header-menu__link:not(active)', function(){
        var page_number = $(this).data('page');
        $(this).addClass('active').siblings('.header-menu__link').removeClass('active'); 
        $('.header-menu > .header-menu__link').removeClass('active').eq(page_number-1).addClass('active');
        $('.main-container').removeClass('active');        
        $('.main-container*[data-page='+page_number+']').addClass('active');
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
        if((page_number==5) && (active_header_link==3)) {
            // setTimeout(function(){
            //     ps = new PerfectScrollbar('.left-form');
            // }, 50);            
            // $('.left-form').trigger('ps-scroll-y');

        } else {
            // if(ps) {
            //     ps.destroy();
            // }
            
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


    $(document).on('click', '.select-up-arrow', function(){  
        $('.SumoSelect').removeClass('open');    
    });
    $(document).on('click', '.CaptionCont i', function(){  
        $('.SumoSelect').addClass('open');    
    });
});