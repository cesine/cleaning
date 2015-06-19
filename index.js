'use strict';

var moment = require('moment');
var leftPad = require('./padding');

/**
 * Utility class to format lengths of time
 * - extract the hours, minutes, seconds, 
 * - format according to how the user/client requires
 * - accepted formats 
 *    - Clock:  hh:mm:ss 
 *    - Pretty:  00 h 00 min 00 sec
 *    - HTML: <span></span> 
 **/

var secondsInAMinute = 60;
var secondsInAnHour = secondsInAMinute * 60;

var padToTwoDigits = function(value){
  return leftPad(value, 2, '0');
}

var TimeFormat = {
  
  pretty_format: function(hours, minutes, seconds){
    return hours + ' h ' + minutes + ' min ' + seconds + ' sec'; 
  },

  sec_to_hhmmss_improved: function(t) {
    if (t === null) return '';
    var m = moment.duration(t, 'seconds');
    var timeArr = [Math.floor(m.asHours()), Math.floor(m.minutes()), Math.floor(m.seconds())];
    var str = "<span class='duration'>";
    if (timeArr[0] > 0) str += "<strong>";
    str += timeArr[0];
    str += ":";
    if (timeArr[0] === 0 && timeArr[1] > 0) str += "<strong>";
    str += padToTwoDigits(timeArr[1]);
    if (timeArr[0] >= 0 || timeArr[1] > 0) str += "</strong>";
    str += ":";
    str += padToTwoDigits(timeArr[2]);
    str += "</span>";
    return str;
  },
  sec_to_decimal_hours: function(t) {
    return (t / secondsInAMinute / secondsInAMinute).toFixed(2) + " h";
  },
  seconds_to_ext_hhmmss: function(t, type) {
    if (type === 'improved') {
      return this.sec_to_hhmmss_improved(t);
    } else if (type === 'decimal') {
      return this.sec_to_decimal_hours(t);
    } else {
      return this.seconds_to_hhmmss(t);
    }
  },
  seconds_to_hhmmss: function(t, dont_display_seconds) {
    var aTime = ~~t;

    if (aTime < 0) {
      aTime += (new Date().getTime() / 1000);
    }

    var hours = Math.floor(aTime / secondsInAnHour),
      minutes = Math.floor((aTime % secondsInAnHour) / secondsInAMinute),
      seconds = Math.floor(aTime % secondsInAMinute);

    if (dont_display_seconds) {
      if (!hours) {
        return minutes + ' min';
      }
      return [hours, 'h ', padToTwoDigits(minutes), ' min'].join('');
    }

    if (!hours) {
      if (!minutes) {
        return seconds + ' sec';
      }
      seconds = padToTwoDigits(seconds);
      minutes = padToTwoDigits(minutes);
      return minutes + ':' + seconds + ' min';
    }

    minutes = padToTwoDigits(minutes);
    seconds = padToTwoDigits(seconds);
    hours = padToTwoDigits(hours);

    return hours + ':' + minutes + ':' + seconds;
  },

  seconds_to_hhmm: function(sum) {
    return Math.floor(sum / secondsInAnHour) + ':' + padToTwoDigits('' + Math.floor(sum % secondsInAnHour /secondsInAMinute)) + ' h';
  },

  seconds_to_small_hhmm: function(sum) {
    return Math.floor(sum / secondsInAnHour) + ':' + padToTwoDigits('' + Math.floor(sum % secondsInAnHour /secondsInAMinute));
  },

  seconds_to_pretty_hhmm: function(sum) {
    return Math.floor(sum / secondsInAnHour) + ' h ' + padToTwoDigits('' + Math.floor(sum % secondsInAnHour /secondsInAMinute)) + ' min';
  },

  milliseconds_to_hhmmss: function(t, dont_display_seconds) {
    var aTime = Math.floor(t);

    aTime = parseInt(aTime, 10);
    if (isNaN(aTime)) {
      return '0 sec';
    }

    if (aTime < 0) {
      aTime += (new Date().getTime() / 1000);
    }

    var hours = Math.floor(aTime / secondsInAnHour),
      minutes = Math.floor((aTime % secondsInAnHour) / secondsInAMinute),
      seconds = Math.floor(aTime % secondsInAMinute);

    if (dont_display_seconds) {
      if (!hours) {
        return minutes + ' min';
      }
      return [hours, 'h ', padToTwoDigits(minutes), ' min'].join('');
    }

    if (!hours) {
      if (!minutes) {
        return seconds + ' sec';
      }
      seconds = padToTwoDigits(seconds);
      minutes = padToTwoDigits(minutes);
      return minutes + ':' + seconds + ' min';
    }

    minutes = padToTwoDigits(minutes);
    seconds = padToTwoDigits(seconds);
    hours = padToTwoDigits(hours);

    return hours + ':' + minutes + ':' + seconds;
  }
};


module.exports = TimeFormat;