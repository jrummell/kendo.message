/**
    @description Message plugin for Kendo UI Web
    @copyright 2013 John Rummell (jrummell.com)
    @license GPL license (http://www.gnu.org/licenses/gpl.html)
    @version: _VERSION_
*/

//
// create closure
//
(function (jQuery) {
    //
    // plugin methods
    //
    var methods = {
        init: function (options) {
            options = jQuery.extend({}, jQuery.fn.kendoMessage.defaults, options);

            return this.each(function () {
                var $this = jQuery(this);
                var data = $this.data("message");

                // only initialize once
                if (!data) {
                    // use given message or inner html
                    var messageText = options.message;
                    if (messageText == null || messageText === "") {
                        messageText = $this.html();
                    }

                    // info or error?
                    var messageClass = options.type === "info" ? "k-block k-info-colored" : "k-block k-error-colored";
                    var iconClass = options.type === "info" ? "k-i-tick" : "k-i-note";

                    // build message html
                    var messageHtml = "<div class='k-content message-container'>";
                    messageHtml += "<div class='" + messageClass + " ui-corner-all' >";
                    messageHtml += "<p><span class='k-icon " + iconClass + "' style='float:left;'></span>";
                    messageHtml += "<span class='message-text'>" + messageText + "</span>";
                    if (options.dismiss) {
                        messageHtml += "<a class='message-dismiss' href='#'>Dismiss</a>";
                    }
                    messageHtml += "</p></div></div>";

                    // set html and show the message
                    $this.html(messageHtml);

                    if (options.dismiss) {
                        // hide messages on click
                        jQuery(".message-dismiss", $this).click(function () {
                            $this.hide("normal");
                            return false;
                        });
                    }

                    if (options.autoShow) {
                        $this.show();
                    }

                    // save options
                    $this.data("message", options);
                }
            });
        },
        options: function (options) {
            return this.each(function () {
                var $this = jQuery(this);
                var currentOptions = $this.data("message") || {};
                options = jQuery.extend({}, currentOptions, options);
                $this.kendoMessage("destroy").kendoMessage("init", options);
            });
        },
        show: function () {
            jQuery(this).show();
        },
        hide: function () {
            jQuery(this).hide();
        },
        destroy: function () {
            return this.each(function () {
                var $this = jQuery(this);
                var data = $this.data("message");

                jQuery(".message-container", $this).remove();
                $this.html(data.message).css("display:none");
                $this.removeData("message");
            });
        }
    };

    jQuery.fn.kendoMessage = function (method) {
        if (methods[method]) {
            // eslint-disable-next-line prefer-rest-params
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        if (typeof (method) === "object" || !method) {
            // eslint-disable-next-line prefer-rest-params
            return methods.init.apply(this, arguments);
        }

        jQuery.error("Method " + method + " does not exist on jQuery.kendoMessage");

        return null;
    };

    //
    // plugin defaults
    //
    jQuery.fn.kendoMessage.defaults = {
        message: "", // leave blank to use element html
        type: "info", // info or error
        dismiss: true, // append 'Click to dismiss' to message and hide on click
        autoShow: true // show on initialize
    };
}(jQuery));
