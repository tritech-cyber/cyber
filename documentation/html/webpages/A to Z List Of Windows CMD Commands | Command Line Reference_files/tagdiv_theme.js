jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,a,c,b,d){return-b*Math.cos(a/
d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;f||(f=d*0.3*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return 1>a?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c:0.5*g*Math.pow(2,-10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){return a<d/2?0.5*jQuery.easing.easeInBounce(e,2*a,0,b,d)+c:0.5*jQuery.easing.easeOutBounce(e,2*a-d,0,b,d)+0.5*b+c}});(function($){$.fn.supersubs=function(options){var opts=$.extend({},$.fn.supersubs.defaults,options);return this.each(function(){var $$=$(this);var o=$.meta?$.extend({},opts,$$.data()):opts;var $ULs=$$.find('ul').show();var fontsize=$('<li id="menu-fontsize">&#8212;</li>').css({'padding':0,'position':'absolute','top':'-999em','width':'auto'}).appendTo($$)[0].clientWidth;$('#menu-fontsize').remove();$ULs.each(function(i){var $ul=$(this);var $LIs=$ul.children();var $As=$LIs.children('a');var liFloat=$LIs.css('white-space','nowrap').css('float');$ul.add($LIs).add($As).css({'float':'none','width':'auto'});var emWidth=$ul[0].clientWidth/fontsize;emWidth+=o.extraWidth;if(emWidth>o.maxWidth){emWidth=o.maxWidth;}
else if(emWidth<o.minWidth){emWidth=o.minWidth;}
emWidth+='em';$ul.css('width',emWidth);$LIs.css({'float':liFloat,'width':'100%','white-space':'normal'}).each(function(){var $childUl=$(this).children('ul');var offsetDirection=$childUl.css('left')!==undefined?'left':'right';$childUl.css(offsetDirection,'100%');});}).hide();});};$.fn.supersubs.defaults={minWidth:9,maxWidth:25,extraWidth:0};})(jQuery);(function(b){var oa=0,X=0,fa=0,T=0,Ca="ontouchstart"in window||0<navigator.msMaxTouchPoints,Da="onorientationchange"in window,ga=!1,aa=!1,Y=!1,pa=!1,ia=!1,ba="pointer",ua="pointer",ja=[],J=[],va=[],$=[],z=[],ca=[],B=[],m=[],s=[],wa=[],da=[],e={showScrollbar:function(a,e){a.scrollbarHide&&b("."+e).css({opacity:a.scrollbarOpacity,filter:"alpha(opacity:"+100*a.scrollbarOpacity+")"})},hideScrollbar:function(b,g,c,f,h,d,m,s,B,z){if(b.scrollbar&&b.scrollbarHide)for(var t=c;t<c+25;t++)g[g.length]=e.hideScrollbarIntervalTimer(10*t,f[c],(c+24-t)/24,h,d,m,s,B,z,b)},hideScrollbarInterval:function(a,g,c,f,h,d,m,B,z){T=-1*a/s[B]*(h-d-m-f);e.setSliderOffset("."+c,T);b("."+c).css({opacity:z.scrollbarOpacity*g,filter:"alpha(opacity:"+z.scrollbarOpacity*g*100+")"})},slowScrollHorizontalInterval:function(a,g,c,f,h,d,N,O,L,K,t,w,x,y,v,q,G,p,n){if(n.infiniteSlider){if(c<=-1*s[q]){var r=b(a).width();if(c<=-1*wa[q]){var u=-1*t[0];b(g).each(function(c){e.setSliderOffset(b(g)[c],u+G);c<w.length&&(w[c]=-1*u);u+=v[c]});c+=-1*w[0];m[q]=-1* w[0]+G;s[q]=m[q]+r-d;B[q]=0}else{var k=0,E=e.getSliderOffset(b(g[0]),"x");b(g).each(function(b){e.getSliderOffset(this,"x")<E&&(E=e.getSliderOffset(this,"x"),k=b)});x=m[q]+r;e.setSliderOffset(b(g)[k],x);m[q]=-1*w[1]+G;s[q]=m[q]+r-d;w.splice(0,1);w.splice(w.length,0,-1*x+G);B[q]++}}if(c>=-1*m[q]||0<=c){r=b(a).width();if(0<c)for(u=-1*t[0],b(g).each(function(c){e.setSliderOffset(b(g)[c],u+G);c<w.length&&(w[c]=-1*u);u+=v[c]}),c-=-1*w[0],m[q]=-1*w[0]+G,s[q]=m[q]+r-d,B[q]=y;0<-1*w[0]-r+G;){var A=0,I=e.getSliderOffset(b(g[0]), "x");b(g).each(function(b){e.getSliderOffset(this,"x")>I&&(I=e.getSliderOffset(this,"x"),A=b)});x=m[q]-v[A];e.setSliderOffset(b(g)[A],x);w.splice(0,0,-1*x+G);w.splice(w.length-1,1);m[q]=-1*w[0]+G;s[q]=m[q]+r-d;B[q]--;z[q]++}0>c&&(A=0,I=e.getSliderOffset(b(g[0]),"x"),b(g).each(function(b){e.getSliderOffset(this,"x")>I&&(I=e.getSliderOffset(this,"x"),A=b)}),x=m[q]-v[A],e.setSliderOffset(b(g)[A],x),w.splice(0,0,-1*x+G),w.splice(w.length-1,1),m[q]=-1*w[0]+G,s[q]=m[q]+r-d,B[q]--)}}t=!1;d=e.calcActiveOffset(n, c,w,d,B[q],y,K,q);x=(d+B[q]+y)%y;n.infiniteSlider?x!=ca[q]&&(t=!0):d!=z[q]&&(t=!0);if(t&&(y=new e.args("change",n,a,b(a).children(":eq("+x+")"),x,p),b(a).parent().data("args",y),""!=n.onSlideChange))n.onSlideChange(y);z[q]=d;ca[q]=x;c=Math.floor(c);e.setSliderOffset(a,c);n.scrollbar&&(T=Math.floor((-1*c-m[q]+G)/(s[q]-m[q]+G)*(N-O-h)),a=h-L,c>=-1*m[q]+G?(a=h-L- -1*T,e.setSliderOffset(b("."+f),0)):(c<=-1*s[q]+1&&(a=N-O-L-T),e.setSliderOffset(b("."+f),T)),b("."+f).css({width:a+"px"}))},slowScrollHorizontal:function(a, g,c,f,h,d,N,O,L,K,t,w,x,y,v,q,G,p,n,r,u){var k=e.getSliderOffset(a,"x");d=[];var E=0,A=25/1024*O;frictionCoefficient=u.frictionCoefficient;elasticFrictionCoefficient=u.elasticFrictionCoefficient;snapFrictionCoefficient=u.snapFrictionCoefficient;h>u.snapVelocityThreshold&&u.snapToChildren&&!n?E=1:h<-1*u.snapVelocityThreshold&&u.snapToChildren&&!n&&(E=-1);h<-1*A?h=-1*A:h>A&&(h=A);b(a)[0]!==b(p)[0]&&(E*=-1,h*=-2);p=B[v];if(u.infiniteSlider)var I=m[v],l=s[v];n=[];for(var A=[],F=0;F<x.length;F++)n[F]= x[F],F<g.length&&(A[F]=e.getSliderOffset(b(g[F]),"x"));for(;1<h||-1>h;){h*=frictionCoefficient;k+=h;(k>-1*m[v]||k<-1*s[v])&&!u.infiniteSlider&&(h*=elasticFrictionCoefficient,k+=h);if(u.infiniteSlider){if(k<=-1*l){for(var l=b(a).width(),J=0,P=A[0],F=0;F<A.length;F++)A[F]<P&&(P=A[F],J=F);F=I+l;A[J]=F;I=-1*n[1]+r;l=I+l-O;n.splice(0,1);n.splice(n.length,0,-1*F+r);p++}if(k>=-1*I){l=b(a).width();J=0;P=A[0];for(F=0;F<A.length;F++)A[F]>P&&(P=A[F],J=F);F=I-y[J];A[J]=F;n.splice(0,0,-1*F+r);n.splice(n.length- 1,1);I=-1*n[0]+r;l=I+l-O;p--}}d[d.length]=k}A=!1;h=e.calcActiveOffset(u,k,n,O,p,G,z[v],v);I=(h+p+G)%G;u.snapToChildren&&(u.infiniteSlider?I!=ca[v]&&(A=!0):h!=z[v]&&(A=!0),0>E&&!A?(h++,h>=x.length&&!u.infiniteSlider&&(h=x.length-1)):0<E&&!A&&(h--,0>h&&!u.infiniteSlider&&(h=0)));if(u.snapToChildren||(k>-1*m[v]||k<-1*s[v])&&!u.infiniteSlider){(k>-1*m[v]||k<-1*s[v])&&!u.infiniteSlider?d.splice(0,d.length):(d.splice(0.1*d.length,d.length),k=0<d.length?d[d.length-1]:k);for(;k<n[h]-0.5||k>n[h]+0.5;)k=(k- n[h])*snapFrictionCoefficient+n[h],d[d.length]=k;d[d.length]=n[h]}E=1;0!=d.length%2&&(E=0);for(k=0;k<c.length;k++)clearTimeout(c[k]);p=(h+p+G)%G;I=0;for(k=E;k<d.length;k+=2)if(k==E||1<Math.abs(d[k]-I)||k>=d.length-2)I=d[k],c[c.length]=e.slowScrollHorizontalIntervalTimer(10*k,a,g,d[k],f,N,O,L,K,t,h,w,x,q,G,y,v,r,p,u);I=(h+B[v]+G)%G;""!=u.onSlideComplete&&1<d.length&&(c[c.length]=e.onSlideCompleteTimer(10*(k+1),u,a,b(a).children(":eq("+I+")"),p,v));$[v]=c;e.hideScrollbar(u,c,k,d,f,N,O,K,t,v)},onSlideComplete:function(a, g,c,f,h){c=new e.args("complete",a,b(g),c,f,f);b(g).parent().data("args",c);if(""!=a.onSlideComplete)a.onSlideComplete(c)},getSliderOffset:function(a,e){var c=0;e="x"==e?4:5;if(!ga||aa||Y)c=parseInt(b(a).css("left"),10);else{for(var c=["-webkit-transform","-moz-transform","transform"],f,h=0;h<c.length;h++)if(void 0!=b(a).css(c[h])&&0<b(a).css(c[h]).length){f=b(a).css(c[h]).split(",");break}c=void 0==f[e]?0:parseInt(f[e],10)}return c},setSliderOffset:function(a,e){e=parseInt(e,10);!ga||aa||Y?b(a).css({left:e+ "px"}):b(a).css({msTransform:"matrix(1,0,0,1,"+e+",0)",webkitTransform:"matrix(1,0,0,1,"+e+",0)",MozTransform:"matrix(1,0,0,1,"+e+",0)",transform:"matrix(1,0,0,1,"+e+",0)"})},setBrowserInfo:function(){null!=navigator.userAgent.match("WebKit")?(ba="-webkit-grab",ua="-webkit-grabbing"):null!=navigator.userAgent.match("Gecko")?(ia=!0,ba="move",ua="-moz-grabbing"):null!=navigator.userAgent.match("MSIE 7")?pa=aa=!0:null!=navigator.userAgent.match("MSIE 8")?pa=Y=!0:null!=navigator.userAgent.match("MSIE 9")&& (pa=!0)},has3DTransform:function(){var a=!1,e=b("<div />").css({msTransform:"matrix(1,1,1,1,1,1)",webkitTransform:"matrix(1,1,1,1,1,1)",MozTransform:"matrix(1,1,1,1,1,1)",transform:"matrix(1,1,1,1,1,1)"});""==e.attr("style")?a=!1:ia&&21<=parseInt(navigator.userAgent.split("/")[3],10)?a=!1:void 0!=e.attr("style")&&(a=!0);return a},getSlideNumber:function(b,e,c){return(b-B[e]+c)%c},calcActiveOffset:function(b,e,c,f,h,d,m,s){h=!1;b=[];var z;e>c[0]&&(z=0);e<c[c.length-1]&&(z=d-1);for(d=0;d<c.length;d++)c[d]<= e&&c[d]>e-f&&(h||c[d]==e||(b[b.length]=c[d-1]),b[b.length]=c[d],h=!0);0==b.length&&(b[0]=c[c.length-1]);for(d=h=0;d<b.length;d++)m=Math.abs(e-b[d]),m<f&&(h=b[d],f=m);for(d=0;d<c.length;d++)h==c[d]&&(z=d);return z},changeSlide:function(a,g,c,f,h,d,m,s,L,K,t,w,x,y,v,q,G,p){e.autoSlidePause(y);for(var n=0;n<f.length;n++)clearTimeout(f[n]);var r=Math.ceil(p.autoSlideTransTimer/10)+1,u=e.getSliderOffset(g,"x"),k=w[a],E=k-u;if(p.infiniteSlider)for(a=(a-B[y]+2*q)%q,n=!1,0==a&&2==q&&(a=q,w[a]=w[a-1]-b(c).eq(0).outerWidth(!0), n=!0),k=w[a],E=k-u,k=[w[a]-b(g).width(),w[a]+b(g).width()],n&&w.splice(w.length-1,1),n=0;n<k.length;n++)Math.abs(k[n]-u)<Math.abs(E)&&(E=k[n]-u);var k=[],A;e.showScrollbar(p,h);for(n=0;n<=r;n++)A=n,A/=r,A--,A=u+E*(Math.pow(A,5)+1),k[k.length]=A;r=(a+B[y]+q)%q;for(n=u=0;n<k.length;n++){if(0==n||1<Math.abs(k[n]-u)||n>=k.length-2)u=k[n],f[n]=e.slowScrollHorizontalIntervalTimer(10*(n+1),g,c,k[n],h,d,m,s,L,K,a,t,w,v,q,x,y,G,r,p);0==n&&""!=p.onSlideStart&&(E=(z[y]+B[y]+q)%q,p.onSlideStart(new e.args("start", p,g,b(g).children(":eq("+E+")"),E,a)))}u=!1;p.infiniteSlider?r!=ca[y]&&(u=!0):a!=z[y]&&(u=!0);u&&""!=p.onSlideComplete&&(f[f.length]=e.onSlideCompleteTimer(10*(n+1),p,g,b(g).children(":eq("+r+")"),r,y));$[y]=f;e.hideScrollbar(p,f,n,k,h,d,m,L,K,y);e.autoSlide(g,c,f,h,d,m,s,L,K,t,w,x,y,v,q,G,p)},autoSlide:function(b,g,c,f,h,d,m,s,L,K,t,w,x,y,v,q,G){if(!J[x].autoSlide)return!1;e.autoSlidePause(x);ja[x]=setTimeout(function(){!G.infiniteSlider&&z[x]>t.length-1&&(z[x]-=v);e.changeSlide((z[x]+B[x]+t.length+ 1)%t.length,b,g,c,f,h,d,m,s,L,K,t,w,x,y,v,q,G);e.autoSlide(b,g,c,f,h,d,m,s,L,K,t,w,x,y,v,q,G)},G.autoSlideTimer+G.autoSlideTransTimer)},autoSlidePause:function(b){clearTimeout(ja[b])},isUnselectable:function(a,e){return""!=e.unselectableSelector&&1==b(a).closest(e.unselectableSelector).length?!0:!1},slowScrollHorizontalIntervalTimer:function(b,g,c,f,h,d,m,s,z,B,t,w,x,y,v,q,G,p,n,r){return setTimeout(function(){e.slowScrollHorizontalInterval(g,c,f,h,d,m,s,z,B,t,w,x,y,v,q,G,p,n,r)},b)},onSlideCompleteTimer:function(b, g,c,f,h,d){return setTimeout(function(){e.onSlideComplete(g,c,f,h,d)},b)},hideScrollbarIntervalTimer:function(b,g,c,f,h,d,m,s,z,B){return setTimeout(function(){e.hideScrollbarInterval(g,c,f,h,d,m,s,z,B)},b)},args:function(a,g,c,f,h,d){this.prevSlideNumber=void 0==b(c).parent().data("args")?void 0:b(c).parent().data("args").prevSlideNumber;this.prevSlideObject=void 0==b(c).parent().data("args")?void 0:b(c).parent().data("args").prevSlideObject;this.targetSlideNumber=d+1;this.targetSlideObject=b(c).children(":eq("+ d+")");this.slideChanged=!1;"load"==a?this.targetSlideObject=this.targetSlideNumber=void 0:"start"==a?this.targetSlideObject=this.targetSlideNumber=void 0:"change"==a?(this.slideChanged=!0,this.prevSlideNumber=void 0==b(c).parent().data("args")?g.startAtSlide:b(c).parent().data("args").currentSlideNumber,this.prevSlideObject=b(c).children(":eq("+this.prevSlideNumber+")")):"complete"==a&&(this.slideChanged=b(c).parent().data("args").slideChanged);this.settings=g;this.data=b(c).parent().data("iosslider"); this.sliderObject=c;this.sliderContainerObject=b(c).parent();this.currentSlideObject=f;this.currentSlideNumber=h+1;this.currentSliderOffset=-1*e.getSliderOffset(c,"x")},preventDrag:function(b){b.preventDefault()},preventClick:function(b){b.stopImmediatePropagation();return!1},enableClick:function(){return!0}};e.setBrowserInfo();var V={init:function(a,g){ga=e.has3DTransform();var c=b.extend(!0,{elasticPullResistance:0.6,frictionCoefficient:0.92,elasticFrictionCoefficient:0.6,snapFrictionCoefficient:0.92, snapToChildren:!1,snapSlideCenter:!1,startAtSlide:1,scrollbar:!1,scrollbarDrag:!1,scrollbarHide:!0,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:0.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:0.9,desktopClickDrag:!1,keyboardControls:!1,tabToAdvance:!1,responsiveSlideContainer:!0,responsiveSlides:!0,navSlideSelector:"",navPrevSelector:"",navNextSelector:"", autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5E3,autoSlideTransTimer:750,autoSlideHoverPause:!0,infiniteSlider:!1,snapVelocityThreshold:5,slideStartVelocityThreshold:0,horizontalSlideLockThreshold:5,verticalSlideLockThreshold:3,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"",onSliderLoaded:"",onSliderUpdate:"",onSliderResize:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""},a);void 0==g&&(g=this);return b(g).each(function(a){function g(){e.autoSlidePause(d); xa=b(C).find("a");ja=b(C).find("[onclick]");qa=b(C).find("*");b(n).css("width","");b(n).css("height","");b(C).css("width","");D=b(C).children().not("script").get();ha=[];M=[];c.responsiveSlides&&b(D).css("width","");s[d]=0;l=[];q=b(n).parent().width();r=b(n).outerWidth(!0);c.responsiveSlideContainer&&(r=b(n).outerWidth(!0)>q?q:b(n).width());b(n).css({position:c.stageCSS.position,top:c.stageCSS.top,left:c.stageCSS.left,overflow:c.stageCSS.overflow,zIndex:c.stageCSS.zIndex,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden", msTouchAction:"pan-y",width:r});b(c.unselectableSelector).css({cursor:"default"});for(var a=0;a<D.length;a++){ha[a]=b(D[a]).width();M[a]=b(D[a]).outerWidth(!0);var h=M[a];c.responsiveSlides&&(M[a]>r?(h=r+-1*(M[a]-ha[a]),ha[a]=h,M[a]=r):h=ha[a],b(D[a]).css({width:h}));b(D[a]).css({webkitBackfaceVisibility:"hidden",overflow:"hidden",position:"absolute"});l[a]=-1*s[d];s[d]=s[d]+h+(M[a]-ha[a])}c.snapSlideCenter&&(p=0.5*(r-M[0]),c.responsiveSlides&&M[0]>r&&(p=0));wa[d]=2*s[d];for(a=0;a<D.length;a++)e.setSliderOffset(b(D[a]), -1*l[a]+s[d]+p),l[a]-=s[d];if(!c.infiniteSlider&&!c.snapSlideCenter){for(a=0;a<l.length&&!(l[a]<=-1*(2*s[d]-r));a++)ia=a;l.splice(ia+1,l.length);l[l.length]=-1*(2*s[d]-r)}for(a=0;a<l.length;a++)F[a]=l[a];I&&(J[d].startAtSlide=J[d].startAtSlide>l.length?l.length:J[d].startAtSlide,c.infiniteSlider?(J[d].startAtSlide=(J[d].startAtSlide-1+H)%H,z[d]=J[d].startAtSlide):(J[d].startAtSlide=0>J[d].startAtSlide-1?l.length-1:J[d].startAtSlide,z[d]=J[d].startAtSlide-1),ca[d]=z[d]);m[d]=s[d]+p;b(C).css({position:"relative", cursor:ba,webkitPerspective:"0",webkitBackfaceVisibility:"hidden",width:s[d]+"px"});R=s[d];s[d]=2*s[d]-r+2*p;(W=R+p<r||0==r?!0:!1)&&b(C).css({cursor:"default"});G=b(n).parent().outerHeight(!0);u=b(n).height();c.responsiveSlideContainer&&(u=u>G?G:u);b(n).css({height:u});e.setSliderOffset(C,l[z[d]]);if(c.infiniteSlider&&!W){a=e.getSliderOffset(b(C),"x");for(h=(B[d]+H)%H*-1;0>h;){var f=0,A=e.getSliderOffset(b(D[0]),"x");b(D).each(function(b){e.getSliderOffset(this,"x")<A&&(A=e.getSliderOffset(this,"x"), f=b)});var L=m[d]+R;e.setSliderOffset(b(D)[f],L);m[d]=-1*l[1]+p;s[d]=m[d]+R-r;l.splice(0,1);l.splice(l.length,0,-1*L+p);h++}for(;0<-1*l[0]-R+p&&c.snapSlideCenter&&I;){var O=0,P=e.getSliderOffset(b(D[0]),"x");b(D).each(function(b){e.getSliderOffset(this,"x")>P&&(P=e.getSliderOffset(this,"x"),O=b)});L=m[d]-M[O];e.setSliderOffset(b(D)[O],L);l.splice(0,0,-1*L+p);l.splice(l.length-1,1);m[d]=-1*l[0]+p;s[d]=m[d]+R-r;B[d]--;z[d]++}for(;a<=-1*s[d];)f=0,A=e.getSliderOffset(b(D[0]),"x"),b(D).each(function(b){e.getSliderOffset(this, "x")<A&&(A=e.getSliderOffset(this,"x"),f=b)}),L=m[d]+R,e.setSliderOffset(b(D)[f],L),m[d]=-1*l[1]+p,s[d]=m[d]+R-r,l.splice(0,1),l.splice(l.length,0,-1*L+p),B[d]++,z[d]--}e.setSliderOffset(C,l[z[d]]);c.desktopClickDrag||b(C).css({cursor:"default"});c.scrollbar&&(b("."+K).css({margin:c.scrollbarMargin,overflow:"hidden",display:"none"}),b("."+K+" ."+t).css({border:c.scrollbarBorder}),k=parseInt(b("."+K).css("marginLeft"))+parseInt(b("."+K).css("marginRight")),E=parseInt(b("."+K+" ."+t).css("borderLeftWidth"), 10)+parseInt(b("."+K+" ."+t).css("borderRightWidth"),10),y=""!=c.scrollbarContainer?b(c.scrollbarContainer).width():r,v=r/R*(y-k),c.scrollbarHide||(V=c.scrollbarOpacity),b("."+K).css({position:"absolute",left:0,width:y-k+"px",margin:c.scrollbarMargin}),"top"==c.scrollbarLocation?b("."+K).css("top","0"):b("."+K).css("bottom","0"),b("."+K+" ."+t).css({borderRadius:c.scrollbarBorderRadius,background:c.scrollbarBackground,height:c.scrollbarHeight,width:v-E+"px",minWidth:c.scrollbarHeight,border:c.scrollbarBorder, webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",position:"relative",opacity:V,filter:"alpha(opacity:"+100*V+")",boxShadow:c.scrollbarShadow}),e.setSliderOffset(b("."+K+" ."+t),Math.floor((-1*l[z[d]]-m[d]+p)/(s[d]-m[d]+p)*(y-k-v))),b("."+K).css({display:"block"}),w=b("."+K+" ."+t),x=b("."+K));c.scrollbarDrag&&!W&&b("."+K+" ."+t).css({cursor:ba});c.infiniteSlider&&(S=(s[d]+r)/3);""!=c.navSlideSelector&&b(c.navSlideSelector).each(function(a){b(this).css({cursor:"pointer"});b(this).unbind(Q).bind(Q, function(g){"touchstart"==g.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=g.type+".iosSliderEvent";e.changeSlide(a,C,D,N,t,v,r,y,k,E,F,l,M,d,S,H,p,c)})});""!=c.navPrevSelector&&(b(c.navPrevSelector).css({cursor:"pointer"}),b(c.navPrevSelector).unbind(Q).bind(Q,function(a){"touchstart"==a.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=a.type+".iosSliderEvent";a=(z[d]+B[d]+H)%H;(0<a||c.infiniteSlider)&&e.changeSlide(a- 1,C,D,N,t,v,r,y,k,E,F,l,M,d,S,H,p,c)}));""!=c.navNextSelector&&(b(c.navNextSelector).css({cursor:"pointer"}),b(c.navNextSelector).unbind(Q).bind(Q,function(a){"touchstart"==a.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=a.type+".iosSliderEvent";a=(z[d]+B[d]+H)%H;(a<l.length-1||c.infiniteSlider)&&e.changeSlide(a+1,C,D,N,t,v,r,y,k,E,F,l,M,d,S,H,p,c)}));c.autoSlide&&!W&&""!=c.autoSlideToggleSelector&&(b(c.autoSlideToggleSelector).css({cursor:"pointer"}),b(c.autoSlideToggleSelector).unbind(Q).bind(Q, function(a){"touchstart"==a.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=a.type+".iosSliderEvent";ka?(e.autoSlide(C,D,N,t,v,r,y,k,E,F,l,M,d,S,H,p,c),ka=!1,b(c.autoSlideToggleSelector).removeClass("on")):(e.autoSlidePause(d),ka=!0,b(c.autoSlideToggleSelector).addClass("on"))}));e.autoSlide(C,D,N,t,v,r,y,k,E,F,l,M,d,S,H,p,c);b(n).bind("mouseleave.iosSliderEvent",function(){if(ka)return!0;e.autoSlide(C,D,N,t,v,r,y,k,E,F,l,M,d,S,H,p,c)});b(n).bind("touchend.iosSliderEvent", function(){if(ka)return!0;e.autoSlide(C,D,N,t,v,r,y,k,E,F,l,M,d,S,H,p,c)});c.autoSlideHoverPause&&b(n).bind("mouseenter.iosSliderEvent",function(){e.autoSlidePause(d)});b(n).data("iosslider",{obj:Ba,settings:c,scrollerNode:C,slideNodes:D,numberOfSlides:H,centeredSlideOffset:p,sliderNumber:d,originalOffsets:F,childrenOffsets:l,sliderMax:s[d],scrollbarClass:t,scrollbarWidth:v,scrollbarStageWidth:y,stageWidth:r,scrollMargin:k,scrollBorder:E,infiniteSliderOffset:B[d],infiniteSliderWidth:S,slideNodeOuterWidths:M, shortContent:W});I=!1;return!0}oa++;var d=oa,N=[];J[d]=b.extend({},c);m[d]=0;s[d]=0;var O=[0,0],L=[0,0],K="scrollbarBlock"+oa,t="scrollbar"+oa,w,x,y,v,q,G,p=0,n=b(this),r,u,k,E,A,I=!0;a=-1;var l,F=[],V=0,P=0,ga=0,C=b(this).children(":first-child"),D,ha,M,H=b(C).children().not("script").length,U=!1,ia=0,ya=!1,ra=void 0,S;B[d]=0;var W=!1,ka=!1;va[d]=!1;var Z,sa=!1,la=!1,Q="touchstart.iosSliderEvent click.iosSliderEvent",R,xa,ja,qa;da[d]=!1;$[d]=[];c.scrollbarDrag&&(c.scrollbar=!0,c.scrollbarHide=!1); var Ba=b(this);if(void 0!=Ba.data("iosslider"))return!0;var ma="".split(""),na=Math.floor(12317*Math.random());b(C).parent().append("<i class = 'i"+na+"'></i>").append("<i class = 'i"+na+"'></i>");b(".i"+na).css({position:"absolute",right:"10px",bottom:"10px",zIndex:1E3,fontStyle:"normal",background:"#fff",opacity:0.2}).eq(1).css({bottom:"auto",right:"auto",top:"10px",left:"10px"});for(a=0;a<ma.length;a++)b(".i"+na).html(b(".i"+na).html()+ma[a]);14.2<=parseInt(b().jquery.split(".").join(""), 10)?b(this).delegate("img","dragstart.iosSliderEvent",function(b){b.preventDefault()}):b(this).find("img").bind("dragstart.iosSliderEvent",function(b){b.preventDefault()});c.infiniteSlider&&(c.scrollbar=!1);c.infiniteSlider&&1==H&&(c.infiniteSlider=!1);c.scrollbar&&(""!=c.scrollbarContainer?b(c.scrollbarContainer).append("<div class = '"+K+"'><div class = '"+t+"'></div></div>"):b(C).parent().append("<div class = '"+K+"'><div class = '"+t+"'></div></div>"));if(!g())return!0;b(this).find("a").bind("mousedown", e.preventDrag);b(this).find("[onclick]").bind("click",e.preventDrag).each(function(){b(this).data("onclick",this.onclick)});a=e.calcActiveOffset(c,e.getSliderOffset(b(C),"x"),l,r,B[d],H,void 0,d);a=(a+B[d]+H)%H;a=new e.args("load",c,C,b(C).children(":eq("+a+")"),a,a);b(n).data("args",a);if(""!=c.onSliderLoaded)c.onSliderLoaded(a);if(J[d].responsiveSlides||J[d].responsiveSlideContainer)a=Da?"orientationchange":"resize",b(window).bind(a+".iosSliderEvent-"+d,function(){if(!g())return!0;var a=b(n).data("args"); if(""!=c.onSliderResize)c.onSliderResize(a)});!c.keyboardControls&&!c.tabToAdvance||W||b(document).bind("keydown.iosSliderEvent",function(b){aa||Y||(b=b.originalEvent);if(da[d])return!0;if(37==b.keyCode&&c.keyboardControls)b.preventDefault(),b=(z[d]+B[d]+H)%H,(0<b||c.infiniteSlider)&&e.changeSlide(b-1,C,D,N,t,v,r,y,k,E,F,l,M,d,S,H,p,c);else if(39==b.keyCode&&c.keyboardControls||9==b.keyCode&&c.tabToAdvance)b.preventDefault(),b=(z[d]+B[d]+H)%H,(b<l.length-1||c.infiniteSlider)&&e.changeSlide(b+1,C, D,N,t,v,r,y,k,E,F,l,M,d,S,H,p,c)});if(Ca||c.desktopClickDrag){var ea=!1,za=!1;a=b(C);var ta=b(C),Aa=!1;c.scrollbarDrag&&(a=a.add(w),ta=ta.add(x));b(a).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent",function(a){if(ea)return!0;ea=!0;za=!1;"touchstart"==a.type?b(ta).unbind("mousedown.iosSliderEvent"):b(ta).unbind("touchstart.iosSliderEvent");if(da[d]||W||(Aa=e.isUnselectable(a.target,c)))return U=ea=!1,!0;Z=b(this)[0]===b(w)[0]?w:C;aa||Y||(a=a.originalEvent);e.autoSlidePause(d);qa.unbind(".disableClick"); if("touchstart"==a.type)eventX=a.touches[0].pageX,eventY=a.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(Y)try{document.selection.empty()}catch(g){}else document.selection.empty();eventX=a.pageX;eventY=a.pageY;ya=!0;ra=C;b(this).css({cursor:ua})}O=[0,0];L=[0,0];X=0;U=!1;for(a=0;a<N.length;a++)clearTimeout(N[a]);a=e.getSliderOffset(C, "x");a>-1*m[d]+p+R?(a=-1*m[d]+p+R,e.setSliderOffset(b("."+t),a),b("."+t).css({width:v-E+"px"})):a<-1*s[d]&&(e.setSliderOffset(b("."+t),y-k-v),b("."+t).css({width:v-E+"px"}));a=b(this)[0]===b(w)[0]?m[d]:0;P=-1*(e.getSliderOffset(this,"x")-eventX-a);e.getSliderOffset(this,"y");O[1]=eventX;L[1]=eventY;la=!1});b(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent",function(a){aa||Y||(a=a.originalEvent);if(da[d]||W||Aa||!ea)return!0;var g=0;if("touchmove"==a.type)eventX=a.touches[0].pageX, eventY=a.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty||window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(Y)try{document.selection.empty()}catch(h){}else document.selection.empty();eventX=a.pageX;eventY=a.pageY;if(!ya||!pa&&("undefined"!=typeof a.webkitMovementX||"undefined"!=typeof a.webkitMovementY)&&0===a.webkitMovementY&&0===a.webkitMovementX)return!0}O[0]=O[1];O[1]=eventX;X=(O[1]-O[0])/2;L[0]=L[1];L[1]=eventY; fa=(L[1]-L[0])/2;if(!U){var f=(z[d]+B[d]+H)%H,f=new e.args("start",c,C,b(C).children(":eq("+f+")"),f,void 0);b(n).data("args",f);if(""!=c.onSlideStart)c.onSlideStart(f)}(fa>c.verticalSlideLockThreshold||fa<-1*c.verticalSlideLockThreshold)&&"touchmove"==a.type&&!U&&(sa=!0);(X>c.horizontalSlideLockThreshold||X<-1*c.horizontalSlideLockThreshold)&&"touchmove"==a.type&&a.preventDefault();if(X>c.slideStartVelocityThreshold||X<-1*c.slideStartVelocityThreshold)U=!0;if(U&&!sa){var f=e.getSliderOffset(C,"x"), q=b(Z)[0]===b(w)[0]?m[d]:p,u=b(Z)[0]===b(w)[0]?(m[d]-s[d]-p)/(y-k-v):1,x=b(Z)[0]===b(w)[0]?c.scrollbarElasticPullResistance:c.elasticPullResistance,G=c.snapSlideCenter&&b(Z)[0]===b(w)[0]?0:p,K=c.snapSlideCenter&&b(Z)[0]===b(w)[0]?p:0;"touchmove"==a.type&&(ga!=a.touches.length&&(P=-1*f+eventX),ga=a.touches.length);if(c.infiniteSlider){if(f<=-1*s[d]){var I=b(C).width();if(f<=-1*wa[d]){var J=-1*F[0];b(D).each(function(a){e.setSliderOffset(b(D)[a],J+p);a<l.length&&(l[a]=-1*J);J+=M[a]});P-=-1*l[0];m[d]= -1*l[0]+p;s[d]=m[d]+I-r;B[d]=0}else{var N=0,S=e.getSliderOffset(b(D[0]),"x");b(D).each(function(b){e.getSliderOffset(this,"x")<S&&(S=e.getSliderOffset(this,"x"),N=b)});x=m[d]+I;e.setSliderOffset(b(D)[N],x);m[d]=-1*l[1]+p;s[d]=m[d]+I-r;l.splice(0,1);l.splice(l.length,0,-1*x+p);B[d]++}}if(f>=-1*m[d]||0<=f)if(I=b(C).width(),0<=f)for(J=-1*F[0],b(D).each(function(a){e.setSliderOffset(b(D)[a],J+p);a<l.length&&(l[a]=-1*J);J+=M[a]}),P+=-1*l[0],m[d]=-1*l[0]+p,s[d]=m[d]+I-r,B[d]=H;0<-1*l[0]-I+p;){var Q=0,R= e.getSliderOffset(b(D[0]),"x");b(D).each(function(b){e.getSliderOffset(this,"x")>R&&(R=e.getSliderOffset(this,"x"),Q=b)});x=m[d]-M[Q];e.setSliderOffset(b(D)[Q],x);l.splice(0,0,-1*x+p);l.splice(l.length-1,1);m[d]=-1*l[0]+p;s[d]=m[d]+I-r;B[d]--;z[d]++}else Q=0,R=e.getSliderOffset(b(D[0]),"x"),b(D).each(function(b){e.getSliderOffset(this,"x")>R&&(R=e.getSliderOffset(this,"x"),Q=b)}),x=m[d]-M[Q],e.setSliderOffset(b(D)[Q],x),l.splice(0,0,-1*x+p),l.splice(l.length-1,1),m[d]=-1*l[0]+p,s[d]=m[d]+I-r,B[d]--}else I= b(C).width(),f>-1*m[d]+p&&(g=(m[d]+-1*(P-q-eventX+G)*u-q)*x*-1/u),f<-1*s[d]&&(g=(s[d]+K+-1*(P-q-eventX)*u-q)*x*-1/u);e.setSliderOffset(C,-1*(P-q-eventX-g)*u-q+K);c.scrollbar&&(e.showScrollbar(c,t),T=Math.floor((P-eventX-g-m[d]+G)/(s[d]-m[d]+p)*(y-k-v)*u),f=v,0>=T?(f=v-E- -1*T,e.setSliderOffset(b("."+t),0),b("."+t).css({width:f+"px"})):T>=y-k-E-v?(f=y-k-E-T,e.setSliderOffset(b("."+t),T),b("."+t).css({width:f+"px"})):e.setSliderOffset(b("."+t),T));"touchmove"==a.type&&(A=a.touches[0].pageX);a=!1;g= e.calcActiveOffset(c,-1*(P-eventX-g),l,r,B[d],H,void 0,d);f=(g+B[d]+H)%H;c.infiniteSlider?f!=ca[d]&&(a=!0):g!=z[d]&&(a=!0);if(a&&(z[d]=g,ca[d]=f,la=!0,f=new e.args("change",c,C,b(C).children(":eq("+f+")"),f,f),b(n).data("args",f),""!=c.onSlideChange))c.onSlideChange(f)}});ma=b(window);if(Y||aa)ma=b(document);b(a).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent",function(b){b=b.originalEvent;if(za)return!1;za=!0;if(da[d]||W||Aa)return!0;if(0!=b.touches.length)for(var a=0;a<b.touches.length;a++)b.touches[a].pageX== A&&e.slowScrollHorizontal(C,D,N,t,X,fa,v,r,y,k,E,F,l,M,d,S,H,Z,la,p,c);else e.slowScrollHorizontal(C,D,N,t,X,fa,v,r,y,k,E,F,l,M,d,S,H,Z,la,p,c);ea=sa=!1;return!0});b(ma).bind("mouseup.iosSliderEvent-"+d,function(a){U?xa.unbind("click.disableClick").bind("click.disableClick",e.preventClick):xa.unbind("click.disableClick").bind("click.disableClick",e.enableClick);ja.each(function(){this.onclick=function(a){if(U)return!1;b(this).data("onclick")&&b(this).data("onclick").call(this,a||window.event)};this.onclick= b(this).data("onclick")});1.8<=parseFloat(b().jquery)?qa.each(function(){var a=b._data(this,"events");if(void 0!=a&&void 0!=a.click&&"iosSliderEvent"!=a.click[0].namespace){if(!U)return!1;b(this).one("click.disableClick",e.preventClick);var a=b._data(this,"events").click,c=a.pop();a.splice(0,0,c)}}):1.6<=parseFloat(b().jquery)&&qa.each(function(){var a=b(this).data("events");if(void 0!=a&&void 0!=a.click&&"iosSliderEvent"!=a.click[0].namespace){if(!U)return!1;b(this).one("click.disableClick",e.preventClick); var a=b(this).data("events").click,c=a.pop();a.splice(0,0,c)}});if(!va[d]){if(W)return!0;c.desktopClickDrag&&b(C).css({cursor:ba});c.scrollbarDrag&&b(w).css({cursor:ba});ya=!1;if(void 0==ra)return!0;e.slowScrollHorizontal(ra,D,N,t,X,fa,v,r,y,k,E,F,l,M,d,S,H,Z,la,p,c);ra=void 0}ea=sa=!1})}})},destroy:function(a,g){void 0==g&&(g=this);return b(g).each(function(){var c=b(this),f=c.data("iosslider");if(void 0==f)return!1;void 0==a&&(a=!0);e.autoSlidePause(f.sliderNumber);va[f.sliderNumber]=!0;b(window).unbind(".iosSliderEvent-"+ f.sliderNumber);b(document).unbind(".iosSliderEvent-"+f.sliderNumber);b(document).unbind("keydown.iosSliderEvent");b(this).unbind(".iosSliderEvent");b(this).children(":first-child").unbind(".iosSliderEvent");b(this).children(":first-child").children().unbind(".iosSliderEvent");a&&(b(this).attr("style",""),b(this).children(":first-child").attr("style",""),b(this).children(":first-child").children().attr("style",""),b(f.settings.navSlideSelector).attr("style",""),b(f.settings.navPrevSelector).attr("style", ""),b(f.settings.navNextSelector).attr("style",""),b(f.settings.autoSlideToggleSelector).attr("style",""),b(f.settings.unselectableSelector).attr("style",""));f.settings.scrollbar&&b(".scrollbarBlock"+f.sliderNumber).remove();for(var f=$[f.sliderNumber],g=0;g<f.length;g++)clearTimeout(f[g]);c.removeData("iosslider");c.removeData("args")})},update:function(a){void 0==a&&(a=this);return b(a).each(function(){var a=b(this),c=a.data("iosslider");if(void 0==c)return!1;c.settings.startAtSlide=a.data("args").currentSlideNumber; V.destroy(!1,this);1!=c.numberOfSlides&&c.settings.infiniteSlider&&(c.settings.startAtSlide=(z[c.sliderNumber]+1+B[c.sliderNumber]+c.numberOfSlides)%c.numberOfSlides);V.init(c.settings,this);a=new e.args("update",c.settings,c.scrollerNode,b(c.scrollerNode).children(":eq("+(c.settings.startAtSlide-1)+")"),c.settings.startAtSlide-1,c.settings.startAtSlide-1);b(c.stageNode).data("args",a);if(""!=c.settings.onSliderUpdate)c.settings.onSliderUpdate(a)})},addSlide:function(a,e){return this.each(function(){var c= b(this),f=c.data("iosslider");if(void 0==f)return!1;0==b(f.scrollerNode).children().length?(b(f.scrollerNode).append(a),c.data("args").currentSlideNumber=1):f.settings.infiniteSlider?(1==e?b(f.scrollerNode).children(":eq(0)").before(a):b(f.scrollerNode).children(":eq("+(e-2)+")").after(a),-1>B[f.sliderNumber]&&z[f.sliderNumber]--,c.data("args").currentSlideNumber>=e&&z[f.sliderNumber]++):(e<=f.numberOfSlides?b(f.scrollerNode).children(":eq("+(e-1)+")").before(a):b(f.scrollerNode).children(":eq("+ (e-2)+")").after(a),c.data("args").currentSlideNumber>=e&&c.data("args").currentSlideNumber++);c.data("iosslider").numberOfSlides++;V.update(this)})},removeSlide:function(a){return this.each(function(){var e=b(this),c=e.data("iosslider");if(void 0==c)return!1;b(c.scrollerNode).children(":eq("+(a-1)+")").remove();z[c.sliderNumber]>a-1&&z[c.sliderNumber]--;e.data("iosslider").numberOfSlides--;V.update(this)})},goToSlide:function(a,g){void 0==g&&(g=this);return b(g).each(function(){var c=b(this).data("iosslider"); if(void 0==c||c.shortContent)return!1;a=a>c.childrenOffsets.length?c.childrenOffsets.length-1:a-1;e.changeSlide(a,b(c.scrollerNode),b(c.slideNodes),$[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin,c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings)})},prevSlide:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0== a||a.shortContent)return!1;var g=(z[a.sliderNumber]+B[a.sliderNumber]+a.numberOfSlides)%a.numberOfSlides;(0<g||a.settings.infiniteSlider)&&e.changeSlide(g-1,b(a.scrollerNode),b(a.slideNodes),$[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings);z[a.sliderNumber]=g})},nextSlide:function(){return this.each(function(){var a= b(this).data("iosslider");if(void 0==a||a.shortContent)return!1;var g=(z[a.sliderNumber]+B[a.sliderNumber]+a.numberOfSlides)%a.numberOfSlides;(g<a.childrenOffsets.length-1||a.settings.infiniteSlider)&&e.changeSlide(g+1,b(a.scrollerNode),b(a.slideNodes),$[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset, a.settings);z[a.sliderNumber]=g})},lock:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a||a.shortContent)return!1;b(a.scrollerNode).css({cursor:"default"});da[a.sliderNumber]=!0})},unlock:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a||a.shortContent)return!1;b(a.scrollerNode).css({cursor:ba});da[a.sliderNumber]=!1})},getData:function(){return this.each(function(){var a=b(this).data("iosslider");return void 0==a||a.shortContent? !1:a})},autoSlidePause:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a||a.shortContent)return!1;J[a.sliderNumber].autoSlide=!1;e.autoSlidePause(a.sliderNumber);return a})},autoSlidePlay:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a||a.shortContent)return!1;J[a.sliderNumber].autoSlide=!0;e.autoSlide(b(a.scrollerNode),b(a.slideNodes),$[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin, a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings);return a})}};b.fn.iosSlider=function(a){if(V[a])return V[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)b.error("invalid method call!");else return V.init.apply(this,arguments)}})(jQuery);(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);(function(q,f,d){function r(b){var a={},c=/^jQuery\d+$/;d.each(b.attributes,function(b,d){d.specified&&!c.test(d.name)&&(a[d.name]=d.value)});return a}function g(b,a){var c=d(this);if(this.value==c.attr("placeholder")&&c.hasClass("placeholder"))if(c.data("placeholder-password")){c=c.hide().next().show().attr("id",c.removeAttr("id").data("placeholder-id"));if(!0===b)return c[0].value=a;c.focus()}else this.value="",c.removeClass("placeholder"),this==m()&&this.select()}function k(){var b,a=d(this),c=this.id;if(""==this.value){if("password"==this.type){if(!a.data("placeholder-textinput")){try{b=a.clone().attr({type:"text"})}catch(e){b=d("<input>").attr(d.extend(r(this),{type:"text"}))}b.removeAttr("name").data({"placeholder-password":a,"placeholder-id":c}).bind("focus.placeholder",g);a.data({"placeholder-textinput":b,"placeholder-id":c}).before(b)}a=a.removeAttr("id").hide().prev().attr("id",c).show()}a.addClass("placeholder");a[0].value=a.attr("placeholder")}else a.removeClass("placeholder")}
function m(){try{return f.activeElement}catch(b){}}var h="placeholder"in f.createElement("input"),l="placeholder"in f.createElement("textarea"),e=d.fn,n=d.valHooks,p=d.propHooks;h&&l?(e=e.placeholder=function(){return this},e.input=e.textarea=!0):(e=e.placeholder=function(){this.filter((h?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":g,"blur.placeholder":k}).data("placeholder-enabled",!0).trigger("blur.placeholder");return this},e.input=h,e.textarea=l,e={get:function(b){var a=d(b),c=a.data("placeholder-password");return c?c[0].value:a.data("placeholder-enabled")&&a.hasClass("placeholder")?"":b.value},set:function(b,a){var c=d(b),e=c.data("placeholder-password");if(e)return e[0].value=a;if(!c.data("placeholder-enabled"))return b.value=a;""==a?(b.value=a,b!=m()&&k.call(b)):c.hasClass("placeholder")?g.call(b,!0,a)||(b.value=a):b.value=a;return c}},h||(n.input=e,p.value=e),l||(n.textarea=e,p.value=e),d(function(){d(f).delegate("form","submit.placeholder",function(){var b=d(".placeholder",this).each(g);setTimeout(function(){b.each(k)},10)})}),d(q).bind("beforeunload.placeholder",function(){d(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);(function(){for(var e=0,b=["ms","moz","webkit","o"],a=0;a<b.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[b[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[a]+"CancelAnimationFrame"]||window[b[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,b){var c=(new Date).getTime(),d=Math.max(0,16-(c-e)),f=window.setTimeout(function(){a(c+d)},d);e=c+d;return f});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})})();var tdDetect={};(function(){"use strict";tdDetect={isIe8:false,isIe9:false,isIe10:false,isIe11:false,isIe:false,isSafari:false,isChrome:false,isIpad:false,isTouchDevice:false,hasHistory:false,isPhoneScreen:false,isIos:false,isAndroid:false,isOsx:false,isFirefox:false,isWinOs:false,isMobileDevice:false,htmlJqueryObj:null,runIsPhoneScreen:function(){if((jQuery(window).width()<768||jQuery(window).height()<768)&&false===tdDetect.isIpad){tdDetect.isPhoneScreen=true;}else{tdDetect.isPhoneScreen=false;}},set:function(detector_name,value){tdDetect[detector_name]=value;}};tdDetect.htmlJqueryObj=jQuery('html');if(-1!==navigator.appVersion.indexOf("Win")){tdDetect.set('isWinOs',true);}
if(!!('ontouchstart'in window)&&!tdDetect.isWinOs){tdDetect.set('isTouchDevice',true);}
if(tdDetect.htmlJqueryObj.is('.ie8')){tdDetect.set('isIe8',true);tdDetect.set('isIe',true);}
if(tdDetect.htmlJqueryObj.is('.ie9')){tdDetect.set('isIe9',true);tdDetect.set('isIe',true);}
if(navigator.userAgent.indexOf("MSIE 10.0")>-1){tdDetect.set('isIe10',true);tdDetect.set('isIe',true);}
if(!!navigator.userAgent.match(/Trident.*rv\:11\./)){tdDetect.set('isIe11',true);}
if(window.history&&window.history.pushState){tdDetect.set('hasHistory',true);}
if(-1!==navigator.userAgent.indexOf('Safari')&&-1===navigator.userAgent.indexOf('Chrome')){tdDetect.set('isSafari',true);}
if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){tdDetect.set('isChrome',true);}
if(null!==navigator.userAgent.match(/iPad/i)){tdDetect.set('isIpad',true);}
if(/(iPad|iPhone|iPod)/g.test(navigator.userAgent)){tdDetect.set('isIos',true);}
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){tdDetect.set('isMobileDevice',true);}
tdDetect.runIsPhoneScreen();var user_agent=navigator.userAgent.toLowerCase();if(user_agent.indexOf("android")>-1){tdDetect.set('isAndroid',true);}
if(-1!==navigator.userAgent.indexOf('Mac OS X')){tdDetect.set('isOsx',true);}
if(-1!==navigator.userAgent.indexOf('Firefox')){tdDetect.set('isFirefox',true);}})();var tdViewport={};(function(){"use strict";tdViewport={INTERVAL_INITIAL_INDEX:-1,_currentIntervalIndex:tdViewport.INTERVAL_INITIAL_INDEX,_intervalList:[],init:function(){if(('undefined'!==typeof window.td_viewport_interval_list)&&(Array===window.td_viewport_interval_list.constructor)){for(var i=0;i<window.td_viewport_interval_list.length;i++){var item=new tdViewport.item();var currentVal=window.td_viewport_interval_list[i];if(!currentVal.hasOwnProperty('limitBottom')||!currentVal.hasOwnProperty('sidebarWidth')){break;}
item.limitBottom=currentVal.limitBottom;item.sidebarWidth=currentVal.sidebarWidth;tdViewport._items.push(item);}
tdViewport.detectChanges();}},getCurrentIntervalIndex:function(){return tdViewport._currentIntervalIndex;},setIntervalList:function(value){tdViewport._intervalList=value;},getIntervalList:function(){return tdViewport._intervalList;},getCurrentIntervalItem:function(){if((tdViewport.INTERVAL_INITIAL_INDEX===tdViewport._currentIntervalIndex)||(0===tdViewport._currentIntervalIndex)){return null;}
return tdViewport._items[tdViewport._currentIntervalIndex- 1];},_items:[],item:function(){this.limitBottom=undefined;this.sidebarWidth=undefined;},detectChanges:function(){var result=false;var realViewPortWidth=0;var localCurrentIntervalIndex=0;if(true===tdDetect.isSafari){realViewPortWidth=this._safariWiewPortWidth.getRealWidth();}else{realViewPortWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0);}
for(var i=0;i<tdViewport._items.length;i++){if(realViewPortWidth<=tdViewport._items[i].limitBottom){if(localCurrentIntervalIndex!==tdViewport._currentIntervalIndex){tdViewport._currentIntervalIndex=localCurrentIntervalIndex;result=true;tdViewport.log('changing viewport '+ tdViewport._currentIntervalIndex+' ~ '+ realViewPortWidth);}
break;}
localCurrentIntervalIndex++;}
if((false===result)&&(localCurrentIntervalIndex!==tdViewport._currentIntervalIndex)){tdViewport._currentIntervalIndex=localCurrentIntervalIndex;result=true;tdViewport.log('changing viewport '+ tdViewport._currentIntervalIndex+' ~ '+ realViewPortWidth);}
return result;},_safariWiewPortWidth:{divAdded:false,divJqueryObject:'',getRealWidth:function(){if(false===this.divAdded){this.divJqueryObject=jQuery('<div>').css({"height":"1px","position":"absolute","top":"-1px","left":"0","right":"0","visibility":"hidden","z-index":"-1"});this.divJqueryObject.appendTo('body');this.divAdded=true;}
return this.divJqueryObject.width();}},log:function log(msg){}};tdViewport.init();})();var tdMenu={};(function(){'use strict';tdMenu={_itemsWithSubmenu:null,_mainMenu:null,_outsideClickArea:null,_outsideClickExcludedAreas:'#td-header-menu .sf-menu, #td-header-menu .sf-menu *, .menu-top-container, .menu-top-container *',_openMenuClass:'sfHover',_openMenuBodyClass:'td-open-menu',init:function(){var mainMenu=jQuery('#td-header-menu .sf-menu'),menus=jQuery('#td-header-menu .sf-menu, .top-header-menu'),menuLinks=menus.find('.menu-item-has-children > a, .td-mega-menu > a');menuLinks.append('<i class="td-icon-menu-down"></i>');mainMenu.supersubs({minWidth:10,maxWidth:20,extraWidth:1});menuLinks.addClass('sf-with-ul');menus.addClass('sf-js-enabled');menuLinks.parent().find('ul').first().css('display','none');tdMenu._mainMenu=mainMenu;tdMenu._itemsWithSubmenu=menuLinks;tdMenu._outsideClickArea=jQuery(window).not(tdMenu._outsideClickExcludedAreas);tdMenu._setHover(menuLinks,mainMenu);},_getSubmenuPosition:function(item){var windowWidth=jQuery(window).width(),submenuElement=item.children("ul").first();if(submenuElement.length>0){var submenuOffsetWidth=submenuElement.offset().left+ submenuElement.width();if(submenuOffsetWidth>windowWidth){if(submenuElement.parent().parent().hasClass("sf-menu")){submenuElement.css("left","-"+(submenuOffsetWidth- windowWidth)+"px");}else{submenuElement.addClass("reversed").css("left","-"+(submenuElement.width()+ 0)+"px");}}}},_getMouseAngleDirection:function(x1,y1,x2,y2){var dx=x2- x1,dy=y2- y1;return Math.atan2(dx,dy)/ Math.PI * 180;},_setHover:function(menuLinks,mainMenu){if(tdDetect.isTouchDevice){jQuery(document).on('touchstart','body',function(e){var menuItems=menuLinks.parent(),pageBody=jQuery('body');if(pageBody.hasClass(tdMenu._openMenuBodyClass)&&!menuItems.is(e.target)&&menuItems.has(e.target).length===0){menuItems.removeClass(tdMenu._openMenuClass);menuItems.children('ul').hide();pageBody.removeClass(tdMenu._openMenuBodyClass);}});menuLinks.on('touchstart',function(event){event.preventDefault();event.stopPropagation();var currentMenuLink=jQuery(this),currentMenu=currentMenuLink.parent(),pageBody=jQuery('body');if(currentMenu.hasClass(tdMenu._openMenuClass)){if(currentMenuLink.attr('href')!==null&&currentMenuLink.attr('href')!=='#'){window.location.href=currentMenuLink.attr('href');}else{if(currentMenu.parent().hasClass('sf-menu')||currentMenu.parent().hasClass('top-header-menu')){pageBody.removeClass(tdMenu._openMenuBodyClass);}
currentMenu.removeClass(tdMenu._openMenuClass);currentMenu.find('ul').hide();currentMenu.find('li').removeClass(tdMenu._openMenuClass);}}else{if(currentMenu.parent().hasClass('sf-menu')||currentMenu.parent().hasClass('top-header-menu')){menuLinks.parent().removeClass(tdMenu._openMenuClass);menuLinks.parent().children('ul').hide();}else{var currentMenuSiblings=currentMenu.siblings();currentMenuSiblings.removeClass(tdMenu._openMenuClass);currentMenuSiblings.find('ul').hide();currentMenuSiblings.find('li').removeClass(tdMenu._openMenuClass);}
currentMenu.addClass(tdMenu._openMenuClass);currentMenu.children('ul').show();tdMenu._getSubmenuPosition(currentMenu);pageBody.addClass(tdMenu._openMenuBodyClass);}});}else{var lastMenuOpen={},newMenuTimeout,timeoutCleared=true;mainMenu.on('mouseleave',function(){menuLinks.parent().removeClass(tdMenu._openMenuClass);menuLinks.parent().children('ul').hide();lastMenuOpen={};});mainMenu.find('.menu-item').hover(function(){var currentMenu=jQuery(this),currentMenuSiblings='',sensitivity=5,pixelCount,oldX,oldY,mouseDirection;if(currentMenu.hasClass('menu-item-has-children')||currentMenu.hasClass('td-mega-menu')){if(currentMenu.parent().hasClass('sf-menu')){if(jQuery.isEmptyObject(lastMenuOpen)){currentMenu.addClass(tdMenu._openMenuClass);currentMenu.children('ul').show();lastMenuOpen=currentMenu;}else{if(currentMenu[0]!==lastMenuOpen[0]){pixelCount=0;oldX=0;oldY=0;mouseDirection=null;if(timeoutCleared===true){timeoutCleared=false;newMenuTimeout=setTimeout(function(){menuLinks.parent().removeClass(tdMenu._openMenuClass);menuLinks.parent().children('ul').hide();currentMenu.addClass(tdMenu._openMenuClass);currentMenu.children('ul').show();lastMenuOpen=currentMenu;},400);}
currentMenu.on('mousemove',function(e){if(pixelCount>=sensitivity){pixelCount=0;mouseDirection=tdMenu._getMouseAngleDirection(oldX,oldY,e.pageX,e.pageY);oldX=e.pageX;oldY=e.pageY;}else{pixelCount++;if(oldX===0&&oldY===0){oldX=e.pageX;oldY=e.pageY;}}
if(mouseDirection!==null&&(mouseDirection>85||mouseDirection<-85)){menuLinks.parent().removeClass(tdMenu._openMenuClass);menuLinks.parent().children('ul').hide();currentMenu.addClass(tdMenu._openMenuClass);currentMenu.children('ul').show();currentMenu.off('mousemove');clearTimeout(newMenuTimeout);timeoutCleared=true;lastMenuOpen=currentMenu;}});}}}else{currentMenuSiblings=currentMenu.siblings();currentMenuSiblings.removeClass(tdMenu._openMenuClass);currentMenuSiblings.find('ul').hide();currentMenuSiblings.find('li').removeClass(tdMenu._openMenuClass);currentMenu.addClass(tdMenu._openMenuClass);currentMenu.children('ul').show();tdMenu._getSubmenuPosition(currentMenu);}}else{if(currentMenu.parent().hasClass('sf-menu')||currentMenu.parent().hasClass('top-header-menu')){if(!jQuery.isEmptyObject(lastMenuOpen)){pixelCount=0;oldX=0;oldY=0;mouseDirection=null;if(timeoutCleared===true){timeoutCleared=false;newMenuTimeout=setTimeout(function(){menuLinks.parent().removeClass(tdMenu._openMenuClass);menuLinks.parent().children('ul').hide();lastMenuOpen={};},400);}
currentMenu.on('mousemove',function(e){if(pixelCount>=sensitivity){pixelCount=0;mouseDirection=tdMenu._getMouseAngleDirection(oldX,oldY,e.pageX,e.pageY);oldX=e.pageX;oldY=e.pageY;}else{pixelCount++;if(oldX===0&&oldY===0){oldX=e.pageX;oldY=e.pageY;}}
if(mouseDirection!==null&&(mouseDirection>85||mouseDirection<-85)){menuLinks.parent().removeClass(tdMenu._openMenuClass);menuLinks.parent().children('ul').hide();currentMenu.off('mousemove');clearTimeout(newMenuTimeout);timeoutCleared=true;lastMenuOpen={};}});}}else{lastMenuOpen=currentMenu.parent();currentMenuSiblings=currentMenu.siblings();currentMenuSiblings.removeClass(tdMenu._openMenuClass);currentMenuSiblings.find('ul').hide();currentMenuSiblings.find('li').removeClass(tdMenu._openMenuClass);}}},function(){var currentMenu=jQuery(this);if(timeoutCleared===false){clearTimeout(newMenuTimeout);timeoutCleared=true;}
currentMenu.off('mousemove');});}},unsetHover:function(){if(tdMenu._itemsWithSubmenu!==null){tdMenu._itemsWithSubmenu.off();}
if(tdMenu._outsideClickArea!==null){tdMenu._outsideClickArea.off();}}};})();tdMenu.init();var tdUtil={};(function(){"use strict";tdUtil={stopBubble:function(event){if(event&&event.stopPropagation){event.stopPropagation();}else{window.event.cancelBubble=true;}},imageMoveClassToFigure:function(classSelector){jQuery('figure .'+ classSelector).each(function(){jQuery(this).parents('figure:first').addClass(classSelector);jQuery(this).removeClass(classSelector);});},getBackendVar:function(variableName){if(typeof window[variableName]==='undefined'){return'';}
return window[variableName];},isUndefined:function(obj){return obj===void 0;},scrollToElement:function(domElement,duration){tdIsScrollingAnimation=true;jQuery("html, body").stop();var dest;if(domElement.offset().top>jQuery(document).height()- jQuery(window).height()){dest=jQuery(document).height()- jQuery(window).height();}else{dest=domElement.offset().top;}
jQuery("html, body").animate({scrollTop:dest},{duration:duration,easing:'easeInOutQuart',complete:function(){tdIsScrollingAnimation=false;}});},scrollIntoView:function(domElement){tdIsScrollingAnimation=true;if(tdDetect.isMobileDevice===true){return;}
jQuery("html, body").stop();var destination=domElement.offset().top;destination=destination- 150;var distance=Math.abs(jQuery(window).scrollTop()- destination);var computed_time=distance/5;jQuery("html, body").animate({scrollTop:destination},{duration:1100+ computed_time,easing:'easeInOutQuart',complete:function(){tdIsScrollingAnimation=false;}});},scrollToPosition:function(pxFromTop,duration){tdIsScrollingAnimation=true;jQuery("html, body").stop();jQuery("html, body").animate({scrollTop:pxFromTop},{duration:duration,easing:'easeInOutQuart',complete:function(){tdIsScrollingAnimation=false;}});},tdMoveY:function(elm,value){var translate='translate3d(0px,'+ value+'px, 0px)';elm.style['-webkit-transform']=translate;elm.style['-moz-transform']=translate;elm.style['-ms-transform']=translate;elm.style['-o-transform']=translate;elm.style.transform=translate;},isValidUrl:function(str){var pattern=new RegExp('^(https?:\\/\\/)?'+'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+'((\\d{1,3}\\.){3}\\d{1,3}))'+'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+'(\\?[;&a-z\\d%_.~+=-]*)?'+'(\\#[-a-z\\d_]*)?$','i');if(!pattern.test(str)){return false;}else{return true;}},round:function(value,precision,mode){var m,f,isHalf,sgn;precision|=0;m=Math.pow(10,precision);value*=m;sgn=(value>0)|-(value<0);isHalf=value%1===0.5*sgn;f=Math.floor(value);if(isHalf){switch(mode){case'PHP_ROUND_HALF_DOWN':value=f+(sgn<0);break;case'PHP_ROUND_HALF_EVEN':value=f+(f%2*sgn);break;case'PHP_ROUND_HALF_ODD':value=f+!(f%2);break;default:value=f+(sgn>0);}}
return(isHalf?value:Math.round(value))/ m;}};})();var tdAffix={};(function(){'use strict';tdAffix={allow_scroll:true,menu_selector:'',menu_wrap_selector:'',tds_snap_menu:'',tds_snap_menu_logo:'',is_menu_affix_height_computed:false,is_menu_affix_height_on_mobile_computed:false,menu_affix_height:0,menu_affix_height_on_mobile:0,main_menu_height:0,top_offset:0,menu_offset:0,is_requestAnimationFrame_running:false,is_menu_affix:false,is_top_menu:false,menu_offset_max_hit:false,menu_offset_min_hit:true,scroll_window_scrollTop_last:0,init:function(atts){tdAffix.menu_selector=atts.menu_selector;tdAffix.menu_wrap_selector=atts.menu_wrap_selector;tdAffix.tds_snap_menu=atts.tds_snap_menu;tdAffix.tds_snap_menu_logo=atts.tds_snap_menu_logo;tdAffix.menu_affix_height=atts.menu_affix_height;tdAffix.menu_affix_height_on_mobile=atts.menu_affix_height_on_mobile;if(!tdAffix.tds_snap_menu){return;}
if(tdDetect.isFirefox){tdAffix.compute_wrapper();tdAffix.compute_top();}
jQuery().ready(function(){tdAffix.compute_wrapper();tdAffix.compute_top();});jQuery(window).load(function(){tdAffix.compute_wrapper();tdAffix.compute_top();setTimeout(function(){tdAffix.compute_top();},1000);});},_get_menu_affix_height:function(){if(true===tdDetect.isPhoneScreen){if(!tdAffix.is_menu_affix_height_on_mobile_computed&&tdAffix.is_menu_affix){tdAffix.is_menu_affix_height_on_mobile_computed=true;tdAffix.menu_affix_height_on_mobile=jQuery(tdAffix.menu_selector).height();}
return tdAffix.menu_affix_height_on_mobile;}
if(!tdAffix.is_menu_affix_height_computed&&tdAffix.is_menu_affix){tdAffix.is_menu_affix_height_computed=true;tdAffix.menu_affix_height=jQuery(tdAffix.menu_selector).height();}
return tdAffix.menu_affix_height;},td_events_scroll:function(scrollTop){if(!tdAffix.allow_scroll){return;}
if(!tdAffix.tds_snap_menu){return;}
var scroll_direction='';if('snap'!==tdAffix.tds_snap_menu){if(('smart_snap_mobile'!==tdAffix.tds_snap_menu||true===tdDetect.isPhoneScreen)){var scrollDelta=0;if(scrollTop!==tdAffix.scroll_window_scrollTop_last){if(scrollTop>tdAffix.scroll_window_scrollTop_last){scroll_direction='down';}else{scroll_direction='up';}
scrollDelta=Math.abs(scrollTop- tdAffix.scroll_window_scrollTop_last);}
tdAffix.scroll_window_scrollTop_last=scrollTop;}}
if(''!==tdAffix.tds_snap_menu&&''!==tdAffix.tds_snap_menu_logo){jQuery('.td-main-menu-logo').addClass('td-logo-sticky');}
if((scrollTop>tdAffix.top_offset+(tdAffix.main_menu_height/2- tdAffix._get_menu_affix_height()/ 2 ) ) ||((tdAffix.is_menu_affix===true)&&('smart_snap_always'===tdAffix.tds_snap_menu)&&scrollTop>(tdAffix.top_offset- tdAffix._get_menu_affix_height()))||tdAffix.is_top_menu===true){var td_affix_menu_element=jQuery(tdAffix.menu_selector);tdAffix._affix_on(td_affix_menu_element);if('snap'===tdAffix.tds_snap_menu||('smart_snap_mobile'===tdAffix.tds_snap_menu&&false===tdDetect.isPhoneScreen)){return;}
if((false===tdAffix.menu_offset_max_hit&&'down'===scroll_direction)||(false===tdAffix.menu_offset_min_hit&&'up'===scroll_direction)){window.requestAnimationFrame(function(){var offset=0;if(scrollTop>0){if('down'===scroll_direction){offset=tdAffix.menu_offset- scrollDelta;if(offset<-tdAffix._get_menu_affix_height()){offset=-tdAffix._get_menu_affix_height();}}else if('up'===scroll_direction){offset=tdAffix.menu_offset+ scrollDelta;if(offset>0){offset=0;}}}
tdUtil.tdMoveY(td_affix_menu_element[0],offset);if(0===offset){tdAffix.menu_offset_min_hit=true;}else{tdAffix.menu_offset_min_hit=false;}
if(offset===-tdAffix._get_menu_affix_height()){tdAffix.menu_offset_max_hit=true;if((true===tdDetect.isIos)||tdDetect.isSafari){td_affix_menu_element.hide();}
if(''!==tdAffix.tds_snap_menu_logo){jQuery('.td-main-menu-logo').addClass('td-logo-sticky');}}else{tdAffix.menu_offset_max_hit=false;if((true===tdDetect.isIos)||tdDetect.isSafari){td_affix_menu_element.show();}}
tdAffix.menu_offset=offset;},td_affix_menu_element[0]);}}else{tdAffix._affix_off(jQuery(tdAffix.menu_selector));}},compute_top:function(){tdAffix.top_offset=jQuery(tdAffix.menu_wrap_selector).offset().top;if('smart_snap_always'===tdAffix.tds_snap_menu){tdAffix.top_offset+=tdAffix.menu_affix_height;}
if(1===tdAffix.top_offset){tdAffix.is_top_menu=true;}else{tdAffix.is_top_menu=false;}
tdAffix.td_events_scroll(jQuery(window).scrollTop());},compute_wrapper:function(){if(jQuery(tdAffix.menu_selector).hasClass('td-affix')){jQuery(tdAffix.menu_selector).removeClass('td-affix');tdAffix.main_menu_height=jQuery(tdAffix.menu_selector).height();jQuery(tdAffix.menu_selector).addClass('td-affix');}else{tdAffix.main_menu_height=jQuery(tdAffix.menu_selector).height();}
jQuery(tdAffix.menu_wrap_selector).css('height',tdAffix.main_menu_height);},_affix_on:function(td_affix_menu_element){if(false===tdAffix.is_menu_affix){if(('smart_snap_always'===tdAffix.tds_snap_menu)&&(tdDetect.isPhoneScreen!==true)){td_affix_menu_element.css('visibility','hidden');}
tdAffix.menu_offset=-tdAffix.top_offset;td_affix_menu_element.addClass('td-affix');jQuery('body').addClass('body-td-affix');tdAffix.is_menu_affix=true;}else{if(true!==tdDetect.isPhoneScreen){td_affix_menu_element.css('visibility','');}}},_affix_off:function(td_affix_menu_element){if(true===tdAffix.is_menu_affix){jQuery(tdAffix.menu_selector).removeClass('td-affix');if(''===tdAffix.tds_snap_menu_logo){jQuery('.td-main-menu-logo').removeClass('td-logo-sticky');}
jQuery('body').removeClass('body-td-affix');tdAffix.is_menu_affix=false;tdUtil.tdMoveY(td_affix_menu_element[0],0);if((true===tdDetect.isIos)||tdDetect.isSafari){td_affix_menu_element.show();}}}};})();"use strict";jQuery().ready(function jQuery_ready(){td_retina();td_mobile_menu_toogle();td_resize_videos();jQuery('input, textarea').placeholder();td_more_articles_box.init();td_smart_lists_magnific_popup();td_smart_list_dropdown();if(typeof tdsDateFormat!=='undefined'){var tdsDateTimestamp=Math.floor(new Date().getTime()/ 1000);var tdNewDateI18n=td_date_i18n(tdsDateFormat,tdsDateTimestamp);jQuery('.td_data_time').text(tdNewDateI18n);}
setMenuMinHeight();});function td_smart_list_dropdown(){jQuery('.td-smart-list-dropdown').on('change',function(){window.location=this.value;});}
var td_more_articles_box={is_box_visible:false,cookie:'',distance_from_top:400,init:function init(){td_more_articles_box.cookie=td_read_site_cookie('td-cookie-more-articles');if(!isNaN(parseInt(tds_more_articles_on_post_pages_distance_from_top))&&isFinite(tds_more_articles_on_post_pages_distance_from_top)&&parseInt(tds_more_articles_on_post_pages_distance_from_top)>0){td_more_articles_box.distance_from_top=parseInt(tds_more_articles_on_post_pages_distance_from_top);}else{td_more_articles_box.distance_from_top=400;}
jQuery('.td-close-more-articles-box').click(function(){jQuery('.td-more-articles-box').removeClass('td-front-end-display-block');jQuery('.td-more-articles-box').hide();if(!isNaN(parseInt(tds_more_articles_on_post_time_to_wait))&&isFinite(tds_more_articles_on_post_time_to_wait)){td_set_cookies_life(['td-cookie-more-articles','hide-more-articles-box',parseInt(tds_more_articles_on_post_time_to_wait)*86400000]);}});},td_events_scroll:function td_events_scroll(scrollTop){if(tdIsScrollingAnimation){return;}
if(tdUtil.getBackendVar('tds_more_articles_on_post_enable')=="show"&&td_more_articles_box.cookie!='hide-more-articles-box'){if(scrollTop>td_more_articles_box.distance_from_top){if(td_more_articles_box.is_box_visible===false){jQuery('.td-more-articles-box').addClass('td-front-end-display-block');td_more_articles_box.is_box_visible=true;}}else{if(td_more_articles_box.is_box_visible===true){jQuery('.td-more-articles-box').removeClass('td-front-end-display-block');td_more_articles_box.is_box_visible=false;}}}}};var td_resize_timer_id;jQuery(window).resize(function(){clearTimeout(td_resize_timer_id);td_resize_timer_id=setTimeout(function(){td_done_resizing();},200);});function td_done_resizing(){td_resize_videos();}
function td_resize_videos(){jQuery(document).find('iframe[src*="youtube.com"]').each(function(){var videoMainContainer=jQuery(this).parent().parent().parent(),videoInPlaylist=jQuery(this).parent().hasClass("td_wrapper_playlist_player_vimeo"),video43AspectRatio=videoMainContainer.hasClass("vc_video-aspect-ratio-43"),video235AspectRatio=videoMainContainer.hasClass("vc_video-aspect-ratio-235");if(videoInPlaylist||video43AspectRatio||video235AspectRatio){}else{var td_video=jQuery(this);td_video.attr('width','100%');var td_video_width=td_video.width();td_video.css('height',td_video_width*0.5625,'important');}});jQuery(document).find('iframe[src*="vimeo.com"]').each(function(){var videoMainContainer=jQuery(this).parent().parent().parent(),videoInPlaylist=jQuery(this).parent().hasClass("td_wrapper_playlist_player_vimeo"),video43AspectRatio=videoMainContainer.hasClass("vc_video-aspect-ratio-43"),video235AspectRatio=videoMainContainer.hasClass("vc_video-aspect-ratio-235");if(videoInPlaylist||video43AspectRatio||video235AspectRatio){}else{var td_video=jQuery(this);td_video.attr('width','100%');var td_video_width=td_video.width();td_video.css('height',td_video_width*0.5625,'important');}});jQuery(document).find('iframe[src*="dailymotion.com"]').each(function(){var videoMainContainer=jQuery(this).parent().parent().parent(),video43AspectRatio=videoMainContainer.hasClass("vc_video-aspect-ratio-43"),video235AspectRatio=videoMainContainer.hasClass("vc_video-aspect-ratio-235");if(video43AspectRatio||video235AspectRatio){}else{var td_video=jQuery(this);td_video.attr('width','100%');var td_video_width=td_video.width();td_video.css('height',td_video_width*0.6,'important');}});jQuery(document).find('iframe[src*="facebook.com/plugins/video.php"]').each(function(){var videoMainContainer=jQuery(this).parent().parent().parent(),video43AspectRatio=videoMainContainer.hasClass("vc_video-aspect-ratio-43"),video235AspectRatio=videoMainContainer.hasClass("vc_video-aspect-ratio-235");if(video43AspectRatio||video235AspectRatio){}else{var td_video=jQuery(this);td_video.attr('width','100%');var td_video_width=td_video.width();td_video.css('height',td_video_width*0.5625,'important');}});jQuery(document).find(".wp-video-shortcode").each(function(){var td_video=jQuery(this);var td_video_width=td_video.width()+ 3;jQuery(this).parent().css('height',td_video_width*0.56,'important');td_video.css('width','100%','important');td_video.css('height','100%','important');})}
function td_mobile_menu(){}
function td_mobile_menu_toogle(){jQuery('#td-top-mobile-toggle a, .td-mobile-close a').click(function(){if(jQuery('body').hasClass('td-menu-mob-open-menu')){jQuery('body').removeClass('td-menu-mob-open-menu');}else{jQuery('body').addClass('td-menu-mob-open-menu');}});jQuery(document).find('#td-mobile-nav .menu-item-has-children').each(function(i){var class_name='td_mobile_elem_with_submenu_'+ i;jQuery(this).addClass(class_name);jQuery(this).children('a').addClass('td-link-element-after');jQuery(this).click(function(event){var jQueryTarget=jQuery(event.target);if(jQueryTarget.length&&((jQueryTarget.hasClass('td-element-after')||jQueryTarget.hasClass('td-link-element-after'))&&('#'===jQueryTarget.attr('href')||undefined===jQueryTarget.attr('href')))){event.preventDefault();event.stopPropagation();jQuery(this).toggleClass('td-sub-menu-open');}});});}
function td_retina(){if(window.devicePixelRatio>1){jQuery('.td-retina').each(function(i){var lowres=jQuery(this).attr('src');var highres=lowres.replace(".png","@2x.png");highres=highres.replace(".jpg","@2x.jpg");jQuery(this).attr('src',highres);});jQuery('.td-retina-data').each(function(i){jQuery(this).attr('src',jQuery(this).data('retina'));jQuery(this).addClass('td-retina-version');});}}
if(!tdDetect.isTouchDevice&&tdUtil.getBackendVar('td_ad_background_click_link')!=''){jQuery('body').click(function(event){var target=(event.target)?event.target:event.srcElement;var target_jquery_obj=jQuery(target);if(target_jquery_obj.hasClass('td-outer-container')||target_jquery_obj.hasClass('td-boxed-layout')){if(td_ad_background_click_target=='_blank'){window.open(td_ad_background_click_link);}else{location.href=td_ad_background_click_link;}}});}
function td_read_site_cookie(name){var nameEQ=escape(name)+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return unescape(c.substring(nameEQ.length,c.length));}
return null;}
function td_set_cookies_life(td_time_cookie_array){var expiry=new Date();expiry.setTime(expiry.getTime()+ td_time_cookie_array[2]);document.cookie=td_time_cookie_array[0]+"="+ td_time_cookie_array[1]+"; expires="+ expiry.toGMTString()+"; path=/";}
var tdIsScrollingAnimation=false;var td_mouse_wheel_or_touch_moved=false;jQuery(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll',function(e){if(tdIsScrollingAnimation===false){return;}else{tdIsScrollingAnimation=false;td_mouse_wheel_or_touch_moved=true;jQuery("html, body").stop();}});if(document.addEventListener){document.addEventListener('touchmove',function(e){if(tdIsScrollingAnimation===false){return;}else{tdIsScrollingAnimation=false;td_mouse_wheel_or_touch_moved=true;jQuery("html, body").stop();}},false);}
var td_scroll_to_top_is_visible=false;function td_events_scroll_scroll_to_top(scrollTop){if(tdIsScrollingAnimation){return;}
if(scrollTop>400){if(td_scroll_to_top_is_visible===false){td_scroll_to_top_is_visible=true;jQuery('.td-scroll-up').addClass('td-scroll-up-visible');}}else{if(td_scroll_to_top_is_visible===true){td_scroll_to_top_is_visible=false;jQuery('.td-scroll-up').removeClass('td-scroll-up-visible');}}}
jQuery('.td-scroll-up').click(function(){if(tdIsScrollingAnimation){return;}
td_scroll_to_top_is_visible=false;jQuery('.td-scroll-up').removeClass('td-scroll-up-visible');td_more_articles_box.is_box_visible=false;jQuery('.td-more-articles-box').removeClass('td-front-end-display-block');tdUtil.scrollToPosition(0,1200);return false;});jQuery('.td-read-down a').click(function(event){event.preventDefault();tdUtil.scrollToPosition(jQuery('.td-full-screen-header-image-wrap').height(),1200);});function td_post_template_6_title(){var td_parallax_el=document.getElementById('td_parallax_header_6');var td_parallax_bg_el=document.getElementById('td-full-screen-header-image');var scroll_from_top='';var distance_from_bottom;jQuery(window).scroll(function(){td_request_tick();});var td_animation_running=false;function td_request_tick(){if(td_animation_running===false){window.requestAnimationFrame(td_do_animation);}
td_animation_running=true;}
function td_do_animation(){scroll_from_top=jQuery(document).scrollTop();if(scroll_from_top<=950){var blur_value=1-(scroll_from_top/800);if(tdDetect.isIe8===true){blur_value=1;}
blur_value=Math.round(blur_value*100)/ 100;td_parallax_el.style.opacity=blur_value;var parallax_move=-Math.round(scroll_from_top/4);tdUtil.tdMoveY(td_parallax_bg_el,-parallax_move);distance_from_bottom=-Math.round(scroll_from_top/8);tdUtil.tdMoveY(td_parallax_el,-distance_from_bottom);}
td_animation_running=false;}}
function td_smart_lists_magnific_popup(){jQuery(".td-lightbox-enabled").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:true,navigateByImgClick:true,preload:[0,1],tCounter:tdUtil.getBackendVar('td_magnific_popup_translation_tCounter')},image:{tError:"<a href=\'%url%\'>The image #%curr%</a> could not be loaded.",titleSrc:function(item){return item.el.attr("data-caption");}},zoom:{enabled:true,duration:300,opener:function(element){return element.find("img");}},callbacks:{change:function(item){if(item.el[0].id!=''){var nr_slide=item.el[0].id.split("_");jQuery(".td-iosSlider").iosSlider("goToSlide",parseInt(nr_slide[1])+ 1);}else{tdModalImageLastEl=item.el;setTimeout(function(){tdUtil.scrollIntoView(item.el);},100);}},beforeClose:function(){if(tdModalImageLastEl!=''){tdUtil.scrollIntoView(tdModalImageLastEl);}}}});}
function td_get_document_width(){var x=0;if(self.innerHeight)
{x=self.innerWidth;}
else if(document.documentElement&&document.documentElement.clientHeight)
{x=document.documentElement.clientWidth;}
else if(document.body)
{x=document.body.clientWidth;}
return x;}
function td_get_document_height(){var y=0;if(self.innerHeight)
{y=self.innerHeight;}
else if(document.documentElement&&document.documentElement.clientHeight)
{y=document.documentElement.clientHeight;}
else if(document.body)
{y=document.body.clientHeight;}
return y;}
function setMenuMinHeight(){if('undefined'===typeof tdEvents.previousWindowInnerWidth){tdEvents.previousWindowInnerWidth=tdEvents.window_innerWidth;}else if(tdEvents.previousWindowInnerWidth===tdEvents.window_innerWidth){return;}
tdEvents.previousWindowInnerWidth=tdEvents.window_innerWidth;var $tdMobileMenu=jQuery('#td-mobile-nav'),cssHeight=tdEvents.window_innerHeight+ 1;if($tdMobileMenu.length){$tdMobileMenu.css('min-height',cssHeight+'px');}
if(!tdDetect.isMobileDevice){return;}
var $tdMobileBg=jQuery('.td-menu-background'),$tdMobileBgSearch=jQuery('.td-search-background');if($tdMobileBg.length){$tdMobileBg.css('height',(cssHeight+ 70)+'px');}
if($tdMobileBgSearch.length){$tdMobileBgSearch.css('height',(cssHeight+ 70)+'px');}}
var tdLoadingBox={};(function(){"use strict";tdLoadingBox={speed:40,arrayColorsTemp:['rgba(99, 99, 99, 0)','rgba(99, 99, 99, 0.05)','rgba(99, 99, 99, 0.08)','rgba(99, 99, 99, 0.2)','rgba(99, 99, 99, 0.3)','rgba(99, 99, 99, 0.5)','rgba(99, 99, 99, 0.6)','rgba(99, 99, 99, 1)'],arrayColors:[],statusAnimation:'stop',stop:function stop(){tdLoadingBox.statusAnimation='stop';},init:function init(color,speed){if(false===tdUtil.isUndefined(speed)){tdLoadingBox.speed=speed;}
var tdColorRegExp=/^#[a-zA-Z0-9]{3,6}$/;if(color&&tdColorRegExp.test(color)){var colRgba=tdLoadingBox.hexToRgb(color);var rgbaString="rgba("+ colRgba.r+", "+ colRgba.g+", "+ colRgba.b+", ";tdLoadingBox.arrayColors[7]=rgbaString+" 0.9)";tdLoadingBox.arrayColors[6]=rgbaString+" 0.7)";tdLoadingBox.arrayColors[5]=rgbaString+" 0.5)";tdLoadingBox.arrayColors[4]=rgbaString+" 0.3)";tdLoadingBox.arrayColors[3]=rgbaString+" 0.15)";tdLoadingBox.arrayColors[2]=rgbaString+" 0.15)";tdLoadingBox.arrayColors[1]=rgbaString+" 0.15)";tdLoadingBox.arrayColors[0]=rgbaString+" 0.15)";}else{tdLoadingBox.arrayColors=tdLoadingBox.arrayColorsTemp.slice(0);}
if(tdLoadingBox.statusAnimation==='stop'){tdLoadingBox.statusAnimation='display';this.render();}},render:function render(color){tdLoadingBox.animationDisplay('<div class="td-lb-box td-lb-box-1" style="background-color:'+ tdLoadingBox.arrayColors[0]+'"></div>'+'<div class="td-lb-box td-lb-box-2" style="background-color:'+ tdLoadingBox.arrayColors[1]+'"></div>'+'<div class="td-lb-box td-lb-box-3" style="background-color:'+ tdLoadingBox.arrayColors[2]+'"></div>'+'<div class="td-lb-box td-lb-box-4" style="background-color:'+ tdLoadingBox.arrayColors[3]+'"></div>'+'<div class="td-lb-box td-lb-box-5" style="background-color:'+ tdLoadingBox.arrayColors[4]+'"></div>'+'<div class="td-lb-box td-lb-box-6" style="background-color:'+ tdLoadingBox.arrayColors[5]+'"></div>'+'<div class="td-lb-box td-lb-box-7" style="background-color:'+ tdLoadingBox.arrayColors[6]+'"></div>'+'<div class="td-lb-box td-lb-box-8" style="background-color:'+ tdLoadingBox.arrayColors[7]+'"></div>');var tempColorArray=[tdLoadingBox.arrayColors[0],tdLoadingBox.arrayColors[1],tdLoadingBox.arrayColors[2],tdLoadingBox.arrayColors[3],tdLoadingBox.arrayColors[4],tdLoadingBox.arrayColors[5],tdLoadingBox.arrayColors[6],tdLoadingBox.arrayColors[7]];tdLoadingBox.arrayColors[0]=tempColorArray[7];tdLoadingBox.arrayColors[1]=tempColorArray[0];tdLoadingBox.arrayColors[2]=tempColorArray[1];tdLoadingBox.arrayColors[3]=tempColorArray[2];tdLoadingBox.arrayColors[4]=tempColorArray[3];tdLoadingBox.arrayColors[5]=tempColorArray[4];tdLoadingBox.arrayColors[6]=tempColorArray[5];tdLoadingBox.arrayColors[7]=tempColorArray[6];if(tdLoadingBox.statusAnimation==='display'){setTimeout(tdLoadingBox.render,tdLoadingBox.speed);}else{tdLoadingBox.animationDisplay('');}},animationDisplay:function(animation_str){jQuery('.td-loader-gif').html(animation_str);},hexToRgb:function(hex){var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null;}};})();var tdAjaxSearch={};jQuery().ready(function(){'use strict';tdAjaxSearch.init();});(function(){'use strict';tdAjaxSearch={_current_selection_index:0,_last_request_results_count:0,_first_down_up:true,_is_search_open:false,init:function init(){jQuery(document).click(function(e){if('td-icon-search'!==e.target.className&&'td-header-search'!==e.target.id&&'td-header-search-top'!==e.target.id&&true===tdAjaxSearch._is_search_open){tdAjaxSearch.hide_search_box();}});jQuery('#td-header-search-button').click(function(event){event.preventDefault();if(tdAjaxSearch._is_search_open===true){tdAjaxSearch.hide_search_box();}else{tdAjaxSearch.show_search_box();}});jQuery('#td-header-search-button-mob').click(function(event){jQuery('body').addClass('td-search-opened');var current_query=jQuery('#td-header-search-mob').val().trim();if(current_query.length>0){tdAjaxSearch.do_ajax_call_mob();}});jQuery('.td-search-close a').click(function(){jQuery('body').removeClass('td-search-opened');});jQuery('#td-header-search').keydown(function(event){if((event.which&&39===event.which)||(event.keyCode&&39===event.keyCode)||(event.which&&37===event.which)||(event.keyCode&&37===event.keyCode))
{tdAjaxSearch.td_aj_search_input_focus();return;}
if((event.which&&13===event.which)||(event.keyCode&&13===event.keyCode)){var td_aj_cur_element=jQuery('.td-aj-cur-element');if(td_aj_cur_element.length>0){var td_go_to_url=td_aj_cur_element.find('.entry-title a').attr('href');window.location=td_go_to_url;}else{jQuery(this).parent().parent().submit();}
return false;}else if((event.which&&40===event.which)||(event.keyCode&&40===event.keyCode)){tdAjaxSearch.move_prompt_down();return false;}else if((event.which&&38===event.which)||(event.keyCode&&38===event.keyCode)){tdAjaxSearch.move_prompt_up();return false;}else{if((event.which&&8===event.which)||(event.keyCode&&8===event.keyCode)){var search_query=jQuery(this).val();if(1===search_query.length){jQuery('#td-aj-search').empty();}}
tdAjaxSearch.td_aj_search_input_focus();setTimeout(function(){tdAjaxSearch.do_ajax_call();},100);}
return true;});jQuery('#td-header-search-mob').keydown(function(event){if((event.which&&13===event.which)||(event.keyCode&&13===event.keyCode)){var td_aj_cur_element=jQuery('.td-aj-cur-element');if(td_aj_cur_element.length>0){var td_go_to_url=td_aj_cur_element.find('.entry-title a').attr('href');window.location=td_go_to_url;}else{jQuery(this).parent().parent().submit();}
return false;}else{if((event.which&&8===event.which)||(event.keyCode&&8===event.keyCode)){var search_query=jQuery(this).val();if(1===search_query.length){jQuery('#td-aj-search-mob').empty();}}
setTimeout(function(){tdAjaxSearch.do_ajax_call_mob();},100);return true;}});},show_search_box:function(){jQuery('.td-drop-down-search').addClass('td-drop-down-search-open');if(true!==tdDetect.isIos){setTimeout(function(){document.getElementById('td-header-search').focus();},200);}
tdAjaxSearch._is_search_open=true;},hide_search_box:function hide_search_box(){jQuery(".td-drop-down-search").removeClass('td-drop-down-search-open');tdAjaxSearch._is_search_open=false;},td_aj_search_move_prompt_up:function(){if(tdAjaxSearch._first_down_up===true){tdAjaxSearch._first_down_up=false;if(tdAjaxSearch._current_selection_index===0){tdAjaxSearch._current_selection_index=tdAjaxSearch._last_request_results_count- 1;}else{tdAjaxSearch._current_selection_index--;}}else{if(tdAjaxSearch._current_selection_index===0){tdAjaxSearch._current_selection_index=tdAjaxSearch._last_request_results_count;}else{tdAjaxSearch._current_selection_index--;}}
tdAjaxSearch._repaintCurrentElement();},move_prompt_down:function(){if(tdAjaxSearch._first_down_up===true){tdAjaxSearch._first_down_up=false;}else{if(tdAjaxSearch._current_selection_index===tdAjaxSearch._last_request_results_count){tdAjaxSearch._current_selection_index=0;}else{tdAjaxSearch._current_selection_index++;}}
tdAjaxSearch._repaintCurrentElement();},_repaintCurrentElement:function(){jQuery('.td_module_wrap').removeClass('td-aj-cur-element');if(tdAjaxSearch._current_selection_index>tdAjaxSearch._last_request_results_count- 1){jQuery('.td-search-form').fadeTo(100,1);}else{tdAjaxSearch.td_aj_search_input_remove_focus();jQuery('.td_module_wrap').eq(tdAjaxSearch._current_selection_index).addClass('td-aj-cur-element');}},td_aj_search_input_focus:function(){tdAjaxSearch._current_selection_index=0;tdAjaxSearch._first_down_up=true;jQuery('.td-search-form').fadeTo(100,1);jQuery('.td_module_wrap').removeClass('td-aj-cur-element');},td_aj_search_input_remove_focus:function(){if(0!==tdAjaxSearch._last_request_results_count){jQuery('.td-search-form').css('opacity',0.5);}},process_ajax_response:function(data){var current_query=jQuery('#td-header-search').val();if(''===current_query){jQuery('#td-aj-search').empty();return;}
var td_data_object=jQuery.parseJSON(data);if(td_data_object.td_search_query!==current_query){return;}
tdAjaxSearch._current_selection_index=0;tdAjaxSearch._last_request_results_count=td_data_object.td_total_in_list;tdAjaxSearch._first_down_up=true;jQuery('#td-aj-search').html(td_data_object.td_data);if(('undefined'!==typeof window.tdAnimationStack)&&(true===window.tdAnimationStack.activated)){window.tdAnimationStack.check_for_new_items('#td-aj-search .td-animation-stack',window.tdAnimationStack.SORTED_METHOD.sort_left_to_right,true);window.tdAnimationStack.compute_items();}},process_ajax_response_mob:function(data){var current_query=jQuery('#td-header-search-mob').val();if(''===current_query){jQuery('#td-aj-search-mob').empty();return;}
var td_data_object=jQuery.parseJSON(data);if(td_data_object.td_search_query!==current_query){return;}
jQuery('#td-aj-search-mob').html(td_data_object.td_data);if(('undefined'!==typeof window.tdAnimationStack)&&(true===window.tdAnimationStack.activated)){window.tdAnimationStack.check_for_new_items('#td-aj-search-mob .td-animation-stack',window.tdAnimationStack.SORTED_METHOD.sort_left_to_right,true);window.tdAnimationStack.compute_items();}},do_ajax_call:function(){var search_query=jQuery('#td-header-search').val();if(''===search_query){tdAjaxSearch.td_aj_search_input_focus();return;}
if(tdLocalCache.exist(search_query)){tdAjaxSearch.process_ajax_response(tdLocalCache.get(search_query));return;}
jQuery.ajax({type:'POST',url:td_ajax_url,data:{action:'td_ajax_search',td_string:search_query},success:function(data,textStatus,XMLHttpRequest){tdLocalCache.set(search_query,data);tdAjaxSearch.process_ajax_response(data);},error:function(MLHttpRequest,textStatus,errorThrown){}});},do_ajax_call_mob:function(){var search_query=jQuery('#td-header-search-mob').val();if(''===search_query){return;}
if(tdLocalCache.exist(search_query)){tdAjaxSearch.process_ajax_response_mob(tdLocalCache.get(search_query));return;}
jQuery.ajax({type:'POST',url:td_ajax_url,data:{action:'td_ajax_search',td_string:search_query},success:function(data,textStatus,XMLHttpRequest){tdLocalCache.set(search_query,data);tdAjaxSearch.process_ajax_response_mob(data);},error:function(MLHttpRequest,textStatus,errorThrown){}});}};})();;'use strict';jQuery().ready(function(){tdModalImage();tdUtil.imageMoveClassToFigure('td-post-image-full');tdUtil.imageMoveClassToFigure('td-post-image-right');tdUtil.imageMoveClassToFigure('td-post-image-left');if(('undefined'!==typeof window.tds_general_modal_image)&&(''!==window.tds_general_modal_image)){jQuery('.single .td-post-content a > img').filter(function(index,element){if(-1!==element.className.indexOf('wp-image')){jQuery(element).parent().addClass('td-modal-image');}});}});var tdModalImageLastEl='';function tdModalImage(){jQuery('figure.wp-caption').each(function(){var caption_text=jQuery(this).children('figcaption').html();jQuery(this).children('a').data('caption',caption_text);});jQuery('.td-modal-image').each(function(){jQuery(this).parent().addClass('td-modal-image');jQuery(this).removeClass('td-modal-image');});jQuery('article').magnificPopup({type:'image',delegate:".td-modal-image",gallery:{enabled:true,tPrev:tdUtil.getBackendVar('td_magnific_popup_translation_tPrev'),tNext:tdUtil.getBackendVar('td_magnific_popup_translation_tNext'),tCounter:tdUtil.getBackendVar('td_magnific_popup_translation_tCounter')},ajax:{tError:tdUtil.getBackendVar('td_magnific_popup_translation_ajax_tError')},image:{tError:tdUtil.getBackendVar('td_magnific_popup_translation_image_tError'),titleSrc:function(item){var td_current_caption=jQuery(item.el).data('caption');if('undefined'!==typeof td_current_caption){return td_current_caption;}else{return'';}}},zoom:{enabled:true,duration:300,opener:function(element){return element.find('img');}},callbacks:{change:function(item){tdModalImageLastEl=item.el;tdUtil.scrollIntoView(item.el);},beforeClose:function(){tdAffix.allow_scroll=false;tdUtil.scrollIntoView(tdModalImageLastEl);var interval_td_affix_scroll=setInterval(function(){if(!tdIsScrollingAnimation){clearInterval(interval_td_affix_scroll);setTimeout(function(){tdAffix.allow_scroll=true;},100);}},100);}}});if('undefined'===typeof jetpackCarouselStrings){jQuery('figure.gallery-item').each(function(){var caption_text=jQuery(this).children('figcaption').html();jQuery(this).find('a').data('caption',caption_text);});jQuery('.tiled-gallery').magnificPopup({type:'image',delegate:"a",gallery:{enabled:true,tPrev:tdUtil.getBackendVar('td_magnific_popup_translation_tPrev'),tNext:tdUtil.getBackendVar('td_magnific_popup_translation_tNext'),tCounter:tdUtil.getBackendVar('td_magnific_popup_translation_tCounter')},ajax:{tError:tdUtil.getBackendVar('td_magnific_popup_translation_ajax_tError')},image:{tError:tdUtil.getBackendVar('td_magnific_popup_translation_image_tError'),titleSrc:function(item){var td_current_caption=jQuery(item.el).parent().find('.tiled-gallery-caption').text();if('undefined'!==typeof td_current_caption){return td_current_caption;}else{return'';}}},zoom:{enabled:true,duration:300,opener:function(element){return element.find('img');}},callbacks:{change:function(item){tdModalImageLastEl=item.el;tdUtil.scrollIntoView(item.el);},beforeClose:function(){tdUtil.scrollIntoView(tdModalImageLastEl);}}});jQuery('.gallery').magnificPopup({type:'image',delegate:'.gallery-icon > a',gallery:{enabled:true,tPrev:tdUtil.getBackendVar('td_magnific_popup_translation_tPrev'),tNext:tdUtil.getBackendVar('td_magnific_popup_translation_tNext'),tCounter:tdUtil.getBackendVar('td_magnific_popup_translation_tCounter')},ajax:{tError:tdUtil.getBackendVar('td_magnific_popup_translation_ajax_tError')},image:{tError:tdUtil.getBackendVar('td_magnific_popup_translation_image_tError'),titleSrc:function(item){var td_current_caption=jQuery(item.el).data('caption');if('undefined'!==typeof td_current_caption){return td_current_caption;}else{return'';}}},zoom:{enabled:true,duration:300,opener:function(element){return element.find('img');}},callbacks:{change:function(item){tdModalImageLastEl=item.el;tdUtil.scrollIntoView(item.el);},beforeClose:function(){tdUtil.scrollIntoView(tdModalImageLastEl);}}});}}
var tdBlocks={};(function(){"use strict";jQuery().ready(function(){tdOnReadyAjaxBlocks();});function tdOnReadyAjaxBlocks(){jQuery(".td-ajax-next-page").click(function(event){event.preventDefault();var currentBlockObj=tdBlocks.tdGetBlockObjById(jQuery(this).data('td_block_id'));if(jQuery(this).hasClass('ajax-page-disabled')||true===currentBlockObj.is_ajax_running){return;}
currentBlockObj.is_ajax_running=true;currentBlockObj.td_current_page++;tdBlocks.tdAjaxDoBlockRequest(currentBlockObj,'next');});jQuery(".td-ajax-prev-page").click(function(event){event.preventDefault();var currentBlockObj=tdBlocks.tdGetBlockObjById(jQuery(this).data('td_block_id'));if(jQuery(this).hasClass('ajax-page-disabled')||true===currentBlockObj.is_ajax_running){return;}
currentBlockObj.is_ajax_running=true;currentBlockObj.td_current_page--;tdBlocks.tdAjaxDoBlockRequest(currentBlockObj,'back');});jQuery(".td_ajax_load_more_js").click(function(event){event.preventDefault();if(jQuery(this).hasClass('ajax-page-disabled')){return;}
jQuery(this).css('visibility','hidden');var currentBlockObj=tdBlocks.tdGetBlockObjById(jQuery(this).data('td_block_id'));currentBlockObj.td_current_page++;tdBlocks.tdAjaxDoBlockRequest(currentBlockObj,'load_more');if(currentBlockObj.max_num_pages<=currentBlockObj.td_current_page){jQuery(this).addClass('ajax-page-disabled');}});if(tdDetect.isMobileDevice){jQuery(".td-pulldown-filter-display-option").click(function(){var currentBlockUid=jQuery(this).data('td_block_id');jQuery("#td_pulldown_"+ currentBlockUid).addClass("td-pulldown-filter-list-open");var tdPullDownList=jQuery("#td_pulldown_"+ currentBlockUid+"_list");tdPullDownList.removeClass('fadeOut');tdPullDownList.addClass('td_animated td_fadeIn');});}else{jQuery(".td-pulldown-filter-display-option").hover(function(){var current_block_uid=jQuery(this).data('td_block_id');jQuery("#td_pulldown_"+ current_block_uid).addClass("td-pulldown-filter-list-open");var tdPullDownList=jQuery("#td_pulldown_"+ current_block_uid+"_list");tdPullDownList.removeClass('fadeOut');tdPullDownList.addClass('td_animated td_fadeIn');tdPullDownList.css('visibility','visible');},function(){var currentBlockUid=jQuery(this).data('td_block_id');jQuery("#td_pulldown_"+ currentBlockUid).removeClass("td-pulldown-filter-list-open");});}
jQuery('.td-related-title a').click(function(event){event.preventDefault();jQuery('.td-related-title').children('a').removeClass('td-cur-simple-item');jQuery(this).addClass('td-cur-simple-item');var currentBlockUid=jQuery(this).data('td_block_id');var currentBlockObj=tdBlocks.tdGetBlockObjById(currentBlockUid);currentBlockObj.td_filter_value=jQuery(this).data('td_filter_value');currentBlockObj.td_current_page=1;tdBlocks.tdAjaxDoBlockRequest(currentBlockObj,'pull_down');});var tdSubCatMegaRunLink=false;var tdSubCatMegaLastTarget='';function tdAjaxSubCatMegaRunOnTouch(event,jQueryObject){if((true===tdSubCatMegaRunLink)&&(event.target===tdSubCatMegaLastTarget)){window.location=event.target;}else{tdSubCatMegaRunLink=true;tdSubCatMegaLastTarget=event.target;event.preventDefault();setTimeout(function(){tdSubCatMegaRunLink=false;},300);tdAjaxSubCatMegaRun(event,jQueryObject);}}
function tdAjaxSubCatMegaRun(event,jQueryObject){var currentBlockUid=jQueryObject.data('td_block_id');var currentBlockObj=tdBlocks.tdGetBlockObjById(currentBlockUid);currentBlockObj.is_ajax_running=true;jQuery('.mega-menu-sub-cat-'+ currentBlockUid).removeClass('cur-sub-cat');jQueryObject.addClass('cur-sub-cat');currentBlockObj.td_filter_value=jQueryObject.data('td_filter_value');currentBlockObj.td_current_page=1;tdBlocks.tdAjaxDoBlockRequest(currentBlockObj,'mega_menu');}
if(tdDetect.isTouchDevice){jQuery(".block-mega-child-cats a").click(function(event){tdAjaxSubCatMegaRunOnTouch(event,jQuery(this));},false).each(function(index,element){element.addEventListener('touchend',function(event){tdAjaxSubCatMegaRunOnTouch(event,jQuery(this));},false);});}else{jQuery(".block-mega-child-cats a").hover(function(event){tdAjaxSubCatMegaRun(event,jQuery(this));},function(event){});}
jQuery('.td-subcat-item a').click(function(event){event.preventDefault();var currentBlockObj=tdBlocks.tdGetBlockObjById(jQuery(this).data('td_block_id'));if(true===currentBlockObj.is_ajax_running){return;}
currentBlockObj.is_ajax_running=true;jQuery('.'+ jQuery(this).data('td_block_id')+'_rand').find('.td-cur-simple-item').removeClass('td-cur-simple-item');jQuery(this).addClass('td-cur-simple-item');currentBlockObj.td_filter_value=jQuery(this).data('td_filter_value');currentBlockObj.td_current_page=1;tdBlocks.tdAjaxDoBlockRequest(currentBlockObj,'pull_down');});jQuery(".td-pulldown-filter-link").click(function(event){event.preventDefault();var currentBlockUid=jQuery(this).data('td_block_id');jQuery('#'+ currentBlockUid).find('.iosSlider').iosSlider('destroy');var currentBlockObj=tdBlocks.tdGetBlockObjById(currentBlockUid);if(true===currentBlockObj.is_ajax_running){return;}
currentBlockObj.is_ajax_running=true;currentBlockObj.td_filter_value=jQuery(this).data('td_filter_value');jQuery('.'+ jQuery(this).data('td_block_id')+'_rand').find('.td-cur-simple-item').removeClass('td-cur-simple-item');jQuery(this).addClass('td-cur-simple-item');currentBlockObj.td_current_page=1;tdBlocks.tdPullDownFilterChangeValue(currentBlockUid,'<span>'+ jQuery(this).html()+' </span><i class="td-icon-menu-down"></i>');jQuery('#td_pulldown_'+ currentBlockUid).removeClass("td-pulldown-filter-list-open");tdBlocks.tdAjaxDoBlockRequest(currentBlockObj,'pull_down');if(tdDetect.isMobileDevice){tdUtil.stopBubble(event);}});}
tdBlocks={tdPullDownFilterChangeValue:function(td_block_uid,td_text){jQuery('#td-pulldown-'+ td_block_uid+'-val').html(td_text);},tdAjaxDoBlockRequest:function(current_block_obj,td_user_action){var currentBlockObjSignature=JSON.stringify(current_block_obj);if(tdLocalCache.exist(currentBlockObjSignature)){tdBlocks.tdBlockAjaxLoadingStart(current_block_obj,true,td_user_action);tdBlocks.tdAjaxBlockProcessResponse(tdLocalCache.get(currentBlockObjSignature),td_user_action);return'cache_hit';}
tdBlocks.tdBlockAjaxLoadingStart(current_block_obj,false,td_user_action);var requestData={action:'td_ajax_block',td_atts:current_block_obj.atts,td_block_id:current_block_obj.id,td_column_number:current_block_obj.td_column_number,td_current_page:current_block_obj.td_current_page,block_type:current_block_obj.block_type,td_filter_value:current_block_obj.td_filter_value,td_user_action:current_block_obj.td_user_action};jQuery.ajax({type:'POST',url:td_ajax_url,cache:true,data:requestData,success:function(data,textStatus,XMLHttpRequest){tdLocalCache.set(currentBlockObjSignature,data);tdBlocks.tdAjaxBlockProcessResponse(data,td_user_action);},error:function(MLHttpRequest,textStatus,errorThrown){}});},tdAjaxBlockProcessResponse:function(data,td_user_action){var tdReplyObj=jQuery.parseJSON(data);if('load_more'===td_user_action||'infinite_load'===td_user_action){for(var i=0;i<tdSmartSidebar.items.length;i++){if('case_3_bottom_of_content'===tdSmartSidebar.items[i].sidebar_state){tdSmartSidebar.items[i].sidebar_state='case_1_fixed_down';}}
jQuery(tdReplyObj.td_data).appendTo('#'+ tdReplyObj.td_block_id);}else{jQuery('#'+ tdReplyObj.td_block_id).html(tdReplyObj.td_data);}
if(true===tdReplyObj.td_hide_prev){jQuery('#prev-page-'+ tdReplyObj.td_block_id).addClass('ajax-page-disabled');}else{jQuery('#prev-page-'+ tdReplyObj.td_block_id).removeClass('ajax-page-disabled');}
if(true===tdReplyObj.td_hide_next){jQuery('#next-page-'+ tdReplyObj.td_block_id).addClass('ajax-page-disabled');}else{jQuery('#next-page-'+ tdReplyObj.td_block_id).removeClass('ajax-page-disabled');}
var currentBlockObj=tdBlocks.tdGetBlockObjById(tdReplyObj.td_block_id);if('slide'===currentBlockObj.block_type){jQuery('#'+ tdReplyObj.td_block_id+' .slide-wrap-active-first').addClass('slide-wrap-active');}
currentBlockObj.is_ajax_running=false;tdBlocks.tdBlockAjaxLoadingEnd(tdReplyObj,currentBlockObj,td_user_action);},tdBlockAjaxLoadingStart:function(current_block_obj,cache_hit,td_user_action){var elCurTdBlockInner=jQuery('#'+ current_block_obj.id);jQuery('.td-loader-gif').remove();elCurTdBlockInner.removeClass('td_fadeInRight td_fadeInLeft td_fadeInDown td_fadeInUp td_animated_xlong');elCurTdBlockInner.addClass('td_block_inner_overflow');var tdTmpBlockHeight=elCurTdBlockInner.height();elCurTdBlockInner.css('height',tdTmpBlockHeight);if(false===cache_hit){if('load_more'===td_user_action){elCurTdBlockInner.parent().append('<div class="td-loader-gif td-loader-infinite td-loader-blocks-load-more  td-loader-animation-start"></div>');tdLoadingBox.init(current_block_obj.header_color?current_block_obj.header_color:tds_theme_color_site_wide);setTimeout(function(){jQuery('.td-loader-gif').removeClass('td-loader-animation-start').addClass('td-loader-animation-mid');},50);}
else if('infinite_load'===td_user_action){elCurTdBlockInner.parent().append('<div class="td-loader-gif td-loader-infinite td-loader-animation-start"></div>');tdLoadingBox.init(current_block_obj.header_color?current_block_obj.header_color:tds_theme_color_site_wide);setTimeout(function(){jQuery('.td-loader-gif').removeClass('td-loader-animation-start').addClass('td-loader-animation-mid');},50);}else{elCurTdBlockInner.parent().append('<div class="td-loader-gif td-loader-animation-start"></div>');tdLoadingBox.init(current_block_obj.header_color?current_block_obj.header_color:tds_theme_color_site_wide);setTimeout(function(){jQuery('.td-loader-gif').removeClass('td-loader-animation-start').addClass('td-loader-animation-mid');},50);elCurTdBlockInner.addClass('td_animated_long td_fadeOut_to_1');}}},tdBlockAjaxLoadingEnd:function(td_reply_obj,current_block_obj,td_user_action){jQuery('.td-loader-gif').removeClass('td-loader-animation-mid').addClass('td-loader-animation-end');setTimeout(function(){jQuery('.td-loader-gif').remove();tdLoadingBox.stop();},400);var elCurTdBlockInner=jQuery('#'+ current_block_obj.id);elCurTdBlockInner.removeClass('td_animated_long td_fadeOut_to_1');var tdAnimationStackSortType;if(true===tdAnimationStack.activated){tdAnimationStackSortType=tdAnimationStack.SORTED_METHOD.sort_left_to_right;}
switch(td_user_action){case'next':elCurTdBlockInner.addClass('td_animated_xlong td_fadeInRight');if(undefined!==tdAnimationStackSortType){tdAnimationStackSortType=tdAnimationStack.SORTED_METHOD.sort_right_to_left;}
break;case'back':elCurTdBlockInner.addClass('td_animated_xlong td_fadeInLeft');break;case'pull_down':elCurTdBlockInner.addClass('td_animated_xlong td_fadeInDown');break;case'mega_menu':elCurTdBlockInner.addClass('td_animated_xlong td_fadeInDown');break;case'load_more':setTimeout(function(){jQuery('.'+ current_block_obj.id+'_rand .td_ajax_load_more_js').css('visibility','visible');},500);break;case'infinite_load':setTimeout(function(){tdInfiniteLoader.computeTopDistances();if(''!==td_reply_obj.td_data){tdInfiniteLoader.enable_is_visible_callback(current_block_obj.id);}},500);setTimeout(function(){tdInfiniteLoader.computeTopDistances();},1000);setTimeout(function(){tdInfiniteLoader.computeTopDistances();},1500);break;}
setTimeout(function(){jQuery('.td_block_inner_overflow').removeClass('td_block_inner_overflow');elCurTdBlockInner.css('height','auto');tdSmartSidebar.compute();},200);setTimeout(function(){tdSmartSidebar.compute();},500);if(undefined!==tdAnimationStackSortType){setTimeout(function(){tdAnimationStack.check_for_new_items('#'+ current_block_obj.id+' .td-animation-stack',tdAnimationStackSortType,true);},200);}},tdGetBlockIndex:function(myID){var cnt=0;var tmpReturn=0;jQuery.each(tdBlocksArray,function(index,td_block){if(td_block.id===myID){tmpReturn=cnt;return false;}else{cnt++;}});return tmpReturn;},tdGetBlockObjById:function(myID){return tdBlocksArray[tdBlocks.tdGetBlockIndex(myID)];}};})();jQuery().ready(function(){'use strict';var modalSettings={type:'inline',preloader:false,focus:'#name',removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr('data-effect');tdLogin.clearFields();tdLogin.showHideMsg();if(jQuery(window).width()<700){this.st.focus=false;}else{if(false===tdDetect.isIe){this.st.focus='#login_email';}}},beforeClose:function(){}},disableOn:function(){if(jQuery(window).width()<750){return false;}
return true;}};if(undefined!==window.tds_login_sing_in_widget){jQuery('.comment-reply-login').attr({'href':'#login-form','data-effect':'mpf-td-login-effect'});jQuery('.comment-reply-login, .td-login-modal-js').magnificPopup(modalSettings);}
jQuery('.td-login-modal-js, .comment-reply-login').on('click',function(event){if(jQuery(window).width()<750&&undefined!==window.tds_login_sing_in_widget){event.preventDefault();jQuery('body').addClass('td-menu-mob-open-menu');jQuery('.td-mobile-container').hide();jQuery('#td-mobile-nav').addClass('td-hide-menu-content');setTimeout(function(){jQuery('.td-mobile-container').show();},500);tdLogin.showHideElementsMobile([['#td-login-mob',1],['#td-register-mob',0],['#td-forgot-pass-mob',0]]);}});jQuery('#login-link').on('click',function(){tdLogin.showHideElements([['#td-login-div',1],['#td-register-div',0],['#td-forgot-pass-div',0]]);jQuery('#login-form').addClass('td-login-animation');if(jQuery(window).width()>700&&tdDetect.isIe===false){jQuery('#login_email').focus();}
tdLogin.showHideMsg();});jQuery('#register-link').on('click',function(){tdLogin.showHideElements([['#td-login-div',0],['#td-register-div',1],['#td-forgot-pass-div',0]]);jQuery('#login-form').addClass('td-login-animation');if(jQuery(window).width()>700&&false===tdDetect.isIe){jQuery('#register_email').focus();}
tdLogin.showHideMsg();});jQuery('#forgot-pass-link').on('click',function(event){event.preventDefault();tdLogin.showHideElements([['#td-login-div',0],['#td-register-div',0],['#td-forgot-pass-div',1]]);jQuery('#login-form').addClass('td-login-animation');if(jQuery(window).width()>700&&false===tdDetect.isIe){jQuery('#forgot_email').focus();}
tdLogin.showHideMsg();});jQuery('#login_button').on('click',function(){tdLogin.handlerLogin();});jQuery('#login_pass').keydown(function(event){if((event.which&&13===event.which)||(event.keyCode&&13===event.keyCode)){tdLogin.handlerLogin();}});jQuery('#register_button').on('click',function(){tdLogin.handlerRegister();});jQuery('#register_user').keydown(function(event){if((event.which&&13===event.which)||(event.keyCode&&13===event.keyCode)){tdLogin.handlerRegister();}});jQuery('#forgot_button').on('click',function(){tdLogin.handlerForgotPass();});jQuery('#forgot_email').keydown(function(event){if((event.which&&13===event.which)||(event.keyCode&&13===event.keyCode)){tdLogin.handlerForgotPass();}});jQuery('.td-back-button').on('click',function(){tdLogin.showHideElements([['#td-login-div',1],['#td-register-div',0],['#td-forgot-pass-div',0]]);jQuery('#login-form').removeClass('td-login-animation');jQuery('.td_display_err').hide();});});var tdLogin={};(function(){'use strict';tdLogin={email_pattern:/^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,handlerLogin:function(){var loginEmailEl=jQuery('#login_email'),loginPassEl=jQuery('#login_pass');if(loginEmailEl.length&&loginPassEl.length){var loginEmailVal=loginEmailEl.val().trim(),loginPassVal=loginPassEl.val().trim();if(loginEmailVal&&loginPassVal){tdLogin.addRemoveClass(['.td_display_err',1,'td_display_msg_ok']);tdLogin.showHideMsg(td_please_wait);tdLogin.doAction('td_mod_login',loginEmailVal,'',loginPassVal);}else{tdLogin.showHideMsg(td_email_user_pass_incorrect);}}},handlerRegister:function(){var registerEmailEl=jQuery('#register_email'),registerUserEl=jQuery('#register_user');if(registerEmailEl.length&&registerUserEl.length){var registerEmailVal=registerEmailEl.val().trim(),registerUserVal=registerUserEl.val().trim();if(tdLogin.email_pattern.test(registerEmailVal)&&registerUserVal){tdLogin.addRemoveClass(['.td_display_err',1,'td_display_msg_ok']);tdLogin.showHideMsg(td_please_wait);tdLogin.doAction('td_mod_register',registerEmailVal,registerUserVal,'');}else{tdLogin.showHideMsg(td_email_user_incorrect);}}},handlerForgotPass:function(){var forgotEmailEl=jQuery('#forgot_email');if(forgotEmailEl.length){var forgotEmailVal=forgotEmailEl.val().trim();if(tdLogin.email_pattern.test(forgotEmailVal)){tdLogin.addRemoveClass(['.td_display_err',1,'td_display_msg_ok']);tdLogin.showHideMsg(td_please_wait);tdLogin.doAction('td_mod_remember_pass',forgotEmailVal,'','');}else{tdLogin.showHideMsg(td_email_incorrect);}}},showHideElements:function(ids_array){if(ids_array.constructor===Array){var length=ids_array.length;for(var i=0;i<length;i++){if(ids_array[i].constructor===Array&&2===ids_array[i].length){var jqElement=jQuery(ids_array[i][0]);if(jqElement.length){if(1===ids_array[i][1]){jqElement.removeClass('td-display-none').addClass('td-display-block');}else{jqElement.removeClass('td-display-block').addClass('td-display-none');}}}}}},showHideElementsMobile:function(ids_array){if(ids_array.constructor===Array){var length=ids_array.length;for(var i=0;i<length;i++){if(ids_array[i].constructor===Array&&2===ids_array[i].length){var jqElement=jQuery(ids_array[i][0]);if(jqElement.length){if(1===ids_array[i][1]){jqElement.removeClass('td-login-hide').addClass('td-login-show');}else{jqElement.removeClass('td-login-show').addClass('td-login-hide');}}}}}},showTabs:function(ids_array){if(ids_array.constructor===Array){var length=ids_array.length;for(var i=0;i<length;i++){if(ids_array[i].constructor===Array&&2===ids_array[i].length){var jqElement=jQuery(ids_array[i][0]);if(jqElement.length){if(1===ids_array[i][1]){jqElement.addClass('td_login_tab_focus');}else{jqElement.removeClass('td_login_tab_focus');}}}}}},addRemoveClass:function(param){if(param.constructor===Array&&3===param.length){var tdElement=jQuery(param[0]);if(tdElement.length){if(1===param[1]){tdElement.addClass(param[2]);}else{tdElement.removeClass(param[2]);}}}},showHideMsg:function(msg){var tdDisplayErr=jQuery('.td_display_err');if(tdDisplayErr.length){if(undefined!==msg&&msg.constructor===String&&msg.length>0){tdDisplayErr.show();tdDisplayErr.html(msg);}else{tdDisplayErr.hide();tdDisplayErr.html('');}}},clearFields:function(){jQuery('#login_email').val('');jQuery('#login_pass').val('');jQuery('#register_email').val('');jQuery('#register_user').val('');jQuery('#forgot_email').val('');},doAction:function(sent_action,sent_email,sent_user,sent_pass){jQuery.ajax({type:'POST',url:td_ajax_url,data:{action:sent_action,email:sent_email,user:sent_user,pass:sent_pass},success:function(data,textStatus,XMLHttpRequest){var td_data_object=jQuery.parseJSON(data);switch(td_data_object[0]){case'login':if(1===td_data_object[1]){location.reload(true);}else{tdLogin.addRemoveClass(['.td_display_err',0,'td_display_msg_ok']);tdLogin.showHideMsg(td_data_object[2]);}
break;case'register':if(1===td_data_object[1]){tdLogin.addRemoveClass(['.td_display_err',1,'td_display_msg_ok']);}else{tdLogin.addRemoveClass(['.td_display_err',0,'td_display_msg_ok']);}
tdLogin.showHideMsg(td_data_object[2]);break;case'remember_pass':if(1===td_data_object[1]){tdLogin.addRemoveClass(['.td_display_err',1,'td_display_msg_ok']);}else{tdLogin.addRemoveClass(['.td_display_err',0,'td_display_msg_ok']);}
tdLogin.showHideMsg(td_data_object[2]);break;}},error:function(MLHttpRequest,textStatus,errorThrown){}});}};})();jQuery().ready(function(){'use strict';jQuery('#login-link-mob').on('click',function(){tdLoginMob.showHideElements([['#td-login-mob',1],['#td-register-mob',0],['#td-forgot-pass-mob',0]]);jQuery('#td-mobile-nav').addClass('td-hide-menu-content');if(jQuery(window).width()>700&&tdDetect.isIe===false){jQuery('#login_email-mob').focus();}
tdLoginMob.showHideMsg();});jQuery('#register-link-mob').on('click',function(){tdLoginMob.showHideElements([['#td-login-mob',0],['#td-register-mob',1],['#td-forgot-pass-mob',0]]);jQuery('#td-mobile-nav').addClass('td-hide-menu-content');if(jQuery(window).width()>700&&false===tdDetect.isIe){jQuery('#register_email-mob').focus();}
tdLoginMob.showHideMsg();});jQuery('#forgot-pass-link-mob').on('click',function(){tdLoginMob.showHideElements([['#td-login-mob',0],['#td-register-mob',0],['#td-forgot-pass-mob',1]]);if(jQuery(window).width()>700&&false===tdDetect.isIe){jQuery('#forgot_email-mob').focus();}
tdLoginMob.showHideMsg();});jQuery('#login_button-mob').on('click',function(){tdLoginMob.handlerLogin();});jQuery('#login_pass-mob').keydown(function(event){if((event.which&&13===event.which)||(event.keyCode&&13===event.keyCode)){tdLoginMob.handlerLogin();}});jQuery('#register_button-mob').on('click',function(){tdLoginMob.handlerRegister();});jQuery('#register_user-mob').keydown(function(event){if((event.which&&13===event.which)||(event.keyCode&&13===event.keyCode)){tdLoginMob.handlerRegister();}});jQuery('#forgot_button-mob').on('click',function(){tdLoginMob.handlerForgotPass();});jQuery('#forgot_email-mob').keydown(function(event){if((event.which&&13===event.which)||(event.keyCode&&13===event.keyCode)){tdLoginMob.handlerForgotPass();}});jQuery('#td-mobile-nav .td-login-close a, #td-mobile-nav .td-register-close a').on('click',function(){tdLoginMob.showHideElements([['#td-login-mob',0],['#td-register-mob',0],['#td-forgot-pass-mob',0]]);jQuery('#td-mobile-nav').removeClass('td-hide-menu-content');});jQuery('#td-mobile-nav .td-forgot-pass-close a').on('click',function(){tdLoginMob.showHideElements([['#td-login-mob',1],['#td-register-mob',0],['#td-forgot-pass-mob',0]]);});});var tdLoginMob={};(function(){'use strict';tdLoginMob={email_pattern:/^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,handlerLogin:function(){var loginEmailEl=jQuery('#login_email-mob'),loginPassEl=jQuery('#login_pass-mob');if(loginEmailEl.length&&loginPassEl.length){var loginEmailVal=loginEmailEl.val().trim(),loginPassVal=loginPassEl.val().trim();if(loginEmailVal&&loginPassVal){tdLoginMob.addRemoveClass(['.td_display_err',1,'td_display_msg_ok']);tdLoginMob.showHideMsg(td_please_wait);tdLoginMob.doAction('td_mod_login',loginEmailVal,'',loginPassVal);}else{tdLoginMob.showHideMsg(td_email_user_pass_incorrect);}}},handlerRegister:function(){var registerEmailEl=jQuery('#register_email-mob'),registerUserEl=jQuery('#register_user-mob');if(registerEmailEl.length&&registerUserEl.length){var registerEmailVal=registerEmailEl.val().trim(),registerUserVal=registerUserEl.val().trim();if(tdLoginMob.email_pattern.test(registerEmailVal)&&registerUserVal){tdLoginMob.addRemoveClass(['.td_display_err',1,'td_display_msg_ok']);tdLoginMob.showHideMsg(td_please_wait);tdLoginMob.doAction('td_mod_register',registerEmailVal,registerUserVal,'');}else{tdLoginMob.showHideMsg(td_email_user_incorrect);}}},handlerForgotPass:function(){var forgotEmailEl=jQuery('#forgot_email-mob');if(forgotEmailEl.length){var forgotEmailVal=forgotEmailEl.val().trim();if(tdLoginMob.email_pattern.test(forgotEmailVal)){tdLoginMob.addRemoveClass(['.td_display_err',1,'td_display_msg_ok']);tdLoginMob.showHideMsg(td_please_wait);tdLoginMob.doAction('td_mod_remember_pass',forgotEmailVal,'','');}else{tdLoginMob.showHideMsg(td_email_incorrect);}}},showHideElements:function(ids_array){if(ids_array.constructor===Array){var length=ids_array.length;for(var i=0;i<length;i++){if(ids_array[i].constructor===Array&&2===ids_array[i].length){var jqElement=jQuery(ids_array[i][0]);if(jqElement.length){if(1===ids_array[i][1]){jqElement.removeClass('td-login-hide').addClass('td-login-show');}else{jqElement.removeClass('td-login-show').addClass('td-login-hide');}}}}}},addRemoveClass:function(param){if(param.constructor===Array&&3===param.length){var jqElement=jQuery(param[0]);if(jqElement.length){if(1===param[1]){jqElement.addClass(param[2]);}else{jqElement.removeClass(param[2]);}}}},showHideMsg:function(msg){var tdDisplayErr=jQuery('.td_display_err');if(tdDisplayErr.length){if(undefined!==msg&&msg.constructor===String&&msg.length>0){tdDisplayErr.show();tdDisplayErr.html(msg);}else{tdDisplayErr.hide();tdDisplayErr.html('');}}},clearFields:function(){jQuery('#login_email-mob').val('');jQuery('#login_pass-mob').val('');jQuery('#register_email-mob').val('');jQuery('#register_user-mob').val('');jQuery('#forgot_email-mob').val('');},doAction:function(sent_action,sent_email,sent_user,sent_pass){jQuery.ajax({type:'POST',url:td_ajax_url,data:{action:sent_action,email:sent_email,user:sent_user,pass:sent_pass},success:function(data,textStatus,XMLHttpRequest){var td_data_object=jQuery.parseJSON(data);switch(td_data_object[0]){case'login':if(1===td_data_object[1]){location.reload(true);}else{tdLoginMob.addRemoveClass(['.td_display_err',0,'td_display_msg_ok']);tdLoginMob.showHideMsg(td_data_object[2]);}
break;case'register':if(1===td_data_object[1]){tdLoginMob.addRemoveClass(['.td_display_err',1,'td_display_msg_ok']);}else{tdLoginMob.addRemoveClass(['.td_display_err',0,'td_display_msg_ok']);}
tdLoginMob.showHideMsg(td_data_object[2]);break;case'remember_pass':if(1===td_data_object[1]){tdLoginMob.addRemoveClass(['.td_display_err',1,'td_display_msg_ok']);}else{tdLoginMob.addRemoveClass(['.td_display_err',0,'td_display_msg_ok']);}
tdLoginMob.showHideMsg(td_data_object[2]);break;}},error:function(MLHttpRequest,textStatus,errorThrown){}});}};})();var tdDemoMenu;(function(jQuery,undefined){'use strict';tdDemoMenu={mousePosX:0,mousePosY:0,startTimeout:undefined,startInterval:undefined,_extendedDemo:false,_currentElement:undefined,_startExtendedTimeout:undefined,_startExtendedInterval:undefined,init:function(){jQuery(document).mousemove(function(event){if(event.pageX||event.pageY){tdDemoMenu.mousePosX=event.pageX;tdDemoMenu.mousePosY=event.pageY;}else if(event.clientX||event.clientY){tdDemoMenu.mousePosX=event.clientX+ document.body.scrollLeft+ document.documentElement.scrollLeft;tdDemoMenu.mousePosY=event.clientY+ document.body.scrollTop+ document.documentElement.scrollTop;}});jQuery(document).mouseleave(function(event){if(undefined!==tdDemoMenu.startTimeout){window.clearTimeout(tdDemoMenu.startTimeout);}
if(undefined!==tdDemoMenu.startInterval){window.clearInterval(tdDemoMenu.startInterval);}
jQuery('.td-screen-demo:first').css('visibility','hidden');jQuery('.td-screen-demo-extend:first').hide();});jQuery('#td-theme-settings').find('.td-skin-wrap:first').scroll(function(event){var theTarget=event.currentTarget,tdSkinScroll=jQuery(this).find('.td-skin-scroll:first');if(theTarget.clientHeight+ theTarget.scrollTop<theTarget.scrollHeight){tdSkinScroll.css({bottom:0});}else{tdSkinScroll.css({bottom:-40});}});jQuery('#td-theme-settings').find('.td-skin-scroll:first').click(function(event){var theTarget=event.currentTarget,tdSkinWrap=jQuery(this).closest('.td-skin-wrap');tdSkinWrap.animate({scrollTop:tdSkinWrap.scrollTop()+ 200},{duration:800,easing:'easeInOutQuart'});}).mouseenter(function(event){if(undefined!==tdDemoMenu.startTimeout){window.clearTimeout(tdDemoMenu.startTimeout);}
if(undefined!==tdDemoMenu.startInterval){window.clearInterval(tdDemoMenu.startInterval);}
jQuery('#td-theme-settings').find('.td-screen-demo:first').css('visibility','hidden');});jQuery('.td-set-theme-style-link').hover(function(event){if(undefined!==tdDemoMenu.startTimeout){window.clearTimeout(tdDemoMenu.startTimeout);}
if(undefined!==tdDemoMenu.startInterval){window.clearInterval(tdDemoMenu.startInterval);}
var
cssClassContainer='td-set-theme-style',$this=jQuery(this),$thisContainer=$this.closest('.'+ cssClassContainer),jQueryDisplayEl=jQuery('.td-screen-demo:first'),refTopValue=0,topValue=0,rightValue=0,paddingRightValue=0,extraRightValue=0,jqWPAdminBar=jQuery('#wpadminbar');var imgElement=jQueryDisplayEl.find('img:first'),dataImgUrl=$this.data('img-url');if(imgElement.length){imgElement.attr('src',dataImgUrl);}else{jQueryDisplayEl.html('<img src="'+ dataImgUrl+'"/>');}
if(0===jQuery('.td-set-theme-style-link').index(this)%2){rightValue=$thisContainer.outerWidth(true)*2;}else{var $thisPrevContainer=$thisContainer.prev('.'+ cssClassContainer);if($thisPrevContainer.length){rightValue=$thisPrevContainer.outerWidth(true)- extraRightValue;paddingRightValue=$thisPrevContainer.outerWidth(true)+ extraRightValue;}
event.preventDefault();event.stopPropagation();}
topValue=event.pageY- document.body.scrollTop-(jQueryDisplayEl.outerHeight(true)/ 2 );if(topValue+ jQueryDisplayEl.outerHeight(true)>window.innerHeight){topValue-=(topValue+ jQueryDisplayEl.outerHeight(true))- window.innerHeight;}
if(jqWPAdminBar.length){refTopValue=jqWPAdminBar.outerHeight(true);}else{refTopValue=0;}
if(refTopValue>topValue){topValue=refTopValue;}
var cssSettings={'top':topValue,'right':rightValue,'padding-right':paddingRightValue,'width':''},dataWidthPreview=jQueryDisplayEl.data('width-preview');if(paddingRightValue>0){cssSettings.width=dataWidthPreview+ paddingRightValue;}
jQueryDisplayEl.css(cssSettings);jQueryDisplayEl.data('right-value',rightValue+ paddingRightValue);jQueryDisplayEl.css('visibility','visible');},function(event){jQuery('.td-screen-demo-extend:first').hide();var
jQueryDisplayEl=jQuery('.td-screen-demo:first'),existingRightValue=jQueryDisplayEl.css('right'),existingExtraRightValue=jQueryDisplayEl.css('padding-right'),existingWidthValue=jQueryDisplayEl.css('width'),newRightValue=parseInt(existingRightValue.replace('px','')),newExtraRightValue=parseInt(existingExtraRightValue.replace('px','')),step=10,startTimeoutWait=50,startIntervalWait=15,newWidthValue=parseInt(existingWidthValue.replace('px',''));var $this=jQuery(this);tdDemoMenu._currentElement=$this;var tdThemeSettingsWidth=parseInt(jQuery('#td-theme-settings').css('width').replace('px',''));if(newExtraRightValue>0){if(undefined!==tdDemoMenu.startTimeout){window.clearTimeout(tdDemoMenu.startTimeout);tdDemoMenu.startTimeout=undefined;}
if(undefined!==tdDemoMenu.startInterval){window.clearInterval(tdDemoMenu.startInterval);tdDemoMenu.startInterval=undefined;}
tdDemoMenu.startTimeout=setTimeout(function(){tdDemoMenu._extendedDemo=true;tdDemoMenu.startInterval=setInterval(function(){var dataWidthPreview=jQueryDisplayEl.data('width-preview');newRightValue+=step;newExtraRightValue-=step;newWidthValue-=step;var mousePositionFound=false;if(newExtraRightValue<=0||newWidthValue<dataWidthPreview||tdDemoMenu.mousePosX<=jQuery(window).width()- tdThemeSettingsWidth||tdDemoMenu.mousePosX>=jQuery(window).width()- newRightValue){if(undefined!==tdDemoMenu.startTimeout){window.clearTimeout(tdDemoMenu.startTimeout);tdDemoMenu.startTimeout=undefined;}
if(undefined!==tdDemoMenu.startInterval){window.clearInterval(tdDemoMenu.startInterval);tdDemoMenu.startInterval=undefined;}
newExtraRightValue=0;newRightValue=jQueryDisplayEl.data('right-value');newWidthValue=dataWidthPreview;if(tdDemoMenu.mousePosX>=jQuery(window).width()- newRightValue){mousePositionFound=true;}}
jQueryDisplayEl.css({'right':newRightValue,'padding-right':newExtraRightValue,'width':newWidthValue});if(mousePositionFound){tdDemoMenu._extendedDemo=false;tdDemoMenu._checkMousePosition();}else if(undefined===tdDemoMenu.startTimeout&&undefined===tdDemoMenu.startInterval){tdDemoMenu._extendedDemo=true;tdDemoMenu._showExtendedScreenDemo();}},startIntervalWait);},startTimeoutWait);}else{jQueryDisplayEl.css('visibility','hidden');}}).mousemove(function(event){tdDemoMenu._moveScreenDemo(event);});jQuery('.td-screen-demo').hover(function(event){jQuery(this).css('visibility','visible');tdDemoMenu._resetTdScreeDemoExtendWidth();},function(event){if(undefined!==tdDemoMenu.startTimeout){window.clearTimeout(tdDemoMenu.startTimeout);tdDemoMenu.startTimeout=undefined;}
if(undefined!==tdDemoMenu.startInterval){window.clearInterval(tdDemoMenu.startInterval);tdDemoMenu.startInterval=undefined;}
jQuery(this).css('visibility','hidden');jQuery('.td-screen-demo-extend:first').hide();}).mousemove(function(event){});jQuery('.td-screen-demo-extend').hover(function(event){if(tdDemoMenu._extendedDemo){tdDemoMenu._extendedDemo=false;var
$this=jQuery(this),$tdScreenDemo=jQuery('.td-screen-demo:first'),columnWidth=parseInt(jQuery('#td-theme-settings').css('width').replace('px',''))/ 2,step=10,startTimeoutWait=50,startIntervalWait=15,newWidthValue=columnWidth;$this.css({'width':columnWidth+'px','top':$tdScreenDemo.css('top')});$this.show();$tdScreenDemo.css('visibility','visible');tdDemoMenu._startExtendedTimeout=setTimeout(function(){tdDemoMenu._startExtendedInterval=setInterval(function(){newWidthValue-=step;var mousePositionFound=false;if(newWidthValue<0||tdDemoMenu.mousePosX<=jQuery(window).width()- columnWidth- newWidthValue){if(undefined!==tdDemoMenu._startExtendedTimeout){window.clearTimeout(tdDemoMenu._startExtendedTimeout);tdDemoMenu._startExtendedTimeout=undefined;}
if(undefined!==tdDemoMenu._startExtendedInterval){window.clearInterval(tdDemoMenu._startExtendedInterval);tdDemoMenu._startExtendedInterval=undefined;}
if(tdDemoMenu.mousePosX<=jQuery(window).width()- columnWidth- newWidthValue){mousePositionFound=true;}
newWidthValue=columnWidth;$this.hide();}
$this.css({'width':newWidthValue,'top':$tdScreenDemo.css('top')});if(mousePositionFound){tdDemoMenu._checkMousePosition();}},startIntervalWait);},startTimeoutWait);}},function(event){if(undefined!==tdDemoMenu._startExtendedTimeout){window.clearTimeout(tdDemoMenu._startExtendedTimeout);tdDemoMenu._startExtendedTimeout=undefined;}
if(undefined!==tdDemoMenu._startExtendedInterval){window.clearInterval(tdDemoMenu._startExtendedInterval);tdDemoMenu._startExtendedInterval=undefined;}
tdDemoMenu._resetTdScreeDemoExtendWidth();jQuery(this).hide();jQuery('.td-screen-demo:first').css('visibility','hidden');}).mousemove(function(event){});},_moveScreenDemo:function(event){var
$screenDemo=jQuery('.td-screen-demo:first'),$WPAdminBar=jQuery('#wpadminbar'),newTopValue=event.pageY- document.body.scrollTop-($screenDemo.outerHeight(true)/ 2 ),refTopValue=0;if($WPAdminBar.length){refTopValue=$WPAdminBar.outerHeight(true);}else{refTopValue=0;}
if(refTopValue>newTopValue){newTopValue=refTopValue;}
if(newTopValue<0){newTopValue=0;}else if(jQuery(window).height()- $screenDemo.outerHeight(true)/ 2 < event.pageY - document.body.scrollTop ) {newTopValue=jQuery(window).height()- $screenDemo.outerHeight(true);}
$screenDemo.css('top',newTopValue);},_resetTdScreeDemoExtendWidth:function(){var widthColumn=parseInt(jQuery('#td-theme-settings').css('width').replace('px',''))/ 2;jQuery('.td-screen-demo-extend:first').css({'width':widthColumn+'px'});},_showExtendedScreenDemo:function(){if(tdDemoMenu._extendedDemo){jQuery('.td-screen-demo-extend:first').css({top:jQuery('.td-screen-demo:first').css('top')}).show();}},_checkMousePosition:function(){var theElement;jQuery('.td-set-theme-style-link').each(function(index,element){tdDemoMenu._log(index);var $this=jQuery(element),cssClassContainer='td-set-theme-style',$thisContainer=$this.closest('.'+ cssClassContainer);var verticalPosition=false;var horizontalPosition=false;if(0===jQuery('.td-set-theme-style-link').index(element)%2){if(parseInt($thisContainer.position().top)+ parseInt(jQuery(window).scrollTop())<tdDemoMenu.mousePosY&&tdDemoMenu.mousePosY<parseInt($thisContainer.position().top)+ parseInt(jQuery(window).scrollTop())+ parseInt($thisContainer.outerHeight())){verticalPosition=true;if(parseInt(jQuery(window).width())- 2*parseInt($thisContainer.outerWidth())<tdDemoMenu.mousePosX&&tdDemoMenu.mousePosX<parseInt(jQuery(window).width())- parseInt($thisContainer.outerWidth())){horizontalPosition=true;}}}else{var $thisPrevContainer=$thisContainer.prev('.'+ cssClassContainer);if($thisPrevContainer.length){if(parseInt($thisPrevContainer.position().top)+ parseInt(jQuery(window).scrollTop())<tdDemoMenu.mousePosY&&tdDemoMenu.mousePosY<(parseInt($thisPrevContainer.position().top)+ parseInt(jQuery(window).scrollTop())+ parseInt($thisPrevContainer.outerHeight()))){verticalPosition=true;if(parseInt(jQuery(window).width())- parseInt($thisContainer.outerWidth())<tdDemoMenu.mousePosX&&tdDemoMenu.mousePosX<parseInt(jQuery(window).width())){horizontalPosition=true;}}}}
if(verticalPosition&&horizontalPosition){theElement=element;return false;}});if(undefined===theElement){jQuery('#td-theme-settings').find('.td-screen-demo:first').css('visibility','hidden');}else{jQuery(theElement).mouseenter();}},_log:function(msg){}};})(jQuery);(function(){'use strict';var td_current_panel_stat=td_read_site_cookie('td_show_panel');if('hide'===td_current_panel_stat){var jQueryObj=jQuery('#td-theme-settings');if(jQueryObj.length){jQueryObj.removeClass('td-theme-settings-small');jQuery('#td-theme-set-hide').html('DEMOS');}}else{jQuery('#td-theme-set-hide').html('CLOSE');}})();jQuery().ready(function(){'use strict';if(tdDetect.isIos===false&&tdDetect.isAndroid===false){tdDemoMenu.init();}
jQuery('#td-theme-set-hide').click(function(event){event.preventDefault();event.stopPropagation();var $this=jQuery(this),jQueryObj=jQuery('#td-theme-settings');if(jQueryObj.hasClass('td-theme-settings-small')){jQueryObj.removeClass('td-theme-settings-small');jQueryObj.addClass('td-theme-settings-closed');$this.html('DEMOS');setTimeout(function(){jQueryObj.addClass('td-ts-closed-no-transition');},450);td_set_cookies_life(['td_show_panel','hide',86400000]);}else{jQueryObj.removeClass('td-ts-closed-no-transition');jQueryObj.addClass('td-theme-settings-small');jQueryObj.removeClass('td-theme-settings-closed');$this.html('CLOSE');td_set_cookies_life(['td_show_panel','show',86400000]);}});});var tdTrendingNow={};(function(){"use strict";tdTrendingNow={items:[],item:function item(){this.blockUid='';this.trendingNowAutostart='manual';this.trendingNowTimer=0;this.trendingNowPosition=0;this.trendingNowPosts=[];this._is_initialized=false;},init:function(){tdTrendingNow.items=[];},_initialize_item:function(item){if(true===item._is_initialized){return;}
item._is_initialized=true;},addItem:function(item){if(typeof item.blockUid==='undefined'){throw'item.blockUid is not valid';}
if(typeof item.trendingNowPosts==='undefined'||item.trendingNowPosts.length<1){throw'item.trendingNowPosts is not valid';}
tdTrendingNow.items.push(item);tdTrendingNow._initialize_item(item);tdTrendingNow.tdTrendingNowAutoStart(item.blockUid);},deleteItem:function(blockUid){for(var cnt=0;cnt<tdTrendingNow.items.length;cnt++){if(tdTrendingNow.items[cnt].blockUid===blockUid){tdTrendingNow.items.splice(cnt,1);return true;}}
return false;},itemPrev:function(blockUid){var i,currentItem;for(var cnt=0;cnt<tdTrendingNow.items.length;cnt++){if(tdTrendingNow.items[cnt].blockUid===blockUid){currentItem=tdTrendingNow.items[cnt];}}
if((blockUid!==undefined)&&(1>=currentItem.trendingNowPosts.length)){return;}
if('manual'!==currentItem.trendingNowAutostart){clearInterval(currentItem.trendingNowTimer);currentItem.trendingNowTimer=setInterval(function(){tdTrendingNow.tdTrendingNowChangeText([blockUid,'left'],true);},3000);}
tdTrendingNow.tdTrendingNowChangeText([blockUid,'right'],false);},itemNext:function(blockUid){var i,currentItem;for(var cnt=0;cnt<tdTrendingNow.items.length;cnt++){if(tdTrendingNow.items[cnt].blockUid===blockUid){currentItem=tdTrendingNow.items[cnt];}}
if((blockUid!==undefined)&&(1>=currentItem.trendingNowPosts.length)){return;}
if('manual'!==currentItem.trendingNowAutostart){clearInterval(currentItem.trendingNowTimer);currentItem.trendingNowTimer=setInterval(function(){tdTrendingNow.tdTrendingNowChangeText([blockUid,'left'],true);},3000);}
tdTrendingNow.tdTrendingNowChangeText([blockUid,'left'],true);},tdTrendingNowChangeText:function(array_param,to_right){var blockUid=array_param[0],movingDirection=array_param[1],postsArrayListForThisTrend=[],postsArrayListPosition=0,itemPosition;for(var cnt=0;cnt<tdTrendingNow.items.length;cnt++){if(tdTrendingNow.items[cnt].blockUid===blockUid){itemPosition=cnt;postsArrayListForThisTrend=tdTrendingNow.items[cnt].trendingNowPosts;postsArrayListPosition=tdTrendingNow.items[cnt].trendingNowPosition;}}
if(typeof itemPosition!=='undefined'&&itemPosition!==null){var previousPostArrayListPosition=postsArrayListPosition,post_count=postsArrayListForThisTrend.length- 1;if('left'===movingDirection){postsArrayListPosition+=1;if(postsArrayListPosition>post_count){postsArrayListPosition=0;}}else{postsArrayListPosition-=1;if(postsArrayListPosition<0){postsArrayListPosition=post_count;}}
tdTrendingNow.items[itemPosition].trendingNowPosition=postsArrayListPosition;postsArrayListForThisTrend[previousPostArrayListPosition].css('opacity',0);postsArrayListForThisTrend[previousPostArrayListPosition].css('z-index',0);for(var trending_post in postsArrayListForThisTrend){if(true===postsArrayListForThisTrend.hasOwnProperty(trending_post)){postsArrayListForThisTrend[trending_post].removeClass('td_animated_xlong td_fadeInLeft td_fadeInRight td_fadeOutLeft td_fadeOutRight');}}
postsArrayListForThisTrend[postsArrayListPosition].css('opacity',1);postsArrayListForThisTrend[postsArrayListPosition].css('z-index',1);if(true===to_right){postsArrayListForThisTrend[previousPostArrayListPosition].addClass('td_animated_xlong td_fadeOutLeft');postsArrayListForThisTrend[postsArrayListPosition].addClass('td_animated_xlong td_fadeInRight');}else{postsArrayListForThisTrend[previousPostArrayListPosition].addClass('td_animated_xlong td_fadeOutRight');postsArrayListForThisTrend[postsArrayListPosition].addClass('td_animated_xlong td_fadeInLeft');}}},tdTrendingNowAutoStart:function(blockUid){for(var cnt=0;cnt<tdTrendingNow.items.length;cnt++){if(tdTrendingNow.items[cnt].blockUid===blockUid&&tdTrendingNow.items[cnt].trendingNowAutostart!=='manual'){tdTrendingNow.items[cnt].trendingNowTimer=tdTrendingNow.setTimerChangingText(blockUid);}}},setTimerChangingText:function(blockUid){return setInterval(function(){tdTrendingNow.tdTrendingNowChangeText([blockUid,'left'],true);},3000);}};tdTrendingNow.init();})();"use strict";var td_history={td_history_change_event:false,init:function(){window.addEventListener('popstate',function(event){td_history.td_history_change_event=true;if(typeof(event.state)!="undefined"&&event.state!=null){jQuery("#"+ event.state.slide_id).iosSlider("goToSlide",event.state.current_slide);}});},replace_history_entry:function(data){if(tdDetect.hasHistory===false){return;}
history.replaceState(data,null);},add_history_entry:function(data,query_parm_id,query_parm_value){if(tdDetect.hasHistory===false){return;}
if(query_parm_value==''){history.pushState(data,null,null);return;}
var td_query_page_id=td_history.get_query_parameter('p');if(td_query_page_id!=''){if(query_parm_value==1){history.pushState(data,null,'?p='+ td_query_page_id);}else{history.pushState(data,null,'?p='+ td_query_page_id+'&'+ query_parm_id+'='+ query_parm_value);}}else{if(query_parm_value==1){history.pushState(data,null,td_history.get_mod_rewrite_base_url());}else{history.pushState(data,null,td_history.get_mod_rewrite_base_url()+ query_parm_value+'/');}}},get_mod_rewrite_base_url:function(){var full_url=document.URL;if(full_url.charAt(full_url.length- 1)=='/'){full_url=full_url.slice(0,- 1);}
if(td_history.get_mod_rewrite_pagination(document.URL)===false){return document.URL;}
return full_url.substring(0,full_url.lastIndexOf("/"))+'/';},get_mod_rewrite_pagination:function(){var full_url=document.URL;if(full_url.charAt(full_url.length- 1)=='/'){full_url=full_url.slice(0,- 1);}
var last_url_parameter=full_url.substring(full_url.lastIndexOf("/")+1,full_url.length);if(td_history.isInt(last_url_parameter)){return last_url_parameter;}
return false;},get_current_page:function(query_parm_id){var td_query_page_id=td_history.get_query_parameter('p');if(td_query_page_id!=''){var cur_page=td_history.get_query_parameter(query_parm_id);if(cur_page!=''){return cur_page;}else{return 1;}}else{var cur_page=td_history.get_mod_rewrite_pagination();if(cur_page!==false){return cur_page;}else{return 1;}}},isInt:function(n){return n%1===0;},get_query_parameter:function(name){name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var regex=new RegExp("[\\?&]"+ name+"=([^&#]*)"),results=regex.exec(location.search);return results==null?"":decodeURIComponent(results[1].replace(/\+/g," "));},slide_changed_callback:function(args){if(td_history.td_history_change_event===true){td_history.td_history_change_event=false;return;}
var current_slide=args.currentSlideNumber;var slide_id=args.sliderContainerObject.attr('id');td_history.add_history_entry({current_slide:current_slide,slide_id:slide_id},'slide',current_slide);}};if(window.history&&window.history.pushState){td_history.init();}
var tdSmartSidebar={};(function(){'use strict';tdSmartSidebar={hasItems:false,items:[],scroll_window_scrollTop_last:0,tds_snap_menu:tdUtil.getBackendVar('tds_snap_menu'),is_enabled:true,is_enabled_state_run_once:false,is_disabled_state_run_once:false,is_tablet_grid:false,_view_port_current_interval_index:tdViewport.getCurrentIntervalIndex(),item:function(){this.content_jquery_obj='';this.sidebar_jquery_obj='';this.sidebar_top=0;this.sidebar_bottom=0;this.sidebar_height=0;this.content_top=0;this.content_bottom=0;this.sidebar_state='';this.case_1_run_once=false;this.case_2_run_once=false;this.case_3_run_once=false;this.case_3_last_sidebar_height=0;this.case_3_last_content_height=0;this.case_4_run_once=false;this.case_4_last_menu_offset=0;this.case_5_run_once=false;this.case_6_run_once=false;},add_item:function(item){tdSmartSidebar.hasItems=true;item.sidebar_jquery_obj.prepend('<div class="clearfix"></div>').append('<div class="clearfix"></div>');item.content_jquery_obj.prepend('<div class="clearfix"></div>').append('<div class="clearfix"></div>');tdSmartSidebar.items.push(item);},td_events_scroll:function(scrollTop){if(false===tdSmartSidebar.hasItems){return;}
if(false===tdSmartSidebar.is_enabled){if(false===tdSmartSidebar.is_disabled_state_run_once){tdSmartSidebar.is_disabled_state_run_once=true;for(var item_index=0;item_index<tdSmartSidebar.items.length;item_index++){tdSmartSidebar.items[item_index].sidebar_jquery_obj.css({width:'auto',position:'static',top:'auto',bottom:'auto'});}
tdSmartSidebar.log('smart_sidebar_disabled');}
return;}
window.requestAnimationFrame(function(){var td_affix_menu_computed_height=0;if(''!==tdSmartSidebar.tds_snap_menu){td_affix_menu_computed_height=tdAffix._get_menu_affix_height();if('smart_snap_always'===tdAffix.tds_snap_menu){td_affix_menu_computed_height+=tdAffix.menu_offset;}}
if(('undefined'!==typeof window.tdThemeName)&&('Newspaper'===window.tdThemeName)){td_affix_menu_computed_height+=20;}
var scroll_direction='';if(scrollTop!==tdSmartSidebar.scroll_window_scrollTop_last){if(scrollTop>tdSmartSidebar.scroll_window_scrollTop_last){scroll_direction='down';}else{scroll_direction='up';}}
tdSmartSidebar.scroll_window_scrollTop_last=scrollTop;var view_port_height=jQuery(window).height();var view_port_bottom=scrollTop+ view_port_height;scrollTop=scrollTop+ td_affix_menu_computed_height;for(var item_index=0;item_index<tdSmartSidebar.items.length;item_index++){var cur_item_ref=tdSmartSidebar.items[item_index];cur_item_ref.content_top=cur_item_ref.content_jquery_obj.offset().top;cur_item_ref.content_height=cur_item_ref.content_jquery_obj.height();cur_item_ref.content_bottom=cur_item_ref.content_top+ cur_item_ref.content_height;cur_item_ref.sidebar_top=cur_item_ref.sidebar_jquery_obj.offset().top;cur_item_ref.sidebar_height=cur_item_ref.sidebar_jquery_obj.height();cur_item_ref.sidebar_bottom=cur_item_ref.sidebar_top+ cur_item_ref.sidebar_height;if(cur_item_ref.content_height<=cur_item_ref.sidebar_height){cur_item_ref.sidebar_state='case_6_content_too_small';}else if(cur_item_ref.sidebar_height<view_port_height){var ref_value=cur_item_ref.content_top;if(!tdAffix.is_menu_affix&&('undefined'!==typeof window.tdThemeName)&&('Newsmag'===window.tdThemeName)&&('smart_snap_always'===tdAffix.tds_snap_menu)){ref_value+=td_affix_menu_computed_height;}
if(tdSmartSidebar._is_smaller_or_equal(scrollTop,ref_value)){cur_item_ref.sidebar_state='case_2_top_of_content';}
else if(true===tdSmartSidebar._is_smaller(cur_item_ref.sidebar_bottom,scrollTop)){if(tdSmartSidebar._is_smaller(scrollTop,cur_item_ref.content_bottom- cur_item_ref.sidebar_height)){cur_item_ref.sidebar_state='case_4_fixed_up';}else{cur_item_ref.sidebar_state='case_3_bottom_of_content';}}else{if(tdSmartSidebar._is_smaller_or_equal(cur_item_ref.content_bottom,cur_item_ref.sidebar_bottom)){if('up'===scroll_direction&&tdSmartSidebar._is_smaller_or_equal(scrollTop,cur_item_ref.sidebar_top)){cur_item_ref.sidebar_state='case_4_fixed_up';}else{cur_item_ref.sidebar_state='case_3_bottom_of_content';}}else{if(cur_item_ref.content_bottom- scrollTop>=cur_item_ref.sidebar_height){cur_item_ref.sidebar_state='case_4_fixed_up';}else{cur_item_ref.sidebar_state='case_3_bottom_of_content';}}}}else{if(true===tdSmartSidebar._is_smaller(cur_item_ref.sidebar_bottom,scrollTop)){if(true===tdSmartSidebar._is_smaller_or_equal(scrollTop,cur_item_ref.sidebar_top)&&true===tdSmartSidebar._is_smaller_or_equal(cur_item_ref.content_top,scrollTop)){cur_item_ref.sidebar_state='case_4_fixed_up';}
else if(true===tdSmartSidebar._is_smaller(cur_item_ref.sidebar_bottom,view_port_bottom)&&true===tdSmartSidebar._is_smaller(cur_item_ref.sidebar_bottom,cur_item_ref.content_bottom)&&cur_item_ref.content_bottom>=view_port_bottom){cur_item_ref.sidebar_state='case_1_fixed_down';}
else{cur_item_ref.sidebar_state='case_3_bottom_of_content';}}
else if(true===tdSmartSidebar._is_smaller(cur_item_ref.sidebar_bottom,view_port_bottom)&&true===tdSmartSidebar._is_smaller(cur_item_ref.sidebar_bottom,cur_item_ref.content_bottom)&&'down'===scroll_direction&&cur_item_ref.content_bottom>=view_port_bottom){cur_item_ref.sidebar_state='case_1_fixed_down';}
else if(true===tdSmartSidebar._is_smaller_or_equal(cur_item_ref.sidebar_top,cur_item_ref.content_top)&&'up'===scroll_direction&&cur_item_ref.content_bottom>=view_port_bottom){cur_item_ref.sidebar_state='case_2_top_of_content';}
else if((true===tdSmartSidebar._is_smaller_or_equal(cur_item_ref.content_bottom,cur_item_ref.sidebar_bottom)&&'down'===scroll_direction)||cur_item_ref.content_bottom<view_port_bottom){cur_item_ref.sidebar_state='case_3_bottom_of_content';}
else if(true===tdSmartSidebar._is_smaller_or_equal(scrollTop,cur_item_ref.sidebar_top)&&'up'===scroll_direction&&true===tdSmartSidebar._is_smaller_or_equal(cur_item_ref.content_top,scrollTop)){cur_item_ref.sidebar_state='case_4_fixed_up';}
else if('up'===scroll_direction&&true===tdSmartSidebar._is_smaller_or_equal(view_port_bottom,cur_item_ref.sidebar_top))
{cur_item_ref.sidebar_state='case_2_top_of_content';}
if(('case_1_fixed_down'===cur_item_ref.sidebar_state&&'up'===scroll_direction)||('case_4_fixed_up'===cur_item_ref.sidebar_state&&'down'===scroll_direction)){cur_item_ref.sidebar_state='case_5_absolute';}}
var column_content_width=0;var view_port_current_item=tdViewport.getCurrentIntervalItem();if(null!==view_port_current_item){column_content_width=view_port_current_item.sidebarWidth;}
switch(cur_item_ref.sidebar_state){case'case_1_fixed_down':if(true===cur_item_ref.case_1_run_once){break;}
tdSmartSidebar.log('sidebar_id: '+ item_index+' '+ cur_item_ref.sidebar_state);cur_item_ref.case_1_run_once=true;cur_item_ref.case_2_run_once=false;cur_item_ref.case_3_run_once=false;cur_item_ref.case_4_run_once=false;cur_item_ref.case_5_run_once=false;cur_item_ref.case_6_run_once=false;cur_item_ref.sidebar_jquery_obj.css({width:column_content_width,position:'fixed',top:'auto',bottom:'0','z-index':'1'});break;case'case_2_top_of_content':if(true===cur_item_ref.case_2_run_once){break;}
tdSmartSidebar.log('sidebar_id: '+ item_index+' '+ cur_item_ref.sidebar_state);cur_item_ref.case_1_run_once=false;cur_item_ref.case_2_run_once=true;cur_item_ref.case_3_run_once=false;cur_item_ref.case_4_run_once=false;cur_item_ref.case_5_run_once=false;cur_item_ref.case_6_run_once=false;cur_item_ref.sidebar_jquery_obj.css({width:'auto',position:'static',top:'auto',bottom:'auto'});break;case'case_3_bottom_of_content':if(true===cur_item_ref.case_3_run_once&&cur_item_ref.case_3_last_sidebar_height===cur_item_ref.sidebar_height&&cur_item_ref.case_3_last_content_height===cur_item_ref.content_height){break;}
tdSmartSidebar.log('sidebar_id: '+ item_index+' '+ cur_item_ref.sidebar_state);cur_item_ref.case_1_run_once=false;cur_item_ref.case_2_run_once=false;cur_item_ref.case_3_run_once=true;cur_item_ref.case_3_last_sidebar_height=cur_item_ref.sidebar_height;cur_item_ref.case_3_last_content_height=cur_item_ref.content_height;cur_item_ref.case_4_run_once=false;cur_item_ref.case_5_run_once=false;cur_item_ref.case_6_run_once=false;cur_item_ref.sidebar_jquery_obj.css({width:column_content_width,position:'absolute',top:cur_item_ref.content_bottom- cur_item_ref.sidebar_height- cur_item_ref.content_top,bottom:'auto'});break;case'case_4_fixed_up':if(true===cur_item_ref.case_4_run_once&&cur_item_ref.case_4_last_menu_offset===td_affix_menu_computed_height){break;}
tdSmartSidebar.log('sidebar_id: '+ item_index+' '+ cur_item_ref.sidebar_state);cur_item_ref.case_1_run_once=false;cur_item_ref.case_2_run_once=false;cur_item_ref.case_3_run_once=false;cur_item_ref.case_4_run_once=true;cur_item_ref.case_4_last_menu_offset=td_affix_menu_computed_height;cur_item_ref.case_5_run_once=false;cur_item_ref.case_6_run_once=false;cur_item_ref.sidebar_jquery_obj.css({width:column_content_width,position:'fixed',top:td_affix_menu_computed_height,bottom:'auto'});break;case'case_5_absolute':if(true===cur_item_ref.case_5_run_once){break;}
tdSmartSidebar.log('sidebar_id: '+ item_index+' '+ cur_item_ref.sidebar_state);cur_item_ref.case_1_run_once=false;cur_item_ref.case_2_run_once=false;cur_item_ref.case_3_run_once=false;cur_item_ref.case_4_run_once=false;cur_item_ref.case_5_run_once=true;cur_item_ref.case_6_run_once=false;cur_item_ref.sidebar_jquery_obj.css({width:column_content_width,position:'absolute',top:cur_item_ref.sidebar_top- cur_item_ref.content_top,bottom:'auto'});break;case'case_6_content_too_small':if(true===cur_item_ref.case_6_run_once){break;}
tdSmartSidebar.log('sidebar_id: '+ item_index+' '+ cur_item_ref.sidebar_state);cur_item_ref.case_1_run_once=false;cur_item_ref.case_2_run_once=false;cur_item_ref.case_3_run_once=false;cur_item_ref.case_4_run_once=false;cur_item_ref.case_5_run_once=false;cur_item_ref.case_6_run_once=true;cur_item_ref.sidebar_jquery_obj.css({width:'auto',position:'static',top:'auto',bottom:'auto'});break;}}});},compute:function(){tdSmartSidebar.td_events_scroll(jQuery(window).scrollTop());},reset_run_once_flags:function(){for(var item_index=0;item_index<tdSmartSidebar.items.length;item_index++){tdSmartSidebar.items[item_index].case_1_run_once=false;tdSmartSidebar.items[item_index].case_2_run_once=false;tdSmartSidebar.items[item_index].case_3_run_once=false;tdSmartSidebar.items[item_index].case_3_last_sidebar_height=0;tdSmartSidebar.items[item_index].case_3_last_content_height=0;tdSmartSidebar.items[item_index].case_4_run_once=false;tdSmartSidebar.items[item_index].case_4_last_menu_offset=0;tdSmartSidebar.items[item_index].case_5_run_once=false;tdSmartSidebar.items[item_index].case_6_run_once=false;}},td_events_resize:function(){tdSmartSidebar._view_port_current_interval_index=tdViewport.getCurrentIntervalIndex();switch(tdSmartSidebar._view_port_current_interval_index){case 0:tdSmartSidebar.is_enabled=false;tdSmartSidebar.is_enabled_state_run_once=false;break;case 1:if(false===tdSmartSidebar.is_tablet_grid){tdSmartSidebar.reset_run_once_flags();tdSmartSidebar.is_tablet_grid=true;tdSmartSidebar.is_desktop_grid=false;tdSmartSidebar.log('view port tablet');}
tdSmartSidebar.is_enabled=true;tdSmartSidebar.is_disabled_state_run_once=false;if(false===tdSmartSidebar.is_enabled_state_run_once){tdSmartSidebar.is_enabled_state_run_once=true;tdSmartSidebar.log('smart_sidebar_enabled');}
break;case 2:case 3:if(true===tdSmartSidebar.is_tablet_grid){tdSmartSidebar.reset_run_once_flags();tdSmartSidebar.is_tablet_grid=false;tdSmartSidebar.is_desktop_grid=true;tdSmartSidebar.log('view port desktop');}
tdSmartSidebar.is_enabled=true;tdSmartSidebar.is_disabled_state_run_once=false;if(false===tdSmartSidebar.is_enabled_state_run_once){tdSmartSidebar.is_enabled_state_run_once=true;tdSmartSidebar.log('smart_sidebar_enabled');}
break;}
tdSmartSidebar.compute();},log:function(msg){},_is_smaller_or_equal:function(number1,number2){if(Math.abs(number1- number2)>=1){if(number1<number2){return true;}else{return false;}}else{return true;}},_is_smaller:function(number1,number2){if(Math.abs(number1- number2)>=1){if(number1<number2){return true;}else{return false;}}else{return false;}}};})();var tdInfiniteLoader={};(function(){"use strict";tdInfiniteLoader={hasItems:false,items:[],item:function(){this.uid='';this.jqueryObj='';this.bottomTop=0;this.isVisibleCallbackEnabled=true;this.isVisibleCallback=function(){};},addItem:function(item){tdInfiniteLoader.hasItems=true;tdInfiniteLoader.items.push(item);},computeTopDistances:function(){if(tdInfiniteLoader.hasItems===false){return;}
jQuery.each(tdInfiniteLoader.items,function(index,v_event){var topTop=tdInfiniteLoader.items[index].jqueryObj.offset().top;tdInfiniteLoader.items[index].bottomTop=topTop+ tdInfiniteLoader.items[index].jqueryObj.height();});tdInfiniteLoader.computeEvents();},computeEvents:function(){if(tdInfiniteLoader.hasItems===false){return;}
var topToViewportBottom=jQuery(window).height()+ jQuery(window).scrollTop();jQuery.each(tdInfiniteLoader.items,function(index,item){if(tdInfiniteLoader.items[index].bottomTop<topToViewportBottom+ 700){if(tdInfiniteLoader.items[index].isVisibleCallbackEnabled===true){tdInfiniteLoader.items[index].isVisibleCallbackEnabled=false;tdInfiniteLoader.items[index].isVisibleCallback();}}});},enable_is_visible_callback:function($item_uid){jQuery.each(tdInfiniteLoader.items,function(index,item){if(item.uid===$item_uid){tdInfiniteLoader.items[index].isVisibleCallbackEnabled=true;return false;}});}};jQuery('.td_ajax_infinite').each(function(){var tdInfiniteLoaderItem=new tdInfiniteLoader.item();tdInfiniteLoaderItem.jqueryObj=jQuery(this);tdInfiniteLoaderItem.uid=jQuery(this).data('td_block_id');tdInfiniteLoaderItem.isVisibleCallback=function(){var currentBlockObj=tdBlocks.tdGetBlockObjById(tdInfiniteLoaderItem.jqueryObj.data('td_block_id'));if(currentBlockObj.ajax_pagination_infinite_stop===''||currentBlockObj.td_current_page<(parseInt(currentBlockObj.ajax_pagination_infinite_stop)+ 1)){currentBlockObj.td_current_page++;tdBlocks.tdAjaxDoBlockRequest(currentBlockObj,'infinite_load');}else{if(currentBlockObj.td_current_page<currentBlockObj.max_num_pages){setTimeout(function(){jQuery('#infinite-lm-'+ currentBlockObj.id).css('display','block').css('visibility','visible');},400);}}};tdInfiniteLoader.addItem(tdInfiniteLoaderItem);});jQuery(window).load(function(){tdInfiniteLoader.computeTopDistances();});jQuery().ready(function(){tdInfiniteLoader.computeTopDistances();});})();"use strict";var Froogaloop=function(){function e(a){return new e.fn.init(a)}function h(a,c,b){if(!b.contentWindow.postMessage)return!1;var f=b.getAttribute("src").split("?")[0],a=JSON.stringify({method:a,value:c});"//"===f.substr(0,2)&&(f=window.location.protocol+f);b.contentWindow.postMessage(a,f)}function j(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(f){}"ready"==b&&!i&&(i=!0);if(a.origin!=k)return!1;var a=c.value,e=c.data,g=""===g?null:c.player_id;c=g?d[g][b]:d[b];b=[];if(!c)return!1;void 0!==a&&b.push(a);e&&b.push(e);g&&b.push(g);return 0<b.length?c.apply(null,b):c.call()}function l(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},i=!1,k="";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;a=this.element.getAttribute("src");"//"===a.substr(0,2)&&(a=window.location.protocol+a);for(var a=a.split("/"),c="",b=0,f=a.length;b<f;b++){if(3>b)c+=a[b];else break;2>b&&(c+="/")}k=c;return this},api:function(a,c){if(!this.element||!a)return!1;var b=this.element,f=""!==b.id?b.id:null,d=!c||!c.constructor||!c.call||!c.apply?c:null,e=c&&c.constructor&&c.call&&c.apply?c:null;e&&l(a,e,f);h(a,d,b);return this},addEvent:function(a,c){if(!this.element)return!1;var b=this.element,d=""!==b.id?b.id:null;l(a,c,d);"ready"!=a?h("addEventListener",a,b):"ready"==a&&i&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b;a:{if((b=""!==c.id?c.id:null)&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&h("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",j,!1):window.attachEvent("onmessage",j);return window.Froogaloop=window.$f=e}();var tdCustomEvents={};(function(){'use strict';tdCustomEvents={_callback_scroll:function(){tdAnimationScroll.compute_all_items();},_callback_resize:function(){},_lazy_callback_scroll_100:function(){if(true===tdAnimationStack.activated){tdAnimationStack.td_events_scroll();}},_lazy_callback_scroll_500:function(){},_lazy_callback_resize_100:function(){tdPullDown.td_events_resize();tdBackstr.td_events_resize();tdAnimationScroll.td_events_resize();},_lazy_callback_resize_500:function(){if(true===tdAnimationStack.activated){tdAnimationStack.td_events_resize();}
for(var i=0;i<td_backstretch_items.length;i++){tdAnimationScroll.reinitialize_item(td_backstretch_items[i],true);td_compute_backstretch_item(td_backstretch_items[i]);}
tdAnimationScroll.compute_all_items();setMenuMinHeight();}};})();var tdEvents={};(function(){'use strict';tdEvents={scroll_event_slow_run:false,scroll_event_medium_run:false,resize_event_slow_run:false,resize_event_medium_run:false,scroll_window_scrollTop:0,window_pageYOffset:window.pageYOffset,window_innerHeight:window.innerHeight,window_innerWidth:window.innerWidth,init:function(){jQuery(window).scroll(function(){tdEvents.scroll_event_slow_run=true;tdEvents.scroll_event_medium_run=true;tdEvents.scroll_window_scrollTop=jQuery(window).scrollTop();tdEvents.window_pageYOffset=window.pageYOffset;tdAffix.td_events_scroll(tdEvents.scroll_window_scrollTop);tdSmartSidebar.td_events_scroll(tdEvents.scroll_window_scrollTop);tdCustomEvents._callback_scroll();});jQuery(window).resize(function(){tdEvents.resize_event_slow_run=true;tdEvents.resize_event_medium_run=true;tdEvents.window_innerHeight=window.innerHeight;tdEvents.window_innerWidth=window.innerWidth;tdCustomEvents._callback_resize();});setInterval(function(){tdViewport.detectChanges();if(tdEvents.scroll_event_medium_run){tdEvents.scroll_event_medium_run=false;tdInfiniteLoader.computeEvents();tdCustomEvents._lazy_callback_scroll_100();}
if(tdEvents.resize_event_medium_run){tdEvents.resize_event_medium_run=false;tdSmartSidebar.td_events_resize();tdCustomEvents._lazy_callback_resize_100();}},100);setInterval(function(){if(tdEvents.scroll_event_slow_run){tdEvents.scroll_event_slow_run=false;td_events_scroll_scroll_to_top(tdEvents.scroll_window_scrollTop);td_more_articles_box.td_events_scroll(tdEvents.scroll_window_scrollTop);tdCustomEvents._lazy_callback_scroll_500();}
if(tdEvents.resize_event_slow_run){tdEvents.resize_event_slow_run=false;tdAffix.compute_wrapper();tdAffix.compute_top();tdDetect.runIsPhoneScreen();tdCustomEvents._lazy_callback_resize_500();}},500);}};tdEvents.init();})();var tdAjaxCount={};(function(){'use strict';tdAjaxCount={tdGetViewsCountsAjax:function(postType,arrayIds){var pageTypeAction='td_ajax_get_views';if('post'===postType){pageTypeAction='td_ajax_update_views';}
jQuery.ajax({type:'POST',url:td_ajax_url,cache:true,data:{action:pageTypeAction,td_post_ids:arrayIds},success:function(data,textStatus,XMLHttpRequest){var tdAjaxPostCounts=jQuery.parseJSON(data);if(tdAjaxPostCounts instanceof Object){jQuery.each(tdAjaxPostCounts,function(idPost,value){var currentPostCount='.td-nr-views-'+ idPost;jQuery(currentPostCount).html(value);});}},error:function(MLHttpRequest,textStatus,errorThrown){}});}};})();var tdYoutubePlayers={};var tdVimeoPlayers={};jQuery().ready(function(){'use strict';tdYoutubePlayers.init();tdVimeoPlayers.init();});(function(){'use strict';tdYoutubePlayers={tdPlayerContainer:'player_youtube',players:[],init:function(){var jqWrapperPlaylistPlayerYoutube=jQuery('.td_wrapper_playlist_player_youtube');for(var i=0;i<jqWrapperPlaylistPlayerYoutube.length;i++){var jqPlayerWrapper=jQuery(jqWrapperPlaylistPlayerYoutube[i]),youtubePlayer=tdYoutubePlayers.addPlayer(jqPlayerWrapper),playerId=youtubePlayer.tdPlayerContainer;jqPlayerWrapper.parent().find('.td_youtube_control').data('player-id',playerId);var videoYoutubeElements=jqPlayerWrapper.parent().find('.td_click_video_youtube');for(var j=0;j<videoYoutubeElements.length;j++){jQuery(videoYoutubeElements[j]).data('player-id',playerId);if(j+ 1<videoYoutubeElements.length){jQuery(videoYoutubeElements[j]).data('next-video-id',jQuery(videoYoutubeElements[j+ 1]).data('video-id'));}else{jQuery(videoYoutubeElements[j]).data('next-video-id',jQuery(videoYoutubeElements[0]).data('video-id'));}}
if('1'==jqPlayerWrapper.data('autoplay')){youtubePlayer.autoplay=1;}
var firstVideo=jqPlayerWrapper.data('first-video');if(''!==firstVideo){youtubePlayer.tdPlaylistIdYoutubeVideoRunning=firstVideo;youtubePlayer.playVideo(firstVideo);}}
jQuery('.td_click_video_youtube').click(function(){var videoId=jQuery(this).data('video-id'),playerId=jQuery(this).data('player-id');if(undefined!==playerId&&''!==playerId&&undefined!==videoId&&''!==videoId){tdYoutubePlayers.operatePlayer(playerId,'play',videoId);}});jQuery('.td_youtube_control').click(function(){var playerId=jQuery(this).data('player-id');if(undefined!==playerId&&''!==playerId){if(jQuery(this).hasClass('td-sp-video-play')){tdYoutubePlayers.operatePlayer(playerId,'play');}else{tdYoutubePlayers.operatePlayer(playerId,'pause');}}});},addPlayer:function(jqPlayerWrapper){var containerId=tdYoutubePlayers.tdPlayerContainer+'_'+ tdYoutubePlayers.players.length,tdPlayer=tdYoutubePlayers.createPlayer(containerId,jqPlayerWrapper);tdYoutubePlayers.players.push(tdPlayer);return tdPlayer;},operatePlayer:function(playerId,option,videoId){for(var i=0;i<tdYoutubePlayers.players.length;i++){if(tdYoutubePlayers.players[i].tdPlayerContainer==playerId){var youtubePlayer=tdYoutubePlayers.players[i];youtubePlayer.playStatus();if('play'===option){youtubePlayer.autoplay=1;if(undefined===videoId){youtubePlayer.playerPlay();}else{youtubePlayer.playVideo(videoId);}}else if('pause'==option){tdYoutubePlayers.players[i].playerPause();}
break;}}},createPlayer:function(containerId,jqPlayerWrapper){var youtubePlayer={tdYtPlayer:'',tdPlayerContainer:containerId,autoplay:0,tdPlaylistIdYoutubeVideoRunning:'',jqTDWrapperVideoPlaylist:jqPlayerWrapper.closest('.td_wrapper_video_playlist'),jqPlayerWrapper:jqPlayerWrapper,jqControlPlayer:'',_videoId:'',playVideo:function(videoId){youtubePlayer._videoId=videoId;if('undefined'===typeof(YT)||'undefined'===typeof(YT.Player)){window.onYouTubePlayerAPIReady=function(){for(var i=0;i<tdYoutubePlayers.players.length;i++){tdYoutubePlayers.players[i].loadPlayer();}};jQuery.getScript('https://www.youtube.com/player_api').done(function(script,textStatus){});}else{youtubePlayer.loadPlayer(videoId);}},loadPlayer:function(videoId){var videoIdToPlay=youtubePlayer._videoId;if(undefined!==videoId){videoIdToPlay=videoId;}
if(undefined===videoIdToPlay){return;}
youtubePlayer.tdPlaylistIdYoutubeVideoRunning=videoIdToPlay;var current_video_name=window.td_youtube_list_ids['td_'+ youtubePlayer.tdPlaylistIdYoutubeVideoRunning]['title'],current_video_time=window.td_youtube_list_ids['td_'+ youtubePlayer.tdPlaylistIdYoutubeVideoRunning]['time'];youtubePlayer.jqTDWrapperVideoPlaylist.find('.td_click_video_youtube').removeClass('td_video_currently_playing');youtubePlayer.jqTDWrapperVideoPlaylist.find('.td_'+ videoIdToPlay).addClass('td_video_currently_playing');youtubePlayer.jqTDWrapperVideoPlaylist.find('.td_current_video_play_title_youtube').html(current_video_name);youtubePlayer.jqTDWrapperVideoPlaylist.find('.td_current_video_play_time_youtube').html(current_video_time);youtubePlayer.jqPlayerWrapper.html('<div id='+ youtubePlayer.tdPlayerContainer+'></div>');youtubePlayer.jqControlPlayer=youtubePlayer.jqTDWrapperVideoPlaylist.find('.td_youtube_control');youtubePlayer.tdYtPlayer=new YT.Player(youtubePlayer.tdPlayerContainer,{playerVars:{autoplay:youtubePlayer.autoplay},height:'100%',width:'100%',videoId:videoIdToPlay,events:{'onStateChange':youtubePlayer.onPlayerStateChange}});},onPlayerStateChange:function(event){if(event.data===YT.PlayerState.PLAYING){youtubePlayer.pauseStatus();}else if(event.data===YT.PlayerState.ENDED){youtubePlayer.playStatus();youtubePlayer.autoplay=1;var nextVideoId='',tdVideoCurrentlyPlaying=youtubePlayer.jqTDWrapperVideoPlaylist.find('.td_video_currently_playing');if(tdVideoCurrentlyPlaying.length){var nextSibling=jQuery(tdVideoCurrentlyPlaying).next('.td_click_video_youtube');if(nextSibling.length){nextVideoId=jQuery(nextSibling).data('video-id');}}
if(''!==nextVideoId){youtubePlayer.playVideo(nextVideoId);}}else if(YT.PlayerState.PAUSED){youtubePlayer.playStatus();}},playerPlay:function(){youtubePlayer.tdYtPlayer.playVideo();},playerPause:function(){youtubePlayer.tdYtPlayer.pauseVideo();},playStatus:function(){youtubePlayer.jqControlPlayer.removeClass('td-sp-video-pause').addClass('td-sp-video-play');},pauseStatus:function(){youtubePlayer.jqControlPlayer.removeClass('td-sp-video-play').addClass('td-sp-video-pause');}};return youtubePlayer;}};tdVimeoPlayers={tdPlayerContainer:'player_vimeo',players:[],existingAutoplay:false,init:function(){var jqTDWrapperPlaylistPlayerVimeo=jQuery('.td_wrapper_playlist_player_vimeo');for(var i=0;i<jqTDWrapperPlaylistPlayerVimeo.length;i++){var vimeoPlayer=tdVimeoPlayers.addPlayer(jQuery(jqTDWrapperPlaylistPlayerVimeo[i]));if(0!==vimeoPlayer.autoplay){tdVimeoPlayers.existingAutoplay=true;}}
jQuery('.td_click_video_vimeo').click(function(){var videoId=jQuery(this).data('video-id'),playerId=jQuery(this).data('player-id');if(undefined!==playerId&&''!==playerId&&undefined!==videoId&&''!==videoId){tdVimeoPlayers.operatePlayer(playerId,'play',videoId);}});jQuery('.td_vimeo_control').click(function(){var playerId=jQuery(this).data('player-id');if(undefined!==playerId&&''!==playerId){if(jQuery(this).hasClass('td-sp-video-play')){tdVimeoPlayers.operatePlayer(playerId,'play');}else{tdVimeoPlayers.operatePlayer(playerId,'pause');}}});},addPlayer:function(jqPlayerWrapper){var playerId=tdVimeoPlayers.tdPlayerContainer+'_'+ tdVimeoPlayers.players.length,vimeoPlayer=tdVimeoPlayers.createPlayer(playerId,jqPlayerWrapper);jqPlayerWrapper.parent().find('.td_vimeo_control').data('player-id',playerId);var vimeoVideoElements=jqPlayerWrapper.parent().find('.td_click_video_vimeo');for(var j=0;j<vimeoVideoElements.length;j++){jQuery(vimeoVideoElements[j]).data('player-id',playerId);if(j+ 1<vimeoVideoElements.length){jQuery(vimeoVideoElements[j]).data('next-video-id',jQuery(vimeoVideoElements[j+ 1]).data('video-id'));}else{jQuery(vimeoVideoElements[j]).data('next-video-id',jQuery(vimeoVideoElements[0]).data('video-id'));}}
if('1'==jqPlayerWrapper.data('autoplay')){vimeoPlayer.autoplay=1;}
var firstVideo=jqPlayerWrapper.data('first-video');if(undefined!==firstVideo&&''!==firstVideo){vimeoPlayer.createPlayer(firstVideo);}
tdVimeoPlayers.players.push(vimeoPlayer);return vimeoPlayer;},operatePlayer:function(playerId,option,videoId){for(var i=0;i<tdVimeoPlayers.players.length;i++){if(tdVimeoPlayers.players[i].playerId==playerId){var vimeoPlayer=tdVimeoPlayers.players[i];if('play'===option){vimeoPlayer.autoplay=1;if(undefined!==videoId){tdVimeoPlayers.existingAutoplay=false;vimeoPlayer.createPlayer(videoId);}else{vimeoPlayer.playerPlay();}}else if('pause'===option){vimeoPlayer.playerPause();}
break;}}},createPlayer:function(playerId,jqPlayerWrapper){var vimeoPlayer={playerId:playerId,jqTDWrapperVideoPlaylist:jqPlayerWrapper.closest('.td_wrapper_video_playlist'),jqPlayerWrapper:jqPlayerWrapper,currentVideoPlaying:'',player:'',jqControlPlayer:'',autoplay:0,createPlayer:function(videoId){if(''!==videoId){this.currentVideoPlaying=videoId;var autoplay='',current_video_name=window.td_vimeo_list_ids['td_'+ videoId]['title'],current_video_time=window.td_vimeo_list_ids['td_'+ videoId]['time'];vimeoPlayer.jqTDWrapperVideoPlaylist.find('.td_click_video_vimeo').removeClass('td_video_currently_playing');vimeoPlayer.jqTDWrapperVideoPlaylist.find('.td_'+ videoId).addClass('td_video_currently_playing');vimeoPlayer.jqTDWrapperVideoPlaylist.find('.td_current_video_play_title_vimeo').html(current_video_name);vimeoPlayer.jqTDWrapperVideoPlaylist.find('.td_current_video_play_time_vimeo').html(current_video_time);vimeoPlayer.jqControlPlayer=vimeoPlayer.jqTDWrapperVideoPlaylist.find('.td_vimeo_control');if(!tdVimeoPlayers.existingAutoplay&&0!==vimeoPlayer.autoplay){autoplay='&autoplay=1';if(tdDetect.isMobileDevice){vimeoPlayer.playStatus();}else{vimeoPlayer.pauseStatus();}}else{vimeoPlayer.playStatus();}
vimeoPlayer.jqPlayerWrapper.html('<iframe id="'+ vimeoPlayer.playerId+'" src="https://player.vimeo.com/video/'+ videoId+'?api=1&player_id='+ vimeoPlayer.playerId+''+ autoplay+'"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');vimeoPlayer.createVimeoObjectPlayer(jQuery);}},createVimeoObjectPlayer:function($){var player='',iframe=$('#'+ vimeoPlayer.playerId);if(iframe.length){player=$f(iframe[0]);vimeoPlayer.player=player;player.addEvent('ready',function(){player.addEvent('play',function(data){vimeoPlayer.pauseStatus();vimeoPlayer.autoplay=1;});player.addEvent('pause',function(data){vimeoPlayer.playStatus();});player.addEvent('finish',function(data){var nextVideoId='',tdVideoCurrentlyPlaying=vimeoPlayer.jqTDWrapperVideoPlaylist.find('.td_video_currently_playing');if(tdVideoCurrentlyPlaying.length){var nextSibling=jQuery(tdVideoCurrentlyPlaying).next('.td_click_video_vimeo');if(nextSibling.length){nextVideoId=jQuery(nextSibling).data('video-id');}}
if(''!==nextVideoId){vimeoPlayer.createPlayer(nextVideoId);if(tdDetect.isMobileDevice){vimeoPlayer.playStatus();}else{vimeoPlayer.pauseStatus();}}else{vimeoPlayer.playStatus();}});});}},playerPlay:function(){vimeoPlayer.autoplay=1;vimeoPlayer.player.api('play');},playerPause:function(){vimeoPlayer.player.api('pause');},playStatus:function(){vimeoPlayer.jqControlPlayer.removeClass('td-sp-video-pause').addClass('td-sp-video-play');},pauseStatus:function(){vimeoPlayer.jqControlPlayer.removeClass('td-sp-video-play').addClass('td-sp-video-pause');}};return vimeoPlayer;}};})();"use strict";jQuery(window).load(function(){td_resize_smartlist_sliders_and_update();});jQuery().ready(function(){td_resize_smartlist_sliders_and_update();});function td_resize_smartlist_slides(args){var slide_displayd=args.currentSlideNumber;var current_slider=jQuery(args.data.obj[0]).attr("id");if(!tdDetect.isIe8){jQuery("#"+ current_slider).css("overflow","none");jQuery("#"+ current_slider+" .td-item").css("overflow","visible");}
var setHeight=0;setHeight=jQuery("#"+ current_slider+"_item_"+ slide_displayd).outerHeight(true);jQuery("#"+ current_slider+", #"+ current_slider+" .td-slider").css({height:setHeight});}
function td_resize_smartlist_sliders_and_update(){jQuery(document).find('.td-smart-list-slider').each(function(){var current_slider=jQuery(this).attr("id");if(!tdDetect.isIe8){jQuery("#"+ current_slider).css("overflow","none");jQuery("#"+ current_slider+" .td-item").css("overflow","visible");}
var setHeight=0;setHeight=jQuery("#"+ current_slider+"_item_"+ td_history.get_current_page("slide")).outerHeight(true);jQuery("#"+ current_slider+", #"+ current_slider+" .td-slider").css({height:setHeight});if(tdDetect.isAndroid){setTimeout(function(){jQuery("#"+ current_slider).iosSlider("update");},2000);}});}
function td_resize_normal_slide(args){var slide_displayd=0;var current_slider=jQuery(args.data.obj[0]).attr("id");var window_wight=td_get_document_width();if(!tdDetect.isIe8){jQuery("#"+ current_slider).css("overflow","none");jQuery("#"+ current_slider+" .td-item").css("overflow","visible");}
var setHeight=0;var slide_outer_width=jQuery("#"+ current_slider+"_item_"+ slide_displayd).outerWidth(true);var max_wight_resize=780;if(tdDetect.isAndroid){max_wight_resize=1000;}
if(window_wight<max_wight_resize&&!tdDetect.isIpad){if(slide_outer_width>300){setHeight=slide_outer_width*0.5;}else{setHeight=slide_outer_width;}
jQuery("#"+ current_slider+", #"+ current_slider+" .td-slider, #"+ current_slider+" .td-slider .td-module-thumb").css({height:setHeight});}}
function td_resize_normal_slide_and_update(args){var slide_displayd=0;var current_slider=jQuery(args.data.obj[0]).attr("id");var window_wight=td_get_document_width();if(!tdDetect.isIe8){jQuery("#"+ current_slider).css("overflow","none");jQuery("#"+ current_slider+" .td-item").css("overflow","visible");}
var setHeight=0;var slide_outer_width=jQuery("#"+ current_slider+"_item_"+ slide_displayd).outerWidth(true);var max_wight_resize=780;if(tdDetect.isAndroid){max_wight_resize=1000;}
if(window_wight<max_wight_resize&&!tdDetect.isIpad){if(slide_outer_width>300){setHeight=slide_outer_width*0.5;}else{setHeight=slide_outer_width;}
jQuery("#"+ current_slider+", #"+ current_slider+" .td-slider, #"+ current_slider+" .td-slider .td-module-thumb").css({height:setHeight});setTimeout(function(){jQuery("#"+ current_slider).iosSlider("update");},2000);}}
var tdPullDown={};(function(){'use strict';tdPullDown={_view_port_interval_index:tdViewport.INTERVAL_INITIAL_INDEX,reinitialize_items_at_change_view_port:false,items:[],item:function item(){this.blockUid='';this.horizontal_jquery_obj='';this.vertical_jquery_obj='';this.container_jquery_obj='';this.horizontal_element_css_class='';this.minimum_elements=2;this.excluded_jquery_elements=[];this._horizontal_extra_space=1;this._horizontal_elements=[];this._vertical_elements=[];this._vertical_ul_jquery_obj='';this._vertical_jquery_obj_outer_width=0;this._is_initialized=false;},init:function(){tdPullDown._view_port_interval_index=tdViewport.getCurrentIntervalIndex();tdPullDown.items=[];},add_item:function(item){if(item.vertical_jquery_obj.length!==1){throw'item.vertical_jquery_obj is more or less than one!';}
if(item.horizontal_jquery_obj.length!==1){throw'item.horizontal_jquery_obj is more or less than one!';}
if(item.container_jquery_obj.length!==1){throw'item.container_jquery_obj is more or less than one!';}
if(item.horizontal_element_css_class===''){throw'item.horizontal_element_css_class is empty';}
tdPullDown.items.push(item);tdPullDown._initialize_item(item);tdPullDown._compute_item(item);},deleteItem:function(blockUid){for(var cnt=0;cnt<tdPullDown.items.length;cnt++){if(tdPullDown.items[cnt].blockUid===blockUid){tdPullDown.items.splice(cnt,1);return true;}}
return false;},_initialize_item:function(item){if(true===item._is_initialized){return;}
item._vertical_ul_jquery_obj=item.vertical_jquery_obj.find('ul:first');if(0===item._vertical_ul_jquery_obj.length){tdPullDown.log('Item can\' be initialized. The vertical list doesn\'t have an \'ul\' container');return;}
var elements=item.horizontal_jquery_obj.find('.'+ item.horizontal_element_css_class);var local_jquery_element=null;var local_object=null;elements.each(function(index,element){local_jquery_element=jQuery(element);local_jquery_element.css('-webkit-transition','opacity 0.2s');local_jquery_element.css('-moz-transition','opacity 0.2s');local_jquery_element.css('-o-transition','opacity 0.2s');local_jquery_element.css('transition','opacity 0.2s');local_jquery_element.css('opacity','1');local_object={jquery_object:local_jquery_element,calculated_width:local_jquery_element.outerWidth(true)};item._horizontal_elements.push(local_object);});item._vertical_jquery_obj_outer_width=item.vertical_jquery_obj.outerWidth(true);item.vertical_jquery_obj.css('display','none');var horizontal_jquery_obj_padding_left=item.horizontal_jquery_obj.css('padding-left');if((undefined!==horizontal_jquery_obj_padding_left)&&(''!==horizontal_jquery_obj_padding_left)){item._horizontal_extra_space+=parseInt(horizontal_jquery_obj_padding_left.replace('px',''));}
var horizontal_jquery_obj_padding_right=item.horizontal_jquery_obj.css('padding-right');if((undefined!==horizontal_jquery_obj_padding_right)&&(''!==horizontal_jquery_obj_padding_right)){item._horizontal_extra_space+=parseInt(horizontal_jquery_obj_padding_right.replace('px',''));}
var horizontal_jquery_obj_margin_left=item.horizontal_jquery_obj.css('margin-left');if((undefined!==horizontal_jquery_obj_margin_left)&&(''!==horizontal_jquery_obj_margin_left)){item._horizontal_extra_space+=parseInt(horizontal_jquery_obj_margin_left.replace('px',''));}
var horizontal_jquery_obj_margin_right=item.horizontal_jquery_obj.css('margin-right');if((undefined!==horizontal_jquery_obj_margin_right)&&(''!==horizontal_jquery_obj_margin_right)){item._horizontal_extra_space+=parseInt(horizontal_jquery_obj_margin_right.replace('px',''));}
var horizontal_jquery_obj_border_left=item.horizontal_jquery_obj.css('border-left');if((undefined!==horizontal_jquery_obj_border_left)&&(''!==horizontal_jquery_obj_border_left)){item._horizontal_extra_space+=parseInt(horizontal_jquery_obj_border_left.replace('px',''));}
var horizontal_jquery_obj_border_right=item.horizontal_jquery_obj.css('border-right');if((undefined!==horizontal_jquery_obj_border_right)&&(''!==horizontal_jquery_obj_border_right)){item._horizontal_extra_space+=parseInt(horizontal_jquery_obj_border_right.replace('px',''));}
item._is_initialized=true;},_get_horizontal_elements_width:function(item){var sum_width=0;for(var i=item._horizontal_elements.length- 1;i>=0;i--){sum_width+=item._horizontal_elements[i].calculated_width;}
return sum_width;},_reinitialize_all_items:function(){for(var i=tdPullDown.items.length- 1;i>=0;i--){tdPullDown._reinitialize_item(tdPullDown.items[i]);}},_reinitialize_item:function(item){if(false===item._is_initialized){return;}
item._is_initialized=false;item.horizontal_jquery_obj.html(item.horizontal_jquery_obj.html()+ item._vertical_ul_jquery_obj.html());item._vertical_ul_jquery_obj.html('');item._horizontal_elements=[];item._vertical_elements=[];item._horizontal_extra_space=1;tdPullDown._initialize_item(item);},_compute_item:function(item){if(false===item._is_initialized){return;}
tdPullDown._prepare_horizontal_header(item,true);var space_for_horizontal_elements=0;var container_jquery_width=item.container_jquery_obj.css('width');if((undefined!==container_jquery_width)&&(''!==container_jquery_width)){space_for_horizontal_elements=container_jquery_width.replace('px','');for(var i=item.excluded_jquery_elements.length- 1;i>=0;i--){space_for_horizontal_elements-=item.excluded_jquery_elements[i].contents().outerWidth(true);}}
if(item._vertical_elements.length>0){space_for_horizontal_elements-=item._vertical_jquery_obj_outer_width;}
space_for_horizontal_elements-=tdPullDown._get_horizontal_elements_width(item);space_for_horizontal_elements-=item._horizontal_extra_space;var local_current_element;while(space_for_horizontal_elements<0){if((item.minimum_elements!==0)&&(item._horizontal_elements.length<=item.minimum_elements)){tdPullDown._make_all_elements_vertical(item);tdPullDown._prepare_horizontal_header(item);return;}else{if(0===item._vertical_elements.length){space_for_horizontal_elements-=item._vertical_jquery_obj_outer_width;}
local_current_element=tdPullDown._make_element_vertical(item);space_for_horizontal_elements+=local_current_element.calculated_width;}}
if((0!==item.minimum_elements)&&(0===item._horizontal_elements.length)&&(item._vertical_elements.length>0)&&(space_for_horizontal_elements>=item._vertical_elements[0].calculated_width)){var local_necessary_space=0;for(var j=0;(j<item.minimum_elements)&&(j<item._vertical_elements.length);j++){local_necessary_space+=item._vertical_elements[j].calculated_width;}
var local_space=0;var local_minimum_elements=item.minimum_elements;while((local_minimum_elements>0)&&(item._vertical_elements.length>0)&&(space_for_horizontal_elements>=local_necessary_space)){local_current_element=tdPullDown._make_element_horizontal(item);if(null!==local_current_element){local_space+=local_current_element.calculated_width;local_minimum_elements--;}else{tdPullDown._prepare_horizontal_header(item);return;}}
space_for_horizontal_elements-=local_space;}
while(((item._horizontal_elements.length>0)||(0===item._horizontal_elements.length&&0===item.minimum_elements))&&(item._vertical_elements.length>0)&&(space_for_horizontal_elements>=item._vertical_elements[0].calculated_width)){local_current_element=tdPullDown._make_element_horizontal(item);if(null!==local_current_element){space_for_horizontal_elements-=local_current_element.calculated_width;}else{tdPullDown._prepare_horizontal_header(item);return;}}
if((1===item._vertical_elements.length)&&(space_for_horizontal_elements+ item._vertical_jquery_obj_outer_width>=item._vertical_elements[0].calculated_width)){tdPullDown._make_element_horizontal(item);}
tdPullDown._prepare_horizontal_header(item);},_prepare_horizontal_header:function _prepare_horizontal_header(item,clear_margin){var block_title_jquery_obj=item.horizontal_jquery_obj.parent().siblings('.block-title:first');if(1===block_title_jquery_obj.length){var content_element=block_title_jquery_obj.find('span:first');if(1===content_element.length){if('undefined'!==typeof(clear_margin)&&true===clear_margin){content_element.css('margin-right',0);}else{if(0===item._horizontal_elements.length){content_element.css('margin-right',item._vertical_jquery_obj_outer_width+'px');}else{content_element.css('margin-right',0);}}}}},_compute_all_items:function(){for(var i=tdPullDown.items.length- 1;i>=0;i--){if(tdPullDown.items[i].constructor===tdPullDown.item){tdPullDown._compute_item(tdPullDown.items[i]);}}},_make_element_horizontal:function(item){if(false===item._is_initialized||0===item._vertical_elements.length){return null;}
var local_element=item._vertical_elements.shift();if(0===item._vertical_elements.length){item.vertical_jquery_obj.css('display','none');}
item._horizontal_elements.push(local_element);local_element.jquery_object.css('opacity','0');local_element.jquery_object.detach().appendTo(item.horizontal_jquery_obj);setTimeout(function(){local_element.jquery_object.css('opacity','1');},50);return local_element;},_make_element_vertical:function(item){if(false===item._is_initialized||0===item._horizontal_elements.length){return null;}
var local_element=item._horizontal_elements.pop();if(0===item._vertical_elements.length){item.vertical_jquery_obj.css('display','');}
item._vertical_elements.unshift(local_element);local_element.jquery_object.detach().prependTo(item._vertical_ul_jquery_obj);return local_element;},_make_all_elements_vertical:function(item){while(item._horizontal_elements.length>0){tdPullDown._make_element_vertical(item);}},td_events_resize:function(){if(0===tdPullDown.items.length){return;}
if(true===tdPullDown.reinitialize_items_at_change_view_port&&tdPullDown._view_port_interval_index!==tdViewport.getCurrentIntervalIndex()){tdPullDown._reinitialize_all_items();}
tdPullDown._compute_all_items();},log:function log(msg){}};tdPullDown.init();})();var tdAnimationScroll={};(function(){'use strict';tdAnimationScroll={items:[],rAFIndex:0,animation_running:false,item:function item(){this.percent_value=0;this.animation_callback=null;this.jqueryObj='';this.wrapper_jquery_obj=undefined;this.top_marker_jquery_obj='';this.full_height=0;this.offset_top='';this.offset_bottom_top='';this.properties={};this.computed_item_properties={};this.redraw=false;this.top_is_out=false;this._is_initialized=false;this.computation_stopped=false;this.add_item_property=function add_item_property(name,start_percent,end_percent,start_value,end_value,easing){if(start_percent>=end_percent){return;}
if(undefined===this.properties[name]){this.properties[name]={computed_value:'',settings:[]};if(0!==start_percent){this.properties[name].settings[this.properties[name].settings.length]={start_percent:0,end_percent:start_percent,start_value:start_value,end_value:start_value,easing:''};}
this.properties[name].settings[this.properties[name].settings.length]={start_percent:start_percent,end_percent:end_percent,start_value:start_value,end_value:end_value,easing:easing};this.properties[name].settings[this.properties[name].settings.length]={start_percent:end_percent,end_percent:100,start_value:end_value,end_value:end_value,easing:''};}else{var last_setting=this.properties[name].settings[this.properties[name].settings.length- 1];if(last_setting.start_percent!==start_percent){this.properties[name].settings[this.properties[name].settings.length- 1]={start_percent:last_setting.start_percent,end_percent:start_percent,start_value:last_setting.end_value,end_value:last_setting.end_value,easing:''                        };

                        this.properties[name].settings[this.properties[name].settings.length] = {
                            start_percent: start_percent,
                            end_percent: end_percent,
                            start_value: start_value,
                            end_value: end_value,
                            easing: easing
                        };
                    } else {
                        this.properties[name].settings[this.properties[name].settings.length - 1] = {
                            start_percent: start_percent,
                            end_percent: end_percent,
                            start_value: start_value,
                            end_value: end_value,
                            easing: easing
                        };
                    }

                    if (100 !== end_percent) {
                        this.properties[name].settings[this.properties[name].settings.length] = {
                            start_percent: end_percent,
                            end_percent: 100,
                            start_value: end_value,
                            end_value: end_value,
                            easing: ''
                        };
                    }
                }
            };


            /**
             * remove an item property
             *
             * @param name {String} The name of the property
             * @returns {boolean}
             */
            this.remove_item_property = function remove_item_property(name) {
                if (undefined === this.properties[name]) {
                    return false;
                }

                delete this.properties[name];

                return true;
            };
        },




        /**
        * - function used to init the tdAnimationScroll object
        * - it must be called before adding any item
        * - the _view_port_interval_index flag is initialized
        * - the items list is empty initialized
        */
        init: function init() {

            tdAnimationScroll.items = [];
        },




        /**
         * - used to add an item to the item list and initialize it
         *
         * @param item The item to be added and initialized
         */
        add_item: function add_item(item) {

            if (item.constructor !== tdAnimationScroll.item) {
                return;
            }

            // the item is added in the item list
            tdAnimationScroll.items.push(item);

            // the item is initialized only once when it is added
            tdAnimationScroll._initialize_item(item);

            // for efficiently rendering all items are computed at once, so do not compute item individually
        },




        /**
         * - used to initialize an item
         * - an item must be initialized only once
         *
         * @param item
         * @private
         */
        _initialize_item: function _initialize_item(item) {

            // an item must be initialized only once
            if (true === item._is_initialized) {
                return;
            }

            // the item full height is computed
            if (undefined === item.wrapper_jquery_obj) {
                item.full_height = item.jqueryObj.outerHeight(true);
            } else {
                item.full_height = item.wrapper_jquery_obj.height();
            }

            if (0 === item.full_height) {
                return;
            }

            var new_jquery_obj_reference = jQuery('<div class="td_marker_animation" style="height: 0; width: 0">');

            new_jquery_obj_reference.insertBefore(item.jqueryObj);

            item.top_marker_jquery_obj = new_jquery_obj_reference;

            item.offset_top = item.top_marker_jquery_obj.offset().top;

            //console.log("initializare " + tdAnimationScroll.items.length + " : " + item.top_marker_jquery_obj.offset().top);

            item.offset_bottom_top = item.offset_top + item.full_height;

            item.top_is_out = tdEvents.window_pageYOffset > item.offset_top;

            // the item is marked as initialized, being ready to be computed
            // for efficiently rendering all items are computed at once
            item._is_initialized = true;


            // maybe it's better to try a request animation frame after every initialization, for computing the already added items
            //tdAnimationScroll.compute_all_items();
        },




        /**
         * - used to reinitialize all items at the view resolution changing
         *
         * @param recompute_height boolean True if it's necessary to recompute the item's height [when view port changes]
         */
        reinitialize_all_items: function reinitialize_all_items(recompute_height) {

            for (var i = tdAnimationScroll.items.length - 1; i >= 0; i--) {
                tdAnimationScroll.reinitialize_item(tdAnimationScroll.items[i], recompute_height);
            }
        },






        /**
         * - used to reinitialize an item at the view resolution changing
         *
         * @param item tdAnimationScroll.item
         * @param recompute_height boolean True if it's necessary to recompute the item height [when view port changes]
         * @private
         */
        reinitialize_item: function reinitialize_item(item, recompute_height) {

            // a not initialized item can't be reinitialized
            if (false === item._is_initialized) {
                return;
            }

            // prevent the following item computing, till the reinitialization is finished
            item._is_initialized = false;

            item.offset_top = item.top_marker_jquery_obj.offset().top;

            //console.log("reinitializare " + tdAnimationScroll.items.length + " : " + item.top_marker_jquery_obj.offset().top);

            if (true === recompute_height) {
                if (undefined === item.wrapper_jquery_obj) {
                    item.full_height = item.jqueryObj.outerHeight(true);
                } else {
                    item.full_height = item.wrapper_jquery_obj.height();
                }

                if (0 === item.full_height) {
                    return;
                }
            }

            item.offset_bottom_top = item.offset_top + item.full_height;

            item._is_initialized = true;
        },




        /**
         * - used for computing item properties
         *
         * @param item The item whose properties are computed
         * @private
         */
        _compute_item_properties: function _compute_item_properties(item) {

            var computed_properties = {},
                current_item_property;

            for (var property in item.properties) {

                if (true === item.properties.hasOwnProperty(property)) {

                    current_item_property = item.properties[property];

                    var current_setting,
                        new_computed_value,
                        local_computed_value,
                        easing_step,
                        easing_computed_value,
                        easing_division_interval = 1000;

                    for (var i = 0; i < current_item_property.settings.length; i++) {

                        current_setting = current_item_property.settings[i];

                        // the check is done using this form [...) of the interval or the last position 100%
                        if ((current_setting.start_percent <= item.percent_value && item.percent_value < current_setting.end_percent) ||
                            (item.percent_value === current_setting.end_percent && 100 === item.percent_value)) {

                            if (current_setting.start_value === current_setting.end_value) {

                                new_computed_value = current_setting.start_value;

                            } else {

                                // local computed value can have a positive value or a negative value, it depends of the difference end_value - start_value
                                // for a linear easing function, the new computed value is the start_value + local_computed_value
                                // if start_value < end_value, the variable local_computed_value is positive
                                // if start_value > end_value, the variable local_computed_value is negative
                                local_computed_value = (item.percent_value - current_setting.start_percent) / (current_setting.end_percent - current_setting.start_percent) * (current_setting.end_value - current_setting.start_value);


                                // if there's specified an easing function, it's applied over the computed_value
                                if ((undefined === current_setting.easing) || ('' === current_setting.easing)) {

                                    // linear easing function

                                    new_computed_value = current_setting.start_value + local_computed_value;

                                } else {

                                    // specifying an easing function

                                    easing_step = Math.abs(current_setting.start_value - current_setting.end_value) / easing_division_interval;

                                    if (current_setting.start_value < current_setting.end_value) {

                                        easing_computed_value = current_setting.start_value + jQuery.easing[current_setting.easing](
                                            null,
                                            local_computed_value,
                                            0,
                                            easing_step,
                                            current_setting.end_value - current_setting.start_value) * easing_division_interval;

                                    } else {

                                        easing_computed_value = current_setting.start_value - jQuery.easing[current_setting.easing](
                                            null,
                                            -local_computed_value,
                                            0,
                                            easing_step,
                                            current_setting.start_value - current_setting.end_value) * easing_division_interval;
                                    }

                                    new_computed_value = easing_computed_value;

                                    //console.log(current_setting.easing + ' : ' + easing_step + ' ~ ' + easing_computed_value + ' ~ ' + (current_setting.start_value + computed_value) + ' & ' + current_setting.start_value + ' $ ' + current_setting.end_value);
                                }
                            }

                            // if the existing computed value is different, the new computed value is cached
                            if (current_item_property.computed_value !== new_computed_value) {
                                current_item_property.computed_value = new_computed_value;
                                computed_properties[property] = new_computed_value;

                                // the item is marked that it has at least one property that need to be redraw
                                // the animation callback functions are called just for the marked items
                                item.redraw = true;
                            }
                            break;
                        }
                    }
                }
            }

            // a plain javascript object is added if there is no computed property
            item.computed_item_properties = computed_properties;
        },




        /**
         * - used for computing item
         * - the item properties are computed only when the item is in the view port and it is moving
         *
         * @param item The tdAnimationScroll.item to be computed
         */
        compute_item: function compute_item(item) {
            //console.clear();

            // the item must be initialized first
            if (false === item._is_initialized) {
                return;
            }

            var percent_display_value = 0;

            if (tdEvents.window_pageYOffset + tdEvents.window_innerHeight >= item.offset_top) {

                if (tdEvents.window_pageYOffset > item.offset_bottom_top) {
                    percent_display_value = 100;
                } else {
                    percent_display_value = (tdEvents.window_pageYOffset + tdEvents.window_innerHeight - item.offset_top) * 100 / (tdEvents.window_innerHeight + item.full_height);
                }
            }

            //console.log(window.pageYOffset + ' : ' + item.offset_top + ' : ' + item.offset_bottom_top);

            if (item.percent_value !== percent_display_value) {
                item.percent_value = percent_display_value;
                tdAnimationScroll._compute_item_properties(item);
            }

            item.top_is_out = tdEvents.window_pageYOffset > item.offset_top;


            //console.log(percent_display_value);
        },




        /**
         * - used to request an animation frame for computing all items
         * - the flag animation_running is set to false by the last requestAnimationFrame callback (the last animation call),
         * so a new call to requestAnimationFrame can be done
         */
        compute_all_items: function compute_all_items() {
            //tdAnimationScroll.animate();

            if (false === tdAnimationScroll.animation_running) {
                tdAnimationScroll.rAFIndex = window.requestAnimationFrame( tdAnimationScroll._animate_all_items );
            }

            tdAnimationScroll.animation_running = true;
        },




        /**
         * - used to call the existing callback animate functions
         *
         * @private
         */
        _animate_all_items: function _animate_all_items() {
            //var start_time = Date.now();

            for (var i = 0; i < tdAnimationScroll.items.length; i++) {
                if ( false === tdAnimationScroll.items[i].computation_stopped) {
                    tdAnimationScroll.compute_item(tdAnimationScroll.items[i]);
                }
            }

            for (var j = 0; j < tdAnimationScroll.items.length; j++) {
                if (true === tdAnimationScroll.items[j].redraw) {
                    tdAnimationScroll.items[j].animation_callback();
                }
            }

            tdAnimationScroll.animation_running = false;

            //var end_time = Date.now();
            //
            //var debug_table = jQuery("#debug_table");
            //debug_table.html((end_time - start_time) + ' ms');
        },





        /** @todo we'll see if it's necessary to make reinitialization just at the view port changing. Now, it's not
         * - necessary to be called when the window is being resized
         */
        td_events_resize: function td_events_resize() {

            if (0 === tdAnimationScroll.items.length) {
                return;
            }

            // this will be applied if it depends just by view port changing

            //if (tdAnimationScroll._changed_view_port_width()) {
            //    tdAnimationScroll.reinitialize_all_items();
            //}

            tdAnimationScroll.reinitialize_all_items(false);

            tdAnimationScroll.compute_all_items();
        },






        log: function log(msg) {
            //console.log(msg);
        }
    };

    tdAnimationScroll.init();

})();



/**
 * Created by tagdiv on 23.02.2015.
 */

var tdBackstr = {};

(function(){

    'use strict';

    tdBackstr = {


        items: [],


        item: function() {

            // OPTIONAL - here we store the block Unique ID. This enables us to delete the item via this id @see tdBackstr.deleteItem
            this.blockUid = '';

            // check if is necessary to apply modification (css)
            this.previous_value = 0;

            // the image aspect ratio
            this.image_aspect_rate = 0;

            // the wrapper jquery object
            this.wrapper_image_jquery_obj = '';

            // the image jquery object
            this.image_jquery_obj = '';
        },


        /**
         *
         * @param item
         */
        add_item: function( item ) {

            if ( item.constructor !== tdBackstr.item ) {
                return;
            }

            //if ((item.image_jquery_obj.complete)
            //
            //    // this is a case when the image is still not loaded but the height() and width() return both 24px
            //    // @todo it must be modified. It's used because for backstretch are usually used large images
            //    && ((item.image_jquery_obj.height() != 24) && (item.image_jquery_obj.width() != 24))
            //)

            if ( item.image_jquery_obj.get( 0 ).complete ) {
                tdBackstr._load_item_image( item );

            } else {

                item.image_jquery_obj.on( 'load', function() {
                    tdBackstr._load_item_image( item );
                });


                //var currentTimeStart = Date.now();
                //
                //var loaded_image_jquery_ojb = false;
                //
                //item.image_jquery_obj.on('load', function() {
                //
                //    loaded_image_jquery_ojb = true;
                //
                //
                //    tdBackstr._load_item_image(item);
                //    console.log('backstr tarziu ' + item.image_jquery_obj.height() + ' > timp : ' + (Date.now() - currentTimeStart));
                //});
                //
                //
                //var indexInterval = setInterval(function() {
                //    if (loaded_image_jquery_ojb) {
                //        clearInterval(indexInterval);
                //        console.log('imagine incarcata ' + item.image_jquery_obj.height() + ' > timp : ' + (Date.now() - currentTimeStart));
                //    }
                //}, 0);
            }
        },


        deleteItem: function( blockUid ) {
            for (var i = 0; i < tdBackstr.items.length; i++) {
                if ( tdBackstr.items[ i ].blockUid === blockUid ) {
                    tdBackstr.items.splice(i, 1); // remove the item from the "array"
                    return true;
                }
            }
            return false;
        },


        _load_item_image: function( item ) {
            item.image_aspect_rate = item.image_jquery_obj.width() / item.image_jquery_obj.height();
            tdBackstr.items.push( item );
            tdBackstr._compute_item( item );

            item.image_jquery_obj.css( 'opacity', '1' );
        },


        /**
         *
         * @param item
         * @private
         */
        _compute_item: function( item ) {

            // the wrapper aspect ratio can vary, so it's recomputed at computing item
            var wrapper_aspect_rate = item.wrapper_image_jquery_obj.width() / item.wrapper_image_jquery_obj.height();

            var current_value = 0;

            if ( wrapper_aspect_rate < item.image_aspect_rate ) {

                current_value = 1;

                if ( item.previous_value !== current_value ) {
                    item.image_jquery_obj.removeClass( 'td-stretch-width' );
                    item.image_jquery_obj.addClass( 'td-stretch-height' );

                    item.previous_value = current_value;
                }
            } else {

                current_value = 2;

                if ( item.previous_value !== current_value ) {
                    item.image_jquery_obj.removeClass( 'td-stretch-height' );
                    item.image_jquery_obj.addClass( 'td-stretch-width' );

                    item.previous_value = current_value;
                }
            }
        },


        /**
         *
         * @private
         */
        _compute_all_items: function() {
            for ( var i = 0; i < tdBackstr.items.length; i++ ) {
                tdBackstr._compute_item( tdBackstr.items[ i ] );
            }
        },


        td_events_resize: function() {

            if ( 0 === tdBackstr.items.length ) {
                return;
            }

            tdBackstr._compute_all_items();
        },




        log: function( msg ) {
            window.console.log( msg );
        }
    };


})();




/**
 * Created by tagdiv on 11.03.2015.
 */

/**
 * abstract:
 * - check all items in page, sort them using one of a sorted methods and add them in the items array
 * - at every scroll the items are verified if they are in view port or above
 * - every item in view port is added into the _items_in_view_port array and they are ready for animation
 * - items above view port are animated all at once
 * - items in view port are animated at crescendo intervals [interval / remaining items]
 * - there's a max and a min interval
 * - td_block ajax request response use a sort method and add founded items into view port array or into items array
 */


/* global jQuery:false */
/* global tdDetect:false */
/* global tdEvents:{} */

var tdAnimationStack = {};

( function() {

    "use strict";

    tdAnimationStack = {

        /*
            Important:
            1. The first animation step is produced by the the body selector @see animation-stack.less
            2. The second animation step can be applied by the animation_css_class1
            3. The final (the main) animation step is applied by the animation_css_class2
         */




        // - flag css class used by the non 'type0' animation effect
        // - flag used just to look for not yet computed item
        // - it's set by ready_init (on ready)
        // - all dom components that need to be animated will be marked with this css class in ready_init
        // - it can be used for a precomputed style, but carefully, because it's applied at ready_init (on ready)
        _animation_css_class1: '',



        // - flag css class used by the non 'type0' animation effect
        // - flag css class used to animate custom
        // - this css class applies the final animation
        _animation_css_class2: '',



        // - the default animation effect 'type0' is applied if the global window.td_animation_stack_effect is the empty string
        // - it's used for consistency of animation effects presented into the animation-stack.less [all types have a name (...type...)]
        _animation_default_effect: 'type0',



        // - tdAnimationStack runs just only when this flag is true
        // - it's done true by the init function
        activated: false,



        // flag checked by the major animation operations
        _ready_for_initialization: true,

        // interval used by ready_init to check tdAnimationStack state
        _ready_init_timeout: undefined,


        // max time[ms] interval waiting for first tdAnimationStack.init call
        max_waiting_for_init: 3000,



        // the specific selectors are used to look for new elements inside of the specific sections
        _specific_selectors: '',

        // the general selectors are used to look for elements over extend areas in DOM
        _general_selectors: '',






        /**
         * - wait for tdAnimationStack.init() for max_waiting_for_init time
         * - if time is elapsed, the animation is canceled
         * - the ready_init is canceled by a fast tdAnimationStack.init call
         */
        ready_init: function() {

            // - special case for IE8 and IE9 (and if Visual Composer image carousel exists)
            // Important! The Visual Compose images carousel has hidden elements (images) that does not allow for computing the real position of the other DOM elements in the viewport
            // - the animation is forced removed and the altered css body is cleaned
            if ( tdDetect.isIe8 || tdDetect.isIe9 || ( jQuery( '.vc_images_carousel' ).length > 0 ) ) {
                tdAnimationStack._ready_for_initialization = false;

                if ( undefined !== window.td_animation_stack_effect ) {
                    if ( '' === window.td_animation_stack_effect ) {
                        window.td_animation_stack_effect = tdAnimationStack._animation_default_effect;
                    }
                    jQuery( 'body' ).removeClass( 'td-animation-stack-' + window.td_animation_stack_effect );
                }
                return;
            }


            if ( undefined === window.tds_animation_stack || undefined === window.td_animation_stack_effect ) {

                // lock any further operation using the _ready_for_initialization flag
                tdAnimationStack._ready_for_initialization = false;

            } else {

                // the tdAnimationStack._specific_selectors is set by the global variable window.td_animation_stack_specific_selectors
                if ( undefined !== window.td_animation_stack_specific_selectors ) {
                    tdAnimationStack._specific_selectors = window.td_animation_stack_specific_selectors;
                }


                // if the global variable window.td_animation_stack_effect has the empty string value, the 'full fade' (type0) effect is prepared to be applied
                if ( '' === window.td_animation_stack_effect ) {
                    window.td_animation_stack_effect = tdAnimationStack._animation_default_effect;
                }

                tdAnimationStack._animation_css_class1 = 'td-animation-stack-' + window.td_animation_stack_effect + '-1';
                tdAnimationStack._animation_css_class2 = 'td-animation-stack-' + window.td_animation_stack_effect + '-2';


                // - the tdAnimationStack._general_selectors is set by the global variable window.td_animation_stack_general_selectors
                if ( undefined !== window.td_animation_stack_general_selectors ) {
                    tdAnimationStack._general_selectors = window.td_animation_stack_general_selectors;
                }

                // the tdAnimationStack._animation_css_class1 css class is applied for all elements need to be animated later
                jQuery( tdAnimationStack._general_selectors ).addClass( tdAnimationStack._animation_css_class1 );


                // - timeout used by the ready_init function, to cut down tdAnimationStack.init calling at loading page, when the call comes too late
                // - if tdAnimationStack.init comes earlier, it does a clearTimeout call over the tdAnimationStack._ready_init_timeout variable
                tdAnimationStack._ready_init_timeout = setTimeout( function() {

                    // if tdAnimationStack is activated, do nothing
                    if ( true === tdAnimationStack.activated ) {
                        return;
                    }

                    // lock any further operation using the _ready_for_initialization flag
                    tdAnimationStack._ready_for_initialization = false;

                    // remove the loading animation css class effect from the body
                    // this class is applied from the theme settings
                    if ( undefined !== window.td_animation_stack_effect ) {
                        jQuery( 'body' ).removeClass( 'td-animation-stack-' + window.td_animation_stack_effect );
                    }

                }, tdAnimationStack.max_waiting_for_init );
            }
        },


        // flag marks items where they are
        _ITEM_TO_VIEW_PORT: {

            ITEM_ABOVE_VIEW_PORT: 0,

            ITEM_IN_VIEW_PORT: 1,

            ITEM_UNDER_VIEW_PORT: 2
        },


        // predefined sorting methods
        SORTED_METHOD: {

            sort_left_to_right: function sort_left_to_right( item1, item2 ) {
                if ( item1.offset_top > item2.offset_top ) {
                    return 1;
                } else if ( item1.offset_top < item2.offset_top ) {
                    return -1;
                } else if ( item1._order > item2._order ) {
                    return 1;
                } else if ( item1._order < item2._order ) {
                    return -1;
                }
                return 0;
            },


            sort_right_to_left: function sort_right_to_left( item1, item2 ) {
                if ( item1.offset_top > item2.offset_top ) {
                    return 1;
                } else if ( item1.offset_top < item2.offset_top ) {
                    return -1;
                } else if ( item1._order > item2._order ) {
                    return -1;
                } else if ( item1._order < item2._order ) {
                    return 1;
                }
                return -1;
            }
        },


        // keeps the DOM reading order, used in the sorting methods
        _order: 0,


        // interval divided to animate items
        // ex. interval 100 and 2 items => one item at 100 / 2 and one item at 100 / 1, but not lower than min_interval and not higher than max_interval
        interval: 70,

        // min interval of a set timer
        min_interval: 17,

        // max interval of a set timer
        max_interval: 40,



        // keep current setInterval
        _current_interval: undefined,

        // items in view port are moved here
        _items_in_view_port: [],

        // items above the view port are moved here
        _items_above_view_port: [],

        // all items that will be processed
        items: [],








        /**
         * - tdAnimationStack.item
         */
        item: function() {
            // offset from the top of the item, to the top
            // it's set at the initialization item
            this.offset_top = undefined;


            // offset from the bottom of the item, to the top
            // it's set at the initialization item
            this.offset_bottom_to_top = undefined;


            // jquery object reference
            // it's set before the initialization of the item
            this.jqueryObj = undefined;


            // the reading order from DOM
            // it's set at the initialization item
            this._order = undefined;
        },




        /**
         * - initialize a tdAnimationStack.item and add it in tdAnimationStack.items
         * @param item tdAnimationStack.item
         */
        //add_item: function add_item(item) {
        //
        //    if (item.constructor != tdAnimationStack.item) {
        //        return;
        //    }
        //
        //    tdAnimationStack.items.push(item);
        //},



        /**
         * - initialize the offset top of the tdAnimationStack.item parameter
         * @param item tdAnimationStack.item
         * @private
         */
        _initialize_item: function( item ) {
            item._order = tdAnimationStack._order++;

            item.offset_top = item.jqueryObj.offset().top;
            //item.offset_relative = Math.sqrt(Math.pow(item.jqueryObj.offset().top, 2) + Math.pow(item.jqueryObj.offset().left, 2));

            item.offset_bottom_to_top = item.offset_top + item.jqueryObj.height();

            //item.jqueryObj.parent().prepend('<div class="debug_item" style="position: absolute; width: 100%; height: 20px; border: 1px solid red; background-color: white">' + item.offset_top + '</div>');
        },


        /**
         * - dynamically search for new elements to create new tdAnimationStack.item
         * - the items are added in the tdAnimationStack._items_in_view_port, that means they are ready to be animated,
         * or in the tdAnimationStack.items to be computed later (checked if they are in the view port and animated)
         * @param selector {string} - jQuery selector
         * @param sort_type {tdAnimationStack.SORTED_METHOD} - a preferred tdAnimationStack.SORTED_METHOD
         * @param in_view_port {boolean} - add an item in the tdAnimationStack._items_in_view_port or in the tdAnimationStack.items
         */
        check_for_new_items: function( selector, sort_type, in_view_port ) {

            // tdAnimationStack must be activated and not stopped for initialization by the ready_init checker
            if ( ( false === tdAnimationStack.activated ) || ( false === tdAnimationStack._ready_for_initialization ) ) {
                return;
            }


            if ( undefined === selector ) {
                selector = '';
            }



            // the local stack of searched items
            var local_stack = [];



            //if (window.td_animation_stack_effect === 'type0') {
            //    // for every founded element there's an instantiated tdAnimationStack.item, then initialized and added to the local stack
            //    var founded_elements = jQuery(selector + ', .post').find(tdAnimationStack._specific_selectors).filter(function() {
            //        return jQuery(this).css('opacity') === '0';
            //    });
            //
            //} else {
                jQuery( tdAnimationStack._general_selectors).not( '.' + tdAnimationStack._animation_css_class2 ).addClass( tdAnimationStack._animation_css_class1 );

                // for every founded element there's an instantiated tdAnimationStack.item, then initialized and added to the local stack
                var founded_elements = jQuery( selector + ', .post' ).find( tdAnimationStack._specific_selectors ).filter( function() {
                    return jQuery( this ).hasClass( tdAnimationStack._animation_css_class1 );
                });
            //}



            founded_elements.each( function( index, element ) {

                var item_animation_stack = new tdAnimationStack.item();

                item_animation_stack.jqueryObj = jQuery( element );

                tdAnimationStack.log( index );

                tdAnimationStack._initialize_item( item_animation_stack );

                local_stack.push( item_animation_stack );
            });



            // new scope having its own timer used for checking not yet loaded images
            ( function(){

                var images_loaded = true;

                for ( var i = 0; i < local_stack.length; i++ ) {

                    // for every image element the 'complete' property is checked
                    // "If the image is finished loading, the complete property returns true"
                    // when tdAnimationStack.init is called on load, as normally, it calls tdAnimationStack.check_for_new_items and all these element has 'complete' property true
                    // when tdAnimationStack.check_for_new_items is called by block's ajax response, the next timer is used to wait for all elements being loaded
                    if ( false === founded_elements[ i ].complete ) {
                        images_loaded = false;
                        break;
                    }
                }

                // if there's at least one element not loaded, a timer is started to wait for
                if ( false === images_loaded ) {

                    var date = new Date();
                    var start_time = date.getTime();


                    tdAnimationStack.log( 'TIMER - started' );


                    // the timer is started
                    var interval_check_loading_image = setInterval( function() {

                        // if there's too much time waiting for image loading, they are made visible
                        var date = new Date();

                        var i = 0;

                        if ( ( date.getTime() - start_time ) > tdAnimationStack.max_waiting_for_init ) {

                            clearInterval( interval_check_loading_image );

                            for ( i = 0; i < local_stack.length; i++ ) {




                                //if (window.td_animation_stack_effect === 'type0') {
                                //    local_stack[i].jqueryObj.css('opacity', 1);
                                //} else {
                                    local_stack[ i ].jqueryObj.removeClass( tdAnimationStack._animation_css_class1 );
                                    local_stack[ i ].jqueryObj.addClass( tdAnimationStack._animation_css_class2 );
                                //}






                            }
                            return;
                        }


                        // at every interval step, the element's 'complete' property is checked again
                        images_loaded = true;

                        for ( i = 0; i < local_stack.length; i++ ) {

                            if ( false === founded_elements[ i ].complete ) {
                                images_loaded = false;
                                break;
                            }
                        }

                        if ( true === images_loaded ) {

                            clearInterval( interval_check_loading_image );

                            tdAnimationStack.log( 'TIMER - stopped' );

                            tdAnimationStack._precompute_items( local_stack, sort_type, in_view_port );
                            tdAnimationStack.compute_items();
                        }

                    }, 100);

                } else {
                    tdAnimationStack._precompute_items( local_stack, sort_type, in_view_port );
                    tdAnimationStack.compute_items();
                }

            })();

            tdAnimationStack.log( 'checked for new items finished' );
        },


        /**
         * - _precompute_items sorts and adds items in the tdAnimationStack.items array or even in the
         * tdAnimationStack._items_in_view_port array
         * - this function is necessary because at scroll just the tdAnimationStack.compute_items function is called
         *
         * @param stack_items {[]} founded items
         * @param sort_type {function} sorting method
         * @param in_view_port {boolean} add in view port to be already computed, or in the general items array
         * @private
         */
        _precompute_items: function( stack_items, sort_type, in_view_port ) {

            stack_items.sort( sort_type );

            if ( true === in_view_port ) {

                while ( stack_items.length > 0 ) {
                    tdAnimationStack.log( 'add item 1 : ' + stack_items.length );
                    tdAnimationStack._items_in_view_port.push( stack_items.shift() );
                }

            } else {

                while (stack_items.length > 0) {
                    tdAnimationStack.log( 'add item 2 : ' + stack_items.length );
                    tdAnimationStack.items.push( stack_items.shift() );
                }
            }
        },



        /**
         * - IT'S CALLED ON PAGE LOAD [actually in tdLastInit.js]
         * - the general init function
         * - the items are added to the tdAnimationStack.items using check_for_new_items method, and then computed
         * - the arrays are cleared to be prepared for a reinitialization
         */
        init: function() {
            if ( undefined === window.tds_animation_stack ) {
                return;
            }

            // tdAnimationStack must not be already stopped for initialization by a pre_init checker
            if ( false === tdAnimationStack._ready_for_initialization ) {
                return;
            }

            // clear the _ready_init_timeout, to stop it doing more checking
            clearTimeout( tdAnimationStack._ready_init_timeout );

            // the tdAnimationStack is activated
            tdAnimationStack.activated = true;

            tdAnimationStack.check_for_new_items( '.td-animation-stack', tdAnimationStack.SORTED_METHOD.sort_left_to_right, false );
        },


        /**
         * - the arrays are cleared to be prepared for a reinitialization
         * - the init call is done
         */
        reinit: function() {

            // tdAnimationStack must not be already stopped for initialization by a pre_init checker
            if ( false === tdAnimationStack._ready_for_initialization ) {
                return;
            }

            tdAnimationStack.items = [];
            tdAnimationStack._items_in_view_port = [];
            tdAnimationStack._items_above_view_port = [];

            tdAnimationStack.init();
        },


        /**
         * - compute all items
         */
        compute_items: function() {

            // tdAnimationStack must be activated and not stopped for initialization by the ready_init checker
            if ( ( false === tdAnimationStack.activated ) || ( false === tdAnimationStack._ready_for_initialization ) ) {
                return;
            }

            // the tdAnimationStack.items are processed
            tdAnimationStack._separate_items();

            // the items above the port view are animated
            while ( tdAnimationStack._items_above_view_port.length > 0 ) {
                tdAnimationStack.log( 'animation - above the view port' );

                var item_above_view_port = tdAnimationStack._items_above_view_port.shift();



                //if (window.td_animation_stack_effect === 'type0') {
                //    item_above_view_port.jqueryObj.css('opacity', 1);
                //} else {
                    item_above_view_port.jqueryObj.removeClass( tdAnimationStack._animation_css_class1 );
                    item_above_view_port.jqueryObj.addClass( tdAnimationStack._animation_css_class2 );
                //}




            }


            // the items in the port view are prepared to be animated
            if ( tdAnimationStack._items_in_view_port.length > 0 ) {

                // clear any opened interval by a previous compute_items call
                clearInterval( tdAnimationStack._current_interval );

                var current_animation_item = tdAnimationStack._get_item_from_view_port();




                //if (window.td_animation_stack_effect === 'type0') {
                //    current_animation_item.jqueryObj.css('opacity', 1);
                //} else {
                    current_animation_item.jqueryObj.removeClass( tdAnimationStack._animation_css_class1 );
                    current_animation_item.jqueryObj.addClass( tdAnimationStack._animation_css_class2 );
    //            }





                if ( tdAnimationStack._items_in_view_port.length > 0 ) {

                    tdAnimationStack.log( 'start animation timer' );

                    tdAnimationStack._to_timer( tdAnimationStack._get_right_interval( tdAnimationStack.interval * ( 1 / tdAnimationStack._items_in_view_port.length ) ) );
                }
            }
        },


        /**
         * - timer function initially called by a tdAnimationStack.compute_items function, and then it's auto called
         * - it calls a setInterval using the interval parameter
         * @param interval {int} - interval ms
         */
        _to_timer: function( interval ) {

            tdAnimationStack._current_interval = setInterval( function () {

                if ( tdAnimationStack._items_in_view_port.length > 0 ) {

                    var current_animation_item = tdAnimationStack._get_item_from_view_port();

                    tdAnimationStack.log( 'animation at interval: ' + interval );




                    //if (window.td_animation_stack_effect === 'type0') {
                    //    current_animation_item.jqueryObj.css('opacity', 1);
                    //} else {
                        current_animation_item.jqueryObj.removeClass( tdAnimationStack._animation_css_class1 );
                        current_animation_item.jqueryObj.addClass( tdAnimationStack._animation_css_class2 );
                    //}




                    clearInterval( tdAnimationStack._current_interval );

                    if ( tdAnimationStack._items_in_view_port.length > 0 ) {
                        tdAnimationStack._to_timer( tdAnimationStack._get_right_interval( tdAnimationStack.interval * ( 1 / tdAnimationStack._items_in_view_port.length ) ) );
                    }
                }
            }, interval );
        },


        /**
         * - get an item from the tdAnimationStack._items_in_view_port array
         * @returns {tdAnimationStack.item}
         * @private
         */
        _get_item_from_view_port: function() {

            return tdAnimationStack._items_in_view_port.shift();
        },



        /**
         * - get the interval considering tdAnimationStack.min_interval and tdAnimationStack.max_interval
         * @param interval {int} - the checked interval value
         * @returns {int} - the result interval value
         * @private
         */
        _get_right_interval: function( interval ) {

            if ( interval < tdAnimationStack.min_interval ) {
                return tdAnimationStack.min_interval;

            } else if ( interval > tdAnimationStack.max_interval ) {
                return tdAnimationStack.max_interval;
            }
            return interval;
        },


        /**
         * - check where the item is to the view port
         * @param item {tdAnimationStack.item}
         * @returns {number} _ITEM_TO_VIEW_PORT value
         * @private
         */
        _item_to_view_port: function( item ) {

            tdAnimationStack.log( 'position item relative to the view port >> ' + tdEvents.window_pageYOffset + tdEvents.window_innerHeight + ' : ' + item.offset_top );

            if ( tdEvents.window_pageYOffset + tdEvents.window_innerHeight < item.offset_top ) {
                return tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_UNDER_VIEW_PORT;

            } else if ( ( tdEvents.window_pageYOffset + tdEvents.window_innerHeight >= item.offset_top ) && ( tdEvents.window_pageYOffset <= item.offset_bottom_to_top ) ) {
                return tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_IN_VIEW_PORT;

            }
            return tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_ABOVE_VIEW_PORT;
        },


        /**
         * - check the sorted tdAnimationStack.items and move them into the _items_above_view_port array or into the _items_in_view_port
         * - the remaining items are kept by the tdAnimationStack.items for next processing
         * @private
         */
        _separate_items: function() {
            if ( 0 === tdAnimationStack.items.length ) {
                return;
            }

            while ( tdAnimationStack.items.length > 0 ) {
                var item_to_view_port = tdAnimationStack._item_to_view_port( tdAnimationStack.items[ 0 ] );

                switch ( item_to_view_port ) {
                    case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_ABOVE_VIEW_PORT :
                        tdAnimationStack._items_above_view_port.push( tdAnimationStack.items.shift() );
                        break;

                    case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_IN_VIEW_PORT :
                        tdAnimationStack._items_in_view_port.push( tdAnimationStack.items.shift() );
                        break;

                    case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_UNDER_VIEW_PORT :
                        tdAnimationStack.log( 'after separation items >> above: ' + tdAnimationStack._items_above_view_port.length + ' in: ' + tdAnimationStack._items_in_view_port.length + ' under: ' + tdAnimationStack.items.length );
                        return;
                }
            }
        },


        /**
         * - scroll event usually called by tdCustomEvents
         */
        td_events_scroll: function() {
            tdAnimationStack.compute_items();
        },



        /**
         * - resize event usually called by tdCustomEvents
         */
        td_events_resize: function() {
            // clear an existing interval
            clearInterval( tdAnimationStack._current_interval );

            // reinitialize tdAnimationStack searching in page for not already animated items [which were already repositioned by resize]
            tdAnimationStack.reinit();
        },



        log: function( msg ) {
            //console.log(msg);
        }

    };
})();

/* global jQuery:{} */
/* global tdSmartSidebar:{} */
/* global tdUtil:{} */
/* global tdDetect:{} */
/* global tdPullDown:{} */
/* global tdAnimationScroll:{} */
/* global tdAnimationStack:{} */
/* global tdEvents:{} */
/* global tdAffix:{} */

"use strict";



/**
 * affix menu
 */
tdAffix.init({
    menu_selector: '.td-header-main-menu',
    menu_wrap_selector: '.td-header-menu-wrap',
    tds_snap_menu: tdUtil.getBackendVar('tds_snap_menu'),
    tds_snap_menu_logo: tdUtil.getBackendVar('tds_logo_on_sticky'),
    menu_affix_height: 48,   // value must be set because it can't be computed at runtime because at the time of tdAffix.init() we can have no affixed menu on page
    menu_affix_height_on_mobile: 53
});




/**
 * sidebar init
 */
if (tdUtil.getBackendVar('tds_smart_sidebar') == 'enabled' && tdDetect.isIos === false) {
    jQuery(window).load(function() {
        // find the rows and the sidebars objects and add them to the magic sidebar object array
        jQuery('.td-ss-row').each(function () {
            //@todo check to see if the sidebar + content is pressent
            var td_smart_sidebar_item = new tdSmartSidebar.item();
            // td_smart_sidebar_item.sidebar_jquery_obj = jQuery(this).children('.td-pb-span4').children('.wpb_wrapper');
            // td_smart_sidebar_item.content_jquery_obj = jQuery(this).children('.td-pb-span8').children('.wpb_wrapper');
            td_smart_sidebar_item.sidebar_jquery_obj = jQuery(this).children('.td-pb-span4').find('.wpb_wrapper:first');
            td_smart_sidebar_item.content_jquery_obj = jQuery(this).children('.td-pb-span8').find('.wpb_wrapper:first');
            tdSmartSidebar.add_item(td_smart_sidebar_item);
        });



        // check the page to see if we have smart sidebar classes (.td-ss-main-content and .td-ss-main-sidebar)
        if (jQuery('.td-ss-main-content').length > 0 && jQuery('.td-ss-main-sidebar').length > 0) {
            var td_smart_sidebar_item = new tdSmartSidebar.item();
            td_smart_sidebar_item.sidebar_jquery_obj = jQuery('.td-ss-main-sidebar');
            td_smart_sidebar_item.content_jquery_obj = jQuery('.td-ss-main-content');
            tdSmartSidebar.add_item(td_smart_sidebar_item);
        }

        tdSmartSidebar.td_events_resize();
    });
}




// array keeping the tdAnimationScroll.item items used for backstretch
var td_backstretch_items = [];


jQuery(window).ready(function() {

    /**
     * pulldown lists
     *
     */

    jQuery('.td-category-siblings').each(function (index, element) {
        var jquery_object_container = jQuery(element);
        var horizontal_jquery_obj = jquery_object_container.find('.td-category:first');
        var vertical_jquery_obj = jquery_object_container.find('.td-subcat-dropdown:first');

        if (horizontal_jquery_obj.length == 1 && vertical_jquery_obj.length == 1) {

            var pulldown_item_obj = new tdPullDown.item();

            pulldown_item_obj.horizontal_jquery_obj = horizontal_jquery_obj;
            pulldown_item_obj.vertical_jquery_obj = vertical_jquery_obj;
            pulldown_item_obj.horizontal_element_css_class = 'entry-category';
            pulldown_item_obj.container_jquery_obj = horizontal_jquery_obj.parents('.td-category-siblings:first');

            tdPullDown.add_item(pulldown_item_obj);
        }
    });



    /**
     * parallax effect
     */

    jQuery('.td-backstretch').each(function (index, element) {

        if (!jQuery(element).hasClass('not-parallax')) {

            var item = new tdAnimationScroll.item();
            item.jqueryObj = jQuery(element);
            item.wrapper_jquery_obj = item.jqueryObj.parent();

            // - ideal translation is when the top of wrapper_jquery_obj is at the top of the view port, the jquery_obj image
            // is also already translated at the top of the view port
            // - the start_value should be item.wrapper_jquery_obj.offset().top + how much the jquery_obj was translated

            tdAnimationScroll.add_item(item);

            // we keep the tdAnimationScroll.item to change operation settings when the viewport is changing
            td_backstretch_items.push(item);

            td_compute_backstretch_item(item);
        }
    });


    jQuery('.td-parallax-header').each(function (index, element) {

        var item = new tdAnimationScroll.item();
        item.jqueryObj = jQuery(element);

        item.add_item_property('move_y', 40, 100, 0, 100, '');
        item.add_item_property('opacity', 40, 80, 1, 0, '');

        item.animation_callback = function () {

            var move_y_property = parseFloat(item.computed_item_properties['move_y']).toFixed();
            var opacity_property = parseFloat(item.computed_item_properties['opacity']);

            item.jqueryObj.css({
                '-webkit-transform': 'translate3d(0px,' + move_y_property + 'px, 0px)',
                'transform': 'translate3d(0px,' + move_y_property + 'px, 0px)'
            });

            item.jqueryObj.css('transform', 'translate3d(0px,' + move_y_property + 'px, 0px)');

            item.jqueryObj.css('opacity', opacity_property);

            item.redraw = false;
        }

        tdAnimationScroll.add_item(item);
    });


    // compute all animation scroll items to be well positioned initially
    tdAnimationScroll.compute_all_items();


    // load animation stack
    tdAnimationStack.ready_init();
});





//@todo the meaning of the following section is eligible to be moved to booster

/**
 * Function used to register the 'move_y' property for every td_animations_scroll.item item of the td_backstretch_items array.
 * It scales the object image and translate it. At first it is translated so its bottom is at the bottom of the viewport,
 * but considering the backstretch css classes applied
 *
 * @param item tdAnimationScroll.item
 */
function td_compute_backstretch_item(item) {

    // Important! The following variables must be computed after add_item calling function, because they need item.full_height, item.offset_top, etc

    // percent when the object is in initial position
    // Important! It doesn't matter if the document is scrolled
    var initial_percent = (tdEvents.window_innerHeight - item.offset_top) * 100 / (tdEvents.window_innerHeight + item.full_height);

    // IMPORTANT! We suppose the item.offset_top is positive


    // the value used to compute the scale_factor
    // Important! It can be any value
    var scale_seed = item.offset_top / 2;

    // - the start_value is half of the scale_seed, so the object [image] is translated as its bottom is at the bottom of its view
    // - when scale_seed is zero (the object [image] is initially at the top of the viewport), the start_value is also zero
    var start_value = - scale_seed / 2;



    // DO NOT DELETE THE NEXT CODE LINES. The right value would be the next, but the divide operation does not have 100% accuracy, so we increase the interval
    // and so we are sure the object is not translated more than needed when is at the top of the window
    //
    // Important! The following case is when the object [image] is not initially at the top of the viewport. We mean that item.offset_top is positive value.
    //
    // When the top of the view is at the top of the window, the object [image] must be already translated at the top of the window.
    //
    //var end_value = ((100 - initial_percent) * scale_seed) / (intermediary_top_percent - initial_percent);;
    //
    //or actually
    //
    //var end_value = ((100 - initial_percent) * (item.offset_top / 2)) / (intermediary_top_percent - initial_percent);;



    if (start_value == 0) {

        // we choose to translate a quarter of the item height if its start_value is zero (the object [image] is initially at the top of the viewport)
        var end_value = item.full_height / 6;

    } else {

        // percent when the object has its top at the top of the window
        var intermediary_top_percent =  (tdEvents.window_innerHeight) * 100 / (tdEvents.window_innerHeight + item.full_height);

        var end_value = ((100 - initial_percent) * (scale_seed / 1.2)) / (intermediary_top_percent - initial_percent);
    }

    // fix for firefox. It rounds up and loose 1 pixel
    start_value += 0.5;


    // if there already exists a 'move_y' property, it is removed
    item.remove_item_property('move_y');


    item.add_item_property('move_y', initial_percent, 100, start_value, end_value, '');


    var scale_factor = parseFloat(1 + Math.abs(scale_seed) / item.full_height).toFixed(2);


    // if there's already registered an 'animation_callback' function, it is removed
    delete item.animation_callback;

    item.animation_callback = function () {

        var property_value = parseFloat(item.computed_item_properties['move_y']).toFixed();

        item.jqueryObj.css({
            'left': '50%',
            '-webkit-transform': 'translate3d(-50%,' + property_value + 'px, 0px) scale(' + scale_factor + ',' + scale_factor + ')',
            'transform': 'translate3d(-50%,' + property_value + 'px, 0px) scale(' + scale_factor + ',' + scale_factor + ')'
        });

        item.redraw = false;
    }
}






/**
 * Created by ra on 8/12/2015.
 */

/* global jQuery:false */
/* global tdInfiniteLoader:false */
/* global tdAnimationStack:{} */
/* global tdSmartSidebar:false */
/* global tdLoadingBox:{} */
/* global tds_theme_color_site_wide:string */


/* global td_ajax_url:false */

/**
 *   tdAjaxLoop.init() is called from: @see includes/wp_booster/td_page_generator::render_infinite_pagination
 */
var tdAjaxLoop = {};

(function () {
    'use strict';

    tdAjaxLoop = {
        loopState: {
            'sidebarPosition': '',
            'moduleId': 1,
            'currentPage': 1,
            'max_num_pages': 0,
            'atts' : {},
            'ajax_pagination_infinite_stop' : 0,
            'server_reply_html_data': ''
        },


        /**
         *   tdAjaxLoop.init() is called from: @see includes/wp_booster/td_page_generator::render_infinite_pagination
         *   only when needed
         */
        init: function () {
            jQuery('.td-ajax-loop-infinite').each( function() {
                // create a new infinite loader item
                var tdInfiniteLoaderItem = new tdInfiniteLoader.item();

                tdInfiniteLoaderItem.jqueryObj = jQuery(this);
                tdInfiniteLoaderItem.uid = 'tdAjaxLoop';


                /**
                 * the callback when the bottom of the element is visible on screen and we need to do something - like load another page
                 * - the callback does not fire again until tdInfiniteLoader.enable_is_visible_callback is called @see tdInfiniteLoader.js:95
                 */
                tdInfiniteLoaderItem.isVisibleCallback = function () {      // the is_visible callback is called when we have to pull new content up because the element is visible

                    if (
                        0 !== tdAjaxLoop.loopState.ajax_pagination_infinite_stop &&
                        tdAjaxLoop.loopState.currentPage >= tdAjaxLoop.loopState.ajax_pagination_infinite_stop &&
                        tdAjaxLoop.loopState.currentPage + 1 < tdAjaxLoop.loopState.max_num_pages  // do we have a next page?
                    ) {
                        // stop the callback and show the load more button
                        jQuery('.td-load-more-infinite-wrap')
                            .css('display', 'block')
                            .css('visibility', 'visible')
                        ;

                    } else {
                        // load up the next page
                        tdAjaxLoop.infiniteNextPage(false);
                    }
                };
                tdInfiniteLoader.addItem(tdInfiniteLoaderItem);
            });


            // click on load more - the button should not be visible only when the  ajax_pagination_infinite_stop limit is reached
            jQuery('.td-load-more-infinite-wrap').click(function(event) {
                event.preventDefault();


                jQuery('.td-load-more-infinite-wrap').css('visibility', 'hidden');

                tdAjaxLoop.infiniteNextPage(true);
            });
        },


        infiniteNextPage: function (isLoadMoreButton) {

            // prepare the request object
            tdAjaxLoop.loopState.currentPage++ ;
            tdAjaxLoop.loopState.server_reply_html_data = '';

            // check here to avoid making an unnecessary ajax request when using infinite loading without button
            if ( tdAjaxLoop.loopState.currentPage > tdAjaxLoop.loopState.max_num_pages ) {
                //console.log('END' + tdAjaxLoop.loopState.currentPage + ' max: ' + tdAjaxLoop.loopState.max_num_pages);
                return;
            }



            jQuery('.td-ss-main-content').append('<div class="td-loader-gif td-loader-infinite td-loader-animation-start"></div>');
            tdLoadingBox.init(tds_theme_color_site_wide, 45);  //init the loading box
            setTimeout(function () {
                jQuery('.td-loader-gif')
                    .removeClass('td-loader-animation-start')
                    .addClass('td-loader-animation-mid');
            }, 50);


            var requestData = {
                action: 'td_ajax_loop',
                loopState: tdAjaxLoop.loopState
            };

            //console.log('request:');
            //console.log(tdAjaxLoop.loopState);
            jQuery.ajax({
                type: 'POST',
                url: td_ajax_url,
                cache:true,
                data: requestData,
                success: function(data, textStatus, XMLHttpRequest) {
                    tdAjaxLoop._processAjaxRequest(data, isLoadMoreButton);
                },
                error: function(MLHttpRequest, textStatus, errorThrown) {
                    //console.log(errorThrown);
                }
            });
        },

        _processAjaxRequest: function (data, isLoadMoreButton) {
            // stop the loader
            jQuery('.td-loader-gif').remove();
            tdLoadingBox.stop();

            var dataObj = jQuery.parseJSON(data);



            // empty reply - stop everything
            if ( '' === dataObj.server_reply_html_data  ) {
                jQuery('.td-load-more-infinite-wrap').css('visibility', 'hidden');
                return;
            }


            /**
             * @var {tdAjaxLoop.loopState}
             */

            jQuery('.td-ajax-loop-infinite').before(dataObj.server_reply_html_data);

            //console.log('reply:');
            //console.log(dataObj);

            if ( parseInt( dataObj.currentPage ) >= parseInt(dataObj.max_num_pages) ) {
                jQuery('.td-load-more-infinite-wrap').css('visibility', 'hidden');
            } else {
                if ( true === isLoadMoreButton ) {
                    jQuery('.td-load-more-infinite-wrap').css('visibility', 'visible');
                }
            }

            setTimeout( function () {
                tdAnimationStack.check_for_new_items('.td-main-content' + ' .td-animation-stack', tdAnimationStack.SORTED_METHOD.sort_left_to_right, true);
                //tdSmartSidebar.compute();
            }, 200);


            // on load more button, we don't have to compute the infinite loader event
            if ( true === isLoadMoreButton ) {
                return;
            }

            setTimeout( function() {
                //refresh waypoints for infinit scroll tdInfiniteLoader
                tdInfiniteLoader.computeTopDistances();
                tdInfiniteLoader.enable_is_visible_callback('tdAjaxLoop');
                //tdSmartSidebar.compute();
            }, 500);


            setTimeout( function() {
                tdInfiniteLoader.computeTopDistances();
            }, 1000);

            setTimeout( function() {
                tdInfiniteLoader.computeTopDistances();
            }, 1500);

        }
    };

})();
/**
 * Created by ra on 9/30/2015.
 */

/*
 tdWeather.js
 v1.0
 */
/* global jQuery:false */
/* global tdDetect:false */
/* global tdUtil:false */
/* global alert:false */
/* global tdLocalCache:false */




var tdWeather = {};

( function(){
    "use strict";

    tdWeather = {

        // used to translate the OWM code to icon
        _icons: {
            // day
            '01d' : 'clear-sky-d',
            '02d' : 'few-clouds-d',
            '03d' : 'scattered-clouds-d',
            '04d' : 'broken-clouds-d',
            '09d' : 'shower-rain-d',   // ploaie hardcore
            '10d' : 'rain-d',          // ploaie light
            '11d' : 'thunderstorm-d',
            '13d' : 'snow-d',
            '50d' : 'mist-d',

            //night:
            '01n' : 'clear-sky-n',
            '02n' : 'few-clouds-n',
            '03n' : 'scattered-clouds-n',
            '04n' : 'broken-clouds-n',
            '09n' : 'shower-rain-n',   // ploaie hardcore
            '10n' : 'rain-n',          // ploaie light
            '11n' : 'thunderstorm-n',
            '13n' : 'snow-n',
            '50n' : 'mist-n'
        },

        _currentRequestInProgress: false, // prevent multiple parallel requests
        _currentItem: '',  // current weather object, it is set on click and after we modify it, it will be displayed

        // latitude and longitude position, used in callback hell
        _currentLatitude: 0,
        _currentLongitude: 0,
        _currentPositionCacheKey: '',
        _currentLocationCacheKey: '',

        //location
        _currentLocation: '',

        // all the weather items
        items: [],  /** an item is json encoded from this in PHP: @see td_weather::$weather_data */

        // location set filed open
        _is_location_open: false,



        /**
         * Init the class, we hook the click event
         */
        init: function () {

            // weather location button click
            jQuery('.td-icons-location').click(function() {
                if (tdWeather._currentRequestInProgress === true) {
                    return;
                }
                tdWeather._currentRequestInProgress = true;

                // get the block id
                tdWeather._currentItem = tdWeather._getItemByBlockID(jQuery(this).data('block-uid'));

                // get the position + callback
                var timeoutVal = 10 * 1000 * 1000;
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        tdWeather._updateLocationCallback,
                        tdWeather._displayLocationApiError,
                        {enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 600000});
                }

                tdWeather._currentRequestInProgress = false;

            });

            jQuery('.td-weather-now').click(function(){
                if (tdWeather._currentRequestInProgress === true) {
                    return;
                }
                tdWeather._currentRequestInProgress = true;

                // get the block id
                tdWeather._currentItem = tdWeather._getItemByBlockID(jQuery(this).data('block-uid'));

                if (tdWeather._currentItem.current_unit === 1) {
                    tdWeather._currentItem.current_unit = 0;
                } else {
                    tdWeather._currentItem.current_unit = 1;
                }
                tdWeather._renderCurrentItem();
            });

            /**
             *  set manual location
             *  */

            jQuery('.td-manual-location-form').submit( function(event){
                event.preventDefault();

                if (tdWeather._currentRequestInProgress === true) {
                    return;
                }

                tdWeather._currentRequestInProgress = true;

                tdWeather._currentItem = tdWeather._getItemByBlockID(jQuery(this).data('block-uid'));
                //console.debug(this);

                tdWeather._currentLocation = jQuery('input#' + jQuery(this).data('block-uid')).val();

                tdWeather._updateLocationCallback2(tdWeather._currentLocation);

                tdWeather._currentRequestInProgress = false;
                tdWeather._hide_manual_location_form();
            });


            jQuery(document).click(function(ev) {

                if ( tdWeather._is_location_open === true
                    && jQuery(ev.target).hasClass('td-location-set-input') !== true
                    && jQuery(ev.target).hasClass('td-location-set-button') !== true ) {
                    tdWeather._hide_manual_location_form();
                }

            });
        },


        /**
         * adds a new weather item
         * item.block_uid is REQUIERED, based on that id, we delete the item from the array *as of 27.4.2016 the id is not used
         * @param item object - an item is json encoded from this in PHP: @see td_weather::$weather_data
         */
        addItem: function (item) {
            tdWeather.items.push(item);
        },

        ///
        // For now it's not needed because td_weater.php does not add js if it detects td-composer
        // **
        // * Deletes an item base on blockUid.
        // * Make sure that you add block_uid to items that you expect to be deleted
        // * @param blockUid
        // */
        //deleteItem: function(blockUid) {
        //    for (var cnt = 0; cnt < tdWeather.items.length; cnt++) {
        //        if (tdWeather.items[cnt].block_uid === blockUid) {
        //            tdWeather.items.splice(cnt, 1); // remove the item from the "array"
        //            return true;
        //        }
        //    }
        //    return false;
        //},


        /**
         * 1. LOCATION api - position callback
         * @param position
         * @private
         */
        _updateLocationCallback: function(position) {
            tdWeather._currentLatitude = position.coords.latitude;
            tdWeather._currentLongitude = position.coords.longitude;
            tdWeather._currentPositionCacheKey = position.coords.latitude + '_' + position.coords.longitude; //  update the cache key for current position

            // check the cache first and avoid doing the same ajax request again
            if (tdLocalCache.exist(tdWeather._currentPositionCacheKey + '_today')) {
                tdWeather._owmGetTodayDataCallback(tdLocalCache.get(tdWeather._currentPositionCacheKey + '_today'));
            } else {
                var weather = 'http://api.openweathermap.org/data/2.5/weather?lat=' + tdWeather._currentLatitude + '&lon=' + tdWeather._currentLongitude + '&units=metric&lang=' + tdWeather._currentItem.api_language + '&appid=' + tdWeather._currentItem.api_key;
                jQuery.ajax({
                    dataType: "jsonp",
                    url: weather,
                    success: tdWeather._owmGetTodayDataCallback,
                    cache: true
                });
            }

            //alert(position.coords.latitude + ' ' + position.coords.longitude);

        },


        /**
         * 2. AJAX callback for today forecast, this also makes a call to ajax 5 days forecast
         * @param data - OWM api response - NOTICE: We don't check anything if it's correct :)
         * @private
         */
        _owmGetTodayDataCallback: function (data) {
            // save the data to localCache
            tdLocalCache.set(tdWeather._currentPositionCacheKey + '_today', data);


            // prepare the tdWeather._currentItem object, notice that tdWeather._currentItem is a reference to an object stored in tdWeather.items
            tdWeather._currentItem.api_location = data.name;
            tdWeather._currentItem.today_clouds = tdUtil.round(data.clouds.all);
            tdWeather._currentItem.today_humidity = tdUtil.round(data.main.humidity);
            tdWeather._currentItem.today_icon = tdWeather._icons[data.weather[0].icon];
            tdWeather._currentItem.today_icon_text = data.weather[0].description;
            tdWeather._currentItem.today_max[0] = tdUtil.round(data.main.temp_max, 1);                                  //celsius
            tdWeather._currentItem.today_max[1] = tdWeather._celsiusToFahrenheit(data.main.temp_max);                   //imperial
            tdWeather._currentItem.today_min[0] = tdUtil.round(data.main.temp_min, 1);                                  //celsius
            tdWeather._currentItem.today_min[1] = tdWeather._celsiusToFahrenheit(data.main.temp_min);                   //imperial
            tdWeather._currentItem.today_temp[0] = tdUtil.round(data.main.temp, 1);                                     //celsius
            tdWeather._currentItem.today_temp[1] = tdWeather._celsiusToFahrenheit(data.main.temp);                      //imperial
            tdWeather._currentItem.today_wind_speed[0] = tdUtil.round(data.wind.speed, 1);                              //metric
            tdWeather._currentItem.today_wind_speed[1] = tdWeather._kmphToMph(data.wind.speed);                         //imperial

            //console.log(tdWeather._currentItem);
            //console.log(data);

            // check the cache first and avoid doing the same ajax request again
            if (tdLocalCache.exist(tdWeather._currentPositionCacheKey)) {
                tdWeather._owmGetFiveDaysData(tdLocalCache.get(tdWeather._currentPositionCacheKey));
            } else {
                var weather = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + tdWeather._currentLatitude + '&lon=' + tdWeather._currentLongitude + '&units=metric&lang=' + tdWeather._currentItem.api_language + '&appid=' + tdWeather._currentItem.api_key;
                //console.log('forecast: ' + weather);
                jQuery.ajax({
                    dataType: "jsonp",
                    url: weather,
                    success: tdWeather._owmGetFiveDaysData,
                    cache:true
                });
            }

        },


        /**
         * 3. AJAX callback for the 5 days forecast
         * @param data - OWM api response NOTICE: We don't check anything if it's correct :)
         * @private
         */
        _owmGetFiveDaysData: function (data) {
            // save the data to localCache
            tdLocalCache.set(tdWeather._currentPositionCacheKey, data);

            // process the data
            for (var item_index = 0; item_index < tdWeather._currentItem.forecast.length ; item_index++) {
                var current_forecast = tdWeather._currentItem.forecast[item_index];
                current_forecast.day_temp[0] = tdUtil.round(data.list[current_forecast.owm_day_index].temp.day);        //celsius
                current_forecast.day_temp[1] = tdWeather._celsiusToFahrenheit(current_forecast.day_temp[0]);            //imperial
            }
            tdWeather._renderCurrentItem();
        },


        /**
         * 4. Here we render the global tdWeather._currentItem object to the screen. The object already contains all the needed information
         * about where and what we have to render.
         * @private
         */
        _renderCurrentItem: function () {

            //console.log('.' + tdWeather._currentItem.block_uid + ' .td-weather-city');

            var blockInner = jQuery('#' + tdWeather._currentItem.block_uid);

            var currentLatitude = tdWeather._currentLatitude;
            var currentLongitude = tdWeather._currentLongitude;
            var currentLocation = tdWeather._currentLocation;

            // city
            blockInner.find('.td-weather-city').html(tdWeather._currentItem.api_location);

            if (currentLocation === '' && ( currentLatitude === 0 && currentLongitude === 0)){
                blockInner.find('.td-weather-city').html(tdWeather._currentItem.location);
            }

            // conditions
            blockInner.find('.td-weather-condition').html(tdWeather._currentItem.today_icon_text);

            // animation
            // we remove all the classes! including the animation ones
            var icon_el = blockInner.find('.td-w-today-icon');
            icon_el.removeClass();
            icon_el.addClass('td-w-today-icon');
            icon_el.addClass(tdWeather._currentItem.today_icon);

            var currentTempUnit = tdWeather._currentItem.current_unit;
            var currentSpeedLabel = 'kmh';
            var currentTempLabel = 'C';

            // preapare the labels
            if (currentTempUnit === 1) {
                currentSpeedLabel = 'mph';
                currentTempLabel = 'F';
            }


            // main temp
            blockInner.find('.td-big-degrees').html(tdWeather._currentItem.today_temp[currentTempUnit]);

            // main temp units
            blockInner.find('.td-weather-unit').html(currentTempLabel);


            // high
            blockInner.find('.td-w-high-temp').html(tdWeather._currentItem.today_max[currentTempUnit]);

            // low
            blockInner.find('.td-w-low-temp').html(tdWeather._currentItem.today_min[currentTempUnit]);

            // humidity
            blockInner.find('.td-w-today-humidity').html(tdWeather._currentItem.today_humidity + '%');

            // wind speed
            blockInner.find('.td-w-today-wind-speed').html(tdWeather._currentItem.today_wind_speed[currentTempUnit] + currentSpeedLabel);

            // clouds
            blockInner.find('.td-w-today-clouds').html(tdWeather._currentItem.today_clouds + '%');

            // full list of items! - just the temperature
            for (var item_index = 0; item_index < tdWeather._currentItem.forecast.length ; item_index++) {
                blockInner.find('.td-degrees-' + item_index).html(tdWeather._currentItem.forecast[item_index].day_temp[currentTempUnit]);
            }


            tdWeather._currentRequestInProgress = false; // allow other requests to take place
        },


        /**
         * gets a weather item based on block_uid
         * @param block_uid
         * @returns {*}
         * @private
         */
        _getItemByBlockID: function (block_uid) {
            for (var item_index = 0; item_index < tdWeather.items.length; item_index++) {
                if (tdWeather.items[item_index].block_uid === block_uid) {
                    return tdWeather.items[item_index];
                }
            }
            return false;
        },


        /**
         * Displays a friendly error when the location api fails
         * @param error - a location api error object?
         * @private
         */
        _displayLocationApiError: function (error) {

            if (error.code === 1) {
                if (tdDetect.isAndroid) {

                    //show manual location form
                    tdWeather._show_manual_location_form();

                    //alert('Please enable your gps and reload the page.');
                }

                else if (tdDetect.isIos) {
                    alert("Please enable Location services for Safari Websites and reload the page. \n ---------------------- \nSettings > Privacy > Location Services");
                    return;
                }

                //alert("Permission denied. Enable GPS or Location services and reload the page");
                //show manual location form
                tdWeather._show_manual_location_form();
            }

            //show manual location form
            tdWeather._show_manual_location_form();
        },


        /**
         * C to F converter. It rounds on big F numbers because we don't have space on the UI.
         * @param celsiusDegrees
         * @returns {*}
         * @private
         */
        _celsiusToFahrenheit: function (celsiusDegrees) {
            var f_degrees = celsiusDegrees * 9 / 5 + 32;

            var rounded_val = tdUtil.round(f_degrees, 1);
            if (rounded_val > 99.9) {  // if the value is bigger than 100, round it
                return tdUtil.round(f_degrees);
            }

            return rounded_val;
        },

        /**
         * converter for KMH -> MPH  ex: 2.3
         * @param $kmph
         * @returns {*}
         * @private
         */
        _kmphToMph: function ($kmph) {
            return tdUtil.round($kmph * 0.621371192, 1);
        },

        /**
         * *************************************************************************************************************
         *      set manual location for weather widget
         * *************************************************************************************************************
         */

        /**
         * shows the manual location form
         */

        _show_manual_location_form: function (){

            tdWeather._currentItem = tdWeather._getItemByBlockID(tdWeather._currentItem.block_uid);

            jQuery('#' + tdWeather._currentItem.block_uid).find('.td-weather-set-location').addClass( 'td-show-location' );
            jQuery('.td-manual-location-form input').focus();

            tdWeather._is_location_open = true;

        },

        /**
         * hides the manual location form
         */

        _hide_manual_location_form: function (){

            jQuery('#' + tdWeather._currentItem.block_uid).find('.td-weather-set-location').removeClass('td-show-location');

            tdWeather._is_location_open = false;
        },

        /**
         *  Location API - position callback 2 - used on chrome or other browsers that do not allow current position retrieving
         * @param location
         */

        _updateLocationCallback2: function(location){

            tdWeather._currentLocationCacheKey = location;

            // check the cache first and avoid doing the same ajax request again
            if (tdLocalCache.exist(tdWeather._currentLocationCacheKey + '_today')) {
                tdWeather._owmGetTodayDataCallback2(tdLocalCache.get(tdWeather._currentLocationCacheKey + '_today'));

            } else {

                //console.log('city weather api request!');
                var weather = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(location) + '&lang=' + tdWeather._currentItem.api_language + '&units=metric&appid=' + tdWeather._currentItem.api_key;

                //console.log('city api request url: ' + weather);

                jQuery.ajax({
                    dataType: "jsonp",
                    url: weather,
                    success: tdWeather._owmGetTodayDataCallback2,
                    cache: true
                });
            }
        },


        /**
         * AJAX callback for today forecast on manual city location api request
         * @param data - OWM api response
         *
         */

        _owmGetTodayDataCallback2: function (data) {
            // save the data to localCache
            tdLocalCache.set(tdWeather._currentLocationCacheKey + '_today', data);


            // prepare the tdWeather._currentItem object, notice that tdWeather._currentItem is a reference to an object stored in tdWeather.items
            tdWeather._currentItem.api_location = data.name;
            tdWeather._currentItem.today_clouds = tdUtil.round(data.clouds.all);
            tdWeather._currentItem.today_humidity = tdUtil.round(data.main.humidity);
            tdWeather._currentItem.today_icon = tdWeather._icons[data.weather[0].icon];
            tdWeather._currentItem.today_icon_text = data.weather[0].description;
            tdWeather._currentItem.today_max[0] = tdUtil.round(data.main.temp_max, 1);                                  //celsius
            tdWeather._currentItem.today_max[1] = tdWeather._celsiusToFahrenheit(data.main.temp_max);                   //imperial
            tdWeather._currentItem.today_min[0] = tdUtil.round(data.main.temp_min, 1);                                  //celsius
            tdWeather._currentItem.today_min[1] = tdWeather._celsiusToFahrenheit(data.main.temp_min);                   //imperial
            tdWeather._currentItem.today_temp[0] = tdUtil.round(data.main.temp, 1);                                     //celsius
            tdWeather._currentItem.today_temp[1] = tdWeather._celsiusToFahrenheit(data.main.temp);                      //imperial
            tdWeather._currentItem.today_wind_speed[0] = tdUtil.round(data.wind.speed, 1);                              //metric
            tdWeather._currentItem.today_wind_speed[1] = tdWeather._kmphToMph(data.wind.speed);                         //imperial


            // check the cache first and avoid doing the same ajax request again
            if (tdLocalCache.exist(tdWeather._currentLocationCacheKey)) {
                tdWeather._owmGetFiveDaysData2(tdLocalCache.get(tdWeather._currentLocationCacheKey));

            } else {

                //console.log('api forecast request!');

                var weather = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + tdWeather._currentItem.api_location + '&lang=' + tdWeather._currentItem.api_language + '&units=metric&cnt=7&appid=' + tdWeather._currentItem.api_key;

                //console.log('city forecast api request url: ' + weather);

                jQuery.ajax({
                    dataType: "jsonp",
                    url: weather,
                    success: tdWeather._owmGetFiveDaysData2,
                    cache:true
                });
            }

        },


        /**
         * AJAX callback for 5 days forecast on manual city location api request
         * @param data - OWM api response
         *
         */

        _owmGetFiveDaysData2: function (data) {
            // save the data to localCache
            tdLocalCache.set(tdWeather._currentLocationCacheKey, data);

            /**
             * ---------------------------------------------------------------------------------------------------
             * go through the api data list and increment the counter when we find a past day or the same as today
             * ---------------------------------------------------------------------------------------------------
             */
            var counter = 0;
            for (var list_item_index = 0; list_item_index <  data.list.length ; list_item_index++) {

                var timestamp = data.list[list_item_index].dt;
                //console.log(timestamp);

                //the forecast day in a 'easy to read' format - for testing purposes
                var forecast_day_format = td_date_i18n('Y m d, H:i a, T', timestamp);
                //console.log(forecast_day_format);

                var today_date = td_date_i18n('Ymd');
                var forecast_day = td_date_i18n('Ymd', timestamp);

                // compare today with the forecast date in the format 20150210, today must be smaller
                if (today_date >= forecast_day){
                    counter = counter + 1;
                }

            }

            /**
             * --------------------------------------------------------------------------------------------------
             * check the data and set the current forecast day index accordingly
             * --------------------------------------------------------------------------------------------------
             */
            for (var item_index = 0; item_index < tdWeather._currentItem.forecast.length ; item_index++) {
                var current_forecast = tdWeather._currentItem.forecast[item_index];

                //daca indexul ii pe 1 si trebuie trecut pe 2
                if (item_index === 0 && counter > 1 && current_forecast.owm_day_index < 2){
                    var current_forecast_owm_day_index_update_status_2 = true;
                }

                //daca trebuie setat pe 2 actulizeaza indexul curent
                if (current_forecast_owm_day_index_update_status_2) {
                    current_forecast.owm_day_index = current_forecast.owm_day_index + 1;
                }

                //daca e pe 2 si trebuie trecut pe 1
                if (item_index === 0 && counter < 2 && current_forecast.owm_day_index > 1){
                    var current_forecast_owm_day_index_update_status_1 = true;
                }

                //daca trebuie setat pe 1 actulizeaza indexul curent
                if (current_forecast_owm_day_index_update_status_1) {
                    current_forecast.owm_day_index = current_forecast.owm_day_index - 1;
                }

                current_forecast.day_temp[0] = tdUtil.round(data.list[current_forecast.owm_day_index].temp.day);        //celsius
                current_forecast.day_temp[1] = tdWeather._celsiusToFahrenheit(current_forecast.day_temp[0]);            //imperial
            }
            tdWeather._renderCurrentItem();
        }

    };  // end tdWeather
})();

tdWeather.init(); //init the class
/* global jQuery:{} */
/* global tdUtil:{} */
/* global tdTrendingNow:{} */

jQuery( window ).load(function() {

    'use strict';

    jQuery( 'body' ).addClass( 'td-js-loaded' );

    window.tdAnimationStack.init();
});

jQuery( window ).ready(function() {

    'use strict';

    /*
     - code used to allow external links from td_smart_list, when the Google Yoast "Track outbound click and downloads" is checked
     - internal links ("#with-hash") are allowed too
     - test the links on incognito, by default Google analytics by yoast ignores the Administrator and Editor users
     */

    jQuery( '.td_smart_list_1 a, .td_smart_list_3 a').click(function( event ) {
        if ( event.target === event.currentTarget ) {
            var targetAttributeContent = jQuery( this ).attr( 'target' );
            var donwloadAttributeIsSet = jQuery( this )[0].hasAttribute( 'download' );
            var currentUrl = jQuery( this ).attr( 'href' );
            //if target is _blank open the link in a new window
            if (donwloadAttributeIsSet) {
                //link contains download attribute - do nothing, let it download
            } else if (targetAttributeContent == '_blank') {
                event.preventDefault();
                window.open(currentUrl);
            } else {
            //regular links
                if (( window.location.href !== currentUrl ) && tdUtil.isValidUrl(currentUrl)) {
                    window.location.href = currentUrl;
                }
            }
        }
    });

    //trending now
    jQuery('.td_block_trending_now').each(function(){
        var item = new tdTrendingNow.item(),
            wrapper = jQuery(this).find('.td-trending-now-wrapper'),
            autoStart = wrapper.data('start'),
            iCont = 0;

        //block unique ID
        item.blockUid = jQuery(this).data('td-block-uid');

        //set trendingNowAutostart
        if (autoStart !== 'manual') {
            item.trendingNowAutostart = autoStart;
        }

        //take the text from each post from current trending-now-wrapper
        jQuery('#' + item.blockUid + ' .td-trending-now-post').each(function() {
            //trending_list_posts[i_cont] = jQuery(this)[0].outerHTML;
            item.trendingNowPosts[iCont] = jQuery(this);
            //increment the counter
            iCont++;
        });
        //add the item
        tdTrendingNow.addItem(item);

    });
    jQuery('.td-trending-now-nav-left').on('click', function(event) {
        event.preventDefault();
        var blockUid = jQuery(this).data('block-id');
        tdTrendingNow.itemPrev(blockUid);
    });
    jQuery('.td-trending-now-nav-right').on('click', function(event) {
        event.preventDefault();
        var blockUid = jQuery(this).data('block-id');
        tdTrendingNow.itemNext(blockUid);

    });

    //trending now
    //tdTrendingNowObj.tdTrendingNow();

    //call to trending now function to start auto scroll
    //tdTrendingNowObj.tdTrendingNowAutoStart();
});

/**
 * Created by tagdiv on 29.09.2015.
 */

/* global jQuery:{} */

var tdAnimationSprite = {};

(function(){
    'use strict';

    tdAnimationSprite = {

        items: [],

        // flag used to not call requestAnimationFrame until the previous requestAnimationFrame callback runs
        isInRequestAnimation: false,


        // The item that needs animation
        item: function item() {



            // here we store the block Unique ID. This enables us to delete the item via this id @see tdPullDown.deleteItem
            this.blockUid = '';

            // boolean - an item must be initialized only once
            this._isInitialized = false;

            // boolean - an item can be paused and restarted
            this.paused = false;

            // boolean - the animation automatically starts at the computing item
            this.automatStart = true;

            // object - css properties that will be changed (key - value; ex: 'color' : '#00FFCC')
            this.properties = [];

            // boolean - flag used by the requestAnimationFrame callback to know which items have properties to apply
            this.readyToAnimate = false;

            // the index of the current frame
            this.nextFrame = 1;

            // number - the current interval id set for the animation
            this.interval = undefined;

            // the jquery obj whose background will be animated
            this.jqueryObj = undefined;

            // the css class selector of the jqueryObj
            this.animationSpriteClass = undefined;

            // string - default direction for parsing the sprite img
            this._currentDirection = 'right';

            // number - the executed loops
            this._executedLoops = 0;


            // string - css background position
            this._prop_background_position = undefined;


            // The followings will be set from the class selector

            // int - number of frames (it must be greater than 1 to allow animation)
            this.frames = undefined;

            // the width(px) of a frame
            this.frameWidth = undefined;

            // int - the interval time (ms) the animation runs
            this.velocity = undefined;

            // boolean - to the right and vice versa
            this.reverse = undefined;

            // number - number of loops to animate
            this.loops = undefined;


            // Function actually compute the params for animation, prepare the params for next animation and calls t
            // he requestAnimationFrame with a callback function to animate all items ready for animation
            this.animate = function() {

                this._prop_background_position = ( -1 * this.nextFrame * this.frameWidth ) + 'px 0';
                this.readyToAnimate = true;


                // The nextFrame value is computed for next frame
                if ( true === this.reverse) {

                    if ( 'right' === this._currentDirection ) {

                        if ( this.nextFrame === this.frames - 1 ) {
                            this._currentDirection = 'left';
                            this.nextFrame--;
                        } else {
                            this.nextFrame++;
                        }

                    } else if ( 'left' === this._currentDirection ) {
                        if ( 0 === this.nextFrame ) {

                            this._currentDirection = 'right';
                            this.nextFrame++;
                            this._executedLoops++;

                            if ( ( 0 !== this.loops ) && ( this._executedLoops === this.loops ) ) {
                                clearInterval( this.interval );
                            }
                        } else {
                            this.nextFrame--;
                        }
                    }

                } else {

                    if ( this.nextFrame === this.frames - 1 ) {

                        this._executedLoops++;

                        // complete tour ( once to the right ), so we stop
                        if ( ( 0 !== this.loops ) && ( this._executedLoops === this.loops ) ) {
                            clearInterval( this.interval );
                        }

                        this.nextFrame = 0;
                    } else {
                        this.nextFrame++;
                    }
                }


                //this.jqueryObj.css('background-position', horizontalPosition + 'px 0');

                // Any calls to requestAnimationFrame are stopped. Anyway, the settings of the current item are ready,
                // so the callback will consider it.
                if ( false === tdAnimationSprite.isInRequestAnimation ) {
                    tdAnimationSprite.isInRequestAnimation = true;
                    window.requestAnimationFrame( tdAnimationSprite.animateAllItems );
                }
            };
        },

        /**
         * The css class selector must be some like this 'td_animation_sprite-10-50-500-0-1-1'
         * It must start with 'td_animation_sprite'
         * Fields order:
         * - number of frames
         * - width of a frame
         * - velocity in ms
         * - loops (number) : reload the animation cycle at infinity or specify the number of loops
         * - reverse (0 or 1) : the loop include, or not, the reverse path
         * - automatstart (0 or 1) : the item animation starts, or not, automatically
         *
         * @param item
         * @private
         */
        _initializeItem: function( item ) {
            if ( ( true === item._isInitialized ) ) {
                return;
            }

            // get all strings containing 'td_animation_sprite'
            var regex = /(td_animation_sprite\S*)/gi;

            // resultMatch is an array of matches, or null if there's no matching
            var resultMatch = item.jqueryObj.attr( 'class' ).match( regex );

            if ( null !== resultMatch ) {

                item.offsetTop = item.jqueryObj.offset().top;
                item.offsetBottomToTop = item.offsetTop + item.jqueryObj.height();

                // the last matching is considered, because new css classes that matches, can be added before recomputing an item
                item.animationSpriteClass = resultMatch[ resultMatch.length - 1 ];

                var sceneParams = item.animationSpriteClass.split( '-' );

                if ( 7 === sceneParams.length ) {

                    item.frames = parseInt( sceneParams[1] );
                    item.frameWidth = parseInt( sceneParams[2] );
                    item.velocity = parseInt( sceneParams[3] );
                    item.loops = parseInt( sceneParams[4] );

                    if ( 1 === parseInt( sceneParams[5] ) ) {
                        item.reverse = true;
                    } else {
                        item.reverse = false;
                    }

                    if ( 1 === parseInt( sceneParams[6] ) ) {
                        item.automatStart = true;
                    } else {
                        item.automatStart = false;
                    }

                    item._isInitialized = true;
                }
            }
        },



        addItem: function( item ) {

            if ( item.constructor === tdAnimationSprite.item ) {
                tdAnimationSprite.items.push( item );
                tdAnimationSprite._initializeItem( item );

                if ( true === item.automatStart ) {
                    tdAnimationSprite.computeItem( item );
                }
            }
        },


        /**
         * Deletes an item base on blockUid.
         * Make sure that you add blockUid to items that you expect to be deleted
         * @param blockUid
         */
        deleteItem: function(blockUid) {
            for (var cnt = 0; cnt < tdAnimationSprite.items.length; cnt++) {
                if (tdAnimationSprite.items[cnt].blockUid === blockUid) {
                    tdAnimationSprite.items.splice(cnt, 1); // remove the item from the "array"
                    return true;
                }
            }
            return false;
        },

        computeItem: function( item ) {

            // set interval just for frames greater than 1
            if ( item.frames > 1 ) {

                // Check the item interval to not be set
                if ( undefined !== item.interval ) {
                    return;
                }

                item.interval = setInterval(function(){

                    if ( false === item.paused ) {
                        item.animate();
                    }

                }, item.velocity );
            }
        },

        // At recomputing, an item will check again its last css class selector and it is reinitialized. So, if a new
        // css class selector is added, it will use it. This way the animation can be modified
        recomputeItem: function( item ) {

            // stop any animation
            clearInterval( item.interval );

            // reset the item interval
            item.interval = undefined;

            // reset the _isInitialized flag
            item._isInitialized = false;

            // reinitialize item
            tdAnimationSprite._initializeItem( item );

            // compute the item again
            tdAnimationSprite.computeItem( item );
        },

        // Clear the interval set for an item.
        stopItem: function( item ) {
            if ( ( item.constructor === tdAnimationSprite.item ) && ( true === item._isInitialized ) ) {
                clearInterval( item.interval );

                // reset the item interval
                item.interval = undefined;
            }
        },

        // Start animation of a paused item
        startItem: function( item ) {
            if ( ( item.constructor === tdAnimationSprite.item ) && ( true === item._isInitialized ) ) {
                item.paused = false;
            }
        },

        // Pause animation of an item
        pauseItem: function( item ) {
            if ( ( item.constructor === tdAnimationSprite.item ) && ( true === item._isInitialized ) ) {
                item.paused = true;
            }
        },




        computeAllItems: function() {
            for ( var i = 0; i < tdAnimationSprite.items.length; i++ ) {
                tdAnimationSprite.computeItem( tdAnimationSprite.items[i] );
            }
        },

        recomputeAllItems: function() {
            for ( var i = 0; i < tdAnimationSprite.items.length; i++ ) {
                tdAnimationSprite.recomputeItem( tdAnimationSprite.items[i] );
            }
        },

        stopAllItems: function() {
            for ( var i = 0; i < tdAnimationSprite.items.length; i++ ) {
                tdAnimationSprite.stopItem( tdAnimationSprite.items[i] );
            }
        },

        pauseAllItems: function() {
            for ( var i = 0; i < tdAnimationSprite.items.length; i++ ) {
                tdAnimationSprite.pauseItem( tdAnimationSprite.items[i] );
            }
        },

        startAllItems: function() {
            for ( var i = 0; i < tdAnimationSprite.items.length; i++ ) {
                tdAnimationSprite.startItem( tdAnimationSprite.items[i] );
            }
        },


        // The requestAnimationFrame callback function.
        // The 'background-position' is set and then the 'readyToAnimate' flag is set to false
        animateAllItems: function() {
            var currentItem;

            for ( var i = 0; i < tdAnimationSprite.items.length; i++ ) {
                currentItem = tdAnimationSprite.items[i];
                if ( true === currentItem.readyToAnimate ) {
                    currentItem.jqueryObj.css( 'background-position', currentItem._prop_background_position );
                    currentItem.readyToAnimate = false;
                }
            }
            tdAnimationSprite.isInRequestAnimation = false;
        }
    };

    /*
     <div class="td_animation_sprite-a-b-c-d-e-f"></div>

    @note - we should have used the data- html attribute here!

     a - number of frames
     b - width(px) of a frame
     c - velocity
     d - loops number (0 for infinity)
     e - loop include reverse
     f - animation start automatically
     */

    var tdAnimationSpriteElements = jQuery( 'span[class^="td_animation_sprite"]' );

    for ( var i = 0; i < tdAnimationSpriteElements.length; i++ ) {
        var tdAnimationSpriteItem = new tdAnimationSprite.item();


        tdAnimationSpriteItem.jqueryObj = jQuery( tdAnimationSpriteElements[i] );
        tdAnimationSpriteItem.blockUid = tdAnimationSpriteItem.jqueryObj.data('td-block-uid');   // the block uid is used on the front end editor when we want to delete this item via it's blockuid
        tdAnimationSprite.addItem( tdAnimationSpriteItem );
    }
})();

function td_date_i18n(format, timestamp) {
    // http://kevin.vanzonneveld.net
    // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
    // +      parts by: Peter-Paul Koch (http://www.quirksmode.org/js/beat.html)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: MeEtc (http://yass.meetcweb.com)
    // +   improved by: Brad Touesnard
    // +   improved by: Tim Wiel
    // +   improved by: Bryan Elliott
    // +   improved by: David Randall
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Theriault
    // +  derived from: gettimeofday
    // +      input by: majak
    // +   bugfixed by: majak
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Alex
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +   improved by: Thomas Beaucourt (http://www.webapp.fr)
    // +   improved by: JT
    // +   improved by: Theriault
    // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
    // +   bugfixed by: omid (http://phpjs.org/functions/380:380#comment_137122)
    // +      input by: Martin
    // +      input by: Alex Wilson
    // +      input by: Haravikk
    // +   improved by: Theriault
    // +   bugfixed by: Chris (http://www.devotis.nl/)
    // +   improved by: Jari Pennanen (https://github.com/ciantic/) - date_i18n from WordPress
    // %        note 1: Uses global: php_js to store the default timezone
    // %        note 2: Although the function potentially allows timezone info (see notes), it currently does not set
    // %        note 2: per a timezone specified by date_default_timezone_set(). Implementers might use
    // %        note 2: this.php_js.currentTimezoneOffset and this.php_js.currentTimezoneDST set by that function
    // %        note 2: in order to adjust the dates in this function (or our other date functions!) accordingly
    // *     example 1: date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400);
    // *     returns 1: '09:09:40 m is month'
    // *     example 2: date('F j, Y, g:i a', 1062462400);
    // *     returns 2: 'September 2, 2003, 2:26 am'
    // *     example 3: date('Y W o', 1062462400);
    // *     returns 3: '2003 36 2003'
    // *     example 4: x = date('Y m d', (new Date()).getTime()/1000);
    // *     example 4: (x+'').length == 10 // 2009 01 09
    // *     returns 4: true
    // *     example 5: date('W', 1104534000);
    // *     returns 5: '53'
    // *     example 6: date('B t', 1104534000);
    // *     returns 6: '999 31'
    // *     example 7: date('W U', 1293750000.82); // 2010-12-31
    // *     returns 7: '52 1293750000'
    // *     example 8: date('W', 1293836400); // 2011-01-01
    // *     returns 8: '52'
    // *     example 9: date('W Y-m-d', 1293974054); // 2011-01-02
    // *     returns 9: '52 2011-01-02'
    var that = this,
        jsdate,
        f,
    // Keep this here (works, but for code commented-out
    // below for file size reasons)
    //, tal= [],
    // trailing backslash -> (dropped)
    // a backslash followed by any character (including backslash) -> the character
    // empty string -> empty string
        formatChr = /\\?(.?)/gi,
        formatChrCb = function (t, s) {
            return f[t] ? f[t]() : s;
        },
        _pad = function (n, c) {
            n = String(n);
            while (n.length < c) {
                n = '0' + n;
            }
            return n;
        };
    f = {
        // Day
        d: function () { // Day of month w/leading 0; 01..31
            return _pad(f.j(), 2);
        },
        D: function () { // Shorthand day name; Mon...Sun
            return tdDateNamesI18n.day_names_short[f.w()];
        },
        j: function () { // Day of month; 1..31
            return jsdate.getDate();
        },
        l: function () { // Full day name; Monday...Sunday
            return tdDateNamesI18n.day_names[f.w()];
        },
        N: function () { // ISO-8601 day of week; 1[Mon]..7[Sun]
            return f.w() || 7;
        },
        S: function(){ // Ordinal suffix for day of month; st, nd, rd, th
            var j = f.j(),
                i = j%10;
            if (i <= 3 && parseInt((j%100)/10, 10) == 1) {
                i = 0;
            }
            return ['st', 'nd', 'rd'][i - 1] || 'th';
        },
        w: function () { // Day of week; 0[Sun]..6[Sat]
            return jsdate.getDay();
        },
        z: function () { // Day of year; 0..365
            var a = new Date(f.Y(), f.n() - 1, f.j()),
                b = new Date(f.Y(), 0, 1);
            return Math.round((a - b) / 864e5);
        },

        // Week
        W: function () { // ISO-8601 week number
            var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3),
                b = new Date(a.getFullYear(), 0, 4);
            return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
        },

        // Month
        F: function () { // Full month name; January...December
            return tdDateNamesI18n.month_names[f.n() - 1];
        },
        m: function () { // Month w/leading 0; 01...12
            return _pad(f.n(), 2);
        },
        M: function () { // Shorthand month name; Jan...Dec
            return tdDateNamesI18n.month_names_short[f.n() - 1];
        },
        n: function () { // Month; 1...12
            return jsdate.getMonth() + 1;
        },
        t: function () { // Days in month; 28...31
            return (new Date(f.Y(), f.n(), 0)).getDate();
        },

        // Year
        L: function () { // Is leap year?; 0 or 1
            var j = f.Y();
            return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
        },
        o: function () { // ISO-8601 year
            var n = f.n(),
                W = f.W(),
                Y = f.Y();
            return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
        },
        Y: function () { // Full year; e.g. 1980...2010
            return jsdate.getFullYear();
        },
        y: function () { // Last two digits of year; 00...99
            return f.Y().toString().slice(-2);
        },

        // Time
        a: function () { // am or pm
            return jsdate.getHours() > 11 ? "pm" : "am";
        },
        A: function () { // AM or PM
            return f.a().toUpperCase();
        },
        B: function () { // Swatch Internet time; 000..999
            var H = jsdate.getUTCHours() * 36e2,
            // Hours
                i = jsdate.getUTCMinutes() * 60,
            // Minutes
                s = jsdate.getUTCSeconds(); // Seconds
            return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
        },
        g: function () { // 12-Hours; 1..12
            return f.G() % 12 || 12;
        },
        G: function () { // 24-Hours; 0..23
            return jsdate.getHours();
        },
        h: function () { // 12-Hours w/leading 0; 01..12
            return _pad(f.g(), 2);
        },
        H: function () { // 24-Hours w/leading 0; 00..23
            return _pad(f.G(), 2);
        },
        i: function () { // Minutes w/leading 0; 00..59
            return _pad(jsdate.getMinutes(), 2);
        },
        s: function () { // Seconds w/leading 0; 00..59
            return _pad(jsdate.getSeconds(), 2);
        },
        u: function () { // Microseconds; 000000-999000
            return _pad(jsdate.getMilliseconds() * 1000, 6);
        },

        // Timezone
        e: function () { // Timezone identifier; e.g. Atlantic/Azores, ...
            // The following works, but requires inclusion of the very large
            // timezone_abbreviations_list() function.
            /*              return that.date_default_timezone_get();
             */
            throw 'Not supported (see source code of date() for timezone on how to add support)';
        },
        I: function () { // DST observed?; 0 or 1
            // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
            // If they are not equal, then DST is observed.
            var a = new Date(f.Y(), 0),
            // Jan 1
                c = Date.UTC(f.Y(), 0),
            // Jan 1 UTC
                b = new Date(f.Y(), 6),
            // Jul 1
                d = Date.UTC(f.Y(), 6); // Jul 1 UTC
            return ((a - c) !== (b - d)) ? 1 : 0;
        },
        O: function () { // Difference to GMT in hour format; e.g. +0200
            var tzo = jsdate.getTimezoneOffset(),
                a = Math.abs(tzo);
            return (tzo > 0 ? "-" : "+") + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
        },
        P: function () { // Difference to GMT w/colon; e.g. +02:00
            var O = f.O();
            return (O.substr(0, 3) + ":" + O.substr(3, 2));
        },
        T: function () { // Timezone abbreviation; e.g. EST, MDT, ...
            // The following works, but requires inclusion of the very
            // large timezone_abbreviations_list() function.
            /*              var abbr = '', i = 0, os = 0, default = 0;
             if (!tal.length) {
             tal = that.timezone_abbreviations_list();
             }
             if (that.php_js && that.php_js.default_timezone) {
             default = that.php_js.default_timezone;
             for (abbr in tal) {
             for (i=0; i < tal[abbr].length; i++) {
             if (tal[abbr][i].timezone_id === default) {
             return abbr.toUpperCase();
             }
             }
             }
             }
             for (abbr in tal) {
             for (i = 0; i < tal[abbr].length; i++) {
             os = -jsdate.getTimezoneOffset() * 60;
             if (tal[abbr][i].offset === os) {
             return abbr.toUpperCase();
             }
             }
             }
             */
            return 'UTC';
        },
        Z: function () { // Timezone offset in seconds (-43200...50400)
            return -jsdate.getTimezoneOffset() * 60;
        },

        // Full Date/Time
        c: function () { // ISO-8601 date.
            return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
        },
        r: function () { // RFC 2822
            return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
        },
        U: function () { // Seconds since UNIX epoch
            return jsdate / 1000 | 0;
        }
    };
    this.date = function (format, timestamp) {
        that = this;
        jsdate = (timestamp === undefined ? new Date() : // Not provided
            (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
                new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
        );
        return format.replace(formatChr, formatChrCb);
    };
    return this.date(format, timestamp);
}
