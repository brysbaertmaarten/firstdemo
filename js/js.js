
$(document).ready(function() {
	// Preloader
    setTimeout(function(){
        $('.preloader').addClass('loaded');
    }, 00);

    // hamburger klik menu
    $("#menu").click(function(){
    	$(".links").toggleClass("links-open");
    	$(".streep1").toggleClass("streep1-open");
    	$(".streep2").toggleClass("streep2-open");
    	$(".streep3").toggleClass("streep3-open");
    });
});