
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"399",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=document.body.className.indexOf(\"signed-in\")\u0026\u0026-1==document.body.className.indexOf(\"admin-user\")})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",1],8,16],".parentElement.querySelector(\"h3\").innerText}catch(a){return\"\"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"path\"in ",["escape",["macro",3],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.replace(\/[\\?\u0026]i=......\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){if(d\u0026\u0026e){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,f,c,d){\"string\"===typeof a\u0026\u0026(a=[a]);c||(c=1E4);d||(d=100);c=Math.round(c\/d);var g=0,h=a.length,b,e,k=window.setInterval(function(){for(b=0;b\u003Ch\u0026\u0026!(e=0===a[b].indexOf(\"\/\/\")?document.evaluate(a[b],document,null,XPathResult.ANY_TYPE,null).iterateNext():document.querySelector(a[b]));b++);if(e||g++\u003Ec)window.clearInterval(k),e\u0026\u0026f()},d)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c,e){var a=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")};window.analytics\u0026\u0026\"string\"===typeof d\u0026\u0026-1\u003C[\"Success\",\"Viewed\"].indexOf(d)\u0026\u0026\"string\"===typeof b\u0026\u0026\"string\"===typeof c\u0026\u0026(\"object\"===typeof e?window.analytics.trackLink(e,\"Experiment \"+d,{experiment_id:a(b),experiment_name:b,variation_id:a(c),variation_name:a(c)}):window.analytics.track(\"Experiment \"+d,{experiment_id:a(b),\nexperiment_name:b,variation_id:a(c),variation_name:a(c)}))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=0,c=window.setInterval(function(){if(window.analytics||40\u003Cb++)window.clearInterval(c),window.analytics\u0026\u0026a()},50)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var a=document.createElement(\"script\");a.src=\"https:\/\/code.jquery.com\/jquery-3.2.1.slim.min.js\";document.body.appendChild(a);var c=0,d=window.setInterval(function(){if(window.jQuery||100\u003Cc++)window.clearInterval(d),window.jQuery\u0026\u0026b()},50)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){el=document.createElement(\"script\");el.src=\"https:\/\/assets.digitalocean.com\/bui\/1.0.0\/bui.js\";document.body.appendChild(el);a()}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var f=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")},h=function(a){return\"function\"===typeof a?a():\"all\"===a?!0:\"non-customers\"===a?null===window.analytics.user().id():\"customers\"===a?null!==window.analytics.user().id():!1},g=function(a){var b=0;if(0==a.length)return b;for(d=0;d\u003Ca.length;d++)c=a.charCodeAt(d),b=(b\u003C\u003C5)-b+c,b\u0026=b;return b},k=function(a,b){if(a\u0026\u0026b\u0026\u0026window.localStorage)return localStorage.setItem(\"gtm_ab\"+\na,b),!0},l=function(a){if(a\u0026\u0026window.localStorage)return localStorage.getItem(\"gtm_ab\"+a)},m=function(a){var b=window.analytics.user().anonymousId().replace(\/-\/g,\"\");return parseInt(b.substr(a%(b.length-1),2),16)\/255};\"audience\"in a||(a.audience=\"all\");\"pct\"in a||(a.pct=1);if(\"string\"===typeof a.name\u0026\u0026\"variants\"in a\u0026\u0026a.variants instanceof Array\u0026\u0026!document.querySelector('*[data-gtm_ab\\x3d\"'+f(a.name)+'\"]')){\"seed\"in a||(a.seed=g(a.name));g=l(a.seed);if(g)for(var d=0;d\u003Ca.variants.length;d++)if(a.variants[d].name===\ng){var e=a.variants[d];break}e\u0026\u0026\"function\"!==typeof a.audience\u0026\u0026e.func();var n=0,p=window.setInterval(function(){if(window.analytics||40\u003Cn++)window.clearInterval(p),window.analytics\u0026\u0026window.analytics.ready(function(){if(!e\u0026\u0026h(a.audience)){var d=m(a.seed);d\u003C=a.pct\u0026\u0026(e=a.variants[Math.floor(d\/a.pct*a.variants.length)],e.func(),k(a.seed,e.name))}e\u0026\u0026(window.analytics.track(\"Experiment Viewed\",{experiment_id:f(a.name),experiment_name:a.name,variation_id:f(e.name),variation_name:f(e.name)}),window.setTimeout(function(){var b=\ndocument.querySelectorAll('*[data-js\\x3d\"gtm_ab_success\"]'),d;for(d=0;d\u003Cb.length;d++)window.analytics.trackLink(b[d],\"Experiment Success\",{experiment_id:f(a.name),experiment_name:a.name,variation_id:f(e.name),variation_name:f(e.name),success_details:b[d].getAttribute(\"href\")||\"\"})},100))})},50)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return(a=document.cookie.match(\"(^|;) ?\"+a+\"\\x3d([^;]*)(;|$)\"))?a[2]:null}})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"recentlySignedUp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"staging",
      "vtp_name":"marketoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"production",
      "vtp_name":"conversionEnvironment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"userDropletCount"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__r"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"userOrOrgHasCreatedDroplets"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmLoad"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audience"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"refcode"
    },{
      "function":"__j",
      "vtp_name":"window.ub.page.variantId"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_anonymous_id"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",35],
      "vtp_defaultValue":"_",
      "vtp_map":["list",["map","key","survey","value","Thanks for filling out our survey! We genuinely appreciate customer feedback."],["map","key","swag","value","Use promo code DOswag10 on Billing page for $10 credit. Valid for new users only."]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"signed_in"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_user_id"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"optimizelySegments"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"last_logged_in_at"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gtmab_ft"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"pcode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pcode"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.droplet_count"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","location","value",["macro",5]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",5]]],
      "vtp_eventCategory":"Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Registration",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",19],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",5]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",75,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":16
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",17],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"m4TPCP2NtQIQy5v24QM",
      "vtp_url":["macro",22],
      "vtp_enableReadGaCookie":false,
      "tag_id":18
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",76,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":24
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":44
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",77,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":45
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=cpljCNe412UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":78
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=RNOTEOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":82
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",78,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":83
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",79,0]],
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqsf\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":84
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",80,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":88
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/1010666955\/?guid=ON\u0026amp;script=0\u0026amp;data.userengaged=true",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Product",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Create",
      "vtp_eventLabel":"Droplet",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",5]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",5]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":125
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddPaymentInfo\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":135
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":136
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=EUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":137
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":138
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Purchase\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":141
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=i4IrCJHK53UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":142
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "tag_id":146
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":152
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2\u0026evt=custom\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":153
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":155
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=241522\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":156
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=Generic",
      "tag_id":159
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":162
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",17],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"PiHFCPrC130QgP3WjgM",
      "vtp_url":["macro",22],
      "vtp_enableReadGaCookie":false,
      "tag_id":167
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["template",["macro",23],"\u0026var=",["macro",32]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":171
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/alb.reddit.com\/snoo.gif?q=CAAHAAABAAoACQAAABHN6HlAAA==\u0026s=L9dW-RSPEAGmB8zBoGqMLMP4XUtZODdwovDmPJhIuLs=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":172
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",33]],["map","key","u2","value",["macro",23]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdos",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",24],
      "vtp_url":["macro",22],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":173
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",33]],["map","key","u2","value",["macro",23]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdou",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",24],
      "vtp_url":["macro",22],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":174
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",33]],["map","key","u2","value",["macro",23]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochpu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",24],
      "vtp_url":["macro",22],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":175
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",33]],["map","key","u2","value",["macro",23]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochps",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",24],
      "vtp_url":["macro",22],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":176
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",33]],["map","key","u2","value",["macro",23]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digotrys",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",24],
      "vtp_url":["macro",22],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":177
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",33]],["map","key","u2","value",["macro",23]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digotryu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",24],
      "vtp_url":["macro",22],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":178
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",33]],["map","key","u2","value",["macro",23]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"trydoaps",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",24],
      "vtp_url":["macro",22],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":180
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",33]],["map","key","u2","value",["macro",23]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"trydoapc",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",24],
      "vtp_url":["macro",22],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":181
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"GaeYCJzr8H4QgP3WjgM",
      "vtp_url":["macro",22],
      "vtp_enableReadGaCookie":false,
      "tag_id":182
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":183
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026conversionId=333506\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",24],
      "tag_id":184
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"A0tMCLK24n4QgP3WjgM",
      "vtp_url":["macro",22],
      "vtp_enableReadGaCookie":false,
      "tag_id":185
    },{
      "function":"__cl",
      "tag_id":193
    },{
      "function":"__cl",
      "tag_id":194
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"300000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"758737_224",
      "tag_id":195
    },{
      "function":"__hl",
      "tag_id":196
    },{
      "function":"__hl",
      "tag_id":197
    },{
      "function":"__cl",
      "tag_id":198
    },{
      "function":"__hl",
      "tag_id":199
    },{
      "function":"__hl",
      "tag_id":200
    },{
      "function":"__hl",
      "tag_id":201
    },{
      "function":"__hl",
      "tag_id":202
    },{
      "function":"__hl",
      "tag_id":203
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",34],8,16],"\u0026\u002665\u003EparseInt(",["escape",["macro",34],8,16],".substr(4,2),16)\u0026\u0026(window._fs_debug=!1,window._fs_host=\"www.fullstory.com\",window._fs_org=\"1XYq\",window._fs_namespace=\"FS\",function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,\nh),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=function(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})}(window,document,window._fs_namespace,\"script\",\"user\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar $alertElement=document.querySelector(\"p[data-home-announcement-message]\"),$alertContent=\"",["escape",["macro",36],7],"\";$alertElement\u0026\u002620\u003C$alertContent.length\u0026\u0026($alertElement.innerHTML=$alertContent);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{analytics\u0026\u0026analytics.ready(function(){var c=analytics.user().traits(),a=c.recent||[],d=[$(\"body\").data(\"tutorial-id\")||\"\",Math.round(new Date\/864E5)],e=a.length,b;for(b=0;b\u003Ce;b++)if(a[b]instanceof Array\u0026\u0026a[b][0]===d[0]){a.splice(b,1);break}a.unshift(d);5\u003C=a.length\u0026\u0026a.pop();c.recent=a;analytics.user().traits(c)})}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1XYq\";window._fs_namespace=\"FS\";\n(function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,h),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=\nfunction(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{analytics\u0026\u0026(analytics.track(\"dwell\",{time:\"5 minute\"}),analytics.ready(function(){var c=analytics.user().traits(),a=c.dwell||[],d=[$(\"body\").data(\"tutorial-id\")||\"\",Math.round(new Date\/864E5)],e=a.length,b;for(b=0;b\u003Ce;b++)if(a[b]instanceof Array\u0026\u0026a[b][0]===d[0]){a.splice(b,1);break}a.unshift(d);5\u003C=a.length\u0026\u0026a.pop();c.dwell=a;analytics.user().traits(c)}))}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{document.addEventListener(\"copy\",function(a){window.getSelection\u0026\u0026$(window.getSelection().anchorNode).parents(\"pre\").length\u0026\u0026analytics.track(\"Web Interaction\",{action:\"Code Copy\",name:window.getSelection().toString().substring(0,64)+(64\u003Cwindow.getSelection().toString().length?\"\\u2026\":\"\")})})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{console\u0026\u0026(\/Safari\/.test(navigator.userAgent)\u0026\u0026\/Apple Computer\/.test(navigator.vendor)?console.log(\"Nice Job!\"):console.log(\"       __                       __________\\n       \\\\  \\\\                    \/           \\\\\\n (\\u00af\\\\    |  \\\\_\\u00b8--------_       |  Nice job! |\\n  \\\\ \\\\_-\\u00af     _-_       \\u00af\\\\   O  \\\\___________\/\\n  \/     ((( ( O )       \/  o\\n \/_\/\\\\_       \\u00af-\\u00af       \/  .\\n      \\\\     \\\\\\u00af\\u00af`------'\\n   (\\u00af\\u00af\\u00af      `^^^-_\\u00af\\x3e\\n    `----^`-________\/\"))}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c,d,e){a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.id=e;a.src=d;b.parentNode.insertBefore(a,b)})(window,document,\"script\",\"https:\/\/scripts.demandbase.com\/014ab3bd.min.js\",\"demandbase_js_lib\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(0\u003C=document.cookie.indexOf(\"signed_in\\x3dtrue\")||0\u003C=document.cookie.indexOf(\"last_logged_in_at\\x3d\")){var links=document.querySelectorAll('a[href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?onboarding_origin\\x3dspaces\"]'),linkslen=links.length,i;for(i=0;i\u003Clinkslen;i++)links[i].setAttribute(\"href\",\"https:\/\/cloud.digitalocean.com\/spaces\")};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(-1\u003Cwindow.location.search.indexOf(\"show_features\")){var f=document.querySelector('*[data-ab-test\\x3d\"featuresSection\"]');f\u0026\u0026(f.style.display=\"block\")}}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E.anchorlink { position:relative; opacity:0; top:-200px; }\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction slugify(b){return b.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")}\nif(window.location.hash){for(var headers=document.querySelectorAll(\".FAQ-question\"),i=0;i\u003Cheaders.length;i++){var a=document.createElement(\"a\");a.setAttribute(\"name\",slugify(headers[i].innerText));a.classList.add(\"anchorlink\");headers[i].insertBefore(a,headers[i].firstChild)}var target=document.querySelector('a[name\\x3d\"'+window.location.hash.substr(1)+'\"]');target\u0026\u0026window.scrollTo(0,target.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop))};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":158
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-836091520\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-836091520\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cmeta name=\"google-site-verification\" content=\"VFLWra6znNQDhVczyhLehNxVWZX_uN0wG2fjEqMixMQ\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{(function(){",["escape",["macro",12],8,16],"({name:\"Community - Tutorial Tag Page Featured Link\",variants:[{name:\"Control\",func:function(){}},{name:\"Test\",func:function(){var a=document.createElement(\"div\"),b=document.querySelector(\".tag-header__right\");document.querySelector(\".tag-header__left\");a.classList.add(\"tutorial\");a.innerHTML='\\x3ch4 style\\x3d\"margin-bottom:10px;\"\\x3eFeatured Data Analysis Tutorial\\x3c\/h4\\x3e\\x3ca class\\x3d\"tutorial-image\" href\\x3d\"\/community\/tutorials\/an-introduction-to-machine-learning\" title\\x3d\"An Introduction to Machine Learning\"\\x3e \\x3cimg src\\x3d\"https:\/\/community-cdn-digitalocean-com.global.ssl.fastly.net\/assets\/tutorials\/images\/medium\/introduction-to-machine-learning_social.png?1510178550\" alt\\x3d\"\"\\x3e \\x3c\/a\\x3e \\x3cdiv class\\x3d\"feedable-details\"\\x3e \\x3ch3\\x3e \\x3ca href\\x3d\"\/community\/tutorials\/an-introduction-to-machine-learning\"\\x3eAn Introduction to Machine Learning\\x3c\/a\\x3e \\x3c\/h3\\x3e \\x3cdiv class\\x3d\"meta tutorial-author-name\"\\x3e \\x3cspan class\\x3d\"author\"\\x3eBy Lisa Tagliaferri \\x3c\/span\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3cdiv class\\x3d\"meta bottom-meta\"\\x3e \\x3cdiv class\\x3d\"points\"\\x3e \\x3cspan class\\x3d\"icon-upvote-heart--small\"\\x3e\\x3c\/span\\x3e 39 \\x3c\/div\\x3e \\x3cdiv class\\x3d\"response-count\"\\x3e \\x3cspan class\\x3d\"icon icon-new-comment\"\\x3e\\x3c\/span\\x3e 18 \\x3c\/div\\x3e \\x3cspan class\\x3d\"feedable-time timeago\" title\\x3d\"2017-09-28 17:53:44 UTC\"\\x3e\\x3c\/span\\x3e \\x3c\/div\\x3e';\nb.insertBefore(a,b.firstChild)}}]})})()}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{(function(){",["escape",["macro",12],8,16],"({name:\"Cloud - Dashboard Referral Panel\",audience:function(){return 5\u003C",["escape",["macro",20],8,16],"\u0026\u0026-5\u003CparseFloat(window.currentUser.balance,10)\u0026\u0026.5\u003CMath.random()},variants:[{name:\"Give10-Get25\",func:function(){",["escape",["macro",7],8,16],"(\"div.dashboard-cta\",function(){if(!document.querySelector('*[data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"]')){var a=document.querySelector(\"div.dashboard-cta\");a.style.padding=\"2rem\";a.innerHTML='\\x3cdiv class\\x3d\"columns small-12\" data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"\\x3e\\x3cdiv class\\x3d\"dashboard-team\"\\x3e\\x3ch3\\x3eGive a friend $10, Get $25\\x3c\/h3\\x3e \\x3cp class\\x3d\"u-mt-0 u-mb-2\"\\x3eThey\\x26apos;ll get $10 in credit. Once they\\u2019ve spent $25 with us, you\\x26apos;ll get $25\\x3c\/p\\x3e\\x3ca href\\x3d\"\/settings\/referrals?i\\x3d'+\nwindow.currentUser.uuid.substr(0,6)+'\" data-js\\x3d\"gtm_ab_success\"\\x3eRefer a friend\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e'}})}},{name:\"Refer-a-friend\",func:function(){",["escape",["macro",7],8,16],"(\"div.dashboard-cta\",function(){if(!document.querySelector('*[data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"]')){var a=document.querySelector(\"div.dashboard-cta\");a.style.padding=\"2rem\";a.innerHTML='\\x3cdiv class\\x3d\"columns small-12\" data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"\\x3e\\x3cdiv class\\x3d\"dashboard-team\"\\x3e\\x3ch3\\x3eRefer a friend to DigitalOcean\\x3c\/h3\\x3e \\x3cp class\\x3d\"u-mt-0 u-mb-2\"\\x3eThey\\x26apos;ll get $10 in credit. Once they\\u2019ve spent $25 with us, you\\x26apos;ll get $25\\x3c\/p\\x3e\\x3ca href\\x3d\"\/settings\/referrals?i\\x3d'+\nwindow.currentUser.uuid.substr(0,6)+'\" data-js\\x3d\"gtm_ab_success\"\\x3eRefer a friend\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e'}})}},{name:\"Referral-Program\",func:function(){",["escape",["macro",7],8,16],"(\"div.dashboard-cta\",function(){if(!document.querySelector('*[data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"]')){var a=document.querySelector(\"div.dashboard-cta\");a.style.padding=\"2rem\";a.innerHTML='\\x3cdiv class\\x3d\"columns small-12\" data-gtm_ab\\x3d\"cloud-dashboard-referral-panel\"\\x3e\\x3cdiv class\\x3d\"dashboard-team\"\\x3e\\x3ch3\\x3eDigitalOcean Referral Program\\x3c\/h3\\x3e \\x3cp class\\x3d\"u-mt-0 u-mb-2\"\\x3eGive a friend $10 in credit. Once they\\u2019ve spent $25 with us, you\\x26apos;ll get $25\\x3c\/p\\x3e\\x3ca href\\x3d\"\/settings\/referrals?i\\x3d'+\nwindow.currentUser.uuid.substr(0,6)+'\" data-js\\x3d\"gtm_ab_success\"\\x3eRefer a friend\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e'}})}}]})})()}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":186
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/9bda67db0731403c897cd55271410840.js.ubembed.com\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":187
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  #tab-droplets strike {color:#c0392b; opacity:0.75;}\n  #tab-droplets strike, #tab-droplets .comparison {display:none;}\n  #tab-droplets.compareView strike, #tab-droplets.compareView .comparison {display:block;}\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{var show_comparison=function(){for(var a=[[[],[\"512MB\",\"\",\"20GB\"],[\"1GB\",\"\",\"30GB\"],[\"2GB\",\"\",\"40GB\"],[\"4GB\",\"2vCPUs\",\"60GB\"],[\"8GB\",\"4vCPUs\",\"80GB\"],[\"16GB\",\"\",\"160GB\"],[\"\",\"\",\"\"],[\"32GB\",\"12vCPUs\",\"320GB\"],[\"48GB\",\"16vCPUs\",\"480GB\"],[\"64GB\",\"20vCPUs\",\"640GB\"]],[[],[\"3GB\",\"\",\"20GB\"],[\"6GB\",\"\",\"20GB\"],[\"12GB\",\"\",\"20GB\"],[\"24GB\",\"\",\"20GB\"],[\"48GB\",\"\",\"20GB\"]]],f=document.querySelectorAll(\"table.PricingTable\"),b=0;2\u003Eb;b++)for(var g=f[b].querySelectorAll(\"tr\"),d=1;d\u003Ca[b].length;d++)for(var e=g[d].querySelectorAll(\"td\"),\nc=0;3\u003Ec;c++)e[c].innerHTML=\"\\x3cstrike\\x3e\"+a[b][d][c]+\"\\x3c\/strike\\x3e\"+e[c].innerHTML;a=document.createElement(\"div\");a.innerHTML='\\x3cdiv class\\x3d\"bui-Banner bui-AnnouncementBanner\" style\\x3d\"position: relative; z-index: 4; border: none; border-radius: 3px; background: #0069ff; background-color: #031b4e; color: #fff; text-align: center; font-size: 14px;\"\\x3e \\x3cdiv class\\x3d\"bui-Banner-content\"\\x3e \\x3cspan class\\x3d\"bui-Pill bui-Pill--new bui-u-mr--small\"\\x3e2018-01-16\\x3c\/span\\x3e \\x3cp\\x3e Announcing \\x3cstrong\\x3enew Droplet plans\\x3c\/strong\\x3e with more CPUs, memory, and SSD storage. \\x3ca class\\x3d\"bui-Button bui-Button--primary bui-Button--mini bui-u-ml--large\" data-js\\x3d\"toggleChanges\" style\\x3d\"line-height:38px;\"\\x3eShow Plan Changes\\x3c\/a\\x3e \\x3c\/p\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e';\ndocument.querySelector(\"#tab-droplets .bui-GridContainer\").insertBefore(a,document.querySelector(\"#tab-droplets .bui-GridContainer\").firstChild);document.querySelector('*[data-js\\x3d\"toggleChanges\"]').onclick=function(){document.getElementById(\"tab-droplets\").classList.toggle(\"compareView\");this.innerText=\"Show Plan Changes\"===this.innerText?\"Hide Plan Changes\":\"Show Plan Changes\";window.analytics.track(\"Experiment Viewed\",{experiment_id:\"Pricing: Toggled Price Comparison\",experiment_name:\"Pricing: Toggled Price Comparison\",\nvariation_id:(window.analytics.user().id()?\"Customer\":\"Anonymous\")+\", Visible\",variation_name:(window.analytics.user().id()?\"Customer\":\"Anonymous\")+\", Visible\"})};document.querySelector('*[data-js\\x3d\"toggleChanges\"]').click();document.querySelector(\"#tab-droplets \\x3e div \\x3e div.bui-u-flex.bui-u-flexCenter \\x3e a\").innerText=\"Login\";document.querySelector(\"#tab-droplets \\x3e div \\x3e div.bui-u-flex.bui-u-flexCenter \\x3e a\").setAttribute(\"href\",\"https:\/\/cloud.digitalocean.com\/login\")},seg_check=\n0,seg_wait=window.setInterval(function(){if(window.analytics||20===seg_check)window.clearInterval(seg_wait),window.analytics\u0026\u0026show_comparison();seg_check++},100)}catch(a){};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar wait_count=0,jQWait=window.setInterval(function(){window.jQuery\u0026\u0026function(){window.clearInterval(window.jQWait);var g=window.BelowTutorialPanel=function(b){$.extend(this,{activeTest:\"default\",panelBodyTarget:\"div.tutorial-ctas\",panelContentTarget:\"div.cta-description\",tagSelector:'a.tag:contains(\"$TAG\")',experimentName:\"Below Question Panel\",scrollCheckInterval:1E3},b||{},{event_fired:!1});this.initialize()};$.extend(g.prototype,{initialize:function(){this.userTraits={};this.analyticsActive()\u0026\u0026\n(this.userTraits=window.analytics.user().traits());this.audience=this.getAudience(Object.keys(this.panelData),this.parseCookies(document.cookie),this.userTraits);this.panel=this.getPanel(this.panelData[this.audience]);this.panelContent=this.panel.content[Math.floor(Math.random()*this.panel.content.length)];$(\"Footer\").css({\"margin-top\":0,\"border-top\":\"#444\",\"box-shadow\":\"0 0 20px rgba(0,0,0,0.1)\"}).before('\\x3cdiv class\\x3d\"tutorial-single\"\\x3e\\x3cdiv class\\x3d\"tutorial-footer\"\\x3e\\x3cdiv class\\x3d\"tutorial-ctas\"\\x3e \\x3cdiv class\\x3d\"section-content\"\\x3e\\x3cdiv class\\x3d\"cta-description\"\\x3e\\x3ch2\\x3e\\x3c\/h2\\x3e\\x3cp\\x3e\\x3c\/p\\x3e\\x3ca class\\x3d\"cloud-tutorial-cta\"\\x3e\\x3c\/a\\x3e\\x3c\/div\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e');\nthis.$panelBody=$(\".tutorial-ctas\");this.$panelBody.attr(\"style\",this.panel.style).css({\"border-bottom\":\"none\"}).find(\"h2\").text(this.panelContent.title||\"\").css({color:this.panel.darkBG?\"#FFF\":\"inherit\"}).end().find(\"p\").html(this.panelContent.desc||\"\").css({color:this.panel.darkBG?\"#FFF\":\"inherit\",padding:\"15px 0\",\"line-height\":\"1.3em\"}).end().find(\".cloud-tutorial-cta\").text(this.panelContent.cta||\"\").attr(\"style\",this.panel.darkBG?\"background:#FFF;color:#0069FF;\":\"\").attr(\"href\",this.panelContent.url+\n(0\u003Cthis.panelContent.url.indexOf(\"?\")?\"\\x26\":\"?\")+\"utm_source\\x3dcomm_exp\\x26utm_medium\\x3dbtq_\"+this.audience+\"_\"+this.panel.name);this.initTracking(this.$panelBody.offset().top,this.$panelBody.height(),this.audience+\" \\x3e \"+this.panel.name+\" \\x3e \"+this.panelContent.cta||\"\",this.$panelBody.find(\"a\"))},getPanel:function(b){var c=b.length,a,d,e=[],f=[];for(a=0;a\u003Cc;a++){if(\"tags\"in b[a])for(d=0;d\u003Cb[a].tags.length;d++)if(0\u003C$(this.tagSelector.replace(\"$TAG\",b[a].tags[d])).length)return b[a];\"priority\"in\nb[a]?0\u003Cb[a].priority\u0026\u0026(e.push({panel:a,priority:b[a].priority}),f.push(b[a])):f.push(b[a])}if(0\u003Ce.length)for(a=0;a\u003Ce.length;a++)if(Math.random()\u003Ce[a].priority)return b[e[a].panel];return f[Math.floor(Math.random()*f.length)]},getAudience:function(b,c,a){return-1\u003Cb.indexOf(\"customers\")\u0026\u0026(\"signed_in\"in c||\"ajs_user_id\"in c\u0026\u002610\u003Cc.ajs_user_id.length)?\"customers\":-1\u003Cb.indexOf(\"refcode\")\u0026\u0026\"refcode\"in c?\"refcode\":-1\u003Cb.indexOf(\"buildmode\")\u0026\u0026\"recent\"in a\u0026\u0026a.recent instanceof Array\u0026\u00264===a.recent.length\u0026\u00262===\na.recent[3].length\u0026\u00268\u003EMath.round(+new Date\/864E5)-a.recent[3][1]?\"buildmode\":-1\u003Cb.indexOf(\"regulars\")\u0026\u0026\"recent\"in a\u0026\u0026a.recent instanceof Array\u0026\u00264===a.recent.length\u0026\u00262===a.recent[3].length\u0026\u002630\u003EMath.round(+new Date\/864E5)-a.recent[3][1]?\"regulars\":\"everyone_else\"},analyticsActive:function(){return\"object\"===typeof window.analytics},parseCookies:function(b){b=b.split(\";\");var c={},a;for(a=0;a\u003Cb.length;a++){var d=b[a].split(\"\\x3d\");c[d[0].trim()]=d[1].trim()}return c},convertToId:function(b){return\"string\"===\ntypeof b?b.replace(\/\\W+\/g,\"_\").toLowerCase():\"\"},initTracking:function(b,c,a,d){if(this.analyticsActive()){var e,f=window.setInterval(function(){e=$(window).scrollTop();e+$(window).height()\u003Eb-c\u0026\u0026(window.clearInterval(f),analytics.track(\"Experiment Viewed\",{experimentId:this.convertToId(this.experimentName),experimentName:this.experimentName,variationId:this.convertToId(a),variationName:a}))}.bind(this),1E3);analytics.trackLink(d,\"Experiment Success\",{experimentId:this.convertToId(this.experimentName),\nexperimentName:this.experimentName,variationId:this.convertToId(a),variationName:a})}}});new g({panelData:{refcode:[{name:\"referrals\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/referrals.png); background-color:#1b78f8; background-position:bottom center;\",darkBG:!0,content:[{title:\"Your free credit awaits!\",desc:\"Sign up to redeem your credit, and start deploying your sites and apps within minutes.\",cta:\"Use Your Credit\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new\"},\n{title:\"Free credit active.\",desc:\"You came to digitalocean.com via someone\\x26apos;s referral link in the past month,\\x3cbr\\x3e making you eligible for $10 credit when you sign up for an account.\",cta:\"Redeem Credit\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new\"}]}],customers:[{name:\"repricing\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/droplets_v4.png), linear-gradient(to bottom, #201f7f, #180d56); background-position:bottom center; padding-top:-10px;\",darkBG:!0,\ncontent:[{title:\"New Droplets: More RAM, More SSD Storage, More Flexibility\",desc:\"New Droplets on DigitalOcean include 2x Memory for the same price, new High-CPU Optimized Plans, and a new class of Flexible $15 plans. The $5 Droplet now has 1GB RAM and 25GB SSD.\",cta:\"Read about new Droplets and prices\",url:\"https:\/\/blog.digitalocean.com\/new-droplet-plans\/\"}]},{name:\"kubernetes\",tags:[\"Kubernetes\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/kubernetes.png), linear-gradient(to bottom, #2875fa, #303fda); background-position:bottom center; padding-top:-10px; background-size: cover;\",\ndarkBG:!0,priority:.7,content:[{title:\"Announcing DigitalOcean Kubernetes\",desc:\"A simple and cost-effective way to deploy, orchestrate, and manage container workloads. Sign up for early access and your cluster will be free through September 2018.\",cta:\"Learn More\",url:\"https:\/\/blog.digitalocean.com\/introducing-digitalocean-kubernetes\/\"}]},{name:\"write4donations\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/write4do.png); background-color:#1b78f8; background-position:bottom center; background-repeat-x:repeat;\",\ndarkBG:!0,content:[{title:\"Make a Positive Impact on the Tech Community\",desc:\"Partner with us to publish an article on open source tools and we\\u2019ll donate up to $300 to a charity of your choice.\",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"},{title:\"Write for DigitalOcean - We'll donate up to $300 to a Tech Nonprofit\",desc:\"Partner with us to publish an article on open source tools and we\\u2019ll donate $300 to a nonprofit or charity of your choice.\",cta:\"Write for DigitalOcean\",\nurl:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"}]},{name:\"objectstorage\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/objectstorage.png), linear-gradient(to right, #04338b, #040434);  background-position:bottom center; padding-top:-10px;\",darkBG:!0,tags:[\"Object Storage\"],content:[{title:\"Introducing Spaces: Object Storage on DigitalOcean\",desc:\"A simple and cost-effective way to store, serve, backup, and archive a virtually infinite amount of media, content, images, and static files for your apps.\",\ncta:\"Try free for 2 months\",url:\"https:\/\/cloud.digitalocean.com\/spaces\"}]}],buildmode:[{name:\"ft_test\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/general.png); background-color:#1b78f8; background-position:bottom center; overflow:hidden;\",darkBG:!0,content:[{title:\"Get started on DigitalOcean with free $10 credit\",desc:\"You\\u2019ve read five tutorials on DigitalOcean this week and are well on your way to managing your infrastructure. Test your newfound knowledge by trying out DigitalOcean with $10 in free credit.\",\ncta:\"Create a Free Account\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new?refcode\\x3d74a1c5d63dac\"},{title:\"Get started on DigitalOcean with free $10 credit\",desc:\"Cheers to you, voracious reader of Community Tutorials. You've read five tutorials in the last week!\\x3cbr\/\\x3eIf you haven't already spun up servers on DO, here's $10 to give it a try.\",cta:\"Create an Account to Redeem Credit\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new?refcode\\x3d74a1c5d63dac\"}]}],regulars:[{name:\"kubernetes\",\ntags:[\"Kubernetes\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/kubernetes.png), linear-gradient(to bottom, #2875fa, #303fda); background-position:bottom center; background-size: cover; padding-top:-10px;\",darkBG:!0,priority:.7,content:[{title:\"Announcing DigitalOcean Kubernetes\",desc:\"A simple and cost-effective way to deploy, orchestrate, and manage container workloads. Sign up for early access and your cluster will be free through September 2018.\",cta:\"Learn More\",url:\"https:\/\/blog.digitalocean.com\/introducing-digitalocean-kubernetes\/\"}]},\n{name:\"repricing\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/droplets_v4.png), linear-gradient(to bottom, #201f7f, #180d56); background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"New Droplets: More RAM, More SSD Storage, More Flexibility\",desc:\"New Droplets on DigitalOcean include 2x Memory for the same price, new High-CPU Optimized Plans, and a new class of Flexible $15 plans. The $5 Droplet now has 1GB RAM and 25GB SSD.\",cta:\"Read about new Droplets and prices\",\nurl:\"https:\/\/blog.digitalocean.com\/new-droplet-plans\/\"}]},{name:\"deploy\",content:[{title:\"Spin up an SSD cloud server in under a minute.\",desc:\"Simple setup. Full root access. Straightforward pricing.\",cta:\"Deploy Server\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new\"}]},{name:\"write4donations\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/write4do.png); background-color:#1b78f8; background-position:bottom center; background-repeat-x:repeat;\",darkBG:!0,content:[{title:\"Make a Positive Impact on the Tech Community\",\ndesc:\"Partner with us to publish an article on open source tools and we\\u2019ll donate up to $300 to a charity of your choice.\",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"},{title:\"Write for DigitalOcean - We'll donate up to $300 to a Tech Nonprofit\",desc:\"Partner with us to publish an article on open source tools and we\\u2019ll donate $300 to a nonprofit or charity of your choice.\",cta:\"Write for DigitalOcean\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"}]}],\neveryone_else:[{name:\"repricing\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/droplets_v4.png), linear-gradient(to bottom, #201f7f, #180d56); background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"New Droplets: More RAM, More SSD Storage, More Flexibility\",desc:\"New Droplets on DigitalOcean include 2x Memory for the same price, new High-CPU Optimized Plans, and a new class of Flexible $15 plans. The $5 Droplet now has 1GB RAM and 25GB SSD.\",cta:\"Read about new Droplets and prices\",\nurl:\"https:\/\/blog.digitalocean.com\/new-droplet-plans\/\"}]},{name:\"write4donations\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/write4do.png); background-color:#1b78f8; background-position:bottom center; background-repeat-x:repeat;\",darkBG:!0,content:[{title:\"Make a Positive Impact on the Tech Community\",desc:\"Partner with us to publish an article on open source tools and we\\u2019ll donate up to $300 to a charity of your choice.\",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"},\n{title:\"Write for DigitalOcean - We'll donate up to $300 to a Tech Nonprofit\",desc:\"Partner with us to publish an article on open source tools and we\\u2019ll donate $300 to a nonprofit or charity of your choice.\",cta:\"Write for DigitalOcean\",url:\"https:\/\/www.digitalocean.com\/community\/write-for-digitalocean\"}]},{name:\"kubernetes\",tags:[\"Kubernetes\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/kubernetes.png), linear-gradient(to bottom, #2875fa, #303fda); background-position:bottom center; background-size: cover; padding-top:-10px;\",\ndarkBG:!0,priority:.7,content:[{title:\"Announcing DigitalOcean Kubernetes\",desc:\"A simple and cost-effective way to deploy, orchestrate, and manage container workloads. Sign up for early access and your cluster will be free through September 2018.\",cta:\"Learn More\",url:\"https:\/\/blog.digitalocean.com\/introducing-digitalocean-kubernetes\/\"}]},{name:\"d4d\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/d4d.png); background-color:#1b78f8; background-position:bottom center; padding-top:-10px;\",\ndarkBG:!0,content:[{title:\"Need free Droplets for a presentation? Let\\u2019s talk.\",desc:\"Receive free infrastructure credits to power your next tech talk or live demo. \",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/droplets-for-demos\/\"},{title:\"Open Source Presentation Grants\",desc:\"Receive free infrastructure credits to power your next tech talk or live demo. \",cta:\"Learn More\",url:\"https:\/\/www.digitalocean.com\/droplets-for-demos\/\"}]},{name:\"objectstorage\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/objectstorage.png), linear-gradient(to right, #04338b, #040434);  background-position:bottom center; padding-top:-10px;\",\ndarkBG:!0,tags:[\"Object Storage\"],content:[{title:\"Introducing Spaces: Object Storage on DigitalOcean\",desc:\"A simple and cost-effective way to store, serve, backup, and archive a virtually infinite amount of media, content, images, and static files for your apps.\",cta:\"Try free for 2 months\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new?onboarding_origin\\x3dspaces\"}]}]}})}();10\u003Cwait_count++\u0026\u0026window.clearInterval(window.jQWait)},100);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":189
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle type=\"text\/css\"\u003E\n  .bui-Banner--primary { border: 1px solid #0069ff; background: #f5f9ff; color: #005fe6; display: flex; align-items: center; padding: 16px; border-radius: 3px; }\n  .bui-Banner--fixed { position:fixed; bottom:60px; width:711px; left:-355px; margin-left:50%; z-index:10000; box-shadow:2px 2px 8px rgba(0,0,0,0.1);}\n  .bui-Banner-content { margin-bottom: 0; flex: 0 1 100%; display: flex; align-items: center; }\n  .bui-Icon { position: relative; line-height:1; margin: 4px 16px 0 8px; font-size:1.5em; }\n  .bui-Button--mini { top: -7px; margin:0 3px; padding: 3px 16px; font-size: 14px; line-height: 34px; display: inline-block; border: 0; border-radius: 3px; vertical-align: middle; text-align: center; text-decoration: none; text-transform: none; white-space: nowrap; font: inherit; font-weight: 600; cursor: pointer; background: #fff; color:#005fe6; }\n  .bui-Button--primary { background: #0069ff; color: #fff; }\n  .bui-Button--secondary { background: #11a95e; color: #fff; }\n  .bui-Button--danger { background: #d91d1d; color: #fff;}\n  .bui-Banner { z-index:10000; display: flex; align-items: center; padding: 16px;}\n  .bui-Banner-content {flex: 0 1 100%;}\n  .bui-u-hidden {display:none;}\n  .dialog span {position:relative; font-weight:bold; top:8px; display:inline-block; overflow:hidden; color:#f5f9ff;}\n  .dialog a {opacity:0;}\n  .dialog a.vis {opacity:1;}\n  .dialog span.vis {color:inherit;}\n  .dialog i {display:inline-block; position:absolute; width:80%; top:0; bottom:-4px; z-index:2; background:#005fe6; height:32px; left:-80%; transition: left 200ms; transition-timing-function:steps(7,end);}\n  .fast .dialog i {transition: left 100ms;}\n  .dialog span:last-of-type i { transition: left 400ms;}\n  .dialog i.go { left:100%; }\n  .dialog .cursor {position:relative; display:none; animation: blink 1.5s linear infinite; }\n  .dialog .cursor.vis { display:inline-block; }\n  @keyframes blink { 5%, 15% {opacity:1;} 20%, 30% {opacity:0;} 35%, 45% {opacity:1;} 50%, 100% {opacity:0;} }\n\u003C\/style\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){var c=window.StructuredComments=function(a){$.extend(this,{article_type:\"procedural\",scroll_check_timing:500},a||{},{selecting:!1,curr_hl:null,event_fired:!1});this.initialize()};$.extend(c.prototype,{initialize:function(){var a=this;$(\".tutorial-ctas, .related-tutorials, #newsletter-signup-dialog, .response-form, .tutorial-series-container\").hide();$(\".tutorial-footer-details, .content-comments\").css({\"border-bottom\":\"none\",\"border-top\":\"none\"});$(\".comments-header\").before('\\x3cdiv id\\x3d\"structuredComments\"\\x3e \\x3cdiv class\\x3d\"bui-Banner--primary\" role\\x3d\"banner\"\\x3e \\x3cdiv class\\x3d\"bui-Banner-content bui-Banner-decorativeIcon\"\\x3e \\x3cdiv class\\x3d\"bui-Icon\" data-js\\x3d\"emoji\"\\x3e\\ud83e\\udd14\\x3c\/div\\x3e \\x3cp class\\x3d\"dialog feedback\"\\x3e Was this helpful? \\x3ca data-js\\x3d\"helpful\" class\\x3d\"bui-Button bui-Button--mini bui-Button--secondary\"\\x3eYes\\x3c\/a\\x3e \\x3ca data-js\\x3d\"notHelpful\" class\\x3d\"bui-Button bui-Button--mini bui-Button--danger\"\\x3eNo\\x3c\/a\\x3e \\x3c\/p\\x3e \\x3cp class\\x3d\"dialog notHelpful\" style\\x3d\"display:none;\"\\x3e Sorry to hear that. If it is something specific about the tutorial \\x3ca data-js\\x3d\"reportIssue\" class\\x3d\"bui-Button bui-Button--mini bui-Button--primary\" title\\x3d\"Example: There is a typo, code is incorrect, or a command returned an error.\" data-tooltip\\x3d\"bottom\"\\x3eReport an Issue\\x3c\/a\\x3e or \\x3ca class\\x3d\"bui-Button bui-Button--mini bui-Button--primary\" data-js\\x3d\"askRelatedQuestion\" target\\x3d\"_blank\" href\\x3d\"\/community\/questions\/new\" title\\x3d\"Example: How would you install the same thing using Docker?\" data-tooltip\\x3d\"bottom\"\\x3eAsk a Related Question \\u29c9\\x3c\/a\\x3e if this didn\\x26apos;t provide the answers you need. \\x3c\/p\\x3e \\x3cp class\\x3d\"dialog helpful\" style\\x3d\"display:none;\"\\x3e Great! We would appreciate it if you \\x3ca data-js\\x3d\"share\" class\\x3d\"bui-Button bui-Button--mini bui-Button--primary\"\\x3eshare on Twitter\\x3c\/a\\x3e or subscribe to get notified when we publish more {TAGS} tutorials, or \\x3ca href\\x3d\"\/community\/newsletter\" class\\x3d\"bui-Button bui-Button--mini bui-Button--primary\"\\x3eSubscribe to our Newsletter\\x3c\/a\\x3e for great technical content from around the web every two weeks. \\x3c\/p\\x3e \\x3cp class\\x3d\"dialog reportIssue\" style\\x3d\"display:none; font-weight:bold;\"\\x3e Select the section or code block of the tutorial that caused the issue. \\x3ca data-js\\x3d\"buildComment\" class\\x3d\"bui-Button bui-Button--mini bui-Button--primary\"\\x3eSkip\\x3c\/a\\x3e \\x3c\/p\\x3e \\x3cp class\\x3d\"dialog issueType\" style\\x3d\"display:none; font-weight:bold;\"\\x3e Do you know how to solve the issue? \\x3ca data-js\\x3d\"reportSolution\" class\\x3d\"bui-Button bui-Button--mini bui-Button--secondary\"\\x3eYes\\x3c\/a\\x3e \\x3ca data-js\\x3d\"requestSolution\" class\\x3d\"bui-Button bui-Button--mini bui-Button--danger\"\\x3eNo\\x3c\/a\\x3e \\x3c\/p\\x3e \\x3cp class\\x3d\"dialog reportSolution\" style\\x3d\"display:none;\"\\x3e Thanks, here\\x26apos;s a suggested comment template to use. Feel free to edit as needed. We appreciate your feedback. \\x3c\/p\\x3e \\x3cp class\\x3d\"dialog requestSolution\" style\\x3d\"display:none;\"\\x3e Here\\x26apos;s a suggested comment template to use. If you include more information like your error, operating system and version, someone will be more likely to know a solution. \\x3c\/p\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3cdiv style\\x3d\"text-align:center; margin:16px;\"\\x3e\\x3cem\\x3e\\x3ca data-js\\x3d\"leaveUnstructuredComment\"\\x3eor leave a comment\\x3c\/a\\x3e\\x3c\/em\\x3e\\x3c\/div\\x3e \\x3c\/div\\x3e'.replace(\"{TAGS}\",\n$(\".meta-section.tags a\").map(function(){return'\\x3ca href\\x3d\"'+this.href+'#subscribe\" class\\x3d\"bui-Button bui-Button--mini\"\\x3e'+$(this).text()+\"\\x3c\/a\\x3e\"}).get().join()));$(\"#structuredComments\").find(\".dialog\").each(function(){$(this).contents().filter(function(){return 3===this.nodeType}).each(function(){$(this).replaceWith(\"\\x3cspan\\x3e\\x3ci\\x3e\\x3c\/i\\x3e\"+this.data.split(\" \").join(\"\\x3c\/span\\x3e \\x3cspan\\x3e\\x3ci\\x3e\\x3c\/i\\x3e\")+\"\\x3c\/span\\x3e\")});$(this).append('\\x3cspan class\\x3d\"cursor\"\\x3e_\\x3c\/span\\x3e')});\n$(\"#structuredComments a, .stepFour a\").click(function(){a[this.dataset.js]()});this.hl_bg=$('\\x3cdiv data-js\\x3d\"structuredComments_hl\" style\\x3d\"display:none; background: rgba(242,80,65,0.2); position:absolute; z-index:1000; float:left;\"\\x3e\\x3c\/div\\x3e').prependTo(\"body\");this.hl_bg.click(this.selectIssueElement.bind(this));this.scroll_check_interval=window.setInterval(function(){this.isInView()\u0026\u0026(window.clearInterval(this.scroll_check_interval),this.showDialog(\".feedback\"))}.bind(this),this.scroll_check_timing)},\nisInView:function(){return $(window).scrollTop()+$(window).height()\u003E$(\"#structuredComments\").offset().top-$(\"#structuredComments\").height()},animate:function(a,b){var d=b?90:180,c=function(a,b){return function(){$(a).find(\"i\").addClass(\"go\");setTimeout(function(){$(a).addClass(\"vis\")},b)}},g=RegExp(\/[!\\.,\\?:;]\/),e=0;$(a).find(\"span, button, a\").map(function(a,b){var f=g.test($(b).text().slice(-1));setTimeout(c(b,f?d:d\/2),e);e+=f?2*d:d})},showDialog:function(a,b){b\u0026\u0026$(\"#structuredComments\").find('*[data-js\\x3d\"emoji\"]').text(b);\n$(\"#structuredComments\").find(\".dialog\").hide();$(\"#structuredComments\").find(a).show();this.animate($(\"#structuredComments\").find(a),$(\"#structuredComments\").hasClass(\"fast\"))},helpful:function(){this.showDialog(\".helpful\",\"\\ud83c\\udf89\")},notHelpful:function(){$(\"#structuredComments\").addClass(\"fast\");this.showDialog(\".notHelpful\",\"\\ud83d\\ude1e\")},share:function(){$($(\"#sbTwitter \\x3e a.share-link.share-popup\")[0]).click()},askRelatedQuestion:function(){sessionStorage.setItem(\"askRelatedQuestion\",\nJSON.stringify({slug:window.location.pathname.replace(\"\/community\/tutorials\/\",\"\"),tags:$(\"a.tag\").map(function(){return this.innerText}).get()}))},leaveUnstructuredComment:function(){$(\".response-form\").show().find(\"#comment_content\").focus()},reportIssue:function(){$(\"html, body\").animate({scrollTop:300});$(\"#structuredComments .bui-Banner--primary\").addClass(\"bui-Banner--fixed\");this.showDialog(\".reportIssue\",\"\\ud83d\\ude42\");this.highlighIssueElement()},highlighIssueElement:function(){var a=this;\n$(\"div.tutorial-content\").on(\"mousemove.StructuredComments\",function(b){b=$(b.target);b!==a.curr_hl\u0026\u0026\"DIV\"!==b.prop(\"tagName\")\u0026\u0026\"H2\"!==b.prop(\"tagName\")\u0026\u0026b.parents(\"div.tutorial-content\").length\u0026\u0026(a.curr_hl=b,a.curr_text=b.text(),a.hl_bg.css({display:\"block\",top:b.offset().top-3,left:b.offset().left-3,width:b.outerWidth()+6,height:b.outerHeight()+6}))})},selectIssueElement:function(a){$(\"div.tutorial-content\").unbind(\"mousemove.StructuredComments\");$(\"html, body\").animate({scrollTop:this.curr_hl.offset().top-\n$(window).height()\/2+this.curr_hl.height()\/2});this.showDialog(\".issueType\")},requestSolution:function(a){this.showDialog(\".requestSolution\");setTimeout(function(){$(\"#structuredComments\").hide()},1E4);this.buildComment(\"I had an issue here:\\n\\x3e\"+this.curr_text.replace(\/^\\s+|\\s+$\/g,\"\").replace(\/\\n\/g,\"\\n\\x3e\")+\"\\n\\nI got the error:\\n```\\n_YOUR_ERROR_HERE_\\n```\\nrunning on **_YOUR_OPERATING_SYSTEM_AND_VERSION_HERE_**\\nSome more context about my error:\\n_ANY_OTHER_INFO_THAT_MIGHT_HELP_HERE_\")},reportSolution:function(a){this.showDialog(\".reportSolution\",\n\"\\ud83d\\udc4d\");setTimeout(function(){$(\"#structuredComments\").hide()},1E4);this.buildComment(\"This part:\\n\\x3e\"+this.curr_text.replace(\/^\\s+|\\s+$\/g,\"\").replace(\/\\n\/g,\"\\n\\x3e\")+\"\\n\\nShould be updated to:\\n\\x3e _CORRECTED_CONTENT_HERE\\n\\nBecause:\\n _ANY_INFO_ON_WHY_THIS_NEEDS_TO_CHANGE_HERE_\")},buildComment:function(a){this.hl_bg.hide();$(\".response-form\").show().find(\"#comment_content\").val(a).prop(\"disabled\",!1).trigger(\"autosize.resize\").focus().end().find(\".submit-comment\").prop(\"disabled\",!0).end();\n$(\"html, body\").animate({scrollTop:$(\".response-form\").offset().top-200});$(\"#comment_content\").on(\"keyup\",this.enablePost).attr({tooltip:\"bottom\",title:\"Add your info in place of the _YOUR_DATA_HERE_ instances in the comment.\"})},enablePost:function(){-1===$(\"#comment_content\").val().indexOf(\"_HERE_\")?$(\".submit-comment\").prop(\"disabled\",!1):$(\".submit-comment\").prop(\"disabled\",!0)}});-1===$(\".meta-section.tags a\").map(function(){return $(this).text()}).get().indexOf(\"Conceptual\")\u0026\u0026new c},5E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":190
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar sub=document.querySelector(\".subscribe\");\"#subscribe\"===window.location.hash\u0026\u0026null!==sub.offsetParent\u0026\u0026sub.click();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":118
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":121
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":119
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":122
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/t.co\/i\/adsct?p_id=Twitter\u0026p_user_id=0\u0026txn_id=nuqsf\u0026events=%5B%5B%22pageview%22%2Cnull%5D%5D\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":123
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":120
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"staging"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"cloud.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"pay-pal-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"credit-card-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"activated"
    },{
      "function":"_sw",
      "arg0":["macro",23],
      "arg1":"https:\/\/cloud."
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"Create"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"Button Button--green Button--large Button--fullWidth"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"\/console"
    },{
      "function":"_gt",
      "arg0":["macro",20],
      "arg1":"50"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"Create a Space"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"\/community"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"(Business|SMB)"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"refcode"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"Demandbase_Loaded"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"confirmed"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"confirmed_state_pageview"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"\/products\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"\/community\/tutorial"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"\/community"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"_"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"null"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"\/community\/tutorials\/"
    },{
      "function":"_sw",
      "arg0":["macro",23],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)758737_224($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"\/community\/tutorials\/how-to-use-the-javascript-developer-console"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"\/products\/object-storage\/"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"\/lp\/hosting"
    },{
      "function":"_sw",
      "arg0":["macro",23],
      "arg1":"https:\/\/www.digitalocean.com\/help\/technical\/product\/"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"\/community\/tags\/data-analysis"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"\/dashboard"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"medium=rtg"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"community\/tutorials"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"medium=paid_social"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"medium=display"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"medium="
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"rtg"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"\/pricing\/"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"uuid="
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"\/community\/questions\/"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"\/community\/questions\/new"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"CBTest"
    },{
      "function":"_sw",
      "arg0":["macro",28],
      "arg1":"\/community\/tags\/"
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",0,2,4],["unless",3],["add",1]],
    [["if",5],["add",2,3,4,16,24,26,27,29,31,39,42]],
    [["if",6],["add",2,3,4,16,24,26,27,29,31,39,42]],
    [["if",0,7,8],["add",4,24,26,27,29,31,39,42]],
    [["if",0],["unless",9],["add",5,6,23,25,41,66]],
    [["if",4,10,11,12],["add",7,8,14,17]],
    [["if",0,4,13],["unless",3,14],["add",9,10]],
    [["if",0,4,15],["unless",3,14],["add",11,19]],
    [["if",0,4,16],["unless",3,14],["add",12,13,18]],
    [["if",4,17,18,19],["add",15]],
    [["if",4,11,12,20],["add",20,21]],
    [["if",0,21],["unless",22],["add",22]],
    [["if",21,23,24,25,27],["unless",26],["add",28]],
    [["if",0,1],["add",30],["block",0]],
    [["if",0,28],["add",32,33]],
    [["if",0,21,25],["add",34,35,43,67]],
    [["if",29,30],["add",36,37]],
    [["if",0,7,31],["add",38]],
    [["if",32],["add",38]],
    [["if",0,33,34],["add",40]],
    [["if",30],["add",44,45,47,48,49,50,51,52,53,54]],
    [["if",30,35],["add",46]],
    [["if",0,4],["unless",3,14],["add",55]],
    [["if",0,21],["unless",36],["add",55]],
    [["if",21,25,38],["unless",37],["add",56]],
    [["if",38,41],["add",57,60]],
    [["if",0,42,43],["add",58]],
    [["if",44,45],["add",59]],
    [["if",0,46],["add",61]],
    [["if",0],["unless",4],["add",62]],
    [["if",38,47],["add",63]],
    [["if",30,48],["add",64]],
    [["if",0,49],["add",65]],
    [["if",38,50],["add",68]],
    [["if",0,4,51],["add",69]],
    [["if",4,17,19,51],["add",69]],
    [["if",30,52,53],["add",70]],
    [["if",30,53,54],["add",70]],
    [["if",30,53,55],["add",70]],
    [["if",0,28,56,57],["add",70]],
    [["if",0,58,59],["add",71]],
    [["if",0,60],["unless",61],["add",72]],
    [["if",0,35,62],["add",73]],
    [["if",0,63],["add",74]],
    [["if",0,39],["block",56]],
    [["if",0],["unless",40],["block",56]]]
},
"runtime":[
[],[]
]};

var aa=function(a,b){function c(){}c.prototype=b.prototype;a.pe=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ae=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var g=function(a,b){this.s=a;this.Pc=b};g.prototype.bd=function(){return this.s};g.prototype.getType=g.prototype.bd;g.prototype.getData=function(){return this.Pc};g.prototype.getData=g.prototype.getData;var ba=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ca=function(){this.Z={};this.oa=!1};ca.prototype.get=function(a){return this.Z["dust."+a]};ca.prototype.set=function(a,b){!this.oa&&(this.Z["dust."+a]=b)};ca.prototype.has=function(a){return this.Z.hasOwnProperty("dust."+a)};var da=function(a){var b=[],c;for(c in a.Z)a.Z.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ca.prototype.remove=function(a){!this.oa&&delete this.Z["dust."+a]};ca.prototype.D=function(){this.oa=!0};var t=function(a){this.ca=new ca;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ba(b)?this.h[Number(b)]=a[Number(b)]:this.ca.set(b,a[b]))};t.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};t.prototype.set=function(a,b){if("length"==a){if(!ba(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ba(a)?this.h[Number(a)]=b:this.ca.set(a,b)};
t.prototype.set=t.prototype.set;t.prototype.get=function(a){return"length"==a?this.length():ba(a)?this.h[Number(a)]:this.ca.get(a)};t.prototype.get=t.prototype.get;t.prototype.length=function(){return this.h.length};t.prototype.L=function(){for(var a=da(this.ca),b=0;b<this.h.length;b++)a.push(b+"");return new t(a)};t.prototype.getKeys=t.prototype.L;t.prototype.remove=function(a){ba(a)?delete this.h[Number(a)]:this.ca.remove(a)};t.prototype.remove=t.prototype.remove;t.prototype.pop=function(){return this.h.pop()};
t.prototype.pop=t.prototype.pop;t.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};t.prototype.push=t.prototype.push;t.prototype.shift=function(){return this.h.shift()};t.prototype.shift=t.prototype.shift;t.prototype.splice=function(a,b,c){return new t(this.h.splice.apply(this.h,arguments))};t.prototype.splice=t.prototype.splice;t.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
t.prototype.unshift=t.prototype.unshift;t.prototype.has=function(a){return ba(a)&&this.h.hasOwnProperty(a)||this.ca.has(a)};var ea=function(){function a(a,b){c[a]=b}function b(){c={}}var c={},d={add:a,reset:b,create:function(d){var e={add:a,request:function(a,b){return c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};e.add=e.add;e.request=e.request;e.reset=e.reset;return e}};d.add=d.add;d.reset=d.reset;return d};var fa=function(){function a(a,c){if(b[a]){if(b[a].Da+c>b[a].max)throw Error("Quota exceeded");b[a].Da+=c}}var b={},c=void 0,d=void 0,e={xd:function(a){c=a},Eb:function(){c&&a(c,1)},yd:function(a){d=a},O:function(b){d&&a(d,b)},Nd:function(a,c){b[a]=b[a]||{Da:0};b[a].max=c},ad:function(a){return b[a]&&b[a].Da||0},reset:function(){b={}},Jc:a};e.onFnConsume=e.xd;e.consumeFn=e.Eb;e.onStorageConsume=e.yd;e.consumeStorage=e.O;e.setMax=e.Nd;e.getConsumed=e.ad;e.reset=e.reset;e.consume=e.Jc;return e};var ha=function(a,b,c){this.F=a;this.T=b;this.S=c;this.h=new ca};ha.prototype.add=function(a,b){this.h.oa||(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};ha.prototype.add=ha.prototype.add;ha.prototype.set=function(a,b){this.h.oa||(this.S&&this.S.has(a)?this.S.set(a,b):(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};ha.prototype.set=ha.prototype.set;
ha.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.S?this.S.get(a):void 0};ha.prototype.get=ha.prototype.get;ha.prototype.has=function(a){return!!this.h.has(a)||!(!this.S||!this.S.has(a))};ha.prototype.has=ha.prototype.has;ha.prototype.C=function(){return this.F};ha.prototype.D=function(){this.h.D()};var ia=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ja=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var v=function(a,b){ca.call(this);this.Qb=a;this.Zc=b};aa(v,ca);var la=function(a,b){for(var c,d=0;d<b.length&&!(c=ka(a,b[d]),c instanceof g);d++);return c},ka=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof v))throw"Attempting to execute non-function "+b[0]+".";return c.i.apply(c,[a].concat(b.slice(1)))};v.prototype.toString=function(){return this.Qb};v.prototype.getName=function(){return this.Qb};v.prototype.getName=v.prototype.getName;v.prototype.L=function(){return new t(da(this))};
v.prototype.getKeys=v.prototype.L;v.prototype.i=function(a,b){var c,d={A:function(){return a},evaluate:function(b){var c=a;return ia(b)?ka(c,b):b},ja:function(b){return la(a,b)},C:function(){return a.C()},ee:function(){c||(c=a.T.create(d));return c}};a.C().Eb();return this.Zc.apply(d,Array.prototype.slice.call(arguments,1))};v.prototype.invoke=v.prototype.i;var x=function(){ca.call(this)};aa(x,ca);x.prototype.L=function(){return new t(da(this))};x.prototype.getKeys=x.prototype.L;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var na=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,oa=function(a){if(null==a)return String(a);var b=na.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},pa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},qa=function(a){if(!a||"object"!=oa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!pa(a,"constructor")&&!pa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||pa(a,b)},ra=function(a,b){var c=b||("array"==oa(a)?[]:{}),d;for(d in a)if(pa(a,d)){var e=a[d];"array"==oa(e)?("array"!=oa(c[d])&&(c[d]=[]),c[d]=ra(e,c[d])):qa(e)?(qa(c[d])||(c[d]={}),c[d]=ra(e,c[d])):c[d]=e}return c};var sa=function(a){if(a instanceof t){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=sa(a.get(d)));return b}if(a instanceof x){for(var e={},f=a.L(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=sa(a.get(f.get(k)));return e}return a instanceof v?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=ta(b[c]);var d=new ha(fa(),ea());return sa(a.i.apply(a,[d].concat(b)))}:a},ta=function(a){if(ia(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=ta(a[c]));return new t(b)}if(qa(a)){var d=
new x,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,ta(a[e]));return d}if("function"===typeof a)return new v("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=sa(this.evaluate(c[d]));return ta(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var ua={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.A(),e=this.evaluate(b);if(!(e instanceof t))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.C().O(a.length+f.length);return new v(a,function(){return function(a){for(var b=new ha(d.F,d.T,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new t(c));var q=la(b,f);if(q instanceof g)return"return"===q.s?q.getData():q}}())},list:function(a){var b=this.C();b.O(arguments.length);for(var c=new t,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.O(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.C(),c=new x,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.O(h);c.set(e,f)}return c},undefined:function(){}};var y=function(){this.F=fa();this.T=ea();this.la=new ha(this.F,this.T)};y.prototype.N=function(a,b){var c=new v(a,b);c.D();this.la.set(a,c)};y.prototype.addInstruction=y.prototype.N;y.prototype.Db=function(a,b){ua.hasOwnProperty(a)&&this.N(b||a,ua[a])};y.prototype.addNativeInstruction=y.prototype.Db;y.prototype.C=function(){return this.F};y.prototype.getQuota=y.prototype.C;y.prototype.Ka=function(){this.F=fa();this.la.F=this.F};y.prototype.resetQuota=y.prototype.Ka;
y.prototype.Jd=function(){this.T=ea();this.la.T=this.T};y.prototype.resetPermissions=y.prototype.Jd;y.prototype.I=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.ib(c)};y.prototype.execute=y.prototype.I;y.prototype.ib=function(a){for(var b,c=0;c<arguments.length;c++){var d=ka(this.la,arguments[c]);b=d instanceof g||d instanceof v||d instanceof t||d instanceof x||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
y.prototype.run=y.prototype.ib;y.prototype.D=function(){this.la.D()};y.prototype.makeImmutable=y.prototype.D;var va=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var xa={Qd:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof t)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new t(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new t(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new t(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=va(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new t(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=va(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.i(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var z={Ob:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},ya="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),za=new g("break"),Aa=new g("continue");z.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};z.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
z.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof t))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=ja(ya,b))return ta(a[b].apply(a,va(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof t){if(a.has(b)){var d=
a.get(b);if(d instanceof v){var e=va(c);e.unshift(this.A());return d.i.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=ja(xa.Qd,b))return e=va(c),e.unshift(this.A()),xa[b].apply(a,e)}if(a instanceof v||a instanceof x){if(a.has(b)){d=a.get(b);if(d instanceof v)return e=va(c),e.unshift(this.A()),d.i.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof v?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,va(c))}throw"TypeError: Object has no '"+
b+"' property.";};z.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.A();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};z["break"]=function(){return za};z["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};z["continue"]=function(){return Aa};
z.Qc=function(a,b,c){var d=new t;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[z.Ob.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.A().set(a,this.evaluate(f))};z.Tc=function(a,b){return this.evaluate(a)/this.evaluate(b)};z.Vc=function(a,b){return this.evaluate(a)==this.evaluate(b)};z.Xc=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
z.$c=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.A();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.ja(c);if(f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}else if(b instanceof x||b instanceof t||b instanceof v){var h=b.L(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.ja(c),f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}};z.get=function(a){return this.A().get(this.evaluate(a))};
z.Mb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof x||a instanceof t||a instanceof v?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ba(b)&&(c=a[b]));return c};z.cd=function(a,b){return this.evaluate(a)>this.evaluate(b)};z.dd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};z.hd=function(a,b){return this.evaluate(a)===this.evaluate(b)};z.jd=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
z["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.ja(d);if(e instanceof g)return e};z.qd=function(a,b){return this.evaluate(a)<this.evaluate(b)};z.rd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};z.sd=function(a,b){return this.evaluate(a)%this.evaluate(b)};z.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};z.td=function(a){return-this.evaluate(a)};z.ud=function(a){return!this.evaluate(a)};
z.vd=function(a,b){return this.evaluate(a)!=this.evaluate(b)};z["null"]=function(){return null};z.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};z.Wb=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};z.Xb=function(a){return this.evaluate(a)};z.quote=function(a){return Array.prototype.slice.apply(arguments)};z["return"]=function(a){return new g("return",this.evaluate(a))};
z.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof v||a instanceof t||a instanceof x)&&a.set(b,c);return c};z.Pd=function(a,b){return this.evaluate(a)-this.evaluate(b)};
z["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!ia(b)||!ia(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.s;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.s||"continue"==d.s)))return d};
z.Rd=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};z["typeof"]=function(a){a=this.evaluate(a);return a instanceof v?"function":typeof a};z.undefined=function(){};z["var"]=function(a){for(var b=this.A(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
z["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.ja(f),e instanceof g)){if("break"==e.s)return;if("return"==e.s)return e}for(;this.evaluate(a);){e=this.ja(f);if(e instanceof g){if("break"==e.s)break;if("return"==e.s)return e}this.evaluate(b)}};var Ca=function(){this.Nb=!1;this.P=new y;Ba(this);this.Nb=!0};Ca.prototype.od=function(){return this.Nb};Ca.prototype.isInitialized=Ca.prototype.od;Ca.prototype.I=function(a){return this.P.ib(a)};Ca.prototype.execute=Ca.prototype.I;Ca.prototype.D=function(){this.P.D()};Ca.prototype.makeImmutable=Ca.prototype.D;
var Ba=function(a){function b(a,b){e.P.Db(a,String(b))}function c(a,b){e.P.N(String(d[a]),b)}var d=z.Ob,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",z.add);c("AND",z.and);c("APPLY",z.apply);c("ASSIGN",z.assign);c("BREAK",z["break"]);c("CASE",z["case"]);c("CONTINUE",z["continue"]);c("DEFAULT",z["case"]);c("DEFN",z.Qc);c("DIVIDE",z.Tc);c("EQUALS",z.Vc);c("EXPRESSION_LIST",z.Xc);c("FOR_IN",z.$c);c("GET",z.get);c("GET_INDEX",
z.Mb);c("GET_PROPERTY",z.Mb);c("GREATER_THAN",z.cd);c("GREATER_THAN_EQUALS",z.dd);c("IDENTITY_EQUALS",z.hd);c("IDENTITY_NOT_EQUALS",z.jd);c("IF",z["if"]);c("LESS_THAN",z.qd);c("LESS_THAN_EQUALS",z.rd);c("MODULUS",z.sd);c("MULTIPLY",z.multiply);c("NEGATE",z.td);c("NOT",z.ud);c("NOT_EQUALS",z.vd);c("NULL",z["null"]);c("OR",z.or);c("POST_DECREMENT",z.Wb);c("POST_INCREMENT",z.Wb);c("PRE_DECREMENT",z.Xb);c("PRE_INCREMENT",z.Xb);c("QUOTE",z.quote);c("RETURN",z["return"]);c("SET_PROPERTY",z.setProperty);
c("SUBTRACT",z.Pd);c("SWITCH",z["switch"]);c("TERNARY",z.Rd);c("TYPEOF",z["typeof"]);c("VAR",z["var"]);c("WHILE",z["while"])};Ca.prototype.N=function(a,b){this.P.N(a,b)};Ca.prototype.addInstruction=Ca.prototype.N;Ca.prototype.C=function(){return this.P.C()};Ca.prototype.getQuota=Ca.prototype.C;Ca.prototype.Ka=function(){this.P.Ka()};Ca.prototype.resetQuota=Ca.prototype.Ka;var Da=function(){this.Ha={}};Da.prototype.get=function(a){return this.Ha.hasOwnProperty(a)?this.Ha[a]:void 0};Da.prototype.add=function(a,b){if(this.Ha.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new v(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.D();this.Ha[a]=c};Da.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var B=window,C=document,Ea=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Fa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},F=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Fa(d,b);c&&(d.onerror=c);var e=C.getElementsByTagName("script")[0]||C.body||C.head;e.parentNode.insertBefore(d,e);return d},Ga=function(a,b){var c=C.createElement("iframe");
c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||C.body||C.head;d.parentNode.insertBefore(c,d);Fa(c,b);void 0!==a&&(c.src=a);return c},J=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Ha=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ia=function(a,b,c){a.removeEventListener?a.removeEventListener(b,
c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},O=function(a){B.setTimeout(a,0)},Ka=function(a){var b=C.getElementById(a);if(b&&Ja(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ja(document.all[a][c],"id")==a)return document.all[a][c];return b},Ja=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},La=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},
Ma=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c};var Na=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},P=function(a,b,c,d,e){var f,h=a.protocol||B.location.protocol;h=h.replace(":","").toLowerCase();b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=h;break;case "host":f=(a.hostname||B.location.hostname).split(":")[0].toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;
case "port":f=String(1*(a.hostname?a.port:B.location.port)||("http"==h?80:"https"==h?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=ja(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Na(f,e));break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Oa=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},R=function(a){var b=
C.createElement("a");a&&(b.href=a);return b};var Ra=function(){this.Vb=new Ca;var a=new Da;a.addAll(Pa());Qa(this,function(b){return a.get(b)})},Pa=function(){return{callInWindow:Sa,getCurrentUrl:Ta,getInWindow:Ua,getReferrer:Va,getUrlComponent:Wa,getUrlFragment:Xa,isPlainObject:Ya,loadIframe:Za,loadJavaScript:ab,removeUrlFragment:bb,replaceAll:cb,sendTrackingBeacon:db,setInWindow:eb}};Ra.prototype.I=function(a){return this.Vb.I(a)};Ra.prototype.execute=Ra.prototype.I;var Qa=function(a,b){a.Vb.N("require",b)};
function Sa(a,b){for(var c=a.split("."),d=B,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==oa(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(sa(arguments[f]));e.apply(d,h)}}function Ta(){return B.location.href}function Ua(a,b,c){for(var d=a.split("."),e=B,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=sa(b));return ta(e[d[f]])}function Va(){return C.referrer}
function Wa(a,b,c,d,e){var f;if(d&&d instanceof t){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return P(R(a),b,c,f,e)}function Xa(a){return P(R(a),"fragment")}function Ya(a){return a instanceof x}function Za(a,b){var c=this.A();Ga(a,function(){b instanceof v&&b.i(c)})}var hb={};
function ab(a,b,c,d){var e=this.A(),f=function(){b instanceof v&&b.i(e)},h=function(){c instanceof v&&c.i(e)};d?hb[d]?(hb[d].onSuccess.push(f),hb[d].onFailure.push(h)):(hb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=hb[d].onSuccess,b=0;b<a.length;b++)O(a[b]);a.push=function(a){O(a);return 0}},h=function(){for(var a=hb[d].onFailure,b=0;b<a.length;b++)O(a[b]);hb[d]=null},F(a,f,h)):F(a,f,h)}function bb(a){return Oa(R(a))}function cb(a,b,c){return a.replace(new RegExp(b,"g"),c)}
function db(a,b,c){var d=this.A();J(a,function(){b instanceof v&&b.i(d)},function(){c instanceof v&&c.i(d)})}function eb(a,b,c){for(var d=a.split("."),e=B,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=sa(b),!0):!1};
var ib=[],jb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},kb=function(a){return jb[a]},lb=/[\x00\x22\x26\x27\x3c\x3e]/g;var pb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,qb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},rb=function(a){return qb[a]};ib[7]=function(a){return String(a).replace(pb,rb)};
ib[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(pb,rb)+"'"}};var Ab=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Bb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Cb=function(a){return Bb[a]};ib[16]=function(a){return a};var Eb,Fb=[],Gb=[],Hb=[],Ib=[],Jb=[],Kb={},Lb,Mb,Nb,Sb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";if(Kb[b]){var c={},d;for(d in a)a.hasOwnProperty(d)&&0===d.indexOf("vtp_")&&(c[d]=a[d]);return Kb[b](c)}var e=new x,f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&e.set(f.substr(4),ta(a[f]));var h=Eb([b,e]);h instanceof g&&"return"===h.s&&(h=h.getData());return sa(h)},Ub=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=
Tb(a[e],b,c));return d},Tb=function(a,b,c){if(ia(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Tb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Fb[f];if(!h||b(h))return;c[f]=!0;try{var k=Ub(h,b,c);d=Sb(k);Nb&&(d=Nb.Lc(d,k))}catch(w){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Tb(a[l],b,c)]=Tb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Tb(a[n],b,c);Mb&&(m=m||p===
Mb.xa);d.push(p)}return Mb&&m?Mb.Mc(d):d.join("");case "escape":d=Tb(a[1],b,c);if(Mb&&ia(a[1])&&"macro"===a[1][0]&&Mb.pd(a))return Mb.Bd(d);d=String(d);for(var q=2;q<a.length;q++)ib[a[q]]&&(d=ib[a[q]](d));return d;case "tag":var u=a[1];if(!Ib[u])throw Error("Unable to resolve tag reference "+u+".");return d={Jb:a[2],index:u};case "zb":var r=Vb({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(r=!r);return r;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");
}}return a},Vb=function(a,b,c){try{return Lb(Ub(a,b,c))}catch(d){JSON.stringify(a)}return null};var Wb=null,Zb=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Wb=Xb(a);for(var e=0;e<Gb.length;e++){var f=Gb[e],h=Yb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<Ib.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},Yb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Wb(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=Wb(e[c]);if(null===d)return null;if(d)return!1}return!0};
var Xb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Vb(Hb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var bc={},cc=null;bc.m="GTM-KHWBBT";var dc=null,ec="//www.googletagmanager.com/a?id="+bc.m+"&cv=399",fc={},gc={};var hc=function(){},ic=function(a){return"function"==typeof a},jc=function(a){return"string"==oa(a)},kc=function(a){return"number"==oa(a)&&!isNaN(a)},lc=function(a){return Math.round(Number(a))||0},mc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},nc=function(a){var b=[];if(ia(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},oc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},pc=function(a,b){if(!kc(a)||!kc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},qc=function(){this.prefix="gtm.";this.values={}};qc.prototype.set=function(a,b){this.values[this.prefix+a]=b};qc.prototype.get=function(a){return this.values[this.prefix+a]};qc.prototype.contains=function(a){return void 0!==this.get(a)};var rc=function(){var a=cc.sequence||0;cc.sequence=a+1;return a},sc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},tc=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var T=function(){var a=function(a){return{toString:function(){return a}}};return{sb:a("convert_case_to"),tb:a("convert_false_to"),ub:a("convert_null_to"),vb:a("convert_true_to"),wb:a("convert_undefined_to"),G:a("function"),cc:a("instance_name"),ec:a("live_only"),fc:a("malware_disabled"),gc:a("once_per_event"),yb:a("once_per_load"),zb:a("setup_tags"),hc:a("tag_id"),Ab:a("teardown_tags")}}();var uc=new qc,vc={},yc={set:function(a,b){ra(wc(a,b),vc)},get:function(a){return xc(a,2)},reset:function(){uc=new qc;vc={}}},xc=function(a,b){return 2!=b?uc.get(a):zc(a)},zc=function(a,b,c){var d=a.split(".");return Bc(d)},Bc=function(a){for(var b=vc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Fc=function(a,b){uc.set(a,b);ra(wc(a,b),vc)},wc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Gc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Hc={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ic={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Jc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Kc=function(a){var b=xc("gtm.whitelist");var c=b&&Jc(nc(b),Hc),d=xc("gtm.blacklist")||
xc("tagTypeBlacklist")||[];Gc.test(B.location&&B.location.hostname)&&(d=nc(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Jc(nc(d),Ic),f={};return function(h){var k=h&&h[T.G];if(!k||"string"!=typeof k)return!0;k=k.replace(/_/g,"");if(void 0!==f[k])return f[k];var l=gc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ja(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
ja(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var u;if(!(u=0<=ja(e,k)))a:{for(var r=l||[],w=new qc,E=0;E<e.length;E++)w.set(e[E],!0);for(E=0;E<r.length;E++)if(w.get(r[E])){u=!0;break a}u=!1}q=u}return f[k]=!m||q}};var Lc={Lc:function(a,b){b[T.sb]&&"string"===typeof a&&(a=1==b[T.sb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(T.ub)&&null===a&&(a=b[T.ub]);b.hasOwnProperty(T.wb)&&void 0===a&&(a=b[T.wb]);b.hasOwnProperty(T.vb)&&!0===a&&(a=b[T.vb]);b.hasOwnProperty(T.tb)&&!1===a&&(a=b[T.tb]);return a}};var Mc=function(a){var b=cc.zones;!b&&a&&(b=cc.zones=a());return b},Nc={active:!0,isWhitelisted:function(){return!0}};var Oc=!1,Pc=0,Qc=[];function Rc(a){if(!Oc){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Oc=!0;for(var e=0;e<Qc.length;e++)O(Qc[e])}Qc.push=function(){for(var a=0;a<arguments.length;a++)O(arguments[a]);return 0}}}function Sc(){if(!Oc&&140>Pc){Pc++;try{C.documentElement.doScroll("left"),Rc()}catch(a){B.setTimeout(Sc,50)}}}var Tc=function(a){Oc?a():Qc.push(a)};var Uc=!1,Vc=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]};var Wc=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(!B[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}return B[b]},Xc=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Vc();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ad=function(){return"&tc="+Ib.filter(function(a){return a}).length},bd="0.005000">Math.random(),cd="",dd=function(){cd=[ec,"&v=3&t=t","&pid="+pc(),"&rv=4s"].join("")},ed={},fd="",gd=void 0,hd={},id={},jd=void 0,kd=2,ld=1E3,md=function(){kd=2},nd=function(){var a=gd;return void 0===a?"":[cd,ed[a]?"":"&es=1",hd[a],ad(),fd,"&z=0"].join("")},od=function(){jd&&(B.clearTimeout(jd),jd=void 0);void 0===gd||ed[gd]&&!fd||(id[gd]||0>=kd--||0>=ld--?id[gd]=!0:(J(nd()),ed[gd]=
!0,fd=""))},pd=function(a,b,c){if(bd&&!id[a]&&b){a!==gd&&(od(),gd=a);var d=c+String(b[T.G]||"").replace(/_/g,"");fd=fd?fd+"."+d:"&tr="+d;jd||(jd=B.setTimeout(od,500));2022<=nd().length&&od()}};function qd(a,b,c,d,e,f){var h=Ib[a],k=rd(a,b,c,d,e,f);if(!k)return null;var l=Tb(h[T.zb],f.R,[]);if(l&&l.length){var m=l[0];k=qd(m.index,b,k,1===m.Jb?e:k,e,f)}return k}
function rd(a,b,c,d,e,f){function h(){var b=Ub(k,f.R);b.vtp_gtmOnSuccess=function(){pd(f.id,Ib[a],"5");c()};b.vtp_gtmOnFailure=function(){pd(f.id,Ib[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[T.fc])d();else{pd(f.id,k,"1");try{Sb(b)}catch(E){pd(f.id,
k,"7");e()}}}var k=Ib[a];if(f.R(k))return null;var l=Tb(k[T.Ab],f.R,[]);if(l&&l.length){var m=l[0],n=qd(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.Jb?e:n}if(k[T.yb]||k[T.gc]){var p=k[T.yb]?Jb:b,q=c,u=d;if(!p[a]){h=tc(h);var r=sd(a,p,h);c=r.M;d=r.aa}return function(){p[a](q,u)}}return h}function sd(a,b,c){var d=[],e=[];b[a]=td(d,e,c);return{M:function(){b[a]=ud;for(var c=0;c<d.length;c++)d[c]()},aa:function(){b[a]=vd;for(var c=0;c<e.length;c++)e[c]()}}}
function td(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ud(a){a()}function vd(a,b){b()};function wd(a){var b=0,c=0,d=!1;return{add:function(){c++;return tc(function(){b++;d&&b>=c&&a()})},sc:function(){d=!0;b>=c&&a()}}}function xd(a,b){if(!bd)return;var c=function(a){var d=b.R(Ib[a])?"3":"4",f=Tb(Ib[a][T.zb],b.R,[]);f&&f.length&&c(f[0].index);pd(b.id,Ib[a],d);var h=Tb(Ib[a][T.Ab],b.R,[]);h&&h.length&&c(h[0].index)};c(a);}var yd=!1;var zd=function(a,b){var c={};c[T.G]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Ib.push(c);return Ib.length-1};var Ad=/[A-Z]+/,Bd=/\s/,Cd=function(a){if(jc(a)&&(a=a.trim(),!Bd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ad.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],na:d}}}}};var Dd=null,Ed={},Fd={},Gd;function Hd(){Dd=Dd||!cc.gtagRegistered;cc.gtagRegistered=!0;return Dd}var Id=function(a,b){var c={event:a};b&&(c.eventModel=ra(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function Jd(a){if(void 0===Fd[a.id]){var b;if("UA"==a.prefix)b=zd("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=zd("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=zd("gtagfl",{targetId:a.id});else return;if(!Gd){var c={name:"send_to",dataLayerVersion:2},d={};d[T.G]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Fb.push(d);Gd=["macro",Fb.length-1]}var f={arg0:Gd,arg1:a.id,ignore_case:!1};f[T.G]="_lc";Hb.push(f);var h={"if":[Hb.length-1],add:[b]};h["if"]&&(h.add||h.block)&&
Gb.push(h);Fd[a.id]=b}}
var Sd={event:function(a){var b=a[1];if(jc(b)&&!(3<a.length)){var c;if(2<a.length){if(!qa(a[2]))return;c=a[2]}var d=Id(b,c);return d}},set:function(a){var b;2==a.length&&qa(a[1])?
b=ra(a[1],void 0):3==a.length&&jc(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=ra(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},Rd=tc(function(){});var Td=!1,Ud=[];function Vd(){if(!Td){Td=!0;for(var a=0;a<Ud.length;a++)O(Ud[a])}};var Wd=[],Xd=!1,Yd=function(a){var b=a.eventCallback,c=tc(function(){ic(b)&&O(function(){b(bc.m)})}),d=a.eventTimeout;d&&B.setTimeout(c,Number(d));return c},Zd=function(){for(var a=!1;!Xd&&0<Wd.length;){Xd=!0;delete vc.eventModel;var b=Wd.shift();if(ic(b))try{b.call(yc)}catch(Kd){}else if(ia(b)){var c=b;if(jc(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=xc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(Kd){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&jc(l[0])){var m=Sd[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){Xd=!1;continue}}var n;var p=void 0,q=b,u=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(u&&Fc(p,void 0),Fc(p,q[p]));var r=q.event;if(r){var w=q["gtm.uniqueEventId"];w||(w=rc(),q["gtm.uniqueEventId"]=w,Fc("gtm.uniqueEventId",w));dc=r;var E;var Q,A,M=q,D=M.event,N=M["gtm.uniqueEventId"],I=cc.zones;A=I?I.checkState(bc.m,N):Nc;if(A.active){var K=Yd(M);c:{var G=
A.isWhitelisted;if("gtm.js"==D){if(yd){Q=!1;break c}yd=!0}var L=N,H=D;if(bd&&!(0>=ld)&&gd!==L){od();gd=L;fd="";var S=hd,Z=L,ma,wa=H;ma=0===wa.indexOf("gtm.")?encodeURIComponent(wa):"*";S[Z]="&e="+ma+"&eid="+L;jd||(jd=B.setTimeout(od,500))}var fb=Kc(G),$a={id:N,name:D,Fc:K||hc,R:fb,La:Zb(fb)};for(var Cc,Pb=$a,Nd=wd(Pb.Fc),kf=[],Qb=[],gb=0;gb<Ib.length;gb++)if(Pb.La[gb]){var lf=Ib[gb];var ub=Nd.add();try{var Od=qd(gb,kf,ub,ub,ub,Pb);Od?Qb.push(Od):(xd(gb,Pb),ub())}catch(Kd){ub()}}Nd.sc();for(var Dc=0;Dc<Qb.length;Dc++)Qb[Dc]();Cc=0<Qb.length;if("gtm.js"===D||"gtm.sync"===D)d:{}if(Cc){for(var mf={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Rb=0;Rb<$a.La.length;Rb++)if($a.La[Rb]){var Qd=Ib[Rb];if(Qd&&!mf[Qd[T.G]]){Q=!0;break c}}Q=!1}else Q=Cc}E=Q?!0:!1}else E=!1;dc=null;n=E}else n=!1;a=n||a}Xd=!1}return!a},$d=function(){var a=Zd();try{var b=B["dataLayer"].hide;if(b&&void 0!==b[bc.m]&&b.end){b[bc.m]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},ae=function(){var a=Ea("dataLayer",[]),b=Ea("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Qc.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ud.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(Wd.push.apply(Wd,b);300<this.length;)this.shift();return Zd()};Wd.push.apply(Wd,a.slice(0));
O($d)};var be={};be.xa=new String("undefined");be.Pa={};var ce=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===be.xa?b:a[d]);return c.join("")}};ce.prototype.toString=function(){return this.resolve("undefined")};ce.prototype.valueOf=ce.prototype.toString;be.Mc=function(a){return new ce(a)};var de={};be.Hd=function(a,b){var c=rc();de[c]=[a,b];return c};be.Fb=function(a){var b=a?0:1;return function(a){var c=de[a];if(c&&"function"===typeof c[b])c[b]();de[a]=void 0}};
be.pd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};be.Bd=function(a){if(a===be.xa)return a;var b=rc();be.Pa[b]=a;return'google_tag_manager["'+bc.m+'"].macro('+b+")"};be.ic=ce;var ee=new qc,fe=function(a,b){function c(a){var b=R(a),c=P(b,"protocol"),d=P(b,"host",!0),e=P(b,"port"),f=P(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function ge(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(r){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=ja(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,u=ee.get(q);u||(u=new RegExp(c,p),ee.set(q,u));n=u.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return fe(b,c)}return!1};function he(a,b,c,d){return(d||"https:"==B.location.protocol?a:b)+c}function ie(a,b){for(var c=b||(a instanceof t?new t:new x),d=a.L(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof t?(c.get(f)instanceof t||c.set(f,new t),ie(h,c.get(f))):h instanceof x?(c.get(f)instanceof x||c.set(f,new x),ie(h,c.get(f))):c.set(f,h)}}return c}function je(){return bc.m}function ke(){return(new Date).getTime()}function le(a,b){return ta(xc(a,b||2))}function me(){return dc}
function ne(a){return Ma('<a href="'+a+'"></a>')[0].href}function oe(a){return lc(sa(a))}function pe(a){return null===a?"null":void 0===a?"undefined":a.toString()}function qe(a,b){return pc(a,b)}function re(a,b,c){if(!(a instanceof t))return null;for(var d=new x,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof x&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var se=function(){var a=new Da;a.addAll(Pa());a.addAll({buildSafeUrl:he,decodeHtmlUrl:ne,copy:ie,generateUniqueNumber:rc,getContainerId:je,getCurrentTime:ke,getDataLayerValue:le,getEventName:me,makeInteger:oe,makeString:pe,randomInteger:qe,tableToMap:re});return function(b){return a.get(b)}};var te=new Ra,ue=function(){var a=data.runtime||[];Eb=function(a){return te.I(a)};Lb=ge;Qa(te,se());for(var b=0;b<a.length;b++){var c=a[b];if(!ia(c)||3>c.length){if(0==c.length)continue;break}te.I(c)}};var ve=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var we=function(a){return encodeURIComponent(a)},xe=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=P(R(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var U=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},ye=function(a,b){ra(a,b)},ze=function(a){return lc(a)},Ae=function(a,b){return ja(a,b)};var Be=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ja(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Ce=function(a){cc.hasOwnProperty("autoEventsSettings")||(cc.autoEventsSettings={});var b=cc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},De=function(a,b,c,d){var e=Ce(a),f=sc(e,b,d);e[b]=
c(f)},Ee=function(a,b,c){var d=Ce(a);return sc(d,b,c)};var Fe=/(^|\.)doubleclick\.net$/i,Ge=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,He=function(a,b,c){for(var d=String(b||C.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=oc(h[0]);if(k&&k==a){var l=oc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Ie=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=P(B.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=C.cookie,u=0;u<k.length;u++){var r=h,w=k[u],E=c;if(Fe.test(B.location.hostname)||"/"==E&&Ge.test(w))break;"none"!=k[u]&&(r+="domain="+k[u]+";");C.cookie=r;if(q!=C.cookie||0<=ja(He(a),b))break}};var Je=!1;if(C.querySelectorAll)try{var Ke=C.querySelectorAll(":root");Ke&&1==Ke.length&&Ke[0]==C.documentElement&&(Je=!0)}catch(a){}var Le=Je;var Me=function(a){for(var b=[],c=C.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var Ne=/^\w+$/,Oe=/^[\w-]+$/,Pe=/^\d+\.fls\.doubleclick\.net$/;function Qe(a){return a&&"string"==typeof a&&a.match(Ne)?a:"_gcl"}function Re(a){if(a){if("string"==typeof a){var b=Qe(a);return{ia:b,ha:b}}if(a&&"object"==typeof a)return{ia:Qe(a.dc),ha:Qe(a.aw)}}return{ia:"_gcl",ha:"_gcl"}}function Se(a){var b=R(B.location.href),c=P(b,"host",!1);if(c&&c.match(Pe)){var d=P(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Te(a){return a.filter(function(a){return Oe.test(a)})}var Ve=function(a){var b=Se("gclaw");if(b)return b.split(".");var c=Re(a);if("_gcl"==c.ha){var d=Ue();if(d&&(null==d.K||"aw.ds"==d.K))return[d.ka]}return Te(Me(c.ha+"_aw"))},We=function(a){var b=Se("gcldc");if(b)return b.split(".");var c=Re(a);if("_gcl"==c.ia){var d=Ue();if(d&&("ds"==d.K||"aw.ds"==d.K))return[d.ka]}return Te(Me(c.ia+"_dc"))};
function Ue(){var a=R(B.location.href),b=P(a,"query",!1,void 0,"gclid"),c=P(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=P(a,"fragment");b=b||Na(d,"gclid");c=c||Na(d,"gclsrc")}return void 0!==b&&b.match(Oe)?{ka:b,K:c}:null}
var Xe=function(a,b,c){var d=Re(a);c=c||"auto";b=b||"/";var e=Ue();if(null!=e){var f=(new Date).getTime(),h=new Date(f+7776E6),k=["GCL",Math.round(f/1E3),e.ka].join(".");e.K&&"aw.ds"!=e.K||Ie(d.ha+"_aw",k,b,c,h,!0);"aw.ds"!=e.K&&"ds"!=e.K||Ie(d.ia+"_dc",k,b,c,h,!0)}},Ye=function(){var a=Se("gac");if(a)return decodeURIComponent(a);for(var b=[],c=C.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({lb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=
0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].lb]||(h[b[k].lb]=[]),h[b[k].lb].push({timestamp:l[1],ka:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],u=0;u<q.length;u++)p.push(q[u].ka);p=Te(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")};var Ze;a:{Ze="G"}var $e={"":"n",UA:"u",AW:"a",DC:"d",GTM:Ze},af=function(a){var b=bc.m.split("-"),c=b[0].toUpperCase();return($e[c]||"i")+"4s"+(a&&"GTM"===c?b[1]:"")};
var bf=function(a){return!(void 0===a||null===a||0===(a+"").length)},cf=function(a,b){var c;if(2===b.B)return a("ord",pc(1E11,1E13)),!0;if(3===b.B)return a("ord","1"),a("num",pc(1E11,1E13)),!0;if(4===b.B)return bf(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.B)c="1";else if(6===b.B)c=b.Yb;else return!1;bf(c)&&a("qty",c);bf(b.Ta)&&a("cost",b.Ta);bf(b.mb)&&a("ord",b.mb);return!0},df=encodeURIComponent,ef=function(a,b){function c(a,b,c){f.hasOwnProperty(a)||(b+="",e+=";"+a+"="+(c?b:df(b)))}var d=a.Va,
e=a.protocol;e+=a.Ma?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+df(d)+(";type="+df(a.Wa))+(";cat="+df(a.fa));var f=a.Oc||{},h;for(h in f)f.hasOwnProperty(h)&&(e+=";"+df(h)+"="+df(f[h]+""));if(cf(c,a)){bf(a.ob)&&c("u",a.ob);bf(a.tran)&&c("tran",a.tran);c("gtm",af());if(a.Sa){var k=We(a.Ea);k&&k.length&&c("gcldc",k.join("."));var l=Ve(a.Ea);l&&l.length&&c("gclaw",l.join("."));var m=Ye();m&&c("gac",m)}bf(a.eb)&&c("prd",a.eb,!0);for(var n in a.sa)a.sa.hasOwnProperty(n)&&
c(n,a.sa[n]);e+=b||"";bf(a.Ia)&&c("~oref",a.Ia);a.Ma?Ga(e+"?",a.M):J(e+"?",a.M,a.aa)}else O(a.aa)};var ff=!!B.MutationObserver,gf=void 0,hf=function(a){if(!gf){var b=function(){var a=C.body;if(a)if(ff)(new MutationObserver(function(){for(var a=0;a<gf.length;a++)O(gf[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Ha(a,"DOMNodeInserted",function(){b||(b=!0,O(function(){b=!1;for(var a=0;a<gf.length;a++)O(gf[a])}))})}};gf=[];C.body?b():O(b)}gf.push(a)};var wf="www.googletagmanager.com/gtm.js";
var xf=wf,yf=function(a,b,c,d){Ha(a,b,c,d)},zf=function(a,b){return B.setTimeout(a,b)},Af=function(a,b,c){F(a,b,c)},Bf={},Cf=function(a,b,c){var d=Bf[a];if(void 0===d){var e=function(a,b){return function(){a.status=b;for(var c=2==b?a.ac:a.Ib,d=0;d<c.length;d++)B.setTimeout(c[d],0)}};d={status:1,ac:[],Ib:[],Ld:void 0};d.ne=F(a,e(d,2),e(d,3));Bf[a]=d}0===d.status&&(d.Ld(),d.status=2);2===d.status?b&&b():3===d.status?c&&c():1===d.status&&(b&&d.ac.push(b),c&&d.Ib.push(c))},Df=function(){return B.location.href},
Ef=function(a){return P(R(a),"fragment")},V=function(a,b){return xc(a,b||2)},Ff=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return B["dataLayer"].push(a)},Gf=function(a,b){B[a]=b},W=function(a,b,c){b&&(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},Hf=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},X=function(a,b,c,d){var e=!d&&"http:"==
B.location.protocol;e&&(e=2!==If());return(e?b:a)+c};
var Jf=function(a){var b=0;return b},Kf=function(a){},Lf=function(a){var b=!1;return b},Mf=function(a,b){var c;a:{if(a&&
ia(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},Nf=function(a,b,c,d){De(a,b,c,d)},Of=function(a,b,c){return Ee(a,b,c)},Pf=function(a){return!!Ee(a,"init",!1)},Qf=function(a){Ce(a).init=!0};
var If=function(){var a=xf;a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=C.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};
var Tf=function(a){var b=xf+"?id="+encodeURIComponent(a)+"&l=dataLayer",c=X("https://","http://",b);F(c,void 0,void 0)};var Vf=function(a,b,c){a instanceof be.ic&&(a=a.resolve(be.Hd(b,c)),b=hc);return{Xa:a,M:b}};var Y={a:{}};

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.flc=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;ef(a,c)}(function(a){Y.__flc=a;Y.__flc.b="flc";Y.__flc.g=!0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=U(b.vtp_customVariable||[],"key","value")||{},e={fa:b.vtp_activityTag,Sa:c,Ea:b.vtp_conversionCookiePrefix||void 0,B:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Va:b.vtp_advertiserId,Wa:b.vtp_groupTag,aa:b.vtp_gtmOnFailure,M:b.vtp_gtmOnSuccess,Ia:b.vtp_useImageTag?void 0:b.vtp_url,
protocol:"",Ma:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,tran:b.vtp_transactionVariable,ob:b.vtp_userVariable,sa:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){Af("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,W("google_attr").build([U(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0})(function(){return dc})}();Y.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=Be(b);d.event="gtm.click";Ff(d)}}(function(a){Y.__cl=a;Y.__cl.b="cl";Y.__cl.g=!0})(function(b){if(!Pf("cl")){var c=W("document");Ha(c,"click",a,!0);Qf("cl");var d=Ee("cl","legacyTeardown",void 0);d&&d()}O(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0})(function(a){var b=V("gtm.cookie",1);return He(a.vtp_name,b,!!a.vtp_decodeCookie)[0]})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.b="r";Y.__r.g=!0})(function(a){return pc(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){(function(a){Y.__u=a;Y.__u.b="u";Y.__u.g=!0})(function(a){var b;b=(b=a.vtp_customUrlSource?a.vtp_customUrlSource:V("gtm.url",1))||Df();var c=a.vtp_component,d;if(c&&"URL"!=c){var e=R(String(b));d=P(e,c,"HOST"==c?a.vtp_stripWww:void 0,"PATH"==c?a.vtp_defaultPages:void 0,"QUERY"==c?a.vtp_queryKey:void 0)}else d=Oa(R(String(b)));return d})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0})(function(a){var b=V(a.vtp_name.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==b?b:a.vtp_defaultValue})}();
Y.a.tl=["google"],function(){function a(a){return function(){if(a.$a&&a.ab>=a.$a)a.Ya&&W("self").clearInterval(a.Ya);else{a.ab++;var b=(new Date).getTime();Ff({event:a.Wc,"gtm.timerId":a.Ya,"gtm.timerEventNumber":a.ab,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.$a,"gtm.timerStartTime":a.$b,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.$b,"gtm.triggers":a.Sd})}}}(function(a){Y.__tl=a;Y.__tl.b="tl";Y.__tl.g=!0})(function(b){O(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={Wc:b.vtp_eventName,
ab:0,interval:Number(b.vtp_interval),$a:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Sd:String(b.vtp_uniqueTriggerId||"0"),$b:(new Date).getTime()};c.Ya=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.a.ua=["google"],function(){var a;(function(a){Y.__ua=a;Y.__ua.b="ua";Y.__ua.g=!0})(function(b){var c={},d={},e={},f={},h={};if(b.vtp_gaSettings){var k=b.vtp_gaSettings;ye(U(k.vtp_fieldsToSet,"fieldName","value"),d);ye(U(k.vtp_contentGroup,"index","group"),e);ye(U(k.vtp_dimension,"index","dimension"),f);ye(U(k.vtp_metric,"index","metric"),h);b.vtp_gaSettings=null;k.vtp_fieldsToSet=void 0;k.vtp_contentGroup=void 0;k.vtp_dimension=void 0;k.vtp_metric=void 0;var l=ra(k,void 0);b=ra(b,l)}ye(U(b.vtp_fieldsToSet,
"fieldName","value"),d);ye(U(b.vtp_contentGroup,"index","group"),e);ye(U(b.vtp_dimension,"index","dimension"),f);ye(U(b.vtp_metric,"index","metric"),h);var m=Wc(b.vtp_functionName),n="",p="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(p=b.vtp_trackerName,n=p+"."):(p="gtm"+rc(),n=p+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,
cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},r=function(a){var b=[].slice.call(arguments,0);b[0]=n+b[0];m.apply(window,b)},w=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&r("set",a+c,
b[c])},Q=function(){},A=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&q[e]||!c&&void 0===q[e])){var f=u[e]?
mc(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},M={name:p};A(d,M,!0);m("create",b.vtp_trackingId||c.trackingId,M);r("set","&gtm",af(!0));(function(a,c){void 0!==b[c]&&r("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",e);E("dimension",f);E("metric",h);var D={};A(d,D,!1)&&r("set",D);var N;
b.vtp_enableLinkId&&r("require","linkid","linkid.js");r("set","hitCallback",function(){var a=d&&d.hitCallback;ic(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(r("require","ec","ec.js"),Q());var I={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:w(String,b.vtp_eventLabel||c.label),eventValue:w(ze,b.vtp_eventValue||
c.value)};A(N,I,!1);r("send",I);}else if("TRACK_SOCIAL"==b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==
b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==b.vtp_trackType){}else{b.vtp_enableEcommerce&&(r("require","ec","ec.js"),Q());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");r("require","displayfeatures",void 0,{cookieName:ma})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&(ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),r("require","adfeatures",{cookieName:ma}));N?r("send","pageview",N):r("send","pageview");}if(!a){var wa=
b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&(wa="internal/"+wa);a=!0;Cf(X("https:","http:","//www.google-analytics.com/"+wa,d&&d.forceSSL),function(){var a=Vc();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}})}();
Y.a.gclidw=["google"],function(){(function(a){Y.__gclidw=a;Y.__gclidw.b="gclidw";Y.__gclidw.g=!0})(function(a){O(a.vtp_gtmOnSuccess);var b,c,d;a.vtp_enableCookieOverrides&&(d=a.vtp_cookiePrefix,b=a.vtp_path,c=a.vtp_domain);Xe(d,b,c)})}();
Y.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=V(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue};(function(a){Y.__aev=
a;Y.__aev.b="aev";Y.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TEXT":var h,l=V("gtm.element",1),m=V("event",1),n=Number(new Date);a===l&&b===m&&c>n-250?h=d:(d=h=l?La(l):"",a=l,b=m);c=n;return h||e.vtp_defaultValue;case "URL":var p=String(V("gtm.elementUrl",1)||e.vtp_defaultValue||""),q=R(p);return e.vtp_component&&"URL"!=e.vtp_component?P(q,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey):p;case "ATTRIBUTE":var u;if(void 0===e.vtp_attribute)u=f(e);else{var r=V("gtm.element",
1);u=Ja(r,e.vtp_attribute)||e.vtp_defaultValue||""}return u;default:return f(e)}})}();
Y.a.hl=["google"],function(){function a(a){return a.target&&a.target.location&&a.target.location.href?a.target.location.href:Df()}function b(b,c){yf(b,"hashchange",function(b){c({source:"hashchange",state:null,V:Ef(a(b))})})}function c(b,c){yf(b,"popstate",function(b){c({source:"popstate",state:b.state,V:Ef(a(b))})})}function d(a,b,c){var d=b.history,e=d[a];if(ic(e))try{d[a]=function(b,f,h){e.apply(d,[].slice.call(arguments,0));c({source:a,state:b,V:Ef(Df())})}}catch(n){}}function e(){var a={source:null,
V:Ef(Df()),state:W("history").state||null};return function(b){var c=a,d={};d[c.source]=!0;d[b.source]=!0;if(!d.popstate||!d.hashchange||c.V!=b.V){var e={event:"gtm.historyChange","gtm.historyChangeSource":b.source,"gtm.oldUrlFragment":a.V,"gtm.newUrlFragment":b.V,"gtm.oldHistoryState":a.state,"gtm.newHistoryState":b.state};a=b;Ff(e)}}}(function(a){Y.__hl=a;Y.__hl.b="hl";Y.__hl.g=!0})(function(a){var f=W("self");if(!Pf("hl")){var k=e();b(f,k);c(f,k);d("pushState",f,k);d("replaceState",f,k);var l=Ee("hl",
"legacyTeardown",void 0);l&&l();Qf("hl")}O(a.vtp_gtmOnSuccess)})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=W("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(b){return function(){d();a=!1;var c=Bf[b];c&&3==c.status&&(Bf[b]=void 0)}},f=function(){return function(){d();b={push:c};}};(function(a){Y.__awct=a;Y.__awct.b="awct";Y.__awct.g=!0})(function(c){var d={google_conversion_domain:"",
google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:af(void 0)};c.vtp_currencyCode&&(d.google_conversion_currency=c.vtp_currencyCode);c.vtp_orderId&&(d.google_conversion_order_id=c.vtp_orderId);c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?
(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,Cf("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))})}();
Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.b="smm";Y.__smm.g=!0})(function(a){var b=a.vtp_input,c=U(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.b="paused";Y.__paused.g=!0})(function(a){O(a.vtp_gtmOnFailure)})}();
Y.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Fa(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){O(h)}}};var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,f=Vf(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Xa,k=f.M;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Ma(h),k,e)()}else zf(function(){c(d)},200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0}();

Y.a.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.b="img";Y.__img.g=!0})(function(a){var b=Ma('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}J(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


var Wf={macro:function(a){if(be.Pa.hasOwnProperty(a))return be.Pa[a]}};Wf.dataLayer=yc;Wf.onHtmlSuccess=be.Fb(!0);Wf.onHtmlFailure=be.Fb(!1);Wf.callback=function(a){fc.hasOwnProperty(a)&&ic(fc[a])&&fc[a]();delete fc[a]};Wf.yc=function(){cc[bc.m]=Wf;gc=Y.a;Mb=Mb||be;Nb=Lc};
Wf.ld=function(){cc=B.google_tag_manager=B.google_tag_manager||{};if(cc[bc.m]){var a=cc.zones;a&&a.unregisterChild(bc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Fb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Ib.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Hb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Gb.push(p)}Kb=Y;ue();Wf.yc();ae();Oc=!1;Pc=0;if("interactive"==
C.readyState&&!C.createEventObject||"complete"==C.readyState)Rc();else{Ha(C,"DOMContentLoaded",Rc);Ha(C,"readystatechange",Rc);if(C.createEventObject&&C.documentElement.doScroll){var u=!0;try{u=!B.frameElement}catch(w){}u&&Sc()}Ha(B,"load",Rc)}Td=!1;"complete"===C.readyState?Vd():Ha(B,"load",Vd);a:{
if(!bd)break a;dd();kd=2;gd=void 0;hd={};ed={};jd=void 0;id={};fd="";B.setInterval(dd,864E5);B.setInterval(md,1E3);}}};Wf.ld();

})()
