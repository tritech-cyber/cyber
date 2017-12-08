'use strict';
define(['components/bootstrap-sass/js/bootstrap-dropdown'], function(){
  $('body').on('click', '.dropdown-toggle', function(){
    $(this).dropdown()
  })
})
