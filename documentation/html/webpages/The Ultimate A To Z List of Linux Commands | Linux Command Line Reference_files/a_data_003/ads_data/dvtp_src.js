(function(){function h(a,d){for(var b=a.length;b--;)if(a[b]===d)return!0;return!1}function m(){var b=document.getElementsByTagName("script");a._dv_win._dvScripts||(a._dv_win._dvScripts=[]);a._dv_win._dvScriptsInternal||(a._dv_win._dvScriptsInternal=[]);a._dv_win.dvProcessed||(a._dv_win.dvProcessed=[]);for(var d in b)if(b[d].src){var e=b[d].src,c=a._dv_win.dv_config.reqex||/^[ \t]*(http(s)?:\/\/)?[a-z\-]*cdn(s)?\.doubleverify\.com:?[0-9]*\/dvtp_src.js/;if(e&&e.match(c)&&!h(a._dv_win._dvScripts,b[d])&&
!h(a._dv_win._dvScriptsInternal,b[d])&&!h(a._dv_win.dvProcessed,b[d])){c=e;var g="sr";g=g.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");c=(new RegExp("[\\?&]"+g+"=([^&#]*)","i")).exec(c);c=null==c?null:c[1];if(null===c||!isNaN(c)&&c>=100*Math.random())return e=e.substr(0,e.indexOf("/dvtp_src.js")),a._dv_win._dvScripts.push(b[d]),a._dv_win._dvScriptsInternal.push({script:b[d],loadtime:Date.now?Date.now():(new Date).getTime(),injScripts:n,srcLocation:e,injDvms:p}),{smpl:!0,src_location:e,script:b[d]};
a._dv_win._dvScripts.push(b[d]);return{smpl:!1}}}return null}var p={src:"dv-measurements",main:0,eval:76,rate:10},n=function(a){for(var b=[{src:"dv-match",main:4}],e=0;e<b.length;e++){var c=b[e],g=c.eval&&c.rate&&100*Math.random()<c.rate?c.eval:c.main;if(g){var f=document.createElement("script");f.src=a+"/"+c.src+g+".js";f.async=!0;document.body.appendChild(f)}}}.toString(),a=window;try{a._dv_win=a._dv_win||a;a._dv_win.dv_config=a._dv_win.dv_config||{};a._dv_win.internalURL=a._dv_win.internalURL||
"dvtp_src_internal105.js";var f=m();if(f){if(!0===f.smpl){var k=document.createElement("script");k.type="text/javascript";k.src=f.src_location+"/"+a._dv_win.internalURL;f.script.parentNode.insertBefore(k,f.script)}}else try{var l=a.location.protocol+"//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_intErr=2";(new Image).src=l}catch(b){}}catch(b){try{l=a.location.protocol+"//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_intErr=1&dvp_jsErrMsg="+
encodeURIComponent(b),(new Image).src=l}catch(d){}}})();
