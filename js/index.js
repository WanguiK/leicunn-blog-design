$(document).ready(function(){

    $('.grid').masonry({
        itemSelector: '.grid-item',
        gutter: 40,
        columnWidth: '.grid-sizer',
        percentPosition: true,
        horizontalOrder: true,
        resize: true,
        fitWidth: true
    });

});
