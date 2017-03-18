"use strict";

var assert = require("chai").assert;
var Timer = require("../js/timer.js")();
var timer;

beforeEach(function () {
    timer = new Timer();
});

describe("Extract date string from URL", function () {
    it("should extract the date from a clean hash", function () {
        var hash = "#date=2017-05-03";

        var result = timer.extractDateFromUrl(hash);
        assert.equal(result, "2017-05-03");
    });

    it("should extract the date mixed with other params", function () {
        var hash = "#foo=bar&date=2017-10-07&bar=foo";

        var result = timer.extractDateFromUrl(hash);
        assert.equal(result, "2017-10-07");
    });
});

describe("Current day from date", function () {
    it("should calculate the day correctly, if tomorrow is the projected date", function () {
        var projectedDate = "2017-09-12";
        var now = new Date(2017, 9-1, 11, 14, 48, 0);

        var result = timer.currentDayFromProjectedDate(projectedDate, now);
        assert.equal(result, 279);
    });

    it("should calculate the day correctly, if the projected date is 12 days away", function () {
        var projectedDate = "2017-09-12";
        var now = new Date(2017, 9-1, 1, 23, 30, 0);

        var result = timer.currentDayFromProjectedDate(projectedDate, now);
        assert.equal(result, 269);
    });


});
