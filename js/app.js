// just show main page as opposed to reloading entire page
$('.logo').click(function(){
   $('nav #main').click();

/*
    if ($('#page').hasClass("fadeIn")) {
        $('nav #main').click();
    } else {
        window.location = "index.html";
    }
*/
   return false; 
});

// Initialize FastClick.js
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
} 

// prevent scrolling when mobile menu is open
$('input[type=checkbox]').click(function(){
   
   try {
        if ($(this).is(":checked")) {
            $(document).off('touchmove');
            $(document).on('touchmove', function(e) {
                e.preventDefault();
            });
        } else {
            $(document).off('touchmove');
        }
    } catch(e) {
        console.log(e);
    }
});

// show a new nav page
$('nav a').click(function(){
    
    var curr = $('.container-fluid.active').attr("id");
    var dest = $(this).attr("id");
    
    $('input[type=checkbox]').prop('checked', false);
    $(document).off('touchmove');
        
    if (curr != dest) {
    
        // tranisition out
        if (curr == "main") {
            $('.container-fluid#' + curr).removeClass('scaleIn').removeClass("scaleInNoDelay").addClass("scaleOut");
        } else {
            $('.container-fluid#' + curr).removeClass('fadeIn').addClass("fadeOut");
            
            if (curr == "page") {
                $('body').removeClass("dark"); 
                $('footer').removeClass("hide").addClass("fadeIn");
            }
        }
            
        // tranisitioning in
        setTimeout(function(){
            
            $('body').scrollTop(0);
            
            if (curr == "main") {
                $('.container-fluid#' + curr).removeClass('scaleOut').removeClass("active").addClass("hide");
            } else {
                $('.container-fluid#' + curr).removeClass('fadeOut').removeClass("active").addClass("hide");
            }
            
            if (dest == "main") {
                $('.container-fluid#' + dest).addClass("scaleInNoDelay").removeClass('hide').addClass("active");
            } else {
                $('.container-fluid#' + dest).addClass("fadeIn").removeClass('hide').addClass("active");
            }
            
        }, 250);
    }
});

$('.image#me').click(function(){
   $('.me-full').addClass("scaleInNoDelayFast").removeClass("hide"); 
});

$('.me-full').click(function(){
    $(this).removeClass("scaleInNoDelayFast").addClass("scaleOutFast");
    setTimeout(function() {
        $('.me-full').removeClass("scaleOutFast").addClass("hide");
    }, 200);
});

$('.item').click(function(){
    
    var file = $(this).data('file');
    var theme = $(this).data('theme');
    
    $('.container-fluid#main').removeClass('scaleIn').removeClass('scaleInNoDelay').removeClass("scaleIn").addClass('scaleOut');
    $('footer').addClass("fadeOut");
    if (theme == 'dark') {
        $('body').addClass("dark");
    }
    
   
    setTimeout(function() {
        $('.container-fluid#main').removeClass('scaleOut').addClass("hide").removeClass("active");
        $('footer').removeClass("fadeOut").addClass("hide");
        $('body').scrollTop(0);
        
        $('.container-fluid#page').load('pages/' + file, function() {
            $('.container-fluid#page').removeClass("hide")
           setTimeout(function(){
               $('.container-fluid#page').addClass("active"); 
               $('.container-fluid#page').addClass("fadeIn");
            }, 250);
           
        });
    }, 250);
});

$('#me, .hero').show();