$(document).ready(function() {
        $('#bigtitle').hide();
        $('#worldbanner').show(1000);
        $('.menubox').fadeIn(1000);
        $('#bigtitle').removeClass('centered'); 
        $('#bigtitle').show(1000);
});



$(document).ready(function() {
    $(".linkpanel").mouseenter(function() {
        $(this).addClass('highlighted');
    });
});

$(document).ready(function() {
    $(".linkpanel").mouseleave(function() {
        $(this).removeClass('highlighted');
    });
});