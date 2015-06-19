'use strict';


var moment = require('moment');
var leftPad = require('./padding');

/**
Utility class to format timestamps(?)
**/
var TimeFormat = {
  sec_to_hhmmss_improved: function(t) {
    if (t === null) return '';
    var pad = leftPad;
    var m = moment.duration(t, 'seconds');
    var timeArr = [Math.floor(m.asHours()), Math.floor(m.minutes()), Math.floor(m.seconds())];
    var str = "<span class='duration'>";
    if (timeArr[0] > 0) str += "<strong>";
    str += timeArr[0];
    str += ":";
    if (timeArr[0] === 0 && timeArr[1] > 0) str += "<strong>";
    str += pad(timeArr[1], 2, '0');
    if (timeArr[0] >= 0 || timeArr[1] > 0) str += "</strong>";
    str += ":";
    str += pad(timeArr[2], 2, '0');
    str += "</span>";
    return str;
  },
  sec_to_decimal_hours: function(t) {
    return (t / 60 / 60).toFixed(2) + " h";
  },
  seconds_to_ext_hhmmss: function(t, type) {
    if (type === 'improved') {
      return TimeFormat.sec_to_hhmmss_improved(t);
    } else if (type === 'decimal') {
      return TimeFormat.sec_to_decimal_hours(t);
    } else {
      return TimeFormat.seconds_to_hhmmss(t);
    }
  },
  seconds_to_hhmmss: function(t, skip_seconds) {
    var aTime = ~~t,
      pad = leftPad;

    if (aTime < 0) {
      aTime += (new Date().getTime() / 1000);
    }

    var hours = Math.floor(aTime / 3600),
      minutes = Math.floor((aTime % 3600) / 60),
      seconds = Math.floor(aTime % 60);

    if (skip_seconds) {
      if (!hours) {
        return minutes + ' min';
      }
      return [hours, 'h ', pad(minutes, 2, '0'), ' min'].join('');
    }

    if (!hours) {
      if (!minutes) {
        return seconds + ' sec';
      }
      seconds = pad(seconds, 2, '0');
      minutes = pad(minutes, 2, '0');
      return minutes + ':' + seconds + ' min';
    }

    minutes = pad(minutes, 2, '0');
    seconds = pad(seconds, 2, '0');
    hours = pad(hours, 2, '0');

    return hours + ':' + minutes + ':' + seconds;
  },

  seconds_to_hhmm: function(sum) {
    return Math.floor(sum / 3600) + ':' + leftPad('' + Math.floor(sum % 3600 / 60), 2, '0') + ' h';
  },

  seconds_to_small_hhmm: function(sum) {
    return Math.floor(sum / 3600) + ':' + leftPad('' + Math.floor(sum % 3600 / 60), 2, '0');
  },

  seconds_to_pretty_hhmm: function(sum) {
    return Math.floor(sum / 3600) + ' h ' + leftPad('' + Math.floor(sum % 3600 / 60), 2, '0') + ' min';
  },

  milliseconds_to_hhmmss: function(t) {
    var aTime = t;

    aTime = parseInt(aTime, 10);
    if (isNaN(aTime)) {
      return '0 sec';
    }

    if (aTime < 0) {
      aTime += (new Date().getTime());
    }

    var hours = Math.floor(aTime / 3600000);
    var minutes = Math.floor((aTime % 3600000) / 60000);
    var seconds = Math.floor((aTime % 60000) / 1000);

    if (!hours) {
      if (!minutes) {
        return seconds + ' sec';
      }
      seconds = leftPad(seconds, 2, '0');
      minutes = leftPad(minutes, 2, '0');
      return minutes + ':' + seconds + ' min';
    }

    minutes = leftPad(minutes, 2, '0');
    seconds = leftPad(seconds, 2, '0');
    hours = leftPad(hours, 2, '0');

    return hours + ':' + minutes + ':' + seconds;
  }
};

module.exports = TimeFormat;