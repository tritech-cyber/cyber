define(["jquery","modernizr","devicemode","slateAds"],function(a,b,c){return{wire:function(b){a("*[data-ad-type]").each(function(){var b=a(this).attr("data-ad-mode"),c=getMediaQueryMode();c!=b&&"all"!==b&&""!==b&&("tablet"==c.substring(0,6)&&"tablet"==b||"large"==b&&"mobile"!=c||(a(this).removeAttr("data-ad-type"),a(this).removeAttr("id")))})}}});