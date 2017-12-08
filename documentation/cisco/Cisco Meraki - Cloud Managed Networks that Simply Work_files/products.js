'use strict';
require(['require', 'config', 'init'], function(){
  require(['ui/hashTabs', 'ui/scrollNotice', 'ui/playable', 'ui/affix'], function(){
    var modelButton = $('.extra').find('.subtle')
    $(window).on('tab_changed', function(e, tab){
      tab === 'models' ? modelButton.addClass('hidden') : modelButton.removeClass('hidden');
    })
    $('#overview-tabs-container .tabs').on('click', function() {
      $('body').scrollTo(594);
    })
    $('#see-models').on('click', function() {
      $('body').scrollTo(594);
    })
    /* showing .long-info
    */
    // show .long-info
    $('.short-info a:not(.accessories-buy-now)').on('click', function(e){
      e.preventDefault()

      var clicked = $(this)
        , parentUl = clicked.parents('ul li ul')
        , sectionTitle = parentUl.siblings('h3')
        , longInfo = clicked.parents('.short-info').siblings('.long-info')
        , parentLi = longInfo.parent('li')
        , id = parentLi.attr('id')


      closeAccessory($('h3.accessories-back'));

      sectionTitle.addClass('accessories-back'); // css adds "All" & changes styling
      longInfo.clone().appendTo(parentUl).fadeIn(200); // creates copy of .long-info inside ul
      parentUl.children('.accessories-list-product').hide();
      $.scrollTo(sectionTitle, {
        offset: -50
        , easing: 'swing'
        , duration: 200
      });

      window.location.hash = id;

    });

    $('#accessories-list h3').on('click', function(){
      closeAccessory($(this))
    });

    function closeAccessory(clicked){
      var siblingUl = clicked.siblings('ul');

      siblingUl.children('.long-info').remove(); // okay to remove since it's just a copy
      siblingUl.children('li').fadeIn(150);
      clicked.removeClass('accessories-back');
      window.location.hash = '';
    }

    //onHashChange
    $(window).on('hashchange', function(){
      if(window.location.hash === ''){
        closeAccessory($('h3.accessories-back'));
      }
    });

    // onLoad
    if(window.location.hash){
      $(window.location.hash + ' .short-info a:first').click();
    }

  })
})
