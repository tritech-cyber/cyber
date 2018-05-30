!function(root){function Context(t,e,n,r){this.stack=t,this.global=e,this.blocks=n,this.templateName=r}function Stack(t,e,n,r){this.tail=e,this.isObject=t&&"object"==typeof t,this.head=t,this.index=n,this.of=r}function Stub(t){this.head=new Chunk(this),this.callback=t,this.out=""}function Stream(){this.head=new Chunk(this)}function Chunk(t,e,n){this.root=t,this.next=e,this.data=[],this.flushable=!1,this.taps=n}function Tap(t,e){this.head=t,this.tail=e}var dust={},NONE="NONE",ERROR="ERROR",WARN="WARN",INFO="INFO",DEBUG="DEBUG",loggingLevels=["DEBUG","INFO",WARN,ERROR,"NONE"],EMPTY_FUNC=function(){},logger={},originalLog,loggerContext;dust.debugLevel="NONE",dust.config={whitespace:!1},dust._aliases={write:"w",end:"e",map:"m",render:"r",reference:"f",section:"s",exists:"x",notexists:"nx",block:"b",partial:"p",helper:"h"},root&&root.console&&root.console.log&&(loggerContext=root.console,originalLog=root.console.log),logger.log=loggerContext?function(){logger.log="function"==typeof originalLog?function(){originalLog.apply(loggerContext,arguments)}:function(){originalLog(Array.prototype.slice.apply(arguments).join(" "))},logger.log.apply(this,arguments)}:function(){},dust.log=function(t,e){e=e||"INFO","NONE"!==dust.debugLevel&&dust.indexInArray(loggingLevels,e)>=dust.indexInArray(loggingLevels,dust.debugLevel)&&(dust.logQueue||(dust.logQueue=[]),dust.logQueue.push({message:t,type:e}),logger.log("[DUST "+e+"]: "+t))},dust.helpers={},dust.cache={},dust.register=function(t,e){t&&(dust.cache[t]=e)},dust.render=function(t,e,n){var r=new Stub(n).head;try{dust.load(t,r,Context.wrap(e,t)).end()}catch(t){r.setError(t)}},dust.stream=function(t,e){var n=new Stream,r=n.head;return dust.nextTick(function(){try{dust.load(t,n.head,Context.wrap(e,t)).end()}catch(t){r.setError(t)}}),n},dust.renderSource=function(t,e,n){return dust.compileFn(t)(e,n)},dust.compileFn=function(t,e){e=e||null;var n=dust.loadSource(dust.compile(t,e));return function(t,r){var o=r?new Stub(r):new Stream;return dust.nextTick(function(){"function"==typeof n?n(o.head,Context.wrap(t,e)).end():dust.log(new Error("Template ["+e+"] cannot be resolved to a Dust function"),ERROR)}),o}},dust.load=function(t,e,n){var r=dust.cache[t];return r?r(e,n):dust.onLoad?e.map(function(e){dust.onLoad(t,function(r,o){return r?e.setError(r):(dust.cache[t]||dust.loadSource(dust.compile(o,t)),void dust.cache[t](e,n).end())})}):e.setError(new Error("Template Not Found: "+t))},dust.loadSource=function(source,path){return eval(source)},dust.isArray=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},dust.indexInArray=function(t,e,n){if(n=+n||0,Array.prototype.indexOf)return t.indexOf(e,n);if(void 0===t||null===t)throw new TypeError('cannot call method "indexOf" of null');var r=t.length;for(1/0===Math.abs(n)&&(n=0),0>n&&(n+=r,0>n&&(n=0));r>n;n++)if(t[n]===e)return n;return-1},dust.nextTick=function(){return function(t){setTimeout(t,0)}}(),dust.isEmpty=function(t){return!(!dust.isArray(t)||t.length)||0!==t&&!t},dust.filter=function(t,e,n){if(n)for(var r=0,o=n.length;o>r;r++){var s=n[r];"s"===s?e=null:"function"==typeof dust.filters[s]?t=dust.filters[s](t):dust.log("Invalid filter ["+s+"]",WARN)}return e&&(t=dust.filters[e](t)),t},dust.filters={h:function(t){return dust.escapeHtml(t)},j:function(t){return dust.escapeJs(t)},u:encodeURI,uc:encodeURIComponent,js:function(t){return JSON?JSON.stringify(t):(dust.log("JSON is undefined.  JSON stringify has not been used on ["+t+"]",WARN),t)},jp:function(t){return JSON?JSON.parse(t):(dust.log("JSON is undefined.  JSON parse has not been used on ["+t+"]",WARN),t)}},dust.makeBase=function(t){return new Context(new Stack,t)},Context.wrap=function(t,e){return t instanceof Context?t:new Context(new Stack(t),{},null,e)},Context.prototype.get=function(t,e){return"string"==typeof t&&("."===t[0]&&(e=!0,t=t.substr(1)),t=t.split(".")),this._get(e,t)},Context.prototype._get=function(t,e){var n,r,o,s,i,u=this.stack,a=1;if(r=e[0],o=e.length,t&&0===o)s=u,u=u.head;else{if(t)u&&(u=u.head?u.head[r]:void 0);else{for(;u&&(!u.isObject||(s=u.head,n=u.head[r],void 0===n));)u=u.tail;u=void 0!==n?n:this.global?this.global[r]:void 0}for(;u&&o>a;)s=u,u=u[e[a]],a++}return"function"==typeof u?(i=function(){try{return u.apply(s,arguments)}catch(t){throw dust.log(t,ERROR),t}},i.__dustBody=!!u.__dustBody,i):(void 0===u&&dust.log("Cannot find the value for reference [{"+e.join(".")+"}] in template ["+this.getTemplateName()+"]"),u)},Context.prototype.getPath=function(t,e){return this._get(t,e)},Context.prototype.push=function(t,e,n){return new Context(new Stack(t,this.stack,e,n),this.global,this.blocks,this.getTemplateName())},Context.prototype.rebase=function(t){return new Context(new Stack(t),this.global,this.blocks,this.getTemplateName())},Context.prototype.current=function(){return this.stack.head},Context.prototype.getBlock=function(t){if("function"==typeof t){t=t(new Chunk,this).data.join("")}var e=this.blocks;if(!e)return void dust.log("No blocks for context[{"+t+"}] in template ["+this.getTemplateName()+"]","DEBUG");for(var n,r=e.length;r--;)if(n=e[r][t])return n},Context.prototype.shiftBlocks=function(t){var e,n=this.blocks;return t?(e=n?n.concat([t]):[t],new Context(this.stack,this.global,e,this.getTemplateName())):this},Context.prototype.getTemplateName=function(){return this.templateName},Stub.prototype.flush=function(){for(var t=this.head;t;){if(!t.flushable)return t.error?(this.callback(t.error),dust.log("Chunk error ["+t.error+"] thrown. Ceasing to render this template.",WARN),void(this.flush=EMPTY_FUNC)):void 0;this.out+=t.data.join(""),t=t.next,this.head=t}this.callback(null,this.out)},Stream.prototype.flush=function(){for(var t=this.head;t;){if(!t.flushable)return t.error?(this.emit("error",t.error),dust.log("Chunk error ["+t.error+"] thrown. Ceasing to render this template.",WARN),void(this.flush=EMPTY_FUNC)):void 0;this.emit("data",t.data.join("")),t=t.next,this.head=t}this.emit("end")},Stream.prototype.emit=function(t,e){if(!this.events)return dust.log("No events to emit","INFO"),!1;var n=this.events[t];if(!n)return dust.log("Event type ["+t+"] does not exist",WARN),!1;if("function"==typeof n)n(e);else if(dust.isArray(n))for(var r=n.slice(0),o=0,s=r.length;s>o;o++)r[o](e);else dust.log("Event Handler ["+n+"] is not of a type that is handled by emit",WARN)},Stream.prototype.on=function(t,e){return this.events||(this.events={}),this.events[t]?"function"==typeof this.events[t]?this.events[t]=[this.events[t],e]:this.events[t].push(e):e?this.events[t]=e:dust.log("Callback for type ["+t+"] does not exist. Listener not registered.",WARN),this},Stream.prototype.pipe=function(t){return this.on("data",function(e){try{t.write(e,"utf8")}catch(t){dust.log(t,ERROR)}}).on("end",function(){try{return t.end()}catch(t){dust.log(t,ERROR)}}).on("error",function(e){t.error(e)}),this},Chunk.prototype.write=function(t){var e=this.taps;return e&&(t=e.go(t)),this.data.push(t),this},Chunk.prototype.end=function(t){return t&&this.write(t),this.flushable=!0,this.root.flush(),this},Chunk.prototype.map=function(t){var e=new Chunk(this.root,this.next,this.taps),n=new Chunk(this.root,e,this.taps);this.next=n,this.flushable=!0;try{t(n)}catch(t){dust.log(t,ERROR),n.setError(t)}return e},Chunk.prototype.tap=function(t){var e=this.taps;return this.taps=e?e.push(t):new Tap(t),this},Chunk.prototype.untap=function(){return this.taps=this.taps.tail,this},Chunk.prototype.render=function(t,e){return t(this,e)},Chunk.prototype.reference=function(t,e,n,r){return"function"==typeof t&&(t=t.apply(e.current(),[this,e,null,{auto:n,filters:r}]),t instanceof Chunk)?t:dust.isEmpty(t)?this:this.write(dust.filter(t,n,r))},Chunk.prototype.section=function(t,e,n,r){if("function"==typeof t&&!t.__dustBody){try{t=t.apply(e.current(),[this,e,n,r])}catch(t){return dust.log(t,ERROR),this.setError(t)}if(t instanceof Chunk)return t}var o=n.block,s=n.else;if(r&&(e=e.push(r)),dust.isArray(t)){if(o){var i=t.length,u=this;if(i>0){e.stack.head&&(e.stack.head.$len=i);for(var a=0;i>a;a++)e.stack.head&&(e.stack.head.$idx=a),u=o(u,e.push(t[a],a,i));return e.stack.head&&(e.stack.head.$idx=void 0,e.stack.head.$len=void 0),u}if(s)return s(this,e)}}else if(t===!0){if(o)return o(this,e)}else if(t||0===t){if(o)return o(this,e.push(t))}else if(s)return s(this,e);return dust.log("Not rendering section (#) block in template ["+e.getTemplateName()+"], because above key was not found","DEBUG"),this},Chunk.prototype.exists=function(t,e,n){var r=n.block,o=n.else;if(dust.isEmpty(t)){if(o)return o(this,e)}else if(r)return r(this,e);return dust.log("Not rendering exists (?) block in template ["+e.getTemplateName()+"], because above key was not found","DEBUG"),this},Chunk.prototype.notexists=function(t,e,n){var r=n.block,o=n.else;if(dust.isEmpty(t)){if(r)return r(this,e)}else if(o)return o(this,e);return dust.log("Not rendering not exists (^) block check in template ["+e.getTemplateName()+"], because above key was found","DEBUG"),this},Chunk.prototype.block=function(t,e,n){var r=n.block;return t&&(r=t),r?r(this,e):this},Chunk.prototype.partial=function(t,e,n){var r;r=dust.makeBase(e.global),r.blocks=e.blocks,e.stack&&e.stack.tail&&(r.stack=e.stack.tail),n&&(r=r.push(n)),"string"==typeof t&&(r.templateName=t),r=r.push(e.stack.head);return"function"==typeof t?this.capture(t,r,function(t,e){r.templateName=r.templateName||t,dust.load(t,e,r).end()}):dust.load(t,this,r)},Chunk.prototype.helper=function(t,e,n,r){var o=this;if(!dust.helpers[t])return dust.log("Invalid helper ["+t+"]",WARN),o;try{return dust.helpers[t](o,e,n,r)}catch(e){return dust.log("Error in "+t+" helper: "+e,ERROR),o.setError(e)}},Chunk.prototype.capture=function(t,e,n){return this.map(function(r){t(new Stub(function(t,e){t?r.setError(t):n(e,r)}).head,e).end()})},Chunk.prototype.setError=function(t){return this.error=t,this.root.flush(),this};for(var f in Chunk.prototype)dust._aliases[f]&&(Chunk.prototype[dust._aliases[f]]=Chunk.prototype[f]);Tap.prototype.push=function(t){return new Tap(t,this)},Tap.prototype.go=function(t){for(var e=this;e;)t=e.head(t),e=e.tail;return t};var HCHARS=/[&<>"']/,AMP=/&/g,LT=/</g,GT=/>/g,QUOT=/\"/g,SQUOT=/\'/g;dust.escapeHtml=function(t){return"string"==typeof t&&HCHARS.test(t)?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;"):t};var BS=/\\/g,FS=/\//g,CR=/\r/g,LS=/\u2028/g,PS=/\u2029/g,NL=/\n/g,LF=/\f/g,SQ=/'/g,DQ=/"/g,TB=/\t/g;dust.escapeJs=function(t){return"string"==typeof t?t.replace(/\\/g,"\\\\").replace(/\//g,"\\/").replace(/"/g,'\\"').replace(/'/g,"\\'").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\t/g,"\\t"):t},"object"==typeof exports?module.exports=dust:root.dust=dust}(function(){return this}());