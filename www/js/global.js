$(document).ready(function() {   

    //MenuBar Geral
    /*var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    sideslider.click(function(event){
        $(sel).toggleClass('in');
        $('.blackout').toggleClass('in');
    });*/

    $('.btnMenuPrincipal').on('click touchstart', function(e){
    	$('.menuPrincipal').toggleClass('in');
    	$('.blackout').toggleClass('in');
    	e.preventDefault();
    });

    //MenuBar Filtro
    $('.btnFiltro').on('click touchstart', function(e){
    	$('.menuFiltro').toggleClass('in');
    	$('.blackout2').toggleClass('in');
    	e.preventDefault();
    });
    /*var sideslider3 = $('[data-toggle=collapse-side3]');
    var sel3 = sideslider3.attr('data-target');
    sideslider3.click(function(event){
    	$(sel3).toggleClass('in');
    	$('.blackout2').toggleClass('in');
    });*/

    //Blackouts
    $('.blackout').click((function() {
    	$(".menuPrincipal").toggleClass('in');
    	$(this).toggleClass('in')
    }));

    $('.blackout2').click((function() {
    	$(".menuFiltro").toggleClass('in');
    	$(this).toggleClass('in')
    }));
    ///////

    //Tabs
    $('#tabs').tab();
});