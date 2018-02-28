$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


$("header .nav a[href!=#]").each(function(){
    $($(this).attr("href")).css("padding-top", "40px").prev().css("margin-bottom", "-40px");
});