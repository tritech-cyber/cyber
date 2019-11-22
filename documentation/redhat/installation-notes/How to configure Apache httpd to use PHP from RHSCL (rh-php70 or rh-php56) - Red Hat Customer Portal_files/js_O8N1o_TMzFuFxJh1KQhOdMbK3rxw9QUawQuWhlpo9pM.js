(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * Automatically display the guidelines of the selected text format.
 */
Drupal.behaviors.filterGuidelines = {
  attach: function (context) {
    $('.filter-guidelines', context).once('filter-guidelines')
      .find(':header').hide()
      .closest('.filter-wrapper').find('select.filter-list')
      .bind('change', function () {
        $(this).closest('.filter-wrapper')
          .find('.filter-guidelines-item').hide()
          .siblings('.filter-guidelines-' + this.value).show();
      })
      .change();
  }
};

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.ajaxComments = {
  attach: function(context, settings) {

    // Responds to submission of new comment by the user.
    if ($(context).hasClass('ajax-comment-wrapper')) {
      if (typeof(commentNumber) != "undefined") {
        $('a#reply-' + commentNumber[1]).show();
      }
      commentNumber = $(context).attr("id").split('-');
      // Scroll to the comment reply inserted by ajax_command.
      ajaxCommentsScrollReply(commentNumber[2])
    }

    // Scroll to the comment reply form when reply is clicked.
    $("a.ajax-comment-reply:not(clicked)").click(function() {
      commentNumber = $(this).attr("id").split('-');
      ajaxCommentsScrollForm(commentNumber[1]);

      // Don't let people reply over and over.
      $(this).hide();

    });

    // Hide comment form if cancel is clicked.
    $("a.ajax-comments-reply-cancel").click(function(e) {
      commentForm = $(this).attr("href");
      // Hide comment form.
      $(commentForm).hide();

      commentNumber = $(this).attr("id").split('-');

      ajaxCommentsScrollReply(commentNumber[3]);

      e.preventDefault();

      // This needs to be unbound because the ajax_command callback is still
      // attached to it. We want to show the form that is already hidden
      // instead of calling for a new one.
      $('a#reply-' + commentNumber[3]).addClass('clicked').unbind().attr("href", "#").show().bind({
        click: function(e) {
          commentNumber = $(this).attr("id").split('-');
          // Reshow the form.
          $('[about*="/comment/' + commentNumber[1] + '#comment-' + commentNumber[1] + '"]').next().show();

          // Don't let people reply over and over.
          $(this).hide();

          ajaxCommentsScrollForm(commentNumber[1]);
          e.preventDefault();
        },
      });
    });

  }
};

/**
 * Scrolls user to comment reply form.
 */
function ajaxCommentsScrollForm(commentNumber) {
  pos = $('#comment-wrapper-' + commentNumber).offset();
  height = propHelper($('#comment-wrapper-' + commentNumber + ' .comment'), "scrollHeight");

  // Scroll to comment reply form.
  $('html, body').animate({ scrollTop: pos.top + height}, 'fast');
}

/**
 * Scrolls user to comment that has been added to page.
 */
function ajaxCommentsScrollReply(commentNumber) {
  formSize = propHelper($('.comment-form'), "scrollHeight");
  pos = $('#comment-wrapper-' + commentNumber).offset();

  // Scroll to comment reply.
  $('html, body').animate({ scrollTop: pos.top - formSize}, 'slow');
}

/**
 * Helper function to retrieve object properties.
 *
 * Works with jquery below and above version 1.6
 *
 */
function propHelper(e, p) {
	if ($.isFunction($.prop)) {
		return e.prop(p);
	}
	else {
		return e.attr(p);
	}
}

}(jQuery));
;
