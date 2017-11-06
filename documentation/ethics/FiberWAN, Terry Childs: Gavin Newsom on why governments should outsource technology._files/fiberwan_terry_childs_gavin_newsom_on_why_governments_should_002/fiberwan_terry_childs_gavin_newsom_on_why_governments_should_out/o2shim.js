(function(configSource){var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(e,c,b){if(b.get||b.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[c]=b.value)},da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function fa(){fa=function(){};da.Symbol||(da.Symbol=ha)}var ia=0;function ha(e){return"jscomp_symbol_"+(e||"")+ia++}
function ja(){fa();var e=da.Symbol.iterator;e||(e=da.Symbol.iterator=da.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&aa(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return ka(this)}});ja=function(){}}function ka(e){var c=0;return la(function(){return c<e.length?{done:!1,value:e[c++]}:{done:!0}})}function la(e){ja();e={next:e};e[da.Symbol.iterator]=function(){return this};return e}function ma(e){ja();var c=e[Symbol.iterator];return c?c.call(e):ka(e)}
function na(e,c){if(c){var b=da;e=e.split(".");for(var a=0;a<e.length-1;a++){var d=e[a];d in b||(b[d]={});b=b[d]}e=e[e.length-1];a=b[e];c=c(a);c!=a&&null!=c&&aa(b,e,{configurable:!0,writable:!0,value:c})}}
na("Promise",function(e){function c(a){this.Kk=0;this.Fq=void 0;this.Dk=[];var d=this.zp();try{a(d.resolve,d.reject)}catch(h){d.reject(h)}}function b(){this.rh=null}if(e)return e;b.prototype.pu=function(a){null==this.rh&&(this.rh=[],this.iA());this.rh.push(a)};b.prototype.iA=function(){var a=this;this.qu(function(){a.UA()})};var a=da.setTimeout;b.prototype.qu=function(d){a(d,0)};b.prototype.UA=function(){for(;this.rh&&this.rh.length;){var a=this.rh;this.rh=[];for(var d=0;d<a.length;++d){var b=a[d];
delete a[d];try{b()}catch(g){this.jA(g)}}}this.rh=null};b.prototype.jA=function(a){this.qu(function(){throw a;})};c.prototype.zp=function(){function a(a){return function(f){b||(b=!0,a.call(d,f))}}var d=this,b=!1;return{resolve:a(this.ZD),reject:a(this.Cq)}};c.prototype.ZD=function(a){if(a===this)this.Cq(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof c)this.sE(a);else{var d;a:switch(typeof a){case "object":d=null!=a;break a;case "function":d=!0;break a;default:d=!1}d?this.YD(a):
this.Vu(a)}};c.prototype.YD=function(a){var d=void 0;try{d=a.then}catch(h){this.Cq(h);return}"function"==typeof d?this.tE(d,a):this.Vu(a)};c.prototype.Cq=function(a){this.zw(2,a)};c.prototype.Vu=function(a){this.zw(1,a)};c.prototype.zw=function(a,d){if(0!=this.Kk)throw Error("Cannot settle("+a+", "+d|"): Promise already settled in state"+this.Kk);this.Kk=a;this.Fq=d;this.VA()};c.prototype.VA=function(){if(null!=this.Dk){for(var a=this.Dk,d=0;d<a.length;++d)a[d].call(),a[d]=null;this.Dk=null}};var d=
new b;c.prototype.sE=function(a){var d=this.zp();a.hm(d.resolve,d.reject)};c.prototype.tE=function(a,d){var b=this.zp();try{a.call(d,b.resolve,b.reject)}catch(g){b.reject(g)}};c.prototype.then=function(a,d){function b(a,d){return"function"==typeof a?function(d){try{f(a(d))}catch(t){k(t)}}:d}var f,k,m=new c(function(a,d){f=a;k=d});this.hm(b(a,f),b(d,k));return m};c.prototype.catch=function(a){return this.then(void 0,a)};c.prototype.hm=function(a,b){function f(){switch(g.Kk){case 1:a(g.Fq);break;case 2:b(g.Fq);
break;default:throw Error("Unexpected state: "+g.Kk);}}var g=this;null==this.Dk?d.pu(f):this.Dk.push(function(){d.pu(f)})};c.resolve=function(a){return a instanceof c?a:new c(function(d){d(a)})};c.reject=function(a){return new c(function(d,b){b(a)})};c.race=function(a){return new c(function(d,b){for(var f=ma(a),h=f.next();!h.done;h=f.next())c.resolve(h.value).hm(d,b)})};c.all=function(a){var d=ma(a),b=d.next();return b.done?c.resolve([]):new c(function(a,f){function h(d){return function(b){g[d]=b;
k--;0==k&&a(g)}}var g=[],k=0;do g.push(void 0),k++,c.resolve(b.value).hm(h(g.length-1),f),b=d.next();while(!b.done)})};c.$jscomp$new$AsyncExecutor=function(){return new b};return c});function oa(e,c,b){if(null==e)throw new TypeError("The 'this' value for String.prototype."+b+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");return e+""}
na("String.prototype.startsWith",function(e){return e?e:function(c,b){var a=oa(this,c,"startsWith");c+="";var d=a.length,f=c.length;b=Math.max(0,Math.min(b|0,a.length));for(var k=0;k<f&&b<d;)if(a[b++]!=c[k++])return!1;return k>=f}});function pa(e,c){ja();e instanceof String&&(e+="");var b=0,a={next:function(){if(b<e.length){var d=b++;return{value:c(d,e[d]),done:!1}}a.next=function(){return{done:!0,value:void 0}};return a.next()}};a[Symbol.iterator]=function(){return a};return a}
na("Array.prototype.keys",function(e){return e?e:function(){return pa(this,function(c){return c})}});na("String.prototype.endsWith",function(e){return e?e:function(c,b){var a=oa(this,c,"endsWith");c+="";void 0===b&&(b=a.length);b=Math.max(0,Math.min(b|0,a.length));for(var d=c.length;0<d&&0<b;)if(a[--b]!=c[--d])return!1;return 0>=d}});na("Array.prototype.entries",function(e){return e?e:function(){return pa(this,function(c,b){return[c,b]})}});
na("Object.getOwnPropertySymbols",function(e){return e?e:function(){return[]}});
(function(e){function c(d){if(a[d])return a[d].exports;var b=a[d]={$p:d,dD:!1,exports:{}};e[d].call(b.exports,b,b.exports,c);b.dD=!0;return b.exports}var b=window.webpackJsonp;window.webpackJsonp=function(a,k,h){for(var f,c,m=0,n=[];m<a.length;m++)c=a[m],d[c]&&n.push(d[c][0]),d[c]=0;for(f in k)Object.prototype.hasOwnProperty.call(k,f)&&(e[f]=k[f]);for(b&&b(a,k,h);n.length;)n.shift()()};var a={},d={3:0};c.e=function(a){function b(){m.onerror=m.onload=null;clearTimeout(n);var b=d[a];if(0!==b){if(b)b[1](Error("Loading chunk "+
a+" failed."));d[a]=void 0}}var f=d[a];if(0===f)return new Promise(function(a){a()});if(f)return f[2];var g=new Promise(function(b,h){f=d[a]=[b,h]});f[2]=g;var l=document.getElementsByTagName("head")[0],m=document.createElement("script");m.type="text/javascript";m.charset="utf-8";m.async=!0;m.timeout=12E4;c.sD&&m.setAttribute("nonce",c.sD);m.src=c.p+""+a+".js";var n=setTimeout(b,12E4);m.onerror=m.onload=b;l.appendChild(m);return g};c.KJ=e;c.AH=a;c.$p=function(a){return a};c.d=function(a,d,b){c.vD(a,
d)||Object.defineProperty(a,d,{configurable:!1,enumerable:!0,get:b})};c.n=function(a){var d=a&&a.__esModule?function(){return a["default"]}:function(){return a};c.d(d,"a",d);return d};c.vD=function(a,d){return Object.prototype.hasOwnProperty.call(a,d)};c.p="";c.OJ=function(a){console.error(a);throw a;};return c(c.iK=325)})({0:function(e){e.exports=function b(){if(1>arguments.length||"object"!==typeof arguments[0])return!1;if(2>arguments.length)return arguments[0];var a=arguments[0],d,f,k,h;Array.prototype.slice.call(arguments,
1).forEach(function(g){if("object"===typeof g)for(d in g)d in g&&(k=a[d],f=g[d],f!==a&&("object"!==typeof f||null===f?a[d]=f:f instanceof Date?a[d]=new Date(f.getTime()):(h="object"!==typeof k||null===k?Array.isArray(f)?[]:{}:Array.isArray(f)?Array.isArray(k)?k:[]:Array.isArray(k)?{}:k,a[d]=b(h,f))))});return a}},15:function(e,c,b){var a=b(0)(a||{},{l:{ua:{}}});a.l.ua=function(a){return{Bf:function(){return a},yf:function(d){var b=d||a;d=this.Bm(b);b=b&&b.location&&b.location.ancestorOrigins;return d===
a.top?d.location.href:b&&1<b.length?b[b.length-1]:d.document&&d.document.referrer||d.location.href},Bm:function(d){for(d=d||a;d;)try{var b=d.parent;if(!b.document)break;d=b;if(b===b.parent)break}catch(h){break}return d},qv:function(d){d=d||a;try{return d.parent}catch(k){}return null},GB:function(){var a=this.Bm();try{return a.document.referrer}catch(k){return null}},MI:function(){return a.performance},xv:function(){return a.navigator.userAgent},NB:function(){for(var d=a.self,b=0;d!==a.top&&d.parent;){try{if(d.parent&&
d.parent.location&&!d.parent.location.href)throw Error("HandleSafari");}catch(h){if(2>b)b++;else break}d=d.parent}return b}}}(window);c.vdb={l:{ua:a.l.ua}};c.default=a.l.ua;c.__esModule=!0},16:function(e,c){c.__esModule=!0;c.default=function(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function");}},17:function(e,c,b){var a=b(0)(a||{},{Da:{}});a.Da=function(){var d;return{G:function(b){var f="stage"===b,h=f?".dev":"",g=f?".stage":"",c=f?"-stage":"";d={"cdn.url":"http://cdn.vidible.tv/"+
b+"/","cdn.url.secure":"https://cdn-ssl.vidible.tv/"+b+"/","s3.url":"http://s3.amazonaws.com/vdb-cdn-files/","s3.url.secure":"https://s3.amazonaws.com/vdb-cdn-files/","tracking.url":"http://trk"+h+".vidible.tv/trk/","tracking.url.secure":"https://trk"+h+".vidible.tv/trk/","delivery.url":"http://delivery"+h+".vidible.tv/","delivery.url.secure":"https://delivery"+h+".vidible.tv/","adserver.url":"http://video"+c+".adaptv.advertising.com/","adserver.url.secure":"https://video"+c+".adaptv.advertising.com/",
"adstracker.url":"http://video"+c+".adaptv.advertising.com/","adstracker.url.secure":"https://video"+c+".adaptv.advertising.com/","inlineplayer.url":"http://cdn.vidible.tv/"+b+"/inline-player/js/latest/inline-player.js","inlineplayer.url.secure":"https://cdn-ssl.vidible.tv/"+b+"/inline-player/js/latest/inline-player.js","uplynk.url":"http://content.uplynk.com/","uplynk.url.secure":"https://content.uplynk.com/","videos.domain":"videos.vidible.tv","lowlander.videos.domain":"cdn.aolon.com","aeg.default_vendor":f?
"593fb37531e0a533fe6dd8fa":"593fb311c214e33ec50202f0","cdn.domain":"http://cdn.vidible.tv","cdn.domain.secure":"https://cdn-ssl.vidible.tv","cdn2.domain.secure":"https://cdn2.vidible.tv","imageservice.url":"https://img"+g+".vidible.tv","imageservice.url.secure":"https://img"+g+".vidible.tv","logger.level":f?"0":"3","ima.url":"http://s0.2mdn.net/instream/html5/ima3"+(f?"_debug":"")+".js","ima.url.secure":"https://s0.2mdn.net/instream/html5/ima3"+(f?"_debug":"")+".js","default.pid":f?"5912acc731e0a563e7535e52":
"59947c0544a64b1a49e52a48","default.bid":f?"53a2cd08e4b0915a797d6a2e":"56bcd17de4b0a5976ac0da12","default.bcid":f?"50d595ec0364e95588c77bd2":"56bcd17ce4b018167fea5539"};for(var m in d)a.Da[m]=d[m]}}}();c.vdb={Da:a.Da};c.default=a.Da;c.__esModule=!0},28:function(e,c,b){var a=b(0)(a||{},{l:{ib:{}}});a.l.ib={uh:function(a,b){var d=window.location;b=b||d.search+d.hash;a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=(new RegExp("[\\?&]"+a+"=([^&#]*)")).exec(b);return null==a?"":decodeURIComponent(a[1].replace(/\+/g,
" "))}};c.vdb={l:{ib:a.l.ib}};c.default=a.l.ib;c.__esModule=!0},324:function(e,c,b){function a(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(c,"__esModule",{value:!0});e=b(16);var d=a(e);e=b(39);var f=a(e);e=b(15);var k=a(e);b=b(17);var h=a(b);b=function(){function a(b,g){var c=this;(0,d.default)(this,a);if(g.trackingEnabled){var l=k.default.Bm(),m=k.default.yf()||"undefined",e=0===m.indexOf("https");this.config=g;g=(e?h.default["tracking.url.secure"]:h.default["tracking.url"])+"impression.gif?pid="+
(this.config.id||h.default["default.pid"])+"&bcid="+(this.config.bcid||h.default["default.bcid"])+"&s="+e+"&pv="+(this.config.jsVersion||"1.21.28")+"&ifr="+(window!==l)+"&cb="+Math.random()+"&pt="+f.default.kl+"&sid="+this.config.sid+"&r="+encodeURIComponent(m);document.createElement("img").src=g}this.adPromise=b.then(function(a){return c.vpaidAd=a})}a.prototype.initAd=function(a,d,b,f,h,g){this.adPromise.then(function(k){return k.initAd(a,d,b,f,h,g)})};a.prototype.startAd=function(){this.adPromise.then(function(a){return a.startAd()})};
a.prototype.stopAd=function(){this.adPromise.then(function(a){return a.stopAd()})};a.prototype.setAdVolume=function(a){this.adPromise.then(function(d){return d.setAdVolume(a)})};a.prototype.getAdVolume=function(){return this.vpaidAd&&this.vpaidAd.getAdVolume()};a.prototype.getAdDuration=function(){return this.vpaidAd&&this.vpaidAd.getAdDuration()};a.prototype.getAdRemainingTime=function(){return this.vpaidAd&&this.vpaidAd.getAdRemainingTime()};a.prototype.resizeAd=function(a,d,b){this.adPromise.then(function(f){return f.resizeAd(a,
d,b)})};a.prototype.pauseAd=function(){this.adPromise.then(function(a){return a.pauseAd()})};a.prototype.resumeAd=function(){this.adPromise.then(function(a){return a.resumeAd()})};a.prototype.expandAd=function(){this.adPromise.then(function(a){return a.expandAd()})};a.prototype.collapseAd=function(){this.adPromise.then(function(a){return a.collapseAd()})};a.prototype.getAdExpanded=function(a){return this.vpaidAd&&this.vpaidAd.getAdExpanded(a)};a.prototype.getAdSkippableState=function(){return this.vpaidAd&&
this.vpaidAd.getAdSkippableState()};a.prototype.getAdIcons=function(){return this.vpaidAd&&this.vpaidAd.getAdIcons()};a.prototype.getAdHeight=function(){return this.vpaidAd&&this.vpaidAd.getAdHeight()};a.prototype.getAdLinear=function(){return this.vpaidAd&&this.vpaidAd.getAdLinear()};a.prototype.getAdWidth=function(){return this.vpaidAd&&this.vpaidAd.getAdWidth()};a.prototype.skipAd=function(){this.adPromise.then(function(a){return a.skipAd()})};a.prototype.subscribe=function(a,d,b){this.adPromise.then(function(f){return f.subscribe(a,
d,b)})};a.prototype.unsubscribe=function(a){this.adPromise.then(function(d){return d.unsubscribe(a)})};a.prototype.handshakeVersion=function(a){return this.vpaidAd&&this.vpaidAd.handshakeVersion(a)||a};a.prototype.getAdCompanions=function(){return this.vpaidAd&&this.vpaidAd.getAdCompanions()||""};return a}();c.default=b},325:function(e,c,b){function a(a){return a&&a.__esModule?a:{default:a}}e=b(324);e=a(e);c=b(17);var d=a(c);c=b(28);c=a(c);var f=b(72),k=a(f),h=100,h=isNaN(h)?100:h,g=!0,l={};try{l=
JSON.parse(configSource),g=!1}catch(p){}var m=l.env||c.default.uh("oathPlayerBuildEnvironment")||"stage",f="dev"===m;l.env=f?"stage":m;d.default.G(l.env);c=c.default.uh("oathPlayerBuildTag")||null;b.p=f?"/build/":c?d.default["s3.url.secure"]+"dev/ad-client/js/"+c+"/":d.default["cdn.url.secure"]+"ad-client/js/1.21.28/";(function(a){a.bcid=a.bcid||d.default["default.bcid"];a.id=a.id||d.default["default.pid"];a.bid=a.bid||{};a.bid.id=a.bid.id||d.default["default.bid"];a.sid=a.sid||(new k.default).toString();
a.timestamp=+new Date;a.trackingEnabled=g||h>=Math.floor(101*Math.random())})(l);b=b.e(0).then(b.bind(null,328)).then(function(a){return a.default(l)});var n=new e.default(b,l);window.getVPAIDAd=function(){return n}},39:function(e,c,b){var a=b(0)(a||{},{j:{Nd:{}}});a.j.Nd={PF:"flash",Ox:"html5",FG:"smart",dH:"youtube",cH:"youku",kl:"o2unit",qG:"VRM_plgn"};c.vdb={j:{Nd:a.j.Nd}};c.default=a.j.Nd;c.__esModule=!0},72:function(e,c,b){var a=b(0)(a||{},{l:{fl:{},ua:{}}});a.l.ua=b(15).vdb.l.ua;a.l.fl=function(){function d(a){var d=
0;if("string"===typeof a)for(var b=0,f=a.length;b<f;b++)d+=a.charCodeAt(b);return d}function b(b){var f=d(a.l.ua.yf())+(new Date).getTime()+(b||0);window.performance&&"function"===typeof window.performance.now&&(f+=window.performance.now());this.kz="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var d=(f+16*Math.random())%16|0;f=Math.floor(f/16);return("x"===a?d:d&3|8).toString(16)})}b.prototype.toString=function(){return this.kz};return b}();c.vdb={l:{fl:a.l.fl}};c.default=a.l.fl;
c.__esModule=!0}});}).call(this, '{"jsVersion":"1.21.28","flashVersion":"17.06.345","id":"59947c0544a64b1a49e52a48","bid":{"id":"56bcd17de4b0a5976ac0da12"},"ts":"20171102113833689","adSettings":{"podSize":1,"prerollInterleave":1,"hardTimeout":7.0,"strictSiteCheckForAds":false,"blockContentOnAdBlocker":false, "domainOptimisation":true,"adStrategy":"ADSET_BASED","useSsai":false,"companions":[{"width":300,"height":250,"parent":"companion1", "keepCompanion":false,"failoverOnStart":false},{"width":300,"height":100,"parent":"companion2","keepCompanion":false,"failoverOnStart":false}, {"width":728,"height":90,"parent":"companion3","keepCompanion":false,"failoverOnStart":false}],"aeg":[],"asids":[]},"sid":"7a633ccf-8e79-49d7-ae72-baaf3ee9899e","env":"prod","bsfBlocked":false,"bcid":"5909ce947cdce053ec936a7c","playerTemplate":{"metaData":{}}}')
