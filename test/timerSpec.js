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
        var now = Date.parse("2017-09-11T23:50:00");

        var result = timer.daysUntilProjectedDate(projectedDate, now);
        assert.equal(result, 1);
    });

});

describe("Split into weeks and days", function () {
    it("Should convert 0 correctly", function () {
        var result = timer.fromDays(0);

        assert.equal(result.weeks, 0);
        assert.equal(result.days, 0);
    });

    it("Should convert 1 week correctly", function () {
        var result = timer.fromDays(7);

        assert.equal(result.weeks, 1);
        assert.equal(result.days, 0);
    });

    it("Should convert value correctly", function () {
        var result = timer.fromDays(8);

        assert.equal(result.weeks, 1);
        assert.equal(result.days, 1);
    });

    it("Should convert value correctly, flooring weeks", function () {
        var result = timer.fromDays(13);

        assert.equal(result.weeks, 1);
        assert.equal(result.days, 6);
    });
});

describe("Formatting", function () {
    it("should format 0 correctly", function () {
        var time = {
            weeks: 0,
            days: 0
        };

        assert.equal(timer.format(time), "0+0");
    });

    it("should format full week correctly", function () {
        var time = {
            weeks: 1,
            days: 0
        };

        assert.equal(timer.format(time), "1+0");
    });

    it("should format non integer week correctly", function () {
        var time = {
            weeks: 12,
            days: 4
        };

        assert.equal(timer.format(time), "12+4");
    });
});
