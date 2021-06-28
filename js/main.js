(function ($) {
    "use strict";

    /*-------------------------------------
	Background image
	-------------------------------------*/
	$("[data-bg-image]").each(function() {
		var img = $(this).data("bg-image");
		$(this).css({
			backgroundImage: "url(" + img + ")"
		});
    });

    var headerheight = $('header').height();
    var headerheightdash = $('header').height() + 20;
    var footerheight = $('header').height();
    var total = headerheight + footerheight + 6;
    $('.sidebar-nav,.body-container').css({
        height:"calc(100vh - " + headerheightdash + "px)"
    });
    // console.log(total);
    $('.mainbody').css({
        minHeight: "calc(100vh - " + total + "px)"
    });
    /*-------------------------------------
    After Load All Content Add a Class
    -------------------------------------*/

    window.onload = addNewClass();

    function addNewClass() {
        $('.fxt-template-animation').imagesLoaded().done(function (instance) {
            $('.fxt-template-animation').addClass('loaded');
        });
    }
    
    /*-------------------------------------
    Toggle Class
    -------------------------------------*/
    $(".toggle-password").on('click', function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    /*--------------------------------------
    togglemenu
    --------------------------------------*/
    $(".togglemenu").on('click', function() {
        $(this).toggleClass("menu");
        $('body').toggleClass("sidebar-out");
        // var input = $($(this).attr("toggle"));
        // if (input.attr("type") == "password") {
        //     input.attr("type", "text");
        // } else {
        //     input.attr("type", "password");
        // }
    });
    $(".sidebar-nav").mouseover(function(){
        var bodyclass= $('body');
        if(bodyclass.is('.sidebar-out')){
          $("body").addClass('side-over');
      }
    });
    $(".sidebar-nav").mouseout(function(){
      var bodyclass= $('body');
        if(bodyclass.is('.sidebar-out')){
          $("body").removeClass('side-over');
      }
    });
    /*-------------------------------------*/

    /*-----------------------------------------
    Tooltip
    -----------------------------------------*/
    $(function () {
      $('[data-tooltip="tooltip"]').tooltip()
    })
    /*--------------------------------------*/
 /*-------------------------------------
    Collaps
    -------------------------------------*/
     // $('.collapse').collapse('show')
     $('.collapse').collapse()
    /*-------------------------------------
    Youtube Video
    -------------------------------------*/   
    if ($.fn.YTPlayer !== undefined && $("#fxtVideo").length) { 
        $("#fxtVideo").YTPlayer({useOnMobile:true});
    }

   
})(jQuery);