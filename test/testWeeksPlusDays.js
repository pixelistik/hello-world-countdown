var assert = require("chai").assert;
var Vue = require("vue");
var WeeksPlusDays = require("../js/WeeksPlusDays.js");

describe("WeeksPlusDays component", function () {
    var Component = Vue.extend(WeeksPlusDays);

    it("should calculate 0 correctly", function () {
        var component = new Component({
            propsData: {day: 0}
        });
        assert.equal(component.weeks, 0);
        assert.equal(component.days, 0);
    });

    it("should calculate 7 correctly", function () {
        var component = new Component({
            propsData: {day: 7}
        });        assert.equal(component.weeks, 1);
        assert.equal(component.days, 0);
    });

    it("should calculate 8 correctly", function () {
        var component = new Component({
            propsData: {day: 8}
        });        assert.equal(component.weeks, 1);
        assert.equal(component.days, 1);
    });

    it("should calculate 13 correctly", function () {
        var component = new Component({
            propsData: {day: 13}
        });        assert.equal(component.weeks, 1);
        assert.equal(component.days, 6);
    });
});
