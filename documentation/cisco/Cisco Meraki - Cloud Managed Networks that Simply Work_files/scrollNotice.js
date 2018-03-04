define([], function(){
  'use strict';
  $(function(){
    var $window = $(window)
    if (Modernizr.csstransitions){
      var count = 1
      $window.scroll(function() {
        var target = $('[data-scroll-notice-' + count + ']')
          , offset = target.offset()

        if (target.length && offset.top <= $window.scrollTop() + $window.height() - target.data('scroll-notice-' + count)) {
          target.addClass('noticed')
          count++
        }
      })
    }
    else $('.scroll-animate').addClass('noticed')
  })
})
