define([], function(){
  'use strict';
  $('.simple-tabs-container').each(function () {
    $(this).find('.simple-tabs li:first-of-type').addClass('active')
    $(this).find('.simple-tabs-content li:first-of-type').addClass('active')
  })

  $('.simple-tabs li').click(function () {
      var activeTab = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $(this).parents('.simple-tabs-container').find('.simple-tabs-content > li').eq(activeTab).addClass('active').siblings().removeClass('active')
  })
})
