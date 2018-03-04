function Bannermator(){this.timeline=0,this.animSequence=[],this.curAnimSeq=0,this.timeouts=[],this.repeatSequence=[],this.curRepeatSeq=0,this.objArray=[],this.keyframes={},this.eventListener}function AnimationObject(){this.elem="",this.timestamp=0,this.duration=0,this.delay=0,this.x=0,this.y=0,this.z=0,this.rotateX=0,this.rotateY=0,this.rotateZ=0,this.scaleX=1,this.scaleY=1,this.scale=1,this.skewX=0,this.skewY=0,this.width=0,this.height=0,this.opacity=1,this.easing="ease"}Bannermator.prototype.to=function(a,b,c,d){var g,e=0,f="ease",h={},i={},j={},k={},l=0;this.dupeCheck(a)||(h=new AnimationObject,h.elem=a,h.width=a.offsetWidth,h.height=a.offsetHeight,this.objArray.push(h)),i=this.dupeCheck(a),j=this.objArray[i],d&&(e-=this.timeline-this.keyframes[d]),c.scale&&(c.scaleX=c.scaleY=c.scale,delete c.scale),c.ease&&(f=this.applyEase(c.ease)),c.delay&&(e+=1e3*c.delay),c.repeat&&(repeatSrcObj=this.cloneObj(j));for(g in c)"delay"!=g&&"ease"!=g&&(j[g]=c[g]);return j.timestamp=this.timeline,j.duration=1e3*b,j.delay=e,j.easing=f,k=this.cloneObj(j),this.animSequence.push(k),this.timeline+=1e3*b+e,l=c.repeat,l>0&&(this.repeatSequence.push({start:repeatSrcObj,end:k,cycles:l}),this.timeline+=b*l*1e3),this},Bannermator.prototype.set=function(a,b){var c,d={},e={},f={};this.dupeCheck(a)||(d=new AnimationObject,d.elem=a,d.width=a.offsetWidth,d.height=a.offsetHeight,this.objArray.push(d)),e=this.dupeCheck(a),f=this.objArray[e],b.scale&&(b.scaleX=b.scaleY=b.scale,delete b.scale);for(c in b)"x"===c?f[c]=b[c]:"y"===c?f[c]=b[c]:f[c]=b[c];return f.timestamp=this.timeline,f.duration=0,f.delay=0,seqObj=this.cloneObj(f),this.animSequence.push(seqObj),this.timeline=0,this},Bannermator.prototype.add=function(a){return this.keyframes[a]=this.timeline,this},Bannermator.prototype.delay=function(a){return this.timeline+=1e3*a,this},Bannermator.prototype.endAnim=function(){this.drawIt(this.curAnimSeq)},Bannermator.prototype.drawIt=function(a){if(a<this.animSequence.length){var b=this,c=this.animSequence[a],d=c.duration/1e3,e=c.delay,f=c.repeat,g=c.timestamp,h=c.easing;0==d?b.timeouts.push(setTimeout(function(){b.setTransforms(c,d,h),b.curAnimSeq++,b.drawIt(b.curAnimSeq)},g+e)):(f&&b.timeouts.push(setTimeout(function(){for(var a=b.repeatSequence[b.curRepeatSeq].start,c=b.repeatSequence[b.curRepeatSeq].end,d=c.duration/1e3,e=c.easing,g=0,h=!0;g<f;g++)h?(b.timeouts.push(setTimeout(function(){b.setTransforms(a,d,e)},1e3*d*(g+1))),h=!1):(b.timeouts.push(setTimeout(function(){b.setTransforms(c,d,e)},1e3*d*(g+1))),h=!0);b.curRepeatSeq++},g+e)),b.timeouts.push(setTimeout(function(){b.setTransforms(c,d,h)},g+e)),this.curAnimSeq++,this.drawIt(b.curAnimSeq))}},Bannermator.prototype.setTransforms=function(a,b,c,d){var e=a.elem;transforms="translate3d("+a.x+"px, "+a.y+"px, "+a.z+"px) rotateX("+a.rotateX+"deg) rotateY("+a.rotateY+"deg) rotateZ("+a.rotateZ+"deg) scale3d("+a.scaleX+", "+a.scaleY+", 1) skewX("+a.skewX+"deg) skewY("+a.skewY+"deg)",e.style.opacity=a.opacity,a.width&&(e.style.width=a.width+"px"),a.height&&(e.style.height=a.height+"px"),e.style.transition=b+"s all "+c,e.style.OTransition=b+"s all "+c,e.style.msTransition=b+"s all "+c,e.style.MozTransition=b+"s all "+c,e.style.WebkitTransition=b+"s all "+c,e.style.transform=transforms,e.style.OTransform=transforms,e.style.msTransform=transforms,e.style.MozTransform=transforms,e.style.WebkitTransform=transforms},Bannermator.prototype.cloneObj=function(a){var b={};for(prop in a)b[prop]=a[prop];return b},Bannermator.prototype.applyEase=function(a){return"default"===a?"ease":"Linear"===a?"linear":"Linear.easeIn"===a?"ease-in":"Linear.easeOut"===a?"ease-out":"Linear.easeInOut"===a?"ease-in-out":"Quad.easeIn"===a?"cubic-bezier(0.550, 0.085, 0.680, 0.530)":"Quad.easeOut"===a?"cubic-bezier(0.250, 0.460, 0.450, 0.940)":"Quad.easeInOut"===a?"cubic-bezier(0.455, 0.030, 0.515, 0.955)":"Cubic.easeIn"===a?"cubic-bezier(0.550, 0.055, 0.675, 0.190)":"Cubic.easeOut"===a?"cubic-bezier(0.215, 0.610, 0.355, 1.000)":"Cubic.easeInOut"===a?"cubic-bezier(0.645, 0.045, 0.355, 1.000)":"Quart.easeIn"===a?"cubic-bezier(0.895, 0.030, 0.685, 0.220)":"Quart.easeOut"===a?"cubic-bezier(0.165, 0.840, 0.440, 1.000)":"Quart.easeInOut"===a?"cubic-bezier(0.770, 0.000, 0.175, 1.000)":"Quint.easeIn"===a?"cubic-bezier(0.755, 0.050, 0.855, 0.060)":"Quint.easeOut"===a?"cubic-bezier(0.230, 1.000, 0.320, 1.000)":"Quint.easeInOut"===a?"cubic-bezier(0.860, 0.000, 0.070, 1.000)":"Expo.easeIn"===a?"cubic-bezier(0.950, 0.050, 0.795, 0.035)":"Expo.easeOut"===a?"cubic-bezier(0.190, 1.000, 0.220, 1.000)":"Expo.easeInOut"===a?"cubic-bezier(1.000, 0.000, 0.000, 1.000)":"Back.easeIn"===a?"cubic-bezier(0.600, -0.280, 0.735, 0.045)":"Back.easeOut"===a?"cubic-bezier(0.175, 0.885, 0.320, 1.275)":"Back.easeInOut"===a?"cubic-bezier(0.680, -0.550, 0.265, 1.550)":void 0},Bannermator.prototype.dupeCheck=function(a){var b=this.objArray.length,c=0;if(!(b>0))return!1;for(;c<b;c++)if(a===this.objArray[c].elem)return c},Bannermator.prototype.killTimers=function(){for(var a=0;a<this.timeouts.length;a++)window.clearTimeout(this.timeouts[a])};