'use strict';
define([], function(){
  var M = function(){}

  M.prototype = {
    Templates: {}
    , Views: {}
    , Collections: {}
    , Models: {}
    , Datas: {}
    , Router: {}
    , Renders: {}
    // really, M, should extend Backbone.Event, but that would require loading Backbone on every page. Instead, we'll fake it … for now.
    , trigger: function(e, arg){
      if (e === 'change:title') document.title = arg
    }
  }

  window.M = new M()
  return M
})
