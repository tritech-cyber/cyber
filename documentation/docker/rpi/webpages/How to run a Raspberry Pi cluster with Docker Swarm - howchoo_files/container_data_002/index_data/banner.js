var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = 300;
	var height = 250;
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, backgroundColor: "#fff", overflow: "hidden", cursor: "pointer", parent: document.body});
	var border = bannerboy.createElement({width: "100%", height: "100%", border: "1px solid #d5d5d5", boxSizing: "border-box", zIndex: 10, parent: banner});
	var main_tl = new BBTimeline();

	var images = [	
		// "txt_1_ref.png",  
		"logo_googlecloud.png", 
		"icon_gmail.png", 
		"icon_documents.png", 
		"icon_gdrive.png", 
		"icon_calendar.png", 
		"logo_gsuite_big.png", 
		// "cta_txt.png"
	];
	
	bannerboy.dc.init({
		onInit: function() {
			// <!--
			//  * Dynamic Content Enable code for Profile: 10009253
			//  *
			//  * The following code initializes the following dynamic variables for
			//  * development testing and live serving of Fields associated to the above profile
			// -->

			Enabler.setProfileId(10009253);
			var devDynamicContent = {};
			
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed= [{}];
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0]._id = 0;
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0].unique_id = 1;
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0].reporting_label = "label_1";
			// devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0].txt_1 = "Start a G Suite\nGoogle Cloud\nlorem ipsom lorem ipsom\nlorem ipsom lorem ipsom\nlorem ipsom lorem ipsom\ntext demo lorem ipsum\nfree trial now.";
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0].txt_1 = "Start a G Suite\nfree trial now.";
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0].txt_1_font_size = "16.5pt";
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0].cta_txt = "LEARN MORE";
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0].cta_txt_font_size = "11pt";
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0].exit_url = {};
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0].exit_url.Url = "http://www.google.com";
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0].is_default = true;
			devDynamicContent.GoogleCloudQ217_NA_dynamic_feed_Feed[0].is_active = true;
			Enabler.setDevDynamicContent(devDynamicContent);

		},
		onPolite: function() {
			bannerboy.preloadImages(images, onImagesLoaded);
		},
		onVisible: function() {
		}
	});

	function onImagesLoaded() {

		/* Create elements
		================================================= */
		/* eslint-disable indent, no-unused-vars */
		var txt_center = bannerboy.createElement({id: "txt_center", top: 61, width: 300, height: 93, parent: banner});
			// var txt_1_ref = bannerboy.createElement({id: "txt_1_ref", backgroundImage: "txt_1_ref.png", left: 81, top: 25, retina: true, parent: txt_center});
		var logo_googlecloud = bannerboy.createElement({backgroundImage: "logo_googlecloud.png", left: 104, top: 215, retina: true, parent: banner});
		var lockup_container = bannerboy.createElement({left: 150, top: 35, width: 118, height: 26, parent: banner});
			var icon_gmail = bannerboy.createElement({backgroundImage: "icon_gmail.png", top: 6, retina: true, parent: lockup_container});
			var icon_documents = bannerboy.createElement({backgroundImage: "icon_documents.png", left: 35, retina: true, parent: lockup_container});
			var icon_gdrive = bannerboy.createElement({backgroundImage: "icon_gdrive.png", left: 62, top: 2, retina: true, parent: lockup_container});
			var icon_calendar = bannerboy.createElement({backgroundImage: "icon_calendar.png", left: 95, top: 3, retina: true, parent: lockup_container});
		var logo_gsuite_big = bannerboy.createElement({backgroundImage: "logo_gsuite_big.png", left: 35, top: 36, retina: true, parent: banner});
		var cta = bannerboy.createElement({id: "cta", left: 86, top: 154, width: 129, height: 39, parent: banner});
			var cta_base = bannerboy.createElement({id: "cta_base", backgroundColor: "#4285f3", width: 129, height: 39, parent: cta});
			// var cta_txt_ref = bannerboy.createElement({id: "cta_txt", backgroundImage: "cta_txt.png", left: 31, top: 14, retina: true, parent: cta});

		dynamicContent = getDynamicContent();

		/* eslint-enable indent, no-unused-vars */ 

		/* Create dynamic elements
		================================================= */
		var txt_1 = bannerboy.createElement({
			id: "txt_1",
			innerHTML: parseLineBreaks(dynamicContent.txt_1),
			textAlign: "center",
			color: dynamicContent.txt_1_font_color || '#414141',
			fontSize: dynamicContent.txt_1_font_size || '16.5pt',
			letterSpacing: dynamicContent.txt_1_letter_spacing || "0.0em",
			lineHeight: "120%",
			minHeight: "1em",
			position: "relative",
			parent: txt_center
		});

		var cta_txt = bannerboy.createElement({
			id: "cta_txt",
			innerHTML: parseLineBreaks(dynamicContent.cta_txt),
			textAlign: "center",
			color: dynamicContent.cta_txt_font_color || '#ffffff',
			fontSize: dynamicContent.cta_txt_font_size || '11pt',
			minHeight: "1em",
			textTransform: "uppercase",
			position: "relative",
			parent: cta
		});


		/* Adjustments
		================================================= */
		cta_base.set({borderRadius: 2});
		window.setTimeout(function() {
			dynamicResize(txt_1);
			dynamicResize(cta_txt);
		}, 1050);


		/* Initiate
		================================================= */
		animations();
		timeline();
		interaction();

		/* Animations
		================================================= */
		function timeline() {
			main_tl 
			.offset(1)
			.add(lockup_container.tl_in)
			.offset(.75)
			.add(cta.tl_in)
			.add(txt_1.tl_in);


			scrubber(main_tl);
		}

		function animations() {
			lockup_container.tl_in = new BBTimeline()
			.from(logo_googlecloud, 2, {x: 50, opacity: 0, ease: Power2.easeOut})
			.offset(0.4)
			.staggerFrom([icon_gmail, icon_documents, icon_gdrive, icon_calendar].reverse(), 1, {cycle: {x: function (i) { return -3 * bannerboy.utils.map((i+1), 1, 5, 5, 1); }}, ease: Power2.easeOut}, 0.2)
			.staggerFrom([icon_gmail, icon_documents, icon_gdrive, icon_calendar].reverse(), 0.3, {opacity: 0}, 0.2)
			.offset(0.5)
			.from(logo_gsuite_big, 1, {x: 3, opacity: 0});

			cta.tl_in = new BBTimeline()
			.from(cta, 1, {opacity: 0, y: 10, ease: Power2.easeOut});

			txt_1.tl_in = new BBTimeline()
			.from(txt_1, 1.0, {y: -3, opacity: 0, ease: Power1.easeInOut});
		}

		/* Interactions
		================================================= */
		function interaction() {
			function clickHandler() { 
				Enabler.exitOverride("Clickthrough", dynamicContent.exit_url.Url); 
				// Enabler.exit("Clickthrough");
			}

			banner.onclick = clickHandler;
		}

		/* Helpers
		================================================= */
		function getDynamicContent() {
			for (var key in dynamicContent) {
				if (Array.isArray(dynamicContent[key])) {
					return dynamicContent[key][0];
				}
			}
		}

		function dynamicVerticalCenter(elem) {
			elem.set({top: (elem.parentNode.get("height") - elem.clientHeight) / 2});
		}

		function dynamicResize(elem) {
			if (elem.clientHeight >= elem.parentNode.get("height")) {
				elem.set({fontSize: (elem.get("fontSize")) - 1});
				dynamicResize(elem);
			} else {
				dynamicVerticalCenter(elem);
			}
		}

		function parseLineBreaks(txt) {
			return document.createTextNode(txt).textContent.replace(/\n/g, '<br/>');
		}


		/* Scrubber
		================================================= */
		function scrubber(tl) {
			if (window.location.origin == "file://") {
				bannerboy.include(["../bannerboy_scrubber.min.js"], function() {
					if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
				});
			}
		}
	}
};