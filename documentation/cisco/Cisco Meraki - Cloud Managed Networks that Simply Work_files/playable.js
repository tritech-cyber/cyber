define(['jqueryTubePlayer'], function(){
  'use strict';
  $(function(){
    var fadeoutOriginalBackgroundColor = $('#container').css('backgroundColor')
      , target = $('.takeover-target')
      , ytOrigHeight = target.height()
      , origZindex = target.css('z-index')
      , _body = $('body:first')


    _body.on('click', '.playable', function(){ //this really should be window instead of 'body', but IE would break
      var playableContainer = $(this)
        , img = playableContainer.children('img')
        , youtubeId = playableContainer.data('youtube-id') || 'dTAAsCNK7RA'
        , playableWidth = img.width()
        , playableHeight = img.height()
        , isTakeover = playableContainer.hasClass('takeover-source')
        , isVideoFill = playableContainer.hasClass('video-fill')
        , youtubeContainer
        , youtubeWidth
        , youtubeHeight

      if (playableContainer.hasClass('video-youtube')){

        // Detect if the browser is capable of flash, if so, continue, else: open youtube and let them deal with it.
        if (navigator.mimeTypes ['application/x-shockwave-flash'] === undefined || !Modernizr.canvas ){
          ga('send', 'event', 'Videos', 'Played YouTube ID in Popup: ' + youtubeId, document.location.pathname + document.location.search + document.location.hash)
          window.open('http://www.youtube.com/watch?v=' + youtubeId)
          return
        }

        if (isTakeover){
          youtubeContainer = target //tell tubeplayer to take over the target
          youtubeWidth = youtubeContainer.width() //grab width and height of the target
          youtubeHeight = isVideoFill ? youtubeWidth * 9 / 16 : youtubeContainer.height()

          youtubeContainer.children().fadeOut('fast') //get rid of everything in the target

          youtubeContainer.prepend('<div id="close-video">close</div>') // add a close button.
          if (playableContainer.hasClass('fadeout')){ // if this is a fadeout type of takeover
            fadeoutBackground(true)
          }
        }
        else {
          youtubeContainer = playableContainer
          youtubeWidth = playableWidth

          youtubeHeight = isVideoFill ? playableWidth * 9 / 16 : playableHeight

          img.hide()
          playableContainer.css({'height' : playableHeight, 'width' : playableWidth})
          playableContainer.removeClass('playable')
        }

        if (isVideoFill){
          youtubeContainer
            .animate({
              height : youtubeHeight
            }, 200)
          $(window).on('videoEnded', function(e, id){
            if (id === youtubeId){
              youtubeContainer.animate({
                height: ytOrigHeight || playableHeight
              }, 100)
            }
          })
        }


        //if we've already clicked the container, the video is loaded, we'll just show it and play it.
          var iframeContainer = $('div[id^="tubeplayer-player-container"]')
            , iframe = iframeContainer.children('iframe')

          if (iframe.length > 0){
            iframeContainer.delay(300).fadeIn()
            iframe.delay(300).fadeIn('slow')
          }
        // else, we need to create the container and play the video.
          else {
            createYoutube(youtubeContainer, youtubeWidth, youtubeHeight, youtubeId, isVideoFill)
            youtubeContainer.fadeIn('slow')
          }
        youtubeContainer.tubeplayer('play')

        //the close video button shows up on a takeover
        target.on('click', '#close-video', function(){
          youtubeContainer.tubeplayer('stop')
          closeYoutubeTakeover(youtubeContainer, youtubeId)
          $(this).fadeOut().remove()
        })

      }


      ga('send', 'event', 'Videos', 'Played YouTube id: ' + youtubeId, window.location.href.replace(Monty.root, '/'))
      return false
    })

    //call tube player
    function createYoutube(target, youtubeWidth, youtubeHeight, youtubeId){
      target.tubeplayer({
        width: youtubeWidth, // the width of the player
        height: youtubeHeight, // the height of the player
        allowFullScreen: true, // true by default, allow user to go full screen
        initialVideo: youtubeId, // the video that is loaded into the player
        preferredQuality: 'hd720',// preferred quality: default, small, medium, large, hd720
        iframed: true, // iframed can be: true, false if true, but not supported, degrades to flash
        autoplay: 1, // whether the player should autoplay the video, 0 or 1
        showControls: 1, // whether the player should have the controls visible, 0 or 1
        showRelated: 0, // show the related videos when the player ends, 0 or 1
        protocol: 'https',
        onPlay: function(){}, // after the play method is called, takes an id arg
        onPause: function(){}, // after the pause method is called
        onStop: function(){}, // after the player is stopped
        onSeek: function(){}, // after the video has been seeked to a defined point, takes a time arg
        onMute: function(){}, // after the player is muted
        onUnMute: function(){}, // after the player is unmuted
        // Player State Change Specific Functionality
        onPlayerUnstarted: function(){}, // when the player returns a state of unstarted
        onPlayerEnded: function(){
          ga('send', 'event', 'Videos', 'Ended', document.location.pathname + document.location.search + document.location.hash + ' watched the full youtube id: ' + youtubeId)

          $(window).trigger('videoEnded', [ youtubeId ])

          if (target.hasClass('takeover-source')){
            closeYoutubeTakeover(target, youtubeId)
          }
          else {
            target.addClass('playable').find('iframe').hide()
            target.children('img').fadeIn()
          }

        }, // when the player returns a state of ended
        onPlayerPlaying: function(){}, //when the player returns a state of playing
        onPlayerPaused: function(){}, // when the player returns a state of paused
        onPlayerBuffering: function(){}, // when the player returns a state of buffering
        onPlayerCued: function(){}, // when the player returns a state of cued
        onQualityChange: function(quality){
          ga('send', 'event', 'Videos', 'Quality Change', document.location.href + ' youtube id: ' + youtubeId + ' quality: ' + quality)
        }, // a function callback for when the quality of a video is determined
        // Error State Specific Functionality
        onErrorNotFound: function(){
          ga('send', 'event', 'Videos', 'Error: YouTube 404', document.location.href + 'youtube id: ' + youtubeId)
        }, // if a video cant be found
        onErrorNotEmbeddable: function(){
          ga('send', 'event', 'Videos', 'Error: Not Embeddable', document.location.href + 'youtube id: ' + youtubeId)
        }, // if a video isnt embeddable
        onErrorInvalidParameter: function(){
          ga('send', 'event', 'Videos', 'Error: Invalid Param', document.location.href + 'youtube id: ' + youtubeId)
        } // if we've got an invalid param
      })
    }

    //close out a takeover
    function closeYoutubeTakeover(takeoverTarget, youtubeId){
      ga('send', 'event', 'Videos', 'Close', document.location.pathname + document.location.search + document.location.hash + ' closed youtube id: ' + youtubeId)
      $('#container').css('opacity', '1')
      $('#close-video').remove()

      takeoverTarget.find('iframe').hide()
      takeoverTarget.children().fadeIn('slow')
      takeoverTarget.tubeplayer('stop')

      fadeoutBackground(false)
    }

    //fadeout the background
    function fadeoutBackground(enable){
      var youtubeContainer = $('.takeover-target')

      if (enable){
        //set the opacity of everything but the youtubeContainer to a low opacity and make a dark bacground.

        youtubeContainer.css('z-index', '500')
        $('#content').children().not(youtubeContainer).css('opacity', '.2') //fade out everthing else
        $('#masthead, #footer').css('opacity', '.2')

        $('#container').css('backgroundColor', '#777')
      }
      else {
        $('#content').children().css('opacity', '1')
        $('#masthead, #footer').css('opacity', '1')
        $('#container').css('backgroundColor', fadeoutOriginalBackgroundColor)
        youtubeContainer.css('z-index', origZindex)
      }
    }
  })
})
