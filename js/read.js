$(document).ready(function(){

    var width = $('#cover-image').width();
    var height = (0.36 * width) / 0.64;
    $('#cover-image').height(height);

    var cardwidth = $('.card').width();
    $('.card').height(cardwidth);

    $('.materialboxed').materialbox();

});