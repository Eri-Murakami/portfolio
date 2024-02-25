<script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>

$(function(){
   $(window).on('load scroll', function() {
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * 0.8);

      $(".show").each(function() {
         if($(this).offset().top < scrollPos) {
            $(this).css({opacity: 1, transform: 'translate(0, 0)'});
         }
      });
   });
});