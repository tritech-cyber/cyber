ajq(document).ready(function () {
	// this should be bullet proof, but I will try/catch just for _extra_ safety... thinking of etowns
	try {
		if (Drupal.portal.currentUser.isInternal) {
				do_it();
		}
	} catch (err) {
	}
});

function do_it() {
	// short circut as to not display on edit pages
	if (document.location.href.indexOf("edit") != -1) {
		return;
	}

        var URL = '/rs/cases?linked=https://api.'+window.location.host+'/rs/solutions/';
        //test url
        //var URL = 'https://access.devgssci.devlab.phx1.redhat.com/rs/cases?linked=https://api.access.devgssci.devlab.phx1.redhat.com/rs/solutions/';
	var nid = null;

        var viewAllCasesText = 'Show More',
            hideAllCasesText = 'Show Less';

        //find nid of solution
        var explode = document.URL.split('/');
        if(isInteger(explode[4]) === true && explode[3] === 'solutions') {
            var nid = explode[4];
        }

	if (nid !== null) {
            ajq.getJSON(URL + nid, function(data) {
                var content = "";
                var cnt = 0;

                var sideBar = ajq('#case-links-target');
                //var sideBar = ajq('#sidebar div.region-sidebar-second div.section'); //old location
                if(typeof data === 'object' && typeof data.case !== 'undefined') {
                    //Calculate total cases and how many to put in each col
                    var caseLength = Object.keys(data.case).length;
                    if(caseLength > 10 ) {
                        //Only print 10 override - otherwise this gets out of control on the page.
                        var moreCaseLength = 10;
                    }
                    var casePerCol = Math.floor(moreCaseLength / 2);
                    var newCasePerCol = Math.floor((caseLength-10) / 2);

                    //Process each case link
                    ajq.each( data.case, function( key, val ) {
                        if(isInteger(val.case_number) === true && cnt <= 9) {    // starts at 0
                            //Divide links in half and put them in each column
                            if(cnt === 0) {
                                content += '<div class="col-md-6">';
                            }
                            if(cnt === casePerCol) {
                                content += '</div><div class="col-md-6">';
                            }

                            //Build case link Markup
                            content += "<p>" + "<a href='" + "/support/cases/#/case/" + val.case_number+"'>" + val.case_number + "</a>";
                            if(typeof val.linked_by !== 'undefined') {
                                content += " <span class='separator'>-</span> " + val.linked_by +" </p>";
                            }
                            else {
                                content += "</p>";
                            }
                            cnt++;
                        }
                        else {
                             //Divide links in half and put them in each column
                            if(cnt === 10) {
                                content += '</div><div class="collapse" id="more-cases"><div class="col-md-6">';
                            }
                            if(cnt === newCasePerCol) {
                                content += '</div><div class="col-md-6">';
                            }

                            //Build case link Markup
                            content += "<p>" + "<a href='" + "/support/cases/#/case/" + val.case_number+"'>" + val.case_number + "</a>";
                            if(typeof val.linked_by !== 'undefined') {
                                content += " <span class='separator'>-</span> " + val.linked_by +" </p>";
                            }
                            else {
                                content += "</p>";
                            }
                            cnt++;
                        }
                    });
                    //Build wraper markup and apply results to the page
                    var bandOpen = '<div class="container"><h2>Case Links (Red Hat Internal)</h2><div class="row push-top">';
                    if(caseLength > 10 ) {
                        var bandClose = '</div></div><div class="text-center push-top col-md-12"><a role="button" data-toggle="collapse" href="#more-cases" aria-expanded="false" aria-controls="more-cases" class="toggle-cases">' + viewAllCasesText + '</a></div>';
                    }
                    else {
                        var bandClose = '</div></div>';
                    }
                    //if there is content toggle the band to be shown.
                    if(content !== '') {
                        sideBar.show();
                    }
                    sideBar.append(bandOpen+content+bandClose);
                }
            });
	}

        ajq('#case-links-target').on('click','.toggle-cases',function(e){
            var viewLink = ajq(this);
            if ( viewLink.hasClass('open') ) {
                viewLink.removeClass('open');
                viewLink.html(viewAllCasesText);
            } else {
                viewLink.addClass('open');
                viewLink.html(hideAllCasesText);
            }
        });
}



/**
 * Check if it is a number
 * @param {int} x (a number)
 * @returns {Boolean}
 */
function isInteger(x) {
    return x % 1 === 0;
};
/*
 * Used to hide and show the comment submit buttons.
 */

//This is temporary and will be replaced.
chrometwo_require(['jquery', 'angular128','bootstrap'], function($,angular) {


    setTimeout(function () {
        var $optinToast = $('#optinToast'),
            $close = $optinToast.find('.close'),
            $optinForm = $optinToast.find('form'),
            $optinButtons = $optinToast.find('form input[type="submit"]'),
            $optinSpinner = $optinToast.find('.spinner');

        $close.on('click', function () {
           $optinToast.removeClass('show');
        });

    //Disable other submit button and add spinner while submiting
    $optinButtons.on('click', function () {
        $(this).siblings('input[type="submit"]').attr('disabled', true);
        $optinSpinner.removeClass('hide');
    });

    }, 1000);


    $(function () {
        $('[data-toggle="tooltip"]').tooltip();

        angular.module('helpfulApp', [])
        //angular.module('helpfulApp')
            .directive('helpfulBand', helpfulBand)
            .directive('followBand', followBand)
            .directive('rhActionSheet', actionSheet)
            .directive('rhActionSheetToggler', actionSheetToggler)
            .directive('rhActionSheetBand', actionSheetBand)
            .factory('$rhActionSheet', ActionSheetService)
            .factory('$rhComponentRegistry', ComponentRegistry);

        function helpfulBand() {
            var directive = {
                restrict: 'AE',
                controller: HelpfulBandController,
                controllerAs: 'helpfulBandController'
            };

            return directive;

            function HelpfulBandController() {
                var vm = this;

                vm.submit = function (event, response) {
                    event.target.blur();

                    if (response === vm.response) {
                        vm.response = null;
                        return;
                    }

                    vm.response = response;

                    /*
                     * TODO: make ajax call
                     */
                };
            }
        }

        function followBand() {
            var directive = {
                restrict: 'AE',
                controller: FollowBandController,
                controllerAs: 'followBandController'
            };

            return directive;

            function FollowBandController() {
                var vm = this;

                vm.follow = function (event) {
                    event.target.blur()
                    vm.following = !vm.following;

                    /*
                     * TODO: make ajax call
                     */
                };
            }
        }

        function actionSheetBand() {
            var directive = {
                restrict: 'AE',
                link: link
            };

            return directive;

            function link(scope, element, attrs) {
                $(window).on('scroll', scrollHandler);

                function scrollHandler() {
                    // 3 //uggly- but accounts for content inbetween bands.
                    var previousElement = $(element).prevUntil('.band, .container').andSelf().prev('.band, .container').andSelf().first();
                    // 2
                    // var previousElement = $(element).prevAll(attrs.previousElement);
                    // 1
                    //var previousElement = $(element).prev();

                    if (previousElement.outerHeight(true) + previousElement.offset().top - $(window).scrollTop() - $(window).height() < 0) {
                        element.addClass('override');
                    } else {
                        element.removeClass('override');
                    }
                }

                scrollHandler();
            }
        }

        actionSheetToggler.$inject = ['$rhActionSheet'];

        function actionSheetToggler($rhActionSheet) {
            var directive = {
                restrict: 'AE',
                link: link
            };

            return directive;

            function link(scope, element, attrs) {
                var componentId = attrs.rhActionSheetToggler;

                element.on('click', clickHandler);

                function clickHandler(event) {
                    event.preventDefault();
                    $rhActionSheet(componentId).toggle();
                }
            }
        }

        actionSheet.$inject = ['$q', '$timeout'];

        function actionSheet($q, $timeout) {
            var directive = {
                restrict: 'AE',
                link: link,
                controller: ActionSheetController,
                scope: {
                    isOpen: '=?rhIsOpen'
                }
            };

            return directive;

            function link(scope, element, attr, actionSheetController) {
                var promise = $q.when(true);

                element.addClass('rh-actionsheet');
                scope.$watch('isOpen', updateIsOpen);
                actionSheetController.$toggleOpen = toggleOpen;

                element.on('$destroy', actionSheetController.destroy);

                function updateIsOpen(isOpen) {
                    var deferred = $q.defer();

                    if (isOpen !== undefined) {
                        element.addClass('rh-actionsheet-animate');
                    }

                    element[isOpen ? 'addClass' : 'removeClass']('rh-actionsheet-open');

                    $timeout(function () {
                        deferred.resolve();
                        element.removeClass('rh-actionsheet-animate');
                    }, 200);

                    return promise = $q.all([deferred]);
                }

                function toggleOpen(isOpen) {
                    if (scope.isOpen === isOpen) {
                        return $q.when(true);
                    } else {
                        var deferred = $q.defer();
                        scope.isOpen = isOpen;

                        $timeout(function () {
                            promise.then(function (result) {
                                if (!scope.isOpen) {
                                    //
                                }

                                deferred.resolve(result);
                            });
                        }, 0, false);

                        return deferred.promise;
                    }
                }
            }

            function ActionSheetController($scope, $element, $attrs, $rhComponentRegistry, $q) {
                var self = this;

                self.isOpen = function () {
                    return !!$scope.isOpen;
                };

                self.open = function () {
                    return self.$toggleOpen(true);
                };

                self.close = function () {
                    return self.$toggleOpen(false);
                };

                self.toggle = function () {
                    return self.$toggleOpen(!$scope.isOpen);
                };

                self.$toggleOpen = function () {
                    return $q.when($scope.isOpen);
                };

                self.$element = $element;

                self.destroy = $rhComponentRegistry.register(self, $attrs.rhComponentId);
            }
        }

        ActionSheetService.$inject = ['$rhComponentRegistry', '$q'];

        function ActionSheetService($rhComponentRegistry, $q) {
            var openInstance;

            return function (handle) {
                var instance = $rhComponentRegistry.get(handle);
                var service = {
                    isOpen: isOpen,
                    toggle: toggle,
                    open: open,
                    close: close,
                    then: then,
                    instance: instance
                };

                return service;

                function isOpen() {
                    return instance && instance.isOpen();
                }

                function toggle() {
                    /*
                     * look for an already open instance
                     */
                    if (openInstance && openInstance.$$rhHandle !== handle) {
                        openInstance.close();
                    }

                    if (!isOpen()) {
                        openInstance = instance;
                    } else {
                        openInstance = null;
                    }

                    return instance ? instance.toggle() : $q.reject();
                }

                function open() {
                    return instance ? instance.open() : $q.reject();
                }

                function close() {
                    return instance ? instance.close() : $q.reject();
                }

                function then(callbackFn) {
                    var promise = $q.when(instance);
                    return promise.then(callbackFn || angular.noop);
                }
            };
        }

        ComponentRegistry.$inject = ['$q'];

        function ComponentRegistry($q) {
            var instances = [],
                service = {
                    get: get,
                    register: register
                };

            return service;

            function get(handle) {
                var instance;

                for (var i = 0; i < instances.length; i += 1) {
                    instance = instances[i];

                    if (instance.$$rhHandle === handle) {
                        return instance;
                    }
                }

                return null;
            }

            function register(instance, handle) {
                if (!handle) {
                    return angular.noop;
                }

                instance.$$rhHandle = handle;
                instances.push(instance);

                return deregister;

                function deregister() {
                    var index = instances.indexOf(instance);
                    if (index !== -1) {
                        instances.splice(index, 1);
                    }
                }
            }
        }

        angular.bootstrap(document, ['helpfulApp']);

        // Affix action-nav
        var actionNav = $('#action-nav'),
            contentWrap = $('.content-wrapper');

        if ( contentWrap.height() > actionNav.height() ) {
            $('#action-nav').affix({
                offset: {
                    top: function () {
                        var band = $('.band-first');
                        return band.offset().top;
                    },
                    bottom: function () {
                        var band = $('.band-first');
                        return  $(document).height() - (band.offset().top + band.outerHeight(true));
                    }
                }
            });
        }

        // Affix pubstatus
        $('#main-content > .pubstatus').affix({
            offset: {
                top: function () {
                    var mainArea = $('#cp-main');
                    return mainArea.offset().top;
                },
                bottom: function () {
                    var mainArea = $('#cp-main');
                    return  $(document).height() - (mainArea.offset().top + mainArea.outerHeight(true));
                }
            }
        });

        $('[data-toggle="popover"]').popover();
    });
});;
/* 
 * This JS is ment to help transform <code> blocks on the page to have a header
 * that with a button that allows you to open a new window with just the code 
 * being provided in the block.  Makes for a quick way to copy code.
 */

chrometwo_require(['jquery'], function($) {
function escapeHTML (unsafe_str) {
    return unsafe_str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#39;'); // '&apos;' is not valid HTML 4
}
$(document).ready(function() {
  $("code").each(function(){
    if ($(this).parent().is('pre')) {
      $(this).parent().wrap('<div class="code-raw" />');
      var rawcode = $(this).text();
      var link = $('<a />',
      {
          text: 'Raw',
          href: '#',
          class: 'code-raw-btn',
          click: function () {
            var x=window.open();
            x.document.open();
            x.document.write('<pre>'+escapeHTML(rawcode)+'</pre>');
            x.document.close();
            return false;
          }
      });
      $(this).parent().parent().prepend(link);
      $(this).parent().parent().find('a').wrap('<div class="code-raw-toolbar" />');
    }
  });
});
});
;
(function ($) {
  Drupal.behaviors.rate = {
    attach: function(context) {
      $('.rate-widget:not(.rate-processed)', context).addClass('rate-processed').each(function () {
        var widget = $(this);
        // as we use drupal_html_id() to generate unique ids
        // we have to truncate the '--<id>'
        var ids = widget.attr('id').split('--');
        ids = ids[0].match(/^rate\-([a-z]+)\-([0-9]+)\-([0-9]+)\-([0-9])$/);
        var data = {
          content_type: ids[1],
          content_id: ids[2],
          widget_id: ids[3],
          widget_mode: ids[4]
        };

        $('a.rate-button', widget).click(function() {
          var token = this.getAttribute('href').match(/rate\=([a-zA-Z0-9\-_]{32,64})/)[1];
          return Drupal.rateVote(widget, data, token);
        });
      });
    }
  };

  Drupal.rateVote = function(widget, data, token) {
    // Invoke JavaScript hook.
    widget.trigger('eventBeforeRate', [data]);

    $(".rate-info", widget).text(Drupal.t('Saving vote...'));

    // Random number to prevent caching, see http://drupal.org/node/1042216#comment-4046618
    var random = Math.floor(Math.random() * 99999);

    var q = (Drupal.settings.rate.basePath.match(/\?/) ? '&' : '?') + 'widget_id=' + data.widget_id + '&content_type=' + data.content_type + '&content_id=' + data.content_id + '&widget_mode=' + data.widget_mode + '&token=' + token + '&destination=' + encodeURIComponent(Drupal.settings.rate.destination) + '&r=' + random;
    if (data.value) {
      q = q + '&value=' + data.value;
    }

    // fetch all widgets with this id as class
    widget = $('.' + widget.attr('id'));

    $.get(Drupal.settings.rate.basePath + q, function(response) {
      if (response.match(/^https?\:\/\/[^\/]+\/(.*)$/)) {
        // We got a redirect.
        document.location = response;
      }
      else {
        // get parent object
        var p = widget.parent();

        // Invoke JavaScript hook.
        widget.trigger('eventAfterRate', [data]);

        widget.before(response);

        // remove widget
        widget.remove();
        widget = undefined;

        Drupal.attachBehaviors(p);        
      }
    });

    return false;
  }
})(jQuery);
;
/**
 * @file
 * Javascript need to add any modal to the body.
 */

chrometwo_require(['jquery'], function ($) {
    $(function () {
        $('.modal').appendTo('body');
    });
});
;
// Include solution engine javascript.

chrometwo_require(['solution-engine-banner'], function(sebanner) {
    sebanner.init();
});;
