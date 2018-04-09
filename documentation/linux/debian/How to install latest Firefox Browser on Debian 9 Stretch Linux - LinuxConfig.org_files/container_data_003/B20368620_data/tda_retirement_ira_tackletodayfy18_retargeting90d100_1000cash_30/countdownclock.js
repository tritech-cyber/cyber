(function(document, window, $) {

	var CountdownClock = {
		scope: this,
		currTime: null,
		timer: null,
		days: null,
		hours: null,
		minutes: null,
		seconds: null,
		prevDays: null,
		prevHours: null,
		prevMinutes: null,
		prevSeconds: null,
		daysNumDiv: null,
		hoursNumDiv: null,
		minsNumDiv: null,
		secsNumDiv: null,
		lastDay: 0,
		animatedCircleSize: 79,
		spacingBetweenCircles: 90,
		scaleNumberSpeed: 0.4,
		count: 0, 
		repeatInterval: -1,

		init: function(rpt) {
			$('#counter-group').css('display', 'block');
			this.daysNumDiv = $('#counter-group .circ0 .num');
			this.hoursNumDiv = $('#counter-group .circ1 .num');
			this.minsNumDiv = $('#counter-group .circ2 .num');
			this.secsNumDiv = $('#counter-group .circ3 .num');
            this.daysNumDiv.html(this.getDays());
            this.hoursNumDiv.html(this.getHours());
			this.minsNumDiv.html(this.getMinutes());
			this.secsNumDiv.html(this.getSeconds());
			this.startCounter();
			this.repeatInterval = (rpt) ? rpt : -1;
			if (this.getDays() < 1) {
				window.lastDayCallBack();
			}
//			this.animateCirclesIn();
//			this.initAnimatedCircles();
		},
//		animateCirclesIn: function() {
//			var d = 0.5;
//			for (var i=0; i<4; i++) {
//				var thing = $('#counter-group .circ' + i);
//				TweenMax.set(thing, {x: i*this.spacingBetweenCircles})
//				TweenMax.from(thing, 0.5, {scaleX: 0, scaleY: 0, ease: Bounce.easeOut, delay: d + i * 0.05});
//			}
//		},
		getTime: function() {
			var currentTime = this.getCurrTime();
			var goalTime = new Date(2018, 3, 17, 23, 59, 59);
			var timeLeft = goalTime - currentTime;
			this.days = (((timeLeft/1000) / 60) / 60) / 24;
			
		    if (this.days < 1) {
		        this.lastDay = true;    	
		    }

			this.hours = (this.days - Math.floor(this.days)) * 24;
			this.minutes = (this.hours - Math.floor(this.hours)) * 60;
			this.seconds = (this.minutes - Math.floor(this.minutes)) * 60;
		},
		getCurrTime: function() {
		    // UN-COMMENT VARIOUS LINES FOR TESTING DATES
		    // the current date & time
		    this.currTime = new Date();
		    // April 1st at 1pm
		    // this.currTime = new Date(2016, 3, 1, 13, 0, 0);
		    // April 17th at 1pm
		    // this.currTime = new Date(2016, 3, 17, 13, 0, 0);
		    // April 18th at 1pm
		    // this.currTime = new Date(2017, 3, 18, 13, 0, 0);
		    // this.currTime = new Date(2016, 3, 20, 13, 0, 0);
		    // console.log("Date/Time: " + currTime)
		    return this.currTime;
		},
		startCounter: function() {
			var self = this;
			
			
			this.timer = setInterval(function() {
				self.count++;
				if(self.repeatInterval != -1){
					if(self.count < self.repeatInterval){
						self.tickTimer();
					} else {
						clearInterval(self.timer);
					}
				} else {
					self.tickTimer();
				}
				
			}, 1000);
			
			self.tickTimer();
		},
		tickTimer: function() {
			this.prevDays = this.getDays();
			this.prevHours = this.getHours();
			this.prevMinutes = this.getMinutes();
			this.prevSeconds = this.getSeconds();
			this.getTime();
			
			
			
			if (this.getDays() < 0){
				this.daysNumDiv.html(0);
				this.hoursNumDiv.html(0);
				this.minsNumDiv.html(0);
				this.secsNumDiv.html(0);
				clearInterval(this.timer);
			} else {
                var self = this;
                
				if (this.prevDays != this.getDays() && !TweenMax.isTweening(this.daysNumDiv)) {
                      TweenMax.fromTo(this.daysNumDiv, this.scaleNumberSpeed/2, {y:0,alpha:1},{y:+10, ease:Power3.easeOut, alpha:0, onComplete:function() { self.minsNumDiv.html(self.getDays())}});
                      TweenMax.fromTo(this.daysNumDiv, this.scaleNumberSpeed, {y:-30,alpha:0},{y:0, ease:Elastic.easeOut, alpha:1, delay:this.scaleNumberSpeed/2});
                 }
				if (this.prevHours != this.getHours() && !TweenMax.isTweening(this.hoursNumDiv)) {
                      TweenMax.fromTo(this.hoursNumDiv, this.scaleNumberSpeed/2, {y:0,alpha:1},{y:+10, ease:Power3.easeOut, alpha:0, onComplete:function() { self.minsNumDiv.html(self.getHours())}});
                      TweenMax.fromTo(this.hoursNumDiv, this.scaleNumberSpeed, {y:-30,alpha:0},{y:0, ease:Elastic.easeOut, alpha:1, delay:this.scaleNumberSpeed/2});
                } 
				if (this.prevMinutes != this.getMinutes() && !TweenMax.isTweening(this.minsNumDiv)) {
                      TweenMax.fromTo(this.minsNumDiv, this.scaleNumberSpeed/2, {y:0,alpha:1},{y:+10, ease:Power3.easeOut, alpha:0, onComplete:function() { self.minsNumDiv.html(self.getMinutes())}});
                      TweenMax.fromTo(this.minsNumDiv, this.scaleNumberSpeed, {y:-30,alpha:0},{y:0, ease:Elastic.easeOut, alpha:1, delay:this.scaleNumberSpeed/2});
                }
				if (this.prevSeconds != this.getSeconds() && !TweenMax.isTweening(this.secsNumDiv)) {
                      TweenMax.fromTo(this.secsNumDiv, this.scaleNumberSpeed/2, {y:0,alpha:1},{y:+10, ease:Power3.easeOut, alpha:0, onComplete:function() { self.secsNumDiv.html(self.getSeconds())}});
                      TweenMax.fromTo(this.secsNumDiv, this.scaleNumberSpeed, {y:-30,alpha:0},{y:0, ease:Elastic.easeOut, alpha:1, delay:this.scaleNumberSpeed/2});
                }
				this.daysNumDiv.html(this.getDays());
				this.hoursNumDiv.html(this.getHours());

			}
			this.setLabelText();
		},
		setLabelText: function() {
			var days = (this.getDays() === 1) ? "DAY" : "DAYS";
			var hrs = (this.getHours() === 1) ? "HR" : "HRS";
			var min = (this.getMinutes() === 1) ? "MIN" : "MINS";
			var sec = (this.getSeconds() === 1) ? "SEC" : "SECS";
			$('#counter-group .circ0 .txt').html(days);
			$('#counter-group .circ1 .txt').html(hrs);
			$('#counter-group .circ2 .txt').html(min);
			$('#counter-group .circ3 .txt').html(sec);
		},
		animateCircle: function(p_circ_id, p_val) {
			$('#counter-group .circ'+p_circ_id+' .anim-circle').circleProgress({ value: p_val });
		},
		initAnimatedCircles: function() {
			for (var i=0; i<4; i++) {
				$('#counter-group .circ'+i+' .anim-circle').circleProgress({
					animation: false,
			        size: this.animatedCircleSize,
			        thickness: 4,
			        fill: {
			            color: "#0b602d"
			        },
					startAngle: -Math.PI / 4 * 2
			    });
			}
		},
		getDays: function() {
            var days = (Math.floor(this.days) < 10) ? "0" + Math.floor(this.days) : Math.floor(this.days);
			return days;
		},
		getHours: function() {
            var hours = (Math.floor(this.hours) < 10) ? "0" + Math.floor(this.hours) : Math.floor(this.hours);
			return hours;
		},
		getMinutes: function() {
            var minutes = (Math.floor(this.minutes) < 10) ? "0" + Math.floor(this.minutes) : Math.floor(this.minutes);
			return minutes;
		},
		getSeconds: function() {
            var seconds = (Math.floor(this.seconds) < 10) ? "0" + Math.floor(this.seconds) : Math.floor(this.seconds);
			return seconds;
		}
	}

	CountdownClock.init(15);

})(document, window, jQuery);