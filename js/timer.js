"use strict";

var TimerFactory = function () {
    var Timer = function () {
        this.extractDateFromUrl = function (url) {
            var dateRe = /date=(....-..-..)/;

            return dateRe.exec(url)[1];
        };

        var parseDate = function (dateString) {
            // http://stackoverflow.com/a/33909265/376138
            var b = dateString.split(/\D/);
            return new Date(b[0], b[1]-1, b[2], 0, 0, 0);
        };

        this.currentDayFromProjectedDate = function (projectedDateRaw, now) {
            var projectedDate = parseDate(projectedDateRaw);
            var startDate = projectedDate - (1000 * 60 * 60 * 24 * 280);
            return Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
        };
    };

    return Timer;
};

module.exports = TimerFactory;
