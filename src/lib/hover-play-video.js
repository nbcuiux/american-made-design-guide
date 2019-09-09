$(document).ready(function() {
    var figure = $(".qp-ui-video-player").hover( hoverVideo, hideVideo );

    function hoverVideo(e) {  
        $('video', this).get(0).play(); 
    }

    function hideVideo(e) {
        $('video', this).get(0).pause(); 
    }
});