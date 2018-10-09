function queueClient(n,t,i){var r;return arguments.length>=5&&(r=arguments[4]),typeof i=="object"&&(r=i),r||(r=new QueueIt.Javascript.Options),arguments[2]==null||isNaN(arguments[2])||(r.validity=Number(arguments[2])),arguments[3]!=null&&typeof arguments[3]=="string"&&(r.culture=arguments[3]),new QueueIt.Javascript.QueueClient(n,t,r)}var QueueIt;(function(n){var t;(function(n){n.Version="1.7.44"})(t=n.Javascript||(n.Javascript={}))})(QueueIt||(QueueIt={})),function(n){var t;(function(n){var t;(function(n){var t=function(){function n(n,t,i){t===void 0&&(t=null);i===void 0&&(i=null);this.queryStringPrefix=t?t:"";this.client=n;this.urlUtil=i;this.urlUtil||(this.urlUtil={getPathName:function(){return document.location.pathname},getSearch:function(){return document.location.search},getHash:function(){return document.location.hash},replaceHistory:function(n){return window.history.replaceState(window.history.state,document.title,n)}})}return n.prototype.removeTokenFromUrl=function(){var n,i,r,t;window.history&&window.history.replaceState&&(n=this.urlUtil.getSearch(),n=this.tryRemoveQueueITToken(n),i="[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",n=n.replace(this.generateRegex("q",i),"$1"),n=n.replace(this.generateRegex("p",i),"$1"),n=n.replace(this.generateRegex("h","[0-9a-f]{32}"),"$1"),n=n.replace(this.generateRegex("rt","[a-z]+"),""),n=n.replace(this.generateRegex("ts","\\d+"),"$1"),n=n.replace(this.generateRegex("e","[a-z0-9]{3,20}"),"$1"),n=n.replace(this.generateRegex("c",this.client.getCustomerId()),"$1"),n=n.replace(/\?$/,""),n=n.replace(/&$/,""),n=n.replace(/\?#/,"#"),r=this.urlUtil.getPathName(),t=r+n+this.urlUtil.getHash(),t||(t="/"),this.urlUtil.replaceHistory(t))},n.prototype.tryRemoveQueueITToken=function(n){var t=new RegExp("([?&])(queueittoken=([a-z0-9]|-|_|~)*&?)","i");return n.replace(t,"$1")},n.prototype.generateRegex=function(n,t){t===void 0&&(t="[^&]+");return new RegExp("([?&])("+this.queryStringPrefix+n+"="+t+"&?)","i")},n}();n.token=t})(t=n.Addons||(n.Addons={}))})(t=n.Javascript||(n.Javascript={}))}(QueueIt||(QueueIt={}));String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),function(n){var t;(function(t){var f=function(){function n(){this.clients=[]}return n.prototype.add=function(n){this.clients.push(n);this[n.getEventId()]=n},n.prototype.getAll=function(){return this.clients},n}(),i,r,u,e,o;t.QueueClientCustomerRepo=f;i=function(){function n(){}return n.prototype.set=function(n,t,i){this[n]||(this[n]=new f);this[n].add(i)},n.prototype.get=function(n){return this[n]},n}();t.QueueClientRepository=i;r=function(){function n(){this.targetUrlParams||(this.targetUrlParams=[])}return n.prototype.addTargetUrlParam=function(n,t){this.targetUrlParams.push(new u(n,t))},n}();t.Options=r;u=function(){function n(n,t){if(this.key=n,this.value=t,!n||!n.match("^[a-zA-Z0-9_]+$"))throw new Error("Target URL parameter key '"+n+"' is invalid");}return n}();t.TargetUrlParam=u;e=function(){function n(){}return n}();t.RedirectOptions=e;o=function(){function u(n,u,f){this.queueClientIsEnabled=!1;this.queueClientIsVerified=!1;this.timeoutTimer=null;this.customerId=n.toLowerCase().trim();this.eventId=u.toLowerCase().trim();window.queueit||(window.queueit=new i);window.queueit.set(this.customerId,this.eventId,this);f||(f=new r);f.host||(f.host=this.customerId+".queue-it.net");f.redirector||(f.redirector=function(n){window.location.href=n;document.close()});f.getCookies||(f.getCookies=function(){return document.cookie});f.setCookie||(f.setCookie=function(n){document.cookie=n});f.extendValidity===undefined&&(f.extendValidity=!0);f.currentUrl||(f.currentUrl=window.location.href);this.options=f;this.validity=isNaN(f.validity)?20:Number(f.validity);this.language=f.culture;this.layoutName=f.layoutName;this.targetUrl=f.targetUrl;f.createCookieManager||(f.createCookieManager=function(n,i,r,u,f,e){return new t.CookieManager(n,i,r,u,f,e)});this.cookieManager=f.createCookieManager(this.customerId,this.eventId,this.options.host,this.options.cookieDomain,this.options.getCookies,this.options.setCookie);this.initialize(this.customerId,this.eventId)}return u.prototype.initialize=function(i,r){var e=this,s,f,u,o;this.options.removeTokenFromUrl&&this.hasBeenThroughQueue(this.getCurrentUrl())&&(s=new t.Addons.token(this,this.options.queryStringPrefix),s.removeTokenFromUrl());f=this.cookieManager.getValidationState();f==="verified"?(this.options.extendValidity&&this.cookieManager.extendCookie(this.validity),this.queueClientIsVerified=!0,this.queueClientIsEnabled=!0,this.executeCallback(this.options.onVerified)):f!=="disabled"||this.hasBeenThroughQueue(this.getCurrentUrl())?f!=="timeout"||this.hasBeenThroughQueue(this.getCurrentUrl())?this.queueClientIsEnabled=this.cookieManager.cookieIsEnabled():(this.queueClientIsEnabled=!1,this.executeCallback(this.options.onTimeout)):(this.queueClientIsEnabled=!1,this.executeCallback(this.options.onDisabled));!this.queueClientIsVerified&&this.queueClientIsEnabled&&(u=document.createElement("script"),u.type="text/javascript",u.src="https://"+this.options.host+"/javascriptqueue/"+i+"/"+r+"/"+(new Date).getTime()+"?t="+encodeURIComponent(this.getTargetUrl())+"&ver=js"+n.Javascript.Version+(this.language?"&cid="+this.language:"")+(this.layoutName?"&l="+encodeURIComponent(this.layoutName):"")+this.generateTargetUrlParams(),u.async=!0,o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(u,o),this.timeoutTimer=setTimeout(function(){e.cookieManager.setTimeoutState();e.executeCallback(e.options.onTimeout)},5e3))},u.prototype.getCustomerId=function(){return this.customerId},u.prototype.getEventId=function(){return this.eventId},u.prototype.enqueue=function(n){if(n&&(clearTimeout(this.timeoutTimer),!this.queueClientIsVerified)&&this.queueClientIsEnabled){if(n.redirect){this.options.redirector(n.redirectUrl);return}if(n.isError){this.executeCallback(this.options.onDisabled);return}this.cookieManager.setCookieValue(n.cookieValue,n.fixedCookieValidity||this.validity);var t=this.cookieManager.getValidationState();if(t=="disabled"||n.isError){this.executeCallback(this.options.onDisabled);return}if(t=="verified"){this.queueClientIsVerified=!0;this.executeCallback(this.options.onVerified);return}throw"queueit could not set cookie.";}},u.prototype.cancel=function(n){n===void 0&&(n=null);this.cancelSession();this.cancelQueueItem(n)},u.prototype.cancelSession=function(){this.cookieManager.cancelCookie()},u.prototype.cancelQueueItem=function(n){n===void 0&&(n=null);var t="//"+this.options.host+"/cancel.aspx?c="+this.customerId+"&e="+this.eventId+"&t="+encodeURIComponent(window.location.href);n&&(t=t+"&r="+encodeURIComponent(n));this.options.redirector(t)},u.prototype.getTargetUrl=function(){var n=this.getCurrentUrl();return this.hasBeenThroughQueue(n)?n:this.options.useEventTargetUrl?"":this.targetUrl?this.targetUrl:n},u.prototype.generateTargetUrlParams=function(){var t,n,i;if(!this.options.useEventTargetUrl||!this.options.targetUrlParams)return"";for(t="",n=0;n<this.options.targetUrlParams.length;n++)i=this.options.targetUrlParams[n],t+="&t_"+i.key+"="+encodeURIComponent(i.value);return t},u.prototype.getCurrentUrl=function(){return this.options.currentUrl},u.prototype.hasBeenThroughQueue=function(n){return n.match("[?&][a-zA-Z]{0,4}q=[0-9a-f-]{36}.*&[a-zA-Z]{0,4}h=[0-9a-f]{32}")||n.toLowerCase().indexOf("queueittoken")>-1},u.prototype.executeCallback=function(n){if(n)try{n()}catch(t){window.console&&window.console.error("Error in onVerified callback: "+t.message)}},u}();t.QueueClient=o})(t=n.Javascript||(n.Javascript={}))}(QueueIt||(QueueIt={})),function(n){var t;(function(n){var t=function(){function n(n,t,i,r,u,f,e){u===void 0&&(u=function(){return document.cookie});f===void 0&&(f=function(n){return document.cookie=n});e===void 0&&(e=function(){return new Date});this.customerId=n;this.eventId=t;this.host=i;this.cookieDomain=r;this.getCookies=u;this.setCookie=f;this.getNow=e}return n.prototype.getCookieName=function(){return n.CookieNameInitializer+this.eventId},n.prototype.extendCookie=function(n){var t=this.getCookieRawValue(this.getCookieName());t&&t!=="timeout"&&this.setCookieValue(t,n)},n.prototype.getValidationState=function(){var f=this.getCookieRawValue(this.getCookieName()),i,o,c,n,s,r,u;if(!f)return undefined;if(f==="timeout")return"timeout";var h="",t=0,e=0;for(i=0,o=f.split("&");i<o.length;i++){if(c=o[i],n=c.split("="),n.length!=2)return undefined;switch(n[0].toLowerCase()){case"redirecttype":h=n[1].toLowerCase();break;case"issuetime":t=Number(n[1]);break;case"fixedvaliditymins":e=Number(n[1])}}return h==="idle"?(s=this.getNow(),t=t*1e3,r=new Date(t),r.setMinutes(r.getMinutes()+e),u=new Date(t),u.setMinutes(u.getMinutes()-e),s>r)?undefined:s<u?undefined:"disabled":"verified"},n.prototype.cookieIsEnabled=function(){return navigator.cookieEnabled},n.prototype.setTimeoutState=function(){this.setCookieRawValue(this.getCookieName(),"timeout",3)},n.prototype.setCookieValue=function(n,t){this.setCookieRawValue(this.getCookieName(),n,t)},n.prototype.cancelCookie=function(){this.setCookieRawValue(this.getCookieName(),"",-1)},n.prototype.setCookieRawValue=function(n,t,i){var r=encodeURIComponent(t)+";path=/",u=this.getNow();u.setMinutes(u.getMinutes()+i);r=i>0?r+";expires="+u.toUTCString():r+";expires=Thu, 01 Jan 1970 00:00:01 GMT";this.cookieDomain&&(r=r+";domain="+this.cookieDomain);this.setCookie(n+"="+r);i>0&&this.getCookieRawValue(this.getCookieName())!==t?(r=encodeURIComponent(t)+";path=/;expires="+u.toUTCString(),this.setCookie(n+"="+r)):i<=0&&this.getCookieRawValue(this.getCookieName())&&(r=encodeURIComponent(t)+";expires=Thu, 01 Jan 1970 00:00:01 GMT",this.setCookie(n+"="+r))},n.prototype.getCookieRawValue=function(n){var u=this.getCookies(),t,r,f,i;if(!u)return undefined;for(i=u.split(";"),t=0;t<i.length;t++)if(r=i[t].substr(0,i[t].indexOf("=")),f=i[t].substr(i[t].indexOf("=")+1),r=r.replace(/^\s+|\s+$/g,""),r==n)return decodeURIComponent(f);return undefined},n.prototype.cancelQueueId=function(){this.removeLocalSession();this.removeSessionInQueueITDomain()},n.prototype.removeLocalSession=function(){var n=this.getCookieName()+"=";this.cookieDomain&&(n+=";domain="+this.cookieDomain);n+=";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;";document.cookie=n;this.setCookie(n)},n.prototype.removeSessionInQueueITDomain=function(){var n=document.createElement("script");n.src=this.host+"/cancel/"+this.customerId+"/"+this.eventId+"/cancelqueueid";document.getElementsByTagName("head")[0].appendChild(n)},n.CookieNameInitializer="QueueITAccepted-SDFrts345E-V3_",n}();n.CookieManager=t})(t=n.Javascript||(n.Javascript={}))}(QueueIt||(QueueIt={}));