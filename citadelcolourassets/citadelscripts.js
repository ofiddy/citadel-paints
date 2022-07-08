$( document).ready(function() {
    $(".labelBubble").click(function () {

        $bubble = $(this);
        $content = $bubble.find(".bubble-content");
        $title = $bubble.find(".bubbleTitle");
        $title.slideToggle(200);
        $content.slideToggle(200);
        $("#bg").css({'background-color': '#EAF7F7'});
    });
    
});