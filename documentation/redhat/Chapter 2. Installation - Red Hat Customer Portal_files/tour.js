define(["introjs","jquery","lodash","moment","session"],function(t,e,o,i,s){"use strict";var n={_:{click:function(t){var e=document.querySelector(t);e&&e.click&&e.click()},showTray:function(){var t=e(".utility-tray");return t.show(),t},hideTray:function(){var t=e(".utility-tray");return t.hide(),t},getTourElements:function(){return e(".introjs-overlay, .introjs-helperLayer, .introjs-tooltipReferenceLayer")},hideTour:function(){this.getTourElements().hide()},showTour:function(){this.getTourElements().show()},waitForElement:function(t,i,s){0!==s&&(void 0===s&&(s=50),e(t).is(":visible")?i(document.querySelector(t)):setTimeout(o.bind(this.waitForElement,this,t,i,s--),500))}},resetMega:function(){if(document.querySelector(".mega-menu.active")){var t=document.querySelector(".primary-nav .active > a");t&&t.click&&t.click()}this._.hideTray()},reset:function(t,o,i){this.resetMega(t,o,i);var s=e(document.body);s.removeAttr("introjs-docked-position"),t&&t.docked?(s.addClass("introjs-docked"),t.dockposition&&s.attr("introjs-docked-position",t.dockposition)):s.removeClass("introjs-docked");var n=s.data("introjs-step-class");n&&s.removeClass(n),t&&t.stepClass&&(s.data("introjs-step-class",t.stepClass),s.addClass(t.stepClass))},openProducts:function(){this._.hideTray(),this._.click("#nav-products > a")},openTools:function(){this._.click("#nav-tools > a")},openSecurity:function(){this._.click("#nav-security > a")},openCommunity:function(){this._.click("#nav-community > a")},openProfile:function(){this._.showTray().children().hide(),e("#account-info").css("opacity","1").show()},openLanguages:function(){this._.showTray().children().hide(),e("#language").css("opacity","1").show()},stripFixParents:function(){e(".introjs-fixParent").removeClass("introjs-fixParent")},returnToLaunch:function(t,e,o){null!==o.currentTour.redirectOnExit&&!1===o.currentTour.redirectOnExit||("www.redhat.com"===window.location.host?window.location="https://access.redhat.com/start/":window.location="/start/")},ensurePath:function(t,o){function i(){var i=u();e(document.body).addClass("introjs-hidden");var s=t.path+"?tour="+i.tour+"&step="+o;if(t.hash&&(s+=t.hash),t.hostname)return window.location=window.location.protocol+"//"+t.hostname+s;window.location=s}var s=window.location.pathname,n=window.location.hash;t&&t.path&&s&&s!==t.path&&i(),t&&t.hash&&n&&n!==t.hash&&i()},waitThenRefresh:function(t,o,i){var s=this.refreshPosition,n=e(document.body);n.addClass("introjs-loading"),this._.waitForElement(t._element,function(e){i.intro._introItems[i.intro._currentStep].element=e,s(t,o,i),n.removeClass("introjs-loading")})},refreshPosition:function(t,e,o){setTimeout(function(){o&&o.intro&&o.intro.refresh()},600)},loadRecommendations:function(t,e,i){this._.waitForElement(t.element,o.bind(function(){try{var o=angular.element("#rha-product-select").scope(),s=o.ProductsService.products[0];o.CaseService.kase.product=s.value||s.code,o.CaseService.onProductSelectChange(),o.RecommendationsService.getRecommendations();var n=this.refreshPosition;this._.waitForElement("#rha-recommendation-section",function(){n(t,e,i)})}catch(t){}},this))},scrollTop:function(){window.scrollTo(0,0)},affixScrollTop:function(t,o,i){window.scrollTo(0,0),t.affix&&e(t.affix).affix("checkPosition"),this.refreshPosition(t,o,i)},showCloseButton:function(){e(".introjs-skipbutton").css("display","block")},addRemindMeLaterButton:function(){var t=this;e(".introjs-skipbutton").after('<a class="btn btn-sm btn-primary introjs-remindmebutton" href="javascript:void(0);">'+this.remindMeLaterLabel+"</a>"),e(".introjs-remindmebutton").on("click",function(){t._.hideTour(),t._.hideTray();var e=window.localStorage.getItem(l);e=e.replace(t.momento+",",""),window.localStorage.setItem(l,e)})},removeRemindMeLaterButton:function(){e(".introjs-remindmebutton").css("display","none")},showCloseButtonAndRemindMeLaterButton:function(){this.showCloseButton(),this.addRemindMeLaterButton()},remindMeLaterLabel:"Remind Me Later",momento:""},r={1:{path:"(^\\/home\\/?$)|(^\\/$)",overlayOpacity:.1,needsUserInfo:!0,needsAuthentication:!0,steps:[{key:"tour_nimbus_home_welcome",tooltipClass:"tooltip-lg",after:"showCloseButton"},{element:"[data-portal-tour-1='1']",key:"tour_nimbus_home_topNavSubscription",tooltipClass:"tooltip-md",position:"bottom",highlightClass:"light top"},{element:"[data-portal-tour-1='2']",key:"tour_nimbus_home_topNavDownloads",tooltipClass:"tooltip-md",position:"bottom",highlightClass:"light top"},{element:"[data-portal-tour-1='3']",key:"tour_nimbus_home_topNavSupport",tooltipClass:"tooltip-md",position:"bottom",highlightClass:"light top"},{element:"[data-portal-tour-1='4a']",key:"tour_nimbus_home_accountSettingsMenu",tooltipClass:"tooltip-md",position:"left"},{element:"[data-portal-tour-1='4']",key:"tour_nimbus_home_accountSettings1",tooltipClass:"tooltip-md",stepClass:"user-account-highlight",position:"bottom",after:"stripFixParents",before:"openProfile"},{element:"[data-portal-tour-1='5']",key:"tour_nimbus_home_accountSettings2",tooltipClass:"tooltip-md",stepClass:"user-account-highlight",position:"bottom",after:"stripFixParents",before:"openProfile"},{element:"[data-portal-tour-1='6']",key:"tour_nimbus_home_language",tooltipClass:"tooltip-md",stepClass:"user-language-highlight",position:"left",after:"stripFixParents",before:"openLanguages"},{element:"[data-portal-tour-1='7']",key:"tour_nimbus_home_products1",tooltipClass:"tooltip-md",on:"openProducts",position:"right"},{element:"[data-portal-tour-1='8']",key:"tour_nimbus_home_products2",tooltipClass:"tooltip-md",on:"openProducts",position:"left"},{element:"[data-portal-tour-1='9']",key:"tour_nimbus_home_tools",tooltipClass:"tooltip-md",before:"openTools"},{element:"[data-portal-tour-1='10']",key:"tour_nimbus_home_security",tooltipClass:"tooltip-md",before:"openSecurity"},{element:"[data-portal-tour-1='11']",key:"tour_nimbus_home_community",tooltipClass:"tooltip-md",before:"openCommunity"},{element:"[data-portal-tour-1='12']",key:"tour_nimbus_home_helloCard",tooltipClass:"tooltip-md",position:"left",before:"affixScrollTop"},{element:"[data-portal-tour-1='13']",key:"tour_nimbus_home_quickLinks",tooltipClass:"tooltip-md",position:"top",highlightClass:"light"},{key:"tour_nimbus_home_feedback",before:"scrollTop",tooltipClass:"tooltip-lg final"}],callBacks:{before:"reset",on:"ensurePath",exit:"returnToLaunch"},translate:!0,memento:"1014-nimbus-home",startsOn:"20160105",expiresOn:"20171207",hideMobile:"767",disableInteraction:!0,exitOnOverlayClick:!1},2:{title:"Tour the Customer Portal",multipage:!0,launchTour:!0,overlayOpacity:.1,doneLabel:"Finish",steps:[{intro:"<h3 class='lead-in'>Welcome!</h3><p>This self-paced tour will guide you through the major features of the Customer Portal.</p>",path:"/management/",tooltipClass:"tooltip-md"},{element:"#nav-subscription",title:"Subscriptions",intro:"Subscriptions is the place to view, renew, and manage how you use your subscriptions.<br /><br />Note: Subscription Management is available only to authorized users on your account.",path:"/management/",docked:!0},{element:".band.band-alt.band-narrow > .container .row.push-top",title:"Manage Subscriptions",intro:"If you use portal-based subscription management, this is where you can view and manage your registered systems and Subscription Management Applications like Red Hat Satellite.<br /><br />Tip: Read the knowledge article <a href='https://access.redhat.com/articles/143253' target='_blank'>Overview of Red Hat Subscription Management</a> for additional information on managing subscriptions.",path:"/management/",docked:!0},{element:"#nav-downloads",title:"Downloads",intro:"Download all of your Red Hat products, find RPM packages, and browse our library of Linux container images. If you are interested in trying a product, you will also find our available product evaluations on this page.",path:"/downloads/",docked:!0},{element:"#nav-support",title:"Support Cases",intro:"Create, track, and manage your support cases here. During the case creation process, our intelligent  recommendation engine can often find the resolution to your problem  before you finish filing a new case.<br /><br />Note: Support Cases are available only to authorized users on your account.",path:"/support/cases/",docked:!0},{element:"#account-info .row.account-settings .col-md-6:first-child",title:"Your User Account",intro:"Manage your account details, newsletter preferences, and more. If you are an  Organization Administrator, User Management allows you to add an unlimited number of users and control access permissions.<br /><br />Note: Each individual should have their own unique user account.",stepClass:"user-account-highlight",after:"stripFixParents",before:"openProfile",docked:!0},{element:"#account-info .row.account-settings .col-md-6:last-child",title:"Your User Account (continued)",intro:"Along with your personal profile, The Customer Portal also includes a notification service that will send you email when content you are interested in is updated. Look for the ‘Follow’ button to stay informed about your favorite Articles, Solutions, Discussions, contributors, and more.",stepClass:"user-account-highlight",after:"stripFixParents",before:"openProfile",docked:!0},{element:".products-menu .col-md-6.col-sm-8 .root",title:"Products &amp; Services",intro:"The Products &amp; Services menu is your gateway to product-specific information like evaluations, features, software downloads, documentation and step-by-step details to get you started.",tooltipClass:"tooltip-md",on:"openProducts",docked:!0},{element:".products-menu .col-md-6.col-sm-4.pull-right",title:"Products &amp; Services (continued)",intro:"Also in the Products & Services menu, you’ll find the Red Hat Certification ecosystem as well as direct links to the Red Hat knowledgebase and product documentation. Under Support Policies you will find important information such as Scope of Coverage, SLAs and the Management Escalation process.",tooltipClass:"tooltip-md",on:"openProducts",docked:!0},{element:"#nav-tools",title:"Red Hat Access Labs",intro:"Accessible via the Tools menu in the navigation bar, Red Hat Access Labs is a rapidly growing set of tools developed by Red Hat engineers to help you improve performance, quickly troubleshoot issues, identify security problems, and more.",path:"/labs/",after:"stripFixParents",docked:!0},{element:"#nav-security",title:"Security",intro:"Security is a top priority for us all. This is the place to engage with our Red Hat Product Security team, access security updates, and ensure your environments are not exposed to any known security vulnerabilities.",path:"/security",after:"stripFixParents",docked:!0},{element:"#nav-community",title:"Community",intro:"Community Discussions is the place for Red Hat associates and customers to collaborate. Join 3,500 Red Hat experts, customers, and partners who engage in discussions each year. In Community, you will also find blogs, events, and more.",path:"/discussions/",after:"stripFixParents",docked:!0}],callBacks:{before:"reset",on:"ensurePath",exit:"returnToLaunch"},hideMobile:"767",disableInteraction:!0,exitOnOverlayClick:!1},3:{title:"User Management",multipage:!0,launchTour:!0,overlayOpacity:.1,doneLabel:"Finish",steps:[{intro:"<h3 class='lead-in'>Welcome!</h3><p>This self-paced tour will guide you, an Organization Administrator, through the process of creating new Customer Portal user accounts as well as assigning appropriate permissions for each.</p>",hostname:"www.redhat.com",path:"/wapps/ugc/protected/usermgt/userList.html",tooltipClass:"tooltip-md"},{intro:"To ensure the security of your organization's account and regulate user access to portal features, you or any other Organization Administrator must create a user login for each member of your organization.<br><br>Tip: A user account can only be associated with one organization. Users with existing accounts will need to be added as a new user to this account.",hostname:"www.redhat.com",path:"/wapps/ugc/protected/usermgt/userList.html"},{element:"#account-info .row.account-settings .col-md-6:first-child li:nth-child(3)",intro:"When logged in, you can access User Management from any page on the Red Hat Customer Portal by clicking your name then User Management in the Red Hat Account menu.",stepClass:"user-account-highlight",after:"stripFixParents",before:"openProfile",hostname:"www.redhat.com",path:"/wapps/ugc/protected/usermgt/userList.html"},{title:"User List",element:".admin-actions .add-user",intro:"The User List page lists all users associated with your account. From here you can add new users to your account individually using the Add new user button or add multiple users using the Upload new users button.",hostname:"www.redhat.com",path:"/wapps/ugc/protected/usermgt/userList.html"},{title:"Add User",element:"#generalForm .fieldsetform:nth-child(6)",intro:"Be sure to assign the appropriate permissions for the user under the \"Customer Portal Access Permissions\" section. Checking the Organization Administrator box under \"Account Roles\" will give the user all the permissions listed in the Customer Portal Access Permissions section.<br><br>Learn more about <a href='https://access.redhat.com/documentation/en-US/Red_Hat_Customer_Portal/1/html-single/Managing_RHN_User_Access/index.html#sect-Managing_RHN_User_Access-Changing_Settings' target='_blank'>roles and permissions‌.</a>",position:"bottom-right-aligned",after:"refreshPosition",hostname:"www.redhat.com",path:"/wapps/ugc/protected/usermgt/createNewUser.html"},{title:"Bulk User Creation",element:".admin-actions .add-bulk",intro:"Use the Upload new users button to add multiple users at once.",position:"left",hostname:"www.redhat.com",path:"/wapps/ugc/protected/usermgt/userList.html"},{title:"Bulk User Upload",element:".download-template",intro:"Download and complete the .csv template (according to instructions included in the template) and then upload the file to have multiple users created at once.<br><br>Tip: To edit options for several users at once, select the appropriate users from the \"User List\" page and click \"Edit.\" For more info on bulk editing see this <a href='https://access.redhat.com/videos/314013' target='_blank'>instructional video.</a>",position:"left",hostname:"www.redhat.com",path:"/wapps/ugc/protected/usermgt/createNewUsersCSV.html"},{intro:"Every individual within your organization should have his or her own unique user user account. For more information on the benefits of assigning individual user logins, reference <a href='https://access.redhat.com/articles/1326373' target='_blank'>this knowledge article</a>.<br><br>Tip: In order to effectively and efficiently communicate with each member of your organization, a good best practice is to perform user management maintenance once every quarter.",hostname:"www.redhat.com",path:"/wapps/ugc/protected/usermgt/userList.html"}],callBacks:{before:"reset",on:"ensurePath",exit:"returnToLaunch"},hideMobile:"767",disableInteraction:!0,exitOnOverlayClick:!1},4:{title:"Engaging Red Hat Support",multipage:!0,launchTour:!0,overlayOpacity:.1,doneLabel:"Finish",steps:[{intro:"<h3 class='lead-in'>Welcome!</h3><p>This self-paced tour will guide you through the process and policies associated with engaging Red Hat Support using the Customer Portal case management system.</p>",tooltipClass:"tooltip-md",path:"/support/cases/",hash:"#/case/list"},{title:"Support Cases",element:"#nav-support",intro:"The support case management system is accessible from the Support Cases link. If you have previous cases they will be displayed here. You can search for a case, filter by case group, open, closed or all cases.<br><br>Use the Create a New Support Case button to initiate the case creation process.",path:"/support/cases/",hash:"#/case/list"},{title:"Creating Cases",element:"#nav-support",_element:"#rha-case-main-options",intro:"Select product, version, and give the case a name and a detailed description. Attaching logs, an sos report, or other diagnostics files is highly recommended and results in faster average resolution times.",path:"/support/cases/",hash:"#/case/new",before:"waitThenRefresh",on:"loadRecommendations",docked:!0},{title:"Recommendations",element:"#page-wrap",_element:"#rha-recommendation-section",intro:"As you type your case name and description, you will see solution recommendations dynamically update directing you to content which may address your concern.",path:"/support/cases/",hash:"#/case/new",before:"loadRecommendations",on:"waitThenRefresh",dockposition:"left",docked:!0},{title:"Case Options",element:"#page-wrap",_element:"#rha-case-more-options",intro:"Select Support Level, Severity, and then add any other users you'd like to receive notifications on the case. If your account has case groups set up, you can also select a group and the case will only be visible to the users in that Case Group. Once you click Submit, the case will be created and assigned a case number you may use as a reference.",path:"/support/cases/",hash:"#/case/new",before:"waitThenRefresh",docked:!0},{title:"Production SLAs",intro:"Understanding the Support Hours of Coverage and Support Level Agreements is crucial to knowing what to expect from Red Hat Support in the way of engagement and response times, based on the level of support defined by your subscriptions.<br><br>The Production SLAs are found under Products & Services, Support Policies.",path:"/support/offerings/production/sla",docked:!0},{title:"Escalations",intro:"If circumstances dictate that you need to raise awareness by means of an escalation, the information on this page will direct you through the process of notifying Red Hat Support management.<br><br>The Escalation Process is found under Products & Services, Support Policies.",path:"/support/policy/mgt_escalation/",docked:!0}],callBacks:{before:"reset",on:"ensurePath",exit:"returnToLaunch"},hideMobile:"767",disableInteraction:!0,exitOnOverlayClick:!1},5:{translate:!0,multipage:!0,launchTour:!0,overlayOpacity:.1,doneLabel:"OK",steps:[{key:"tour_subscriptionvalue_welcome",after:"stripFixParents"}],callBacks:{before:"reset",on:"ensurePath"},hideMobile:"767",disableInteraction:!0,exitOnOverlayClick:!1},6:{translate:!0,needsUserInfo:!0,hideMobile:"767",centerAllWidth:767,steps:[{key:"tour_solution_welcome",tooltipClass:"tooltip-lg"},{key:"tour_solution_sidebar",tooltipClass:"tooltip-md"},{element:"#page-wrap",_element:".drawer-nav .toggler",key:"tour_solution_adminDrawer",position:"left",highlightClass:"light top",tooltipClass:"tooltip-md",on:"waitThenRefresh",internalOnly:!0},{element:"#action-nav",key:"tour_solution_actionNav",position:"right",highlightClass:"light top",tooltipClass:"tooltip-md"},{element:"[rh-action-sheet-toggler='helpfulActionSheet']",key:"tour_solution_helpful",position:"right",highlightClass:"light top",tooltipClass:"tooltip-md"},{element:"#page-wrap",_element:"#comments",key:"tour_solution_comments",position:"top",highlightClass:"light top",tooltipClass:"tooltip-md",on:"waitThenRefresh"},{affix:"#action-nav",element:"#action-nav li:last-child",key:"tour_solution_feedback",before:"affixScrollTop",position:"top",highlightClass:"light top",tooltipClass:"tooltip-lg final"}]},7:{translate:!0,needsUserInfo:!0,hideMobile:"767",centerAllWidth:767,steps:[{key:"tour_article_welcome",tooltipClass:"tooltip-lg"},{key:"tour_article_sidebar",tooltipClass:"tooltip-md"},{element:"#page-wrap",_element:".drawer-nav .toggler",key:"tour_article_adminDrawer",position:"left",highlightClass:"light top",tooltipClass:"tooltip-md",on:"waitThenRefresh",internalOnly:!0},{element:"#action-nav",key:"tour_article_actionNav",position:"right",highlightClass:"light top",tooltipClass:"tooltip-md"},{element:"[rh-action-sheet-toggler='helpfulActionSheet']",key:"tour_article_helpful",position:"right",highlightClass:"light top",tooltipClass:"tooltip-md"},{key:"tour_article_tableOfContents",tooltipClass:"tooltip-md"},{element:"#page-wrap",_element:"#comments",key:"tour_article_comments",position:"top",highlightClass:"light top",tooltipClass:"tooltip-md",on:"waitThenRefresh"},{affix:"#action-nav",element:"#action-nav li:last-child",key:"tour_article_feedback",before:"affixScrollTop",position:"top",highlightClass:"light top",tooltipClass:"tooltip-lg final"}]},8:{translate:!0,needsUserInfo:!0,hideMobile:"767",centerAllWidth:767,steps:[{key:"tour_discussion_welcome",tooltipClass:"tooltip-lg"},{key:"tour_discussion_sidebar",tooltipClass:"tooltip-md"},{element:"#page-wrap",_element:".drawer-nav .toggler",key:"tour_discussion_adminDrawer",position:"left",highlightClass:"light top",tooltipClass:"tooltip-md",on:"waitThenRefresh",internalOnly:!0},{element:"#action-nav",key:"tour_discussion_actionNav",position:"right",highlightClass:"light top",tooltipClass:"tooltip-md"},{element:"#main-content .header-tag-list li:first-child",key:"tour_discussion_postedTag",position:"right",highlightClass:"light top",tooltipClass:"tooltip-md"},{element:"[rh-action-sheet-toggler='helpfulActionSheet']",key:"tour_discussion_helpful",position:"right",highlightClass:"light top",tooltipClass:"tooltip-md"},{element:"#page-wrap",_element:"#comments",key:"tour_discussion_responses",position:"top",highlightClass:"light top",tooltipClass:"tooltip-md",on:"waitThenRefresh"},{key:"tour_discussion_bestResponse",before:"affixScrollTop",tooltipClass:"tooltip-lg"},{key:"tour_discussion_bestResponseSearch",before:"affixScrollTop",tooltipClass:"tooltip-lg"},{key:"tour_discussion_feedback",tooltipClass:"tooltip-lg final"}]},9:{translate:!0,needsUserInfo:!1,hideMobile:"767",centerAllWidth:767,memento:"0616-package-search",startsOn:"20160701",expiresOn:"20170701",steps:[{key:"tour_packagesearch_welcome",tooltipClass:"tooltip-lg",after:"showCloseButton"},{element:"#page-wrap",_element:"#search-term",key:"tour_packagesearch_searchbox",position:"bottom",highlightClass:"light top",tooltipClass:"tooltip-md",on:"waitThenRefresh",internalOnly:!0},{element:"#prod_variant_chosen",key:"tour_packagesearch_productbox",position:"bottom",highlightClass:"light top",tooltipClass:"tooltip-md"},{element:"#page-wrap",_element:"#package_browser_list tbody tr:first-child td:last-child",key:"tour_packagesearch_architecture",position:"left",highlightClass:"light top",tooltipClass:"tooltip-md",before:"waitThenRefresh",on:"refreshPosition"},{affix:"#action-nav",element:"#action-nav li:last-child",key:"tour_packagesearch_feedback",position:"top",highlightClass:"light top",tooltipClass:"tooltip-lg final"}]},10:{path:"(^\\/home\\/?$)|(^\\/$)",overlayOpacity:.1,needsUserInfo:!1,needsAuthentication:!1,steps:[{key:"tour_nimbus_home_welcome",tooltipClass:"tooltip-lg",after:"showCloseButton"},{element:"[data-portal-tour-1='1']",key:"tour_nimbus_home_topNavSubscription",tooltipClass:"tooltip-md",position:"bottom",highlightClass:"light top"},{element:"[data-portal-tour-1='2']",key:"tour_nimbus_home_topNavDownloads",tooltipClass:"tooltip-md",position:"bottom",highlightClass:"light top"},{element:"[data-portal-tour-1='3']",key:"tour_nimbus_home_topNavSupport",tooltipClass:"tooltip-md",position:"bottom",highlightClass:"light top"},{element:"[data-portal-tour-1='4a']",key:"tour_nimbus_home_accountSettingsMenu",tooltipClass:"tooltip-md",position:"left"},{element:"[data-portal-tour-1='6']",key:"tour_nimbus_home_language",tooltipClass:"tooltip-md",stepClass:"user-language-highlight",position:"left",after:"stripFixParents",before:"openLanguages"},{element:"[data-portal-tour-1='7']",key:"tour_nimbus_home_products1",tooltipClass:"tooltip-md",on:"openProducts",position:"right"},{element:"[data-portal-tour-1='8']",key:"tour_nimbus_home_products2",tooltipClass:"tooltip-md",on:"openProducts",position:"left"},{element:"[data-portal-tour-1='9']",key:"tour_nimbus_home_tools",tooltipClass:"tooltip-md",before:"openTools"},{element:"[data-portal-tour-1='10']",key:"tour_nimbus_home_security",tooltipClass:"tooltip-md",before:"openSecurity"},{element:"[data-portal-tour-1='11']",key:"tour_nimbus_home_community",tooltipClass:"tooltip-md",before:"openCommunity"},{element:"[data-portal-tour-1='12']",key:"tour_nimbus_home_helloCard",tooltipClass:"tooltip-md",position:"left",after:"affixScrollTop"},{element:"[data-portal-tour-1='13']",key:"tour_nimbus_home_quickLinks",tooltipClass:"tooltip-md",position:"top",highlightClass:"light"},{key:"tour_nimbus_home_feedback",before:"scrollTop",tooltipClass:"tooltip-lg final"}],callBacks:{before:"reset",on:"ensurePath"},translate:!0,memento:"1014-nimbus-home",startsOn:"20160105",expiresOn:"20171207",hideMobile:"767",disableInteraction:!0,exitOnOverlayClick:!1}},a="localStorage"in window&&null!==window.localStorage,l="RHCP-TOUR",u=function(){if(!location.search)return{};for(var t={},e=location.search.slice(1).split("&"),o=e.length,i=0;i<o;i++){var s=e[i];t[(s=s.split("="))[0]]=decodeURIComponent(s[1]||"")}return t},c=function(t,e){return!!a&&(void 0===e?window.localStorage.getItem(t):window.localStorage.setItem(t,e))},p=function(t){if(window.btoa)return window.btoa(t);var e=0;if(0===t.length)return e;for(var o=0;o<t.length;o++)e=(e<<5)-e+t.charCodeAt(o),e&=e;return e+""},h=function(){this.intro=t(),this._init(r,n)};return h.prototype._init=function(t,e){this.tours=t,this.actions=e,this.translateDfd=null,this.userDfd=null,this.deferreds=[];var o=u();this.currentTour=this.getCurrentTour(o),this.buildTour(),o.tour&&"false"===o.tour||(o["tour-redirect"]&&(this.currentTour.redirectOnExit="false"!==o["tour-redirect"]),this.currentTour.steps&&o.tour?this.startTour():this.currentTour.steps&&this.shouldAutoStart()&&this.startTour(),this.actions.momento=p(this.currentTour.memento))},h.prototype.getCurrentTour=function(t){var e=window.location.pathname;if(t.tour&&this.tours[t.tour])return this.tours[t.tour];for(var o in this.tours){var i=this.tours[o];if(i.path&&new RegExp(i.path).test(e))return i}return{}},h.prototype.buildTour=function(){this.currentTour&&this.currentTour.translate&&this.deferreds.push(this.translateTour()),this.currentTour&&(this.currentTour.needsUserInfo||this.currentTour.needsAuthentication)&&this.deferreds.push(this.getUserInfo());var t=this,o={buttonClass:"btn btn-sm",prevLabel:"&larr;",skipLabel:"Close",doneLabel:"Finish",dock:!1,showBullets:!1,showProgress:!0,showStepNumbers:!1,overlayOpacity:.45,arrowPadding:8};this.intro.setOptions(e.extend(o,this.currentTour)),this.intro.executeCurrentStepCb=function(e){if(!t.currentTour.centerAll){var o=this._currentStep,i=this._options&&this._options.steps&&this._options.steps[o];t.currentTour.callBacks&&t.currentTour.callBacks[e]&&t.actions[t.currentTour.callBacks[e]]&&t.actions[t.currentTour.callBacks[e]](i,o,t),i&&i&&i[e]&&t.actions[i[e]]&&t.actions[i[e]](i,o,t)}};var i=function(){e("body").removeClass("portal-tour"),this.executeCurrentStepCb("exit")};this.intro.onbeforechange(function(t){this.executeCurrentStepCb("before")}),this.intro.onchange(function(t){this.executeCurrentStepCb("on")}),this.intro.onafterchange(function(t){this.executeCurrentStepCb("after")}),this.intro.oncomplete(i),this.intro.onexit(i)},h.prototype.shouldAutoStart=function(){return!!this._isTourCurrent()&&(!!this.currentTour.memento&&!1===this._hasMemento(this.currentTour.memento))},h.prototype.translateTour=function(){var t=new e.Deferred,o=this,i="en";window.portal&&window.portal.lang&&(i=window.portal.lang);var s="messages.json";return"en"!==i&&(s="messages_"+i+".json"),e.get("/webassets/avalon/j/messages/"+s).then(function(e){for(var i=function(t){return e&&e[t]?e[t]:t},s=0;s<o.currentTour.steps.length;s++){var n=o.currentTour.steps[s].key;o.currentTour.steps[s].intro=i(n)}o.intro.setOptions({closeLabel:i("tour_common_closeLabel"),nextLabel:i("tour_common_nextLabel")}),o.actions.remindMeLaterLabel=i("tour_common_remindMeLaterLabel"),t.resolve()}),t.promise()},h.prototype.getUserInfo=function(){var t=e.Deferred(),i=this;return i.currentTour.needsAuthentication&&!s.isAuthenticated()&&s.login(),s.isInternal()||(i.currentTour.steps=o.reject(i.currentTour.steps,function(t){return t.internalOnly}),i.intro.setOptions({steps:i.currentTour.steps})),t.resolve(),t.promise()},h.prototype.startTour=function(){function t(){e("html, body").animate({scrollTop:"0px"},200,"swing",o.once(function(){var t=i.intro;window.__test=t,null===t._targetElement&&(t._targetElement=document.body);var o="portal-tour";i.currentTour.launchTour&&(o+=" launch-tour"),e("body").addClass(o),i.currentTour.memento&&i.saveMemento(i.currentTour.memento);var s=u().step;s&&t.goToStep(parseInt(s,10)+1),window.chrometwo_ready?window.chrometwo_ready(function(){t.start()}):e(function(){t.start()})}))}if(!this._canDisplay())return!1;this.currentTour.centerAllWidth&&window.innerWidth<=this.currentTour.centerAllWidth&&(this.currentTour.centerAll=!0,e.each(this.currentTour.steps,function(t,e){e.element&&delete e.element}));var i=this;this.deferreds.length?e.when.apply(e,this.deferreds).then(t):t()},h.prototype._hasMemento=function(t){var e=!1,o=c(l),i=p(t);if(!o)return!1;o=o.split(",");for(var s=0;s<o.length;s++)if(o[s]===i){e=!0;break}return e},h.prototype._canDisplay=function(){return!(this.currentTour.hideMobile&&window.innerWidth<=+this.currentTour.hideMobile)},h.prototype._isTourCurrent=function(){var t=i().utc();return(!this.currentTour.startsOn||!t.isBefore(i(this.currentTour.startsOn,"YYYYMMDD").utc()))&&(!this.currentTour.expiresOn||!t.isAfter(i(this.currentTour.expiresOn,"YYYYMMDD").utc()))},h.prototype.saveMemento=function(t){if(!this._hasMemento(t)){var e=c(l)||"";e+=p(t)+",",c(l,e)}},h});
//# sourceMappingURL=tour.js.map