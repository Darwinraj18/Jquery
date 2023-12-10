$(document).ready(function(){
    $(".snack").click(function(){
        $('#snack-menu').toggle();
        $('#dinner-menu').hide();
    });
});

$(document).ready(function(){
    $(".Dinner").click(function(){
        $('#dinner-menu').toggle();
        $('#snack-menu').hide();
    });
});