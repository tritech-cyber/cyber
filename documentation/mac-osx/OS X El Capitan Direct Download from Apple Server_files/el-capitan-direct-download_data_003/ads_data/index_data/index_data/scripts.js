// object.watch
if (!Object.prototype.watch) {
	Object.defineProperty(Object.prototype, "watch", {
	  	enumerable: false, 
	  	configurable: true, 
	  	writable: false, 
	  	value: function (prop, handler) {
			var oldval = this[prop], 
				newval = oldval, 
				getter = function () { return newval; }, 
				setter = function (val) {
					oldval = newval;
					return newval = handler.call(this, prop, oldval, val);
				};
			
			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter, 
					  set: setter, 
					  enumerable: true, 
					  configurable: true
				});
			}
		}
	});
}

// set HTML element global variables
var container	= document.getElementById('container'),
	logo		= document.getElementById('logo'),
	frame1		= document.getElementById('frame1'),
	frame2		= document.getElementById('frame2'),
	frame5		= document.getElementById('frame5'),
	frame6		= document.getElementById('frame6'),
	ctaBox		= document.getElementById('ctaBox'),
	bus_here = false,
	block_click = false,
	products_info = [],
	delayTime = 2.8,
	isError = false,
	carousel_speed = 0.35,
	car_here = false,
	feedresponse_has_fired = false,
	refire = true,
	endCarouselActive = true,
	clickerDrag = .05;

	Ad = {

		/*
		 *  Ad and image sizes.  Just change these numbers to update the ad.
		 */
		WIDTH      : 728,
		HEIGHT 	   : 90,
		IMG_HEIGHT : 80,
		IMG_WIDTH  : 80,

		LOADED : false, // ad status. do not change.


/*
 *  Initialize creative
 */
		init : function(){
			// build creative
			Ad.addElements();

			Ad.watch('LOADED', Ad.ready);

		},
		/*
		 *  Animate creative
		 */
		animate : function() {

			TweenMax.to(container, 0.3, {opacity: 1});

			if(isError){
				return;
			}

			container.classList.remove('hidden');
			logo.classList.remove('hidden');
			frame1.classList.remove('hidden');
			frame2.classList.remove('hidden');

			/*  animate text in line by line  */
			function animateTextFrame (frame, animation, callback) {
				var frameText  = frame.childNodes[0].childNodes[0].childNodes,
					delay 	   = 0.5, // delay before showing first line
					lineCount  = 0;
				
				// animate each <span> in the frame
				for(var i = 0; i < frameText.length; i++){
					
					TweenMax.to(frameText[i], 0.3, {top: 0, delay: delay, ease: Strong.easeInOut, onComplete: function() {
						lineCount++; // add one more line to the count
						// when all of the lines are complete
						//console.log('frame.id '+frame.id)
						if(lineCount === frameText.length && frame.id === 'frame5' ){
							TweenMax.delayedCall(0.5, moveFrame, [frame, animation, callback]); // move frame off screen
						}else if(lineCount === frameText.length && frame.id === 'frame1'){
							//console.log(frame.id)
							TweenMax.delayedCall(.6,zoomOut);
						}
					}}); 
					delay += 0.4; // extend delay to add time between lines
				}
			}
			/*  animate text in line by line  */
			function zoomOut() {
				pinwheel_parts_holder.classList.remove('hidden');
				frame1.style.backgroundImage = 'none';
				TweenMax.set(frame1,{transformOrigin:"50% 50%"});
				TweenMax.set(clickerHolder,{left:-(Ad.WIDTH+200),scaleX:1.5,scaleY:1.5});
			//	TweenMax.set(clicker_grx,{svgOrigin:"-22 24" });
				var tl = new TimelineMax();
				tl.addLabel("startSpin",0);
				tl.addLabel("startSpin2",.9);
				tl.addLabel("endSpin",2.1);
				tl.addLabel("startProducts",.85);


				tl.to(pinwheel, 1.0,{scaleX:.42,scaleY:.42,top:"+=57",left:"+=230",svgOrigin:"655.0 655.0", ease:  Strong.easeOut},'startSpin');
				tl.to(pinwheel, 1.1,{svgOrigin:"655.0 655.0",rotation:540},'startSpin');
				tl.to(clickerHolder, .5,{scaleX:0.8,scaleY:0.8,left:176,top:30, ease:  Strong.easeOut,delay:.4},'startSpin');

				tl.to(frame1,.75,{scaleX:.42,scaleY:.42,top:"+=97",left:"+=110", ease:  Strong.easeOut},'startSpin');//,onComplete:zoomIn});
				tl.to(frame1,.20,{opacity:0,delay:.1},'startSpin');//,onComplete:zoomIn});

				TweenMax.delayedCall(.3,startClick);

				tl.to(pinwheel, 1.9,{svgOrigin:"655.0 655.0",rotation:809.85},'startSpin2');
				tl.to(pinwheel, 1.25,{scaleX:6,scaleY:6,left:"477",top:"-444",svgOrigin:"655.0 655.0", ease:  Strong.easeOut},'endSpin');
				tl.add(zoomIn,"startProducts");

				tl.to(clickerHolder, 1.23,{scaleX:2,scaleY:2,left:-600,top:-62, ease:  Strong.easeOut,onComplete:function () {
					refire = false;

				}},'endSpin');	/**/


			}
			
			function startClick() {
				 clickerDrag+=.0115;
				TweenMax.to(clickerHolder,clickerDrag,{rotation:-90});
				TweenMax.to(clickerHolder,.1,{rotation:-20,delay:.06});
				if(refire){
					var d = clickerDrag+.11;
					TweenMax.delayedCall(d,startClick);
				}

			}

			function zoomIn() {
				car_here = true;
				//pinwheel_parts_holder.classList.add('hidden');
				TweenMax.to(frame1,.15,{opacity:0,delay:.65});
				var fstProd = frame2.childNodes[0];
				TweenMax.set(fstProd,{rotation:-90,scaleX:.98,scaleY:.98});
				TweenMax.delayedCall(1.7,function() {
					carousel_bg.classList.remove('hidden');
					TweenMax.from(carousel_bg, .35, {top:Ad.HEIGHT,ease:Strong.easeOut});	
				});
				TweenMax.to(fstProd,2.0,{scaleX:1,scaleY:1,rotation:0,ease: Circ.easeInOut,delay:.15,onComplete:function () {
					if (myFT.instantAds.dynamic_ct == "yes"){
						frame2.style.zIndex = "9";
					}
					TweenMax.delayedCall(1.0,moveCarousel);
				}});
				TweenMax.set(fstProd,{opacity:1,delay:1.72});

			}

			function moveCarousel() {
				var carouselItems = frame2.childNodes,
					holdTime	  = .85,
					tl 			  = new TimelineMax(),
					id 			  = 1;
				TweenMax.set(carouselItems[1],{left:Ad.WIDTH,opacity:1,top:-140});

				tl.addLabel('firstOut',holdTime);
				tl.to(carouselItems[0],.35,{left:-Ad.WIDTH,ease:Strong.easeOut},'firstOut');
				tl.to(carouselItems[1],.35,{left:0,ease:Strong.easeOut},'firstOut');
				TweenMax.delayedCall(holdTime, function() {
					elm = products_info.shift();
					products_info.push(elm);
				});					
				if( (carouselItems.length >2)){
					holdTime+= 1.85;
					TweenMax.set(carouselItems[2],{left:Ad.WIDTH,opacity:1,top:-140});
					tl.addLabel('secondOut',holdTime);
					tl.to(carouselItems[1],.35,{left:-Ad.WIDTH,ease:Strong.easeOut},'secondOut');
					tl.to(carouselItems[2],.35,{left:0,ease:Strong.easeOut},'secondOut');
					tl.addLabel('secondOut',holdTime);	/**/
					id = 2;
					TweenMax.delayedCall(holdTime, function() {
						elm = products_info.shift();
						products_info.push(elm);
					});	
				}
				holdTime += 1.85;

				function frm5(){
					elm = products_info.shift();
					products_info.push(elm);					
					TweenMax.delayedCall(0.6,function () {
						animateTextFrame(frame6, 'slideUp', dummy);
					})	
					TweenMax.delayedCall(1.2,function () {						
						car_here = false;
						bus_here = true;
						TweenMax.set(cta_reg, {opacity:0});
						frame5.classList.remove('hidden');
						TweenMax.fromTo(frame5,0.6,{top:Ad.HEIGHT},{top:0,ease:Strong.easeOut})
						animateTextFrame(frame5, 'slideDown', animateEndFrame); // call frame 5
						TweenMax.delayedCall(.6,function () {							
							pinwheel_parts_holder.style.display = "none";
						})
					})	
				};/**/
				
				frm5.name = 'frm5';
				tl.addLabel("prodOut",holdTime);
				tl.to(carousel_bg, .15, {top:-Ad.HEIGHT,ease:Strong.easeOut},"prodOut");
				tl.to(carouselItems[id],2,{rotation:"+=55",left:"+=255",ease: Strong.easeOut},"prodOut");
				tl.to(pinwheel,2,{svgOrigin:"655.0 655.0",rotation:"+=185",left:"+=0",ease: Strong.easeOut},"prodOut");
				tl.add(frm5,'prodOut');
				
			}


			/*  animate final frame  */
			function animateEndFrame () {
				
				frame2.style.zIndex = "3";
				frame5.style.zIndex = "3";

				frame6.classList.remove('hidden');
				ctaBox.classList.remove('hidden');
				//carousel.style.display = "block";

				arrow_left.style.display = "block";
				arrow_right.style.display = "block";


				var headline = frame6.childNodes[0],
					legal    = frame6.childNodes[1],
					cta  	 = document.getElementById('cta_reg'),
					hover 	 = document.getElementById('cta_hover'),
					slide2,
					slide3;
				TweenMax.set(cta, {opacity:0});

				//TweenMax.fromTo(frame6, 0.5, {top:-Ad.HEIGHT}, {top: 0, ease: Strong.easeInOut}); // slide in
				//TweenMax.set(text_wrapper_fm6, {left: 0, top: 10});
				
				TweenMax.set(carousel,{opacity:0,left: 249, top: -50, delay:0});

				TweenMax.to(carousel, 0.1, {opacity: 1, ease: Strong.easeInOut, delay:.75,onComplete:function () {
					if(products_info.length >=2){
						slide2 = products_info[1].slide;
						TweenMax.set(slide2,{opacity:.7});
						TweenMax.to(slide2, 0.5, {left: 90, ease: Strong.easeInOut, delay:.25});
					}
					if(products_info.length >=3){
						slide3 = products_info[2].slide;
						TweenMax.set(slide3,{opacity:.7});
						TweenMax.to(slide3, 0.5, {left: -90, ease: Strong.easeInOut, delay:.25});
					}
				}});

				Ad.setUpCarousel();

				TweenMax.to(arrow_left, 0.5, {opacity: 1, ease: Strong.easeInOut, delay:1}); // slide in
				TweenMax.to(arrow_right, 0.5, {opacity: 1, ease: Strong.easeInOut, delay:1}); // slide in

				// slide text and image from right
				TweenMax.to(headline, 0.5, {left: 0, delay: 0.5, ease: Strong.easeInOut});
				// fade in legal and cta
				legal.classList.remove('hidden');
				TweenMax.to(legal, 0.5, {opacity: 1, delay: 0.5, ease: Strong.easeInOut});
				TweenMax.fromTo(text_wrapper_fm6, 0.5, {left: 0, top: -Ad.HEIGHT}, {left: 0, top: 10, ease: Strong.easeInOut, delay:.25});
				TweenMax.set(cta, {opacity:0});
				TweenMax.to(cta, 0.5, {opacity: 1, delay: 0.5, ease: Strong.easeInOut});
			//	TweenMax.to(hover, 0.5, {opacity: 1, delay: 1.5, ease: Strong.easeInOut});
		//		TweenMax.to(hover, 0.5, {opacity: 0, delay: 2.5, ease: Strong.easeInOut});

				Ad.setUpCarousel();
				

			}

			function dummy () {

			}
			/*  move frame off screen  */
			function moveFrame (frame, direction, callback){
				var offsetX = 0,
					offsetY = 0;

				// determine which way to animate and set coordinates
				switch(direction){
					case 'slideUp': 	offsetY = -Ad.HEIGHT; break;
					case 'slideDown': 	offsetY =  Ad.HEIGHT; break;
					case 'slideLeft': 	offsetX = -Ad.WIDTH;  break;
					case 'slideRight': 	offsetX =  Ad.WIDTH;  break;
					default: break;
				}

				// move frame
				TweenMax.to(frame, 0.5, {top: offsetY, left: offsetX, ease: Strong.easeInOut, onComplete: function(){
					callback(); // run callback
					if(direction !== ''){
						frame.classList.add('hidden'); // hide frame
						pinwheel.style.display = 'none';
					}
				}});
			}

			TweenMax.set(frame2, {top: Ad.HEIGHT});
			animateTextFrame(frame1, 'slideDown', zoomOut);
		},
		/*
		 *  Special end frame carousel with preview products to either side of main, end frame copy displays not price/name
		 */
		setUpCarousel : function(){
			car_here = true;

			for(var i = 0; i < products_info.length; i++){
				//TODO add check in case array is above 3 products but still works for 1,2 or 3
				//(imgHold)
				(products_info[i].slide).style.opacity =1;

				//(products_info[i].clicker).style.opacity = 0;
				(products_info[i].footer).style.opacity = 0;
				(products_info[i].slide).style.top ="0px";
				TweenMax.set((products_info[i].imageHold),{scaleX:.65,scaleY:.65});
				TweenMax.set((products_info[i].imageHold),{scaleX:.65,scaleY:.65});
				if(i == 1){
					(products_info[i].slide).style.left = "728px";
					(products_info[i].slide).style.opacity = .0;
					TweenMax.set((products_info[i].imageHold),{scaleX:.52,scaleY:.52});
					TweenMax.set((products_info[i].imageHold),{scaleX:.52,scaleY:.52});
				}
				if(i == 2){
					(products_info[i].slide).style.left = "-728px";
					(products_info[i].slide).style.opacity = .0;
					TweenMax.set((products_info[i].imageHold),{scaleX:.52,scaleY:.52});
					TweenMax.set((products_info[i].imageHold),{scaleX:.52,scaleY:.52});

				}
			}
		},

		ctaClick : function(e) {
			myFT.clickTag(4, myFT.instantAds.clickTag4);
		},	
		
	    prodClick : function(e){
	    	if (car_here) {
	        	var url = products_info[0].url;
				var trackStr = products_info[0].sku;
			//	myFT.stateTrackingEvent(trackStr, 'ft_section');
			
				Tracker.clickTrackEvent(trackStr, 'ft_section', false);
				console.log("skuString on click is :: "+trackStr);

				myFT.clickTag(2, url);
	    	}else {
	    		if (bus_here) {
	    			myFT.clickTag(3, myFT.instantAds.clickTag3);
	    		} else {
	    			myFT.clickTag(1, myFT.instantAds.clickTag1);
	    		}
	    	}
	    },
		/*
		 *  Carousel from endFrame layout to end carousel (displays only one product and product price at a time)
		 */
		resetCarousel : function(e){
			//console.log(e.target);
			//cta off

			cta.style.display = 'none';
			hover.style.display = 'none';
			//ARROWS
			TweenMax.to(arrow_left,.35,{left:"-=323px"});
			TweenMax.to(arrow_right,.35,{right:"-=40px"});
			//fade out copy on frame 6 and cta
			TweenMax.to([text_wrapper_fm6,cta], .1,{opacity:0, delay:0});
			//animate the footer background in
			carousel_bg.classList.remove('hidden');
			TweenMax.to(carousel_bg,.35,{top:0,ease:Strong.easeOut});
			TweenMax.to(carousel, 0.1, {left: 0, top: -50, ease: Strong.easeInOut});
			var slide0 = products_info[0].slide,
				img0 = products_info[0].imageHold,
				footer0 = products_info[0].footer,
				slide1,footer1,img1,slide2,footer2,img2;
			TweenMax.to(img0,.35,{scaleX:1,scaleY:1,ease:Strong.easeOut});
			TweenMax.to(footer0,.35,{opacity:1,ease:Strong.easeOut});
			if(products_info.length >=2){
				slide1 = products_info[1].slide;
				footer1 = products_info[1].footer;
				img1 = products_info[1].imageHold;

				TweenMax.to(img1,.35,{scaleX:1,scaleY:1,ease:Strong.easeOut});
				TweenMax.set(footer1,{opacity:1,delay:.5});
				if(e.target.id == 'arrow_right'){
					TweenMax.to(slide0,.5,{left:-Ad.WIDTH,ease:Strong.easeOut});
					TweenMax.to(slide1,.25,{opacity:1,left:0,ease:Strong.easeOut});
				}else{
					TweenMax.to(slide0,.5,{left:Ad.WIDTH,ease:Strong.easeOut});

					TweenMax.to(slide1,.15,{opacity:1,left:Ad.WIDTH});
				}
			}
			if(products_info.length >=3){
				slide2 = products_info[2].slide;
				footer2 = products_info[2].footer;
				img2 = products_info[2].imageHold;
				TweenMax.to(img2,.35,{scaleX:1,scaleY:1,ease:Strong.easeOut});
				TweenMax.set(footer2,{opacity:1,delay:.5});
				if(e.target.id == 'arrow_right'){
					TweenMax.to(slide2,.25,{opacity:1,left:-Ad.WIDTH,ease:Strong.easeOut});
				}else{
					TweenMax.to(slide2,.15,{opacity:1,left:0});
				}
			}
			var elm;
			if(e.target.id == 'arrow_left'){
				elm = products_info.pop();
				products_info.unshift(elm);
			}else{
				elm = products_info.shift();
				products_info.push(elm);
			}
		},
		/*
		 *  Carousel arrow clicks
		 */
	    onArrowClick : function(e) {
	    	ctaBox.style.display = "none";
			var isRightClick = (e.target.id === 'arrow_right');

			if (endCarouselActive) {
				//set flag to false
				endCarouselActive = false;
				Ad.resetCarousel(e);

				return;
			}

	        var elm =  products_info[0].slide;//element to slide out
	        var elm2;//element to slide in

	        if(!block_click){
				//set flag to prevent click while transitioning
				block_click = true;
				//element to move out
				//console.log('event')
				if(isRightClick){
					myFT.tracker('next_arrow_clicked',null,"next_arrow_clicked");
					TweenMax.to(elm, carousel_speed,{left:-Ad.WIDTH,ease:Strong.easeOut, delay:carousel_speed});
	                elm = products_info.shift();
	                products_info.push(elm);
	                elm2 = products_info[0].slide;
					TweenMax.set(elm2,{left:Ad.WIDTH});
					TweenMax.to(elm2, carousel_speed,{left:0,ease:Strong.easeOut, delay:carousel_speed,onComplete:function () {
						block_click = false;
					}});
	            }else{
					myFT.tracker('prev_arrow_clicked',null,"prev_arrow_clicked");

					TweenMax.to(elm, carousel_speed,{left:Ad.WIDTH,ease:Strong.easeOut, delay:carousel_speed});
					elm2 = products_info.pop();
	                products_info.unshift(elm2);
					elm2 = products_info[0].slide;
					TweenMax.set(elm2,{left:-Ad.WIDTH});
					TweenMax.to(elm2, carousel_speed,{left:0,ease:Strong.easeOut, delay:carousel_speed,onComplete:function () {
						block_click = false;
					}});
	            }
			}
	    },

		cta_over : function() {
			TweenMax.to(hover, 0.5, {opacity: 1, delay: 0, ease: Strong.easeInOut});
				
		},

		cta_out : function() {
			TweenMax.to(hover, 0.5, {opacity: 0, delay: 0, ease: Strong.easeInOut});
		},

		/*
		 *  Create and add elements to container
		 */
		addElements : function() {
				legal 	 = document.createElement('p'),
				cta   	 = new Image(),
				hover 	 = new Image();

			// cta
			cta.src = myFT.instantAds.CTA_img;
			cta.id = 'cta_reg';
			cta.classList.add('cta');
			cta.classList.add('ad-size');
			//cta.classList.add('hidden');

			hover.src = myFT.instantAds.CTA_hover_img;
			hover.classList.add('hover');
			hover.id  = 'cta_hover';
			hover.classList.add('ad-size');
			//hover.classList.add('hidden');

			// legal
			legal.innerHTML = myFT.instantAds.legal_copy;
			legal.classList.add('legal');
			legal.classList.add('hidden');

			// images
			logo.style.backgroundImage   = 'url('+ myFT.instantAds.logo_img +')';
			frame1.style.backgroundImage = 'url('+ myFT.instantAds.F1_background_img +')';
			frame2.style.backgroundImage = 'url('+ myFT.instantAds.Carousel_footer_img +')';
			frame5.style.backgroundImage = 'url('+ myFT.instantAds.F5_background_img +')';
			frame6.style.backgroundImage = 'url('+ myFT.instantAds.F6_footer_img +')';
			carousel_bg.src =  myFT.instantAds.Carousel_footer_img;
			//
			pinwheel_bg.src = myFT.instantAds.F1_background_img;

			// text
			frame1.appendChild(Ad.splitHeadline(myFT.instantAds.F1_headline_copy));
			frame5.appendChild(Ad.splitHeadline3(myFT.instantAds.F5_headline_copy));


			frame6.appendChild(Ad.splitHeadline2(myFT.instantAds.F6_headline_copy));

			// frame 6
			frame6.appendChild(legal);
			frame6.appendChild(cta);
			frame6.appendChild(hover);

			// connect and add feed data
			Feed.connect();

			myFT.applyButton(arrow_left, Ad.onArrowClick);
			myFT.applyButton(arrow_right, Ad.onArrowClick);

			myFT.applyButton(logo, Ad.prodClick);
			logo.addEventListener("mouseover", Ad.cta_over);
			logo.addEventListener("mouseout", Ad.cta_out);

			myFT.applyButton(ctaBox, Ad.ctaClick);
			ctaBox.addEventListener("mouseover", Ad.cta_over);
			ctaBox.addEventListener("mouseout", Ad.cta_out);
			//
			TweenMax.set(pinwheel,{scaleX:10,scaleY:10,left:-506,top:-531,svgOrigin:"655.0 655.0"});

		},

		ellipsisMe : function(str){
	        var revStr = str.split('').reverse().join('');
	        var lastSpc = revStr.indexOf(' ')+1;
	        revStr = revStr.slice(lastSpc,(revStr.length));
	        str = revStr.split('').reverse().join('');
	        str = str+ '...';
	        return str;
	    },

		/*
		 *  Error handler
		 */
		error : function(error) {
			if(!feedresponse_has_fired){
				Tracker.impressionTrackEvent('null');
				
				feedresponse_has_fired = true;
				Ad.LOADED = false;
				console.log(error);
				isError = true;
				container.style.opacity = 1;
				feedFail.style.opacity = 1;
				frame1.style.opacity = 0;
				frame2.style.opacity = 0;
				frame5.style.opacity = 0;
				frame6.style.opacity = 0;
				logo.style.opacity = 0;

				feedFail.src = myFT.instantAds.backup_img;
			}

		},
		/*
		 *  Ad is ready, begin and show
		 */
		ready : function() {
			// show banner

			TweenMax.delayedCall(.25, Ad.animate);
		},

		/*
		 *  Split headline at line breaks and return node to be added to element
		 */
		splitHeadline3 : function (headline) {
			var ar = headline.split('<br>');
			var color;
			var newHeadline = "";
			var splitter = /<\/span><\/span>/gi,
				wrapper  = document.createElement('div');

			for(var i = 0; i < ar.length; i++){
				if(ar[i].indexOf(/<\/span>/ ) === -1){
					ar[i] += "</span>";
				}

				if(ar[i].indexOf('<span')=== -1){
					ar[i] = "<span style='"+color+"'>"+ar[i];
				}else{
					var stColor = ar[i].indexOf('color');
					var endColor = ar[i].indexOf(";'");
					color = ar[i].slice(stColor, endColor);
				}
				newHeadline += ar[i];

			}
			newHeadline = newHeadline.replace(splitter, '</span>'); // replace <br> with spans

			wrapper.id = 'page_text';
			wrapper.innerHTML = "<span>"+newHeadline+"</span>"; // wrap headline with identifier
			wrapper.className = 'text-wrapper';

			return wrapper;
		},

		splitHeadline : function(headline) {
			var splitter = /<br>/gi,
				wrapper  = document.createElement('div');

			headline = headline.replace('>', '><span>'); // add extra opening span for first word
			headline = headline.replace('</', '</span></'); // add extra closing span for last word
			headline = headline.replace(splitter, '</span><span>'); // replace <br> with spans

			wrapper.classList.add('text-wrapper');
			wrapper.innerHTML = headline; // wrap headline with identifier

			return wrapper;
		},	

		//LEGACY didn't account for styles within copy splitHeadline3 does this to allow for different colors of text.
		/*splitHeadline : function(headline) {
			var splitter = /<br>/gi,
				wrapper  = document.createElement('div');

			headline = headline.replace('>', '><span>'); // add extra opening span for first word
			headline = headline.replace('</', '</span></'); // add extra closing span for last word
			headline = headline.replace(splitter, '</span><span>'); // replace <br> with spans

			wrapper.classList.add('text-wrapper');
			wrapper.innerHTML = headline; // wrap headline with identifier

			return wrapper;
		},*/

		splitHeadline2 : function(headline) {
			var splitter = /<br>/gi,
				wrapper  = document.createElement('div');

			headline = headline.replace('>', '><span>'); // add extra opening span for first word
			headline = headline.replace('</', '</span></'); // add extra closing span for last word
			headline = headline.replace(splitter, '</span><span>'); // replace <br> with spans

			wrapper.classList.add('text-wrapper');
			wrapper.id = 'text_wrapper_fm6';
			wrapper.innerHTML = headline; // wrap headline with identifier

			return wrapper;
		}

	};

	Feed = {

		/*
		 *  Set feed parameters and connect
		 */
		connect : function(FeedObj) {
			
            var feedParams, ftFeed;

            // set dynamic parameters
            feedParams = new FTFeedParams();
            feedParams.defaultFeedEndpoint = myFT.instantAds.defaultFeedEndpoint;
            feedParams.feedEndpoint = myFT.instantAds.feedEndpoint;

            // send connection request
            ftFeed = new FTFeed(myFT, feedParams);
            ftFeed.getFeed(Feed.success, Ad.error);
		},
		/*
		 *  Parse data and apply to creative
		 */
		createItem : function(data, num,sku) {
			//IMAGES FOR FRM 2-5
			var imageHold   	= document.createElement('div'),
				image  	    = new Image(),
				footer  	= document.createElement('div'),
				priceHold  	= document.createElement('div'),
				price   	= document.createElement('p'),
				nameHold  	= document.createElement('div'),
				name    	= document.createElement('p'),
				wrapper 	= document.createElement('div'),
				clicker 	= document.createElement('div'),
				imageSize	= '&w='+ Ad.IMG_WIDTH +'&h='+ Ad.IMG_HEIGHT,
				dollarSign  = '<sup>$</sup>',
				savePrefix  = 'SAVE '+ dollarSign;

			//carousel images
			var carousel    = document.getElementById('carousel'),
				prodNumber  = num-1,
				wrapperClone,
				imageClone;

			if(data){
				footer.className = 'footer_hold';
				imageHold.className = 'prod_img_holder';
				// create image node
				image.onerror = function() {
					image.onerror = '';
					image.src = 'bblogo.png';
					return true;
				};
				image.src = data.image + imageSize;
			//	image.alt = data.name;
				image.classList.add('prod_img');
				imageHold.appendChild(image);
				// create price node
				priceHold.className = "prod_price_hold";
				price.innerHTML = (Number(data.percentsavings) > 15) ? savePrefix + data.dollarsavings : dollarSign + data.saleprice;
				price.style.color = myFT.instantAds.productName_color;
				price.classList.add('price');
				priceHold.appendChild(price);
				footer.appendChild(priceHold);

				// create name node
				nameHold.className = "prod_name_hold";
				name.innerHTML = data.name.length > 110 ? Ad.ellipsisMe(data.name.substr(0, 110)) : data.name;
				name.style.color = myFT.instantAds.productName_color;
				name.classList.add('name');
				nameHold.appendChild(name);
				footer.appendChild(nameHold);

				clicker.classList.add('clicker');

				//add nodes to wrapper
			//	wrapper.appendChild(priceHold);
				wrapper.appendChild(imageHold);
				wrapper.appendChild(footer);
				wrapper.appendChild(clicker);


				wrapper.classList.add('item');
				TweenMax.set(wrapper,{transformOrigin:'right bottom',top:-140});


				wrapper.classList.add('ad-size');

				wrapper.style.opacity = 0;

				frame2.appendChild(wrapper); // add item to frame

				//create prod carousel
				prodNumber++;
				wrapperClone = wrapper.cloneNode(true);


				wrapperClone.classList.remove('item');
				wrapperClone.classList.add('slide');
				if(prodNumber ===0){
					wrapperClone.style.left = "0px";
				}
				carousel.appendChild(wrapperClone);

				var prodUrl = data.url,
					imageHolder = wrapperClone.childNodes[0],
					footerHolder = wrapperClone.childNodes[1],
					priceHolder = footerHolder.childNodes[0],
					nameHolder = footerHolder.childNodes[1];

				products_info.push({id:prodNumber, slide:wrapperClone, url:prodUrl,footer:footerHolder,priceHold:priceHolder,nameHold:nameHolder,imageHold:imageHolder,clicker:clicker,imgURL: data.image + imageSize,sku:sku});

			}
		},

		/*
		 *  Feed connected successfully, route data
		 */
		success : function(feedData, feedUrl) {
			console.log(feedUrl)
			if(!feedresponse_has_fired){
				feedresponse_has_fired  = true;
				var skuString="";
				//for(i in feedData){
				for(var i = 0; i < feedData.length; i++){
					Feed.createItem(feedData[i], i,feedData[i].sku);
					skuString += feedData[i].sku+"||";
				}

				for(i = 0; i <products_info.length;i++){
					var img = products_info[i].imageHold.childNodes[0];
					img.onerror = function(e) {
						e.target.onerror = '';
						e.target.src = 'bblogo.png';
						return true;
					};
					img.src = products_info[i].imgURL;
				}

				//}
				skuString = skuString.slice(0,skuString.length-2);
				Tracker.impressionTrackEvent(skuString);

				console.log('skuString on impression is :: '+skuString);
				Ad.LOADED = true; // ad is loaded
			}

		}

	};
myFT.on("instantads", function () {
//	Ad.init();
}); //initialize ad once ready