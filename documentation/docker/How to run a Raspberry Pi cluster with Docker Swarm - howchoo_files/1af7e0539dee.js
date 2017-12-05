var Howchoo=Howchoo||{};Howchoo.Guide=(function(){var guid=null,guide=null,positionData=[];function getGuide(guid,callback){$.ajax({url:'/api/v1/guide/'+guid,dataType:'json'}).done(function(data){if(callback)callback(data);}).error(function(response){console.error(response);});}
function showCommentCount(){setTimeout(function(){var commentCount=$('.disqus-comment-count.count:first').text(),commentCountInt=commentCount.replace(/\D/g,'');if(commentCountInt>0){$('.disqus-comment-count.count').addClass('count-visible');$('.disqus-comment-count.badge-count').text(commentCountInt).addClass('count-visible');}},1000);}
function onResizeStop(){setPositionData();}
function setListeners(){Howchoo.Events.subscribe('resize:stop',onResizeStop);Howchoo.Events.subscribe('slot:rendered',function(){Howchoo.Events.publish('sticky:reset');});$('[data-lightbox]').on('click',function(){var loader='<div class="loader"></div>',image=$(this).attr('data-lightbox'),$modal=$('<div class="lightbox lightbox-guide-image"><div class="close"></div><img src="'+image+'" /></div>'),pendingLoad=2,$modalImage=$('img',$modal);$('body').append(loader);function repositionOnLoad(){--pendingLoad;if(pendingLoad===0){$modal.trigger('reposition');$('.lb_overlay').height(Math.max($(document).height(),$('.lb__overlay').height()));}}
$modalImage.on('load',repositionOnLoad);$modal.lightbox_me({centered:true,destroyOnClose:true,overlayCSS:{'background-color':'#000','opacity':'0.6','filter':'alpha(opacity=60)','-ms-filter':'progid:DXImageTransform.Microsoft.Alpha(Opacity="60")'},onLoad:function(){repositionOnLoad();$('.loader').remove();},onClose:function(){$('.lb_overlay').remove();}});});$('[data-scroll]').on('click',function(e){var destination=$(this).attr('href');if(!destination)return;e.preventDefault();$('html, body').animate({scrollTop:$(destination).offset().top-24,easing:'linear'},800);window.location.hash=destination;});$('[data-resource-type]').on('click',function(){var type=$(this).attr('data-resource-type'),name=$(this).attr('data-resource-name')||'Missing';ga('send','event','resource','click',type,{'dimension2':name});fbq('trackCustom','ResourceClick',{resource_name:name,guide:guid});});$('[data-loop]').on('click',function(e){var url=$(this).attr('href'),method=$(this).data('loop');e.preventDefault();ga('send','event','related guide','click',url,{'dimension7':method,'hitCallback':function(){document.location=url;}});});$('[data-expand-item]').one('click',function(){var $t=$(this),label=$t.attr('data-expand-item');if(label==='table of contents'&&$t.closest('.sidebar').is('sidebar--sticky'))label+=', sticky sidebar';ga('send','event','Page item','Expanded',label,true);$t.remove();});$(document).ready(function(){var $i=$('[data-primary-interest]').first(),link=$i.attr('href'),name=$i.text();if(!link||!name)return;$('.footer-logo__link').attr({href:link,title:'See more like this on: h/'+name}).append('<span class="footer-logo__interest">/'+name+'</span>');});}
function setPositionData(){positionData=[];$("[data-position]").each(function(){positionData.push({top:$(this).offset().top,el:$(this),loaded:false});});}
function configureStickySidebar(){var adUnit='right_rail_mid';var $adUnit=$('#ad_'+adUnit);var sidebarHeight=$('#sidebar').height()+250;var refreshIntervalId;if(!$adUnit.length){return;}
if($('article.guide').height()<sidebarHeight*4||$(window).width()<1000){return;}
Howchoo.Events.subscribe('ads:initialized',function(){Howchoo.Ads.buildSlot(Howchoo.Ads.getAdUnits()[adUnit]);Howchoo.Ads.requestBids([adUnit]);});Howchoo.Guide.Sticky.init('#sidebar');Howchoo.Events.subscribe('sidebar:sticky',function(visible){if(visible===true){Howchoo.Ads.refresh([adUnit]);setRefreshInterval();}else{$adUnit.hide();clearRefreshInterval();}});function setRefreshInterval(){refreshIntervalId=window.setInterval(function(){if(!$adUnit.is(':visible')||document.hidden){return;}
Howchoo.Ads.refresh([adUnit]);Howchoo.Ads.requestBids([adUnit]);},30000);}
function clearRefreshInterval(){window.clearInterval(refreshIntervalId);}}
return{init:function(conf){if(!conf.guid){throw"You must initialize Howchoo.Guide with a guid.";return;}
guid=conf.guid;setListeners();showCommentCount();setPositionData();configureStickySidebar();}};})();Howchoo.Guide.Sticky=(function(){var markerOffset=100;var isSticky=false;var estimatedHeight;var footerOffset;var offsetTop;var offsetLeft;var height;var marker;var $this;function setPositions(){var $article=$('article.guide');offsetTop=$('main').offset().top;offsetLeft=$article.offset().left
+$article.width()
+parseInt($article.css('margin-right'));height=$this.height();marker=offsetTop+height+markerOffset;footerOffset=parseInt($('footer').offset().top);estimatedHeight=$this.height();}
function toggleSticky(show){var speed=500;var easing='swing';if(show){isSticky=true;$this.css('left',offsetLeft);$this.addClass('sidebar--sticky').fadeTo(speed,1,easing);}else{isSticky=false;$this.fadeTo(speed/2,0,easing,function(){$this.removeClass('sidebar--sticky').css('opacity','');});}
Howchoo.Events.publish('sidebar:sticky',show);}
function onScroll(){var scrollTop=$(window).scrollTop();var inHeader=(scrollTop<marker);var footerIsNear=(scrollTop+estimatedHeight+100>=footerOffset);var inBody=(scrollTop>=marker&&!footerIsNear);if(!isSticky&&inBody){toggleSticky(true);}else if(isSticky&&(inHeader||footerIsNear)){toggleSticky(false);}}
function onResizeStart(){if(isSticky){$this.hide();}}
function onResizeStop(){setPositions();if(isSticky){$this.css('left',offsetLeft);$this.show();}}
function setListeners(){Howchoo.Events.subscribe('scroll',onScroll);var subscription=Howchoo.Events.subscribe('sticky:reset',function(){setPositions();$this.css('left',offsetLeft);subscription.remove();});Howchoo.Events.subscribe('resize:start',onResizeStart);Howchoo.Events.subscribe('resize:stop',onResizeStop);}
return{init:function(selector){$this=$(selector);setPositions();setListeners();}}})();var Howchoo=Howchoo||{};Howchoo.Ads=(function(){var rT=null;var pbjsEnabled=false;var mobileBreakpoint=860;var currentPlatform=null;var activeUnits=null;var bidStack=[];var googleAds={};var debugMode=false;var defaults={displayOnInit:true,units:{desktop:['right_rail','inline','footer'],mobile:['mobile_top','mobile_inline','mobile_footer']}};var bidderConfig={sovrn:{params:{right_rail:{tagid:'504026',},right_rail_mid:{tagid:'504027',},inline:{tagid:'504023',},footer:{tagid:'504022',},mobile_top:{tagid:'504025',},mobile_inline:{tagid:'504024'},mobile_footer:{tagid:'505164',}}},pulsepoint:{params:{right_rail:{cf:'300X250',cp:561422,ct:600163},right_rail_mid:{cf:'300X250',cp:561422,ct:600302},inline:{cf:'300X250',cp:561422,ct:600303},footer:{cf:'728X90',cp:561422,ct:600304},mobile_top:{cf:'300X250',cp:561422,ct:600305},mobile_inline:{cf:'300X250',cp:561422,ct:600306},mobile_footer:{cf:'320X50',cp:561422,ct:600307}}}};var adUnits={right_rail:{code:'/67904404/Right_Rail',sizes:[[300,250]],id:'ad_right_rail',defined:false,displayed:false},right_rail_mid:{code:'/67904404/Right_Rail_Mid',sizes:[[300,250],[300,600],[160,600]],id:'ad_right_rail_mid',defined:false,displayed:false},inline:{code:'/67904404/Inline',sizes:[[300,250]],id:'ad_inline',defined:false,displayed:false},footer:{code:'/67904404/Footer',sizes:[[728,90]],id:'ad_footer',defined:false,displayed:false},mobile_top:{code:'/67904404/Mobile_Top',sizes:[[300,250]],id:'ad_mobile_top',defined:false,displayed:false},mobile_inline:{code:'/67904404/Mobile_Inline',sizes:[[300,250]],id:'ad_mobile_inline',defined:false,displayed:false},mobile_footer:{code:'/67904404/Mobile_Footer',sizes:[[320,50]],id:'ad_mobile_footer',defined:false,displayed:false}};function log(){if(!debugMode)return;var args=Array.prototype.slice.call(arguments);args.unshift('ADS');console.log.apply(this,args);}
$(window).resize(function(){if(rT)clearTimeout(rT);rT=setTimeout(function(){Howchoo.Events.publish('resize:done')},250);});function forEachActiveBidder(callback){if(!callback||typeof callback!=='function')return;Object.keys(bidderConfig).forEach(callback);}
function getCurrentPlatform(){return $(window).width()>=mobileBreakpoint?'desktop':'mobile';}
function loadGPT(){var useSSL='https:'==document.location.protocol;var src=(useSSL?'https:':'http:')+'//www.googletagservices.com/tag/js/gpt.js';document.write('<scr'+'ipt src="'+src+'"></scr'+'ipt>');}
function setup(){window.googletag=window.googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){googletag.pubads().enableSingleRequest();googletag.pubads().disableInitialLoad();googletag.enableServices();});}
function setPageLevelTargeting(targeting){var targeting=Howchoo.pageLevelTargeting;if(targeting){googletag.cmd.push(function(){for(var key in targeting){googletag.pubads().setTargeting(key,targeting[key]);}});}}
function requestBids(adUnitCodes){adUnitCodes=adUnitCodes||getActiveUnits();log('requestBids',adUnitCodes);pbjs.requestBids({adUnitCodes:adUnitCodes});}
function onResize(){var tmpPlatform=getCurrentPlatform();if(tmpPlatform!==currentPlatform){currentPlatform=tmpPlatform;Howchoo.Events.publish('platform:change',currentPlatform);}}
function configurePrebid(){var units=[];Object.keys(adUnits).forEach(function(adUnitName){var adUnit=adUnits[adUnitName];var unit={};var bids=[];unit.code=adUnitName;unit.sizes=adUnit.sizes;forEachActiveBidder(function(bidder){var params=bidderConfig[bidder].params[adUnitName];if(!params)return;bids.push({params:params,bidder:bidder});});unit.bids=bids;units.push(unit);});log('configuring units',units);pbjs.addAdUnits(units);pbjs.onEvent('bidResponse',handleBidResponse);}
function loadPixels(){var script=document.createElement('script');script.setAttribute('src','https://ap.lijit.com/www/sovrn_beacon_standalone/sovrn_standalone_beacon.js?iid=13394512');script.id='sBeacon';document.head.appendChild(script);}
function roundCpm(cpm){if(cpm<=100){return cpm}else if(cpm<=1000){return Math.round(cpm/5)*5}else if(cpm<=5000){return Math.round(cpm/25)*25}else{return 5000}}
function handleBidResponse(bid){log('bid received',bid);bid._expired=false;bid._netCpm=roundCpm(Math.round(bid.cpm*100));bidStack.push(bid);}
function getWinningBids(slots){var winningBids=[];for(var i=0;i<slots.length;i++){var adUnitCode=slots[i];var bids=bidStack.filter(function(b){return b.adUnitCode===adUnitCode&&!b._expired&&b._netCpm>0});if(!bids.length)continue;winningBids.push(bids.sort(function(a,b){a._netCpm<b._netCpm})[0]);}
return winningBids;}
function setBidTargeting(bids){googletag.cmd.push(function(){for(var i=0;i<bids.length;i++){var bid=bids[i];var slot=googleAds[adUnits[bid.adUnitCode].id];slot.setTargeting('hb_bidder',bid.bidderCode);slot.setTargeting('hb_price',bid._netCpm);slot.setTargeting('hb_bidid',bid.adId);}});}
function clearBidTargeting(slots){googletag.cmd.push(function(){for(var i=0;i<slots.length;i++){var slot=slots[i];if(slot.getTargeting('hb_bidder').length)slot.clearTargeting('hb_bidder');if(slot.getTargeting('hb_price').length)slot.clearTargeting('hb_price');if(slot.getTargeting('hb_bidid').length)slot.clearTargeting('hb_bidid');}});}
function refresh(slots){googletag.cmd.push(function(){log('refresh called on',slots);var slotObjs=slots.map(function(unit){return googleAds[adUnits[unit].id]});if(pbjsEnabled){clearBidTargeting(slotObjs);var winningBids=getWinningBids(slots);if(winningBids.length){log('winning bids',winningBids);setBidTargeting(winningBids);}}
googletag.pubads().refresh(slotObjs);Howchoo.Events.publish('ads:refresh',slotObjs);log('refresh complete');});}
function buildSlot(d){if(!d.defined){defineSlot(d);}
if(!d.displayed){displaySlot(d);}}
function displayResponsive(){googletag.cmd.push(function(){var active=activeUnits[currentPlatform];log('display responsive',active);for(var i=0;i<active.length;i++){var slotType=active[i];if(adUnits[slotType]){var d=adUnits[slotType];log('get element',document.getElementById(d.id));if(document.getElementById(d.id)){buildSlot(d);}}}});}
function updateUnits(units){activeUnits=units;}
function addUnit(platform,unit){activeUnits[platform].push(unit);}
function getActiveUnits(){log('get active units',currentPlatform);return activeUnits[currentPlatform].filter(function(u){return adUnits[u].defined});}
function setListeners(){Howchoo.Events.subscribe('resize:done',onResize);Howchoo.Events.subscribe('platform:change',function(){displayResponsive();refresh(getActiveUnits());}.bind(this));googletag.cmd.push(function(){googletag.pubads().addEventListener('slotRenderEnded',function(event){Howchoo.Events.publish('slot:rendered',event);});});}
function defineSlot(slot){if(!slot.defined){log('defining slot',slot);googleAds[slot.id]=googletag.defineSlot(slot.code,slot.sizes,slot.id).addService(googletag.pubads());slot.defined=true;}
return googleAds[slot.id];}
function displaySlot(slot){log('displaying slot',slot);googletag.display(slot.id);slot.displayed=true;}
function getBidById(bidid){var bid=bidStack.filter(function(b){return b.adId===bidid});if(!bid.length)return;return bid[0];}
function render(doc,bidid){var bid=getBidById(bidid);if(!bid){log('ERROR: Bid not found',bidid);return;}
log('Ad rendered!!',bid.bidderCode,bid.adUnitCode,bid._netCpm);doc.write(bid.ad);doc.close();setFrameSize(doc,bid.width,bid.height);expireBid(bid);}
function expireBid(bid){log('expiring bid',bid);bid._expired=true;}
function setFrameSize(doc,width,height){if(doc.defaultView&&doc.defaultView.frameElement){doc.defaultView.frameElement.width=width;doc.defaultView.frameElement.height=height;}}
loadGPT();setup();return{buildSlot:buildSlot,refresh:refresh,render:render,requestBids:requestBids,getBidStack:function(){return bidStack},getAdUnits:function(){return adUnits;},init:function(conf){debugMode=(window.location.search.indexOf('debug_mode')!==-1)?true:false;conf=$.extend({},defaults,conf);log('Howchoo.Ads.init',conf);activeUnits=conf.units;currentPlatform=getCurrentPlatform();if(pbjsEnabled){configurePrebid();loadPixels();}
$(".advertisement").removeClass("hidden");setPageLevelTargeting();setListeners();if(conf.displayOnInit){displayResponsive();if(pbjsEnabled)requestBids();setTimeout(function(){refresh(getActiveUnits());}.bind(this),800);}
Howchoo.Events.publish('ads:initialized');}}})();var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={manual:_self.Prism&&_self.Prism.manual,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);o[s]=i[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,i=a.elements||document.querySelectorAll(a.selector),l=0;r=i[l++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var i,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),l=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var s=t.textContent,u={element:t,language:i,grammar:l,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(n.hooks.run("before-highlight",u),u.element.textContent=u.code,n.hooks.run("after-highlight",u)),n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),a&&_self.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,r){var i=n.tokenize(e,t);return a.stringify(n.util.encode(i),r)},matchGrammar:function(e,t,a,r,i,l,o){var s=n.Token;for(var u in a)if(a.hasOwnProperty(u)&&a[u]){if(u==o)return;var g=a[u];g="Array"===n.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var h=g[c],f=h.inside,d=!!h.lookbehind,m=!!h.greedy,p=0,y=h.alias;if(m&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=r,k=i;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof s)){h.lastIndex=0;var _=h.exec(w),P=1;if(!_&&m&&b!=t.length-1){if(h.lastIndex=k,_=h.exec(e),!_)break;for(var A=_.index+(d?_[1].length:0),j=_.index+_[0].length,x=b,O=k,S=t.length;S>x&&(j>O||!t[x].type&&!t[x-1].greedy);++x)O+=t[x].length,A>=O&&(++b,k=O);if(t[b]instanceof s||t[x-1].greedy)continue;P=x-b,w=e.slice(k,O),_.index-=k}if(_){d&&(p=_[1].length);var A=_.index+p,_=_[0].slice(p),j=A+_.length,N=w.slice(0,A),C=w.slice(j),E=[b,P];N&&(++b,k+=N.length,E.push(N));var I=new s(u,f?n.tokenize(_,f):_,y,_,m);if(E.push(I),C&&E.push(C),Array.prototype.splice.apply(t,E),1!=P&&n.matchGrammar(e,t,a,b,k,!0,u),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}n.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,i=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,n.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;!function(e){var t={variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,lookbehind:!0,greedy:!0,inside:t},{pattern:/(["'])(?:\\\\|\\?[^\\])*?\1/g,greedy:!0,inside:t}],variable:t.variable,"function":{pattern:/(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,lookbehind:!0},keyword:{pattern:/(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,lookbehind:!0},"boolean":{pattern:/(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var a=t.variable[1].inside;a["function"]=e.languages.bash["function"],a.keyword=e.languages.bash.keyword,a.boolean=e.languages.bash.boolean,a.operator=e.languages.bash.operator,a.punctuation=e.languages.bash.punctuation}(Prism);!function(e){e.languages.ruby=e.languages.extend("clike",{comment:[/#(?!\{[^\r\n]*?\}).*/,/^=begin(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?=end/m],keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var n={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.util.clone(e.languages.ruby)}};e.languages.insertBefore("ruby","keyword",{regex:[{pattern:/%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}],variable:/[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,symbol:/:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.insertBefore("ruby","number",{builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,greedy:!0,inside:{interpolation:n}},{pattern:/("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,greedy:!0,inside:{interpolation:n}}]}(Prism);Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m};Prism.languages.perl={comment:[{pattern:/(^\s*)=\w+[\s\S]*?=cut.*/m,lookbehind:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0}],string:[{pattern:/\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\1/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,greedy:!0},{pattern:/("|`)(?:[^\\]|\\[\s\S])*?\1/,greedy:!0},{pattern:/'(?:[^'\\\r\n]|\\.)*'/,greedy:!0}],regex:[{pattern:/\b(?:m|qr)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s+([a-zA-Z0-9])(?:[^\\]|\\.)*?\1[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,greedy:!0}],variable:[/[&*$@%]\{\^[A-Z]+\}/,/[&*$@%]\^[A-Z_]/,/[&*$@%]#?(?=\{)/,/[&*$@%]#?((::)*'?(?!\d)[\w$]+)+(::)*/i,/[&*$@%]\d+/,/(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],filehandle:{pattern:/<(?![<=])\S*>|\b_\b/,alias:"symbol"},vstring:{pattern:/v\d+(\.\d+)*|\d+(\.\d+){2,}/,alias:"string"},"function":{pattern:/sub [a-z0-9_]+/i,inside:{keyword:/sub/}},keyword:/\b(any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,number:/\b-?(0x[\dA-Fa-f](_?[\dA-Fa-f])*|0b[01](_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)\b/,operator:/-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,punctuation:/[{}[\];(),:]/};Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:{pattern:/\?>|<\?(?:php|=)?/i,alias:"important"},variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(e){"php"===e.language&&/(?:<\?php|<\?)/gi.test(e.code)&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi,function(a){for(var n=e.tokenStack.length;-1!==e.backupCode.indexOf("___PHP"+n+"___");)++n;return e.tokenStack[n]=a,"___PHP"+n+"___"}),e.grammar=Prism.languages.markup)}),Prism.hooks.add("before-insert",function(e){"php"===e.language&&e.backupCode&&(e.code=e.backupCode,delete e.backupCode)}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language&&e.tokenStack){e.grammar=Prism.languages.php;for(var a=0,n=Object.keys(e.tokenStack);a<n.length;++a){var t=n[a],r=e.tokenStack[t];e.highlightedCode=e.highlightedCode.replace("___PHP"+t+"___",'<span class="token php language-php">'+Prism.highlight(r,e.grammar,"php").replace(/\$/g,"$$$$")+"</span>")}e.element.innerHTML=e.highlightedCode}}));Prism.languages.python={"triple-quoted-string":{pattern:/"""[\s\S]+?"""|'''[\s\S]+?'''/,alias:"string"},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/("|')(?:\\\\|\\?[^\\\r\n])*?\1/,greedy:!0},"function":{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/};Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-_\w]+/,variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},"boolean":/\b(?:true|false)\b/,"null":/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.util.clone(Prism.languages.scss);Prism.languages.yaml={scalar:{pattern:/([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:/(\s*(?:^|[:\-,[{\r\n?])[ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,lookbehind:!0,alias:"number"},"boolean":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},"null":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,lookbehind:!0,greedy:!0},number:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./};var Howchoo=Howchoo||{};Howchoo.Social=(function(){var init=function(){initFacebook();initReddit();initTwitter();initPinterest();};var initFacebook=function(){window.fbAsyncInit=function(){function getUriFromUrl(url){var parser=document.createElement('a');parser.href=url;return parser.pathname;}
FB.Event.subscribe('edge.create',function(url){uri=getUriFromUrl(url);ga('send','social','facebook','like',uri);});FB.Event.subscribe('edge.remove',function(url){uri=getUriFromUrl(url);ga('send','social','facebook','unlike',uri);});};};var initReddit=function(){$(".share-reddit").one("click",function(){var uri=window.location.pathname;ga('send','social','reddit','share',uri);});};var initTwitter=function(){twttr.ready(function(twttr){twttr.events.bind('tweet',function(event){var uri=window.location.pathname;ga('send','social','twitter','tweet',uri);});});};var initPinterest=function(){$(".share-pinterest").one("click",function(){var uri=window.location.pathname;ga('send','social','pinterest','pin',uri);});};return{init:init};})();