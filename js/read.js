$(document).ready(function(){

    var width = $('#cover-image').width();
    var height = (0.36 * width) / 0.64;
    $('#cover-image').height(height);

    $('.materialboxed').materialbox();

    // window.PixleeAsyncInit = function() {
    //     Pixlee.init(
    //         {
    //             apiKey:'WIb0AMEuq3UoYFAz36IF'
    //         }
    //     );
    //     Pixlee.addSimpleWidget(
    //         {
    //             widgetId:'21897'
    //         }
    //     );
    // };

});