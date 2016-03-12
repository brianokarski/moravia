$(document).ready(function() {

    $(".left").click( function(event){
    event.preventDefault();
    if ($(this).hasClass("isOpen") ) {
        $(this).addClass( "active" );
        $(this).removeClass("isOpen");
        $(this).addClass( "overflow" );
        $(this).animate({
            left: "-10vw",
            display: "block"
        }, 200);
        $(".middle").removeClass( "overflow" );
        $(".middle").removeClass( "active" );
        $(".middle").removeClass("isOpen"); 
        $(".middle").animate({
            left: "-5vw",
            display: "block",
        }, 200);
        $(".right").removeClass( "overflow" );      
    } else {
        // nothing here
    }
    return false;
    });

    $(".middle").click( function(event){
    event.preventDefault();
    if ($(this).hasClass("isOpen") ) {
        $(this).addClass( "active" );
        $(this).addClass( "overflow" );
        $(this).animate({
            left: "-5vw",
            display: "block",
        }, 200);          
        $(this).removeClass("isOpen");
        $(".right").removeClass( "active" );
        $(".right").removeClass( "overflow" );
    } else {
        $(this).addClass( "active" );
        $(this).addClass( "overflow" );
        $(".left").removeClass( "overflow" );
        $(".left").removeClass( "active" );
        $(".left").addClass( "isOpen" );
        $(".left").animate({
            left: "-95vw",
            display: "block"
        }, 200);
        
    }
    return false;
    });

    $(".right").click( function(event){
    event.preventDefault();
    if ($(this).hasClass("isOpen") ) {
        // nothing here
    } else {
        $(this).addClass( "active" );
        $(this).addClass( "overflow" );
        $(".left").addClass("isOpen");
        $(".left").removeClass( "active" );
        $(".left").removeClass( "overflow" );
        $(".left").animate({
            left: "-95vw",
            display: "block"
        }, 200);
        $(".middle").addClass("isOpen");
        $(".middle").removeClass( "active" );
        $(".middle").removeClass( "overflow" );
        $(".middle").animate({
            left: "-90vw",
            display: "block"
        }, 200);
    }
    return false;
    });

    $('.hyperlink').html(function (i, h) {
        h = h.replace(/\s+/g, '\u00a0').split('');
        return '<span>' + h.join('</span><span>') + '</span>';
    });
    


});