/*!
 * jQuery outside events - v1.1 - 3/16/2010
 * http://benalman.com/projects/jquery-outside-events-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(e,t,n){"$:nomunge";function r(r,i){function u(t){e(s).each(function(){var n=e(this);if(this!==t.target&&!n.has(t.target).length){n.triggerHandler(i,[t.target])}})}i=i||r+n;var s=e(),o=r+"."+i+"-special-event";e.event.special[i]={setup:function(){s=s.add(this);if(s.length===1){e(t).bind(o,u)}},teardown:function(){s=s.not(this);if(s.length===0){e(t).unbind(o)}},add:function(e){var t=e.handler;e.handler=function(e,n){e.target=n;t.apply(this,arguments)}}};}e.map("click dblclick mousemove mousedown mouseup mouseover mouseout touchstart touchend touchmove change select submit keydown keypress keyup".split(" "),function(e){r(e)});r("focusin","focus"+n);r("focusout","blur"+n);e.addOutsideEvent=r;})(jQuery,document,"outside");
(function ($) {
  Drupal.behaviors.ATmenuToggle = {
    attach: function (context, settings) {

      if ($.browser.msie && parseFloat($.browser.version) <= 8) {
        return;
      }

      var activeTheme = Drupal.settings["ajaxPageState"]["theme"];
      var themeSettings = Drupal.settings['adaptivetheme'];

      if (typeof themeSettings[activeTheme] == 'undefined') {
        return;
      }

      var mtsTP = themeSettings[activeTheme]['menu_toggle_settings']['tablet_portrait'];
      var mtsTL = themeSettings[activeTheme]['menu_toggle_settings']['tablet_landscape'];

      var breakpoints = {
        bp1: themeSettings[activeTheme]['media_query_settings']['smalltouch_portrait'],
        bp2: themeSettings[activeTheme]['media_query_settings']['smalltouch_landscape'],
      };

      if (mtsTP == 'true') { breakpoints.push(bp3 + ':' + themeSettings[activeTheme]['media_query_settings']['tablet_portrait']); }
      if (mtsTL == 'true') { breakpoints.push(bp4 + ':' + themeSettings[activeTheme]['media_query_settings']['tablet_portrait']); }

      $(".at-menu-toggle h2", context).removeClass('element-invisible').addClass('at-menu-toggle-button').wrapInner('<a href="#menu-toggle" class="at-menu-toggle-button-link" />');
      $(".at-menu-toggle ul[class*=menu]:nth-of-type(1)", context).wrap('<div class="menu-toggle" />');

      !function(breakName, query){
        // Run the callback on current viewport
        cb({
          media: query,
          matches: matchMedia(query).matches
        });
        // Subscribe to breakpoint changes
        matchMedia(query).addListener(cb);
      }(name, breakpoints[name]);

      // Callback
      function cb(data){
      	// Toggle menus open or closed
      	$(".at-menu-toggle-button-link", context).click(function() {
          $(this).parent().siblings('.menu-toggle').slideToggle(100, 'swing').toggleClass('menu-toggle-open');
          return false;
        });

        /*
        // Close if clicked outside (inc another toggle menu)
        $(".at-menu-toggle-button-link", context).bind('clickoutside', function(event) {
          $(this).parent().siblings('.menu-toggle').slideUp(100, 'swing').removeClass('menu-toggle-open');
          //return false;
        });
        */
      }

      //console.log(themeSettings);
    }
  };
})(jQuery);
;
