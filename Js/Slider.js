/**
 * Created by Anton on 13.07.2015.
 */

(function($){
    $(document).ready(function(){
        $('.slider').bxSlider({
            slideWidth: 5000,
            minSlides: 4,
            maxSlides: 8,
            slideMargin: 10,
            controls: false,
            pagerSelector: '#featured .pager'
        });
    });
})(jQuery);