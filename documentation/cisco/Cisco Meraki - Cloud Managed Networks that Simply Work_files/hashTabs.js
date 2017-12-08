define(['jqueryScrollTo', 'jqueryHashChange'], function(){
  'use strict';
  var isIntitalTabChange = true // used in changeTabs()
    , haveTabs = $('.tabs').length > 0 ? true : false
    , HashTabs = function() {
      var self = this
        , firstTab = $('.tabs a:first')

      if (!haveTabs) return

      // if it's not currently the selected tab, then we'll switch to it.
      if (window.location.hash){
        this.changeTabs($('.tabs a[href="' + this.getTabNameFromHash() + '"]'))
        if (this.getAnchorNameFromHash()){
          this.jumpToTabAnchor('#' + this.getAnchorNameFromHash())
        }
      }
      else if (firstTab.attr('href').indexOf('#') === 0) {
        this.changeTabs(firstTab)
      }

      $(window).on('hashchange', function(){
        var currentTab = $('.tabs a[href="' + self.getTabNameFromHash() + '"]')
        if (currentTab.length > 0){
          self.changeTabs(currentTab)
        }
        else {
          self.changeTabs($('.tabs a:first'))
        }
      })

      // handle anchor links inside of tabs
      $('.tab').not('.switch').on('click', 'a[href^="#"]', function(e){
        e.preventDefault()

        self.jumpToTabAnchor(this.hash)
      })
    }

    HashTabs.prototype = {
      jumpToTabAnchor: function(anchorHash){
        var tabName
        // anchors are passed with a # so we'll remove it, then use $ to find the DOM ele
          , anchorName = tabName ? anchorHash.split(':')[1] : anchorHash.substring(1)
          , anchor = $('#' + anchorName)

        // if the hash already has a sub-anchor
        if (anchorHash.indexOf(':') !== -1){
          tabName = anchorHash.split(':')[0]
          this.changeTabs($('.tabs a[href="' + tabName + '"]'))
        }
        //if there is no tabName in the URL, add it so that URIs don't break.
        else tabName = $('.tabs li.current a').attr('href')

        // if we've previously clicked an anchor, the old one is in the hash, we'll need to remove it to make room for the new one.
        window.location.hash = window.location.hash.replace(':' + this.getAnchorNameFromHash(), '')
        //using the scrollTo plugin, we'll move to the anchor, then flash it yellow for a momemnt.
        $.scrollTo(anchor, {
            duration  : 200
          , easing    : 'swing'
          , offset  : -100
          , onAfter : function(){
            if (anchor.parents('.tab').data('tab-anchor-highlight')){
              anchor
                // TODO: replace this with a CSS animation
                .css('backgroundColor', '#fff0b3')
                .delay(1000)
                .animate({
                  'backgroundColor': '#fff'
                }, 1000)
            }
          }
        })
        // add the anchor to the hash so that we don't break the URI
        var newHash = tabName + ':' + anchorName
        window.location.hash = newHash

        $(window).trigger('tab_anchor_jump', ['done', newHash])
        //track this in GA
        ga('send', 'event', 'On Page Actions', 'Tab Change: ' + window.location.pathname + window.location.hash)
      }
      , getTabNameFromHash: function(){
        return window.location.hash.split(':')[0]
      }
      , getAnchorNameFromHash: function(){
        return window.location.hash.split(':')[1]
      }
      , changeTabs: function(tabToChange){
        var currentTabButton = tabToChange.parent('li')
          , href = tabToChange.attr('href')
          , currentTab = href !== undefined ? $('[data-tab="' + href.replace('#','') + '"]') : false
          , pastTab = currentTab ? currentTab.siblings('.current') : false
          , tabsEl = currentTab ? currentTabButton.parents('.tabs') : false
          , tabAnimationSpeed = 300

        if (!currentTab) return false

        // set the clicked tab to the current tab
        currentTabButton.addClass('current').siblings('li').removeClass('current')
        // give the current tab content .current
        currentTab.addClass('current').siblings().removeClass('current')

        // sliding tabs
        if (tabsEl.hasClass('sliding')){
          $('.tab-window').scrollTo(currentTab, tabAnimationSpeed, {
            easing: 'swing'
            , axis: 'x'
            , onAfter: function(){
              $(this).height(currentTab.outerHeight())
            }
          })
        }

        // fading tabs
        else if (tabsEl.hasClass('fading')){
          currentTab.fadeIn(tabAnimationSpeed).siblings('.tab').hide()
        }

        // switch tabs
        else if (tabsEl.hasClass('switch')){
          // this is good JS, but we can do things better with CSS, so we'll only use this in IE < 10
          if (!Modernizr.cssanimations){
            pastTab.animate({right: '+25px', opacity: 0.5 }, 100, function(){
              pastTab.hide().removeClass('current').css({'right': '-25px', 'opacity': '1'})

              currentTab.animate({right: '+50px', opacity: 0.5 }, 0, function(){
                currentTab.show().animate({right: 0 , opacity: 1 }, 100).addClass('current')
              })
            })
          }

          pastTab.addClass('off').removeClass('current on')
          currentTab.addClass('on current').removeClass('off')
        }

        // Non-animated Tabs
        else {
          $('html.lt-ie9 .tab').hide() // ie hack
          currentTab.show().siblings('.tab').hide()
        }

        // detect if this is the first tab we've changed tabs. If it is, we don't want to dup GA track the event.
        if (!isIntitalTabChange){
          //tell GA about the tab change
          ga('send', 'pageview', window.location.pathname + href)
          ga('send', 'event', 'On Page Actions', 'Tab Change: ' + window.location.pathname + href)
          $(window).trigger('tab_changed', [this.getTabNameFromHash().replace('#', ''), false]) //send out a tab change event that we can bind to later
        }
        else {
          isIntitalTabChange = false
          $(window).trigger('tab_changed', [this.getTabNameFromHash().replace('#', ''), true])
        }
      }
    }

  window.HashTabs = new HashTabs()
  return new HashTabs()
})
