"use strict";

var TimerFactory = function () {
    var Timer = function () {
        this.extractDateFromUrl = function (url) {
            var dateRe = /date=(....-..-..)/;

            return dateRe.exec(url)[1];
        };

        this.daysUntilProjectedDate = function (projectedDate, now) {
            return Math.ceil((Date.parse(projectedDate) - now) / (1000 * 60 * 60 *24));
        };

        this.fromDays = function (days) {
            var time = {};

            time.weeks = Math.floor(days / 7);
            time.days = days % 7;

            return time;
        };

        this.format = function (time) {
            return time.weeks + "+" + time.days;
        };
    };

    return Timer;
};

module.exports = TimerFactory;
