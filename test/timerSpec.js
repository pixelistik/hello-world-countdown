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

describe("Remaining days from date", function () {
    it("should calculate the days", function () {
        var projectedDate = "2017-09-12";
        var now = Date.parse("2017-09-01T14:48:00");

        var result = timer.daysUntilProjectedDate(projectedDate, now);
        assert.equal(result, 11);
    });

    it("should ceil the days, so that tomorrow always means 1 day left", function () {
        var projectedDate = "2017-09-12";
        var now = new Date(2017, 9-1, 11, 23, 50, 0);

        var result = timer.daysUntilProjectedDate(projectedDate, now);
        assert.equal(result, 1);
    });

});
