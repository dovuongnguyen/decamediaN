/* Copyright (c) 2009 José Joaquín Núñez (josejnv@gmail.com) http://joaquinnunez.cl/blog/
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-2.0.php)
 * Use only for non-commercial usage.
 *
 * Version : 0.1
 *
 * Requires: jQuery 1.2+
 */

(function (jQuery) {
    jQuery.fn.clock = function (options) {
        var defaults = {
            offset: '+0',
            type: 'analog'
        };
        var _this = this;
        var opts = jQuery.extend(defaults, options);

        setInterval(function () {
            var seconds = jQuery.calcTime(opts.offset).getSeconds();
            if (opts.type == 'analog') {
                var sdegree = seconds * 6;
                var srotate = "rotate(" + sdegree + "deg)";
                jQuery(_this).find(".sec").css({ "-moz-transform": srotate, "-webkit-transform": srotate });
            }
            else {
                jQuery(_this).find(".sec").html(seconds);
            }
        }, 1000);

        setInterval(function () {
            var hours = jQuery.calcTime(opts.offset).getHours();
            var mins = jQuery.calcTime(opts.offset).getMinutes();
            if (opts.type == 'analog') {
                var hdegree = hours * 30 + (mins / 2);
                var hrotate = "rotate(" + hdegree + "deg)";
                jQuery(_this).find(".hour").css({ "-moz-transform": hrotate, "-webkit-transform": hrotate });
            }
            else {
            	if(hours < 10){
            		hours = "0" + hours;
            	}
                jQuery(_this).find(".hour").html(hours + ':');
            }
            var meridiem = hours < 12 ? ' AM' : ' PM';
            jQuery(_this).find('.meridiem').html(meridiem);
        }, 1000);

        setInterval(function () {
            var mins = jQuery.calcTime(opts.offset).getMinutes();
            if (mins < 10) {
                mins = "0" + mins;
            }
            if (opts.type == 'analog') {
                var mdegree = mins * 6;
                var mrotate = "rotate(" + mdegree + "deg)";
                jQuery(_this).find(".min").css({ "-moz-transform": mrotate, "-webkit-transform": mrotate });
            }
            else {
                if (jQuery(_this).find(".sec").length > 0) {
                    jQuery(_this).find(".min").html(mins + ':');
                } else {
                    jQuery(_this).find(".min").html(mins);
                }

            }
        }, 1000);

        setInterval(function () {
            var date = jQuery.calcTime(opts.offset);
            if (opts.type == 'analog') {
                
            }
            else {
                var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
                var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
                jQuery(_this).find(".date").html(weekdays[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());
            }
        }, 1000);
    }
})(jQuery);


jQuery.calcTime = function (offset) {

    // create Date object for current location
    d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000 * offset));

    // return time as a string
    return nd;
};
