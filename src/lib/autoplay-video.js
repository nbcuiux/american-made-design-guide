$(document).ready(function() {
    // Get media - with autoplay disabled (audio or video)
    var media = $('.autoplay-video').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia(){
        // Get current browser top and bottom
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        media.each(function(index, el) {
            if (!($(this)).hasClass('autoplayed')) {
                var yTopMedia = $(this).offset().top;
                var yBottomMedia = $(this).height() + yTopMedia;

                if (scrollTop < yBottomMedia && scrollBottom > yTopMedia){ 
                    $(this).get(0).play();
                    $(this).prop('loop', false);
                    $(this).addClass('autoplayed');
                } else {
                    $(this).get(0).pause();
                }
            }
        });
    }
    $(document).on('scroll', checkMedia);
});

// $(document).ready(function() {
//     var inner = $('video');
//     var elementPosTop = inner.position().top;
//     var viewportHeight = $(window).height();
//     $(window).on('scroll', function() {
//         var scrollPos = $(window).scrollTop();
//         var elementFromTop = elementPosTop - scrollPos;

//         if (elementFromTop > 0 && elementFromTop < elementPosTop + viewportHeight) {
//             inner.get(0).play();
//         } else {
//             inner.get(0).pause();
//         }
//     });
// })