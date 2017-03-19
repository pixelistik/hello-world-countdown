var assert = require("chai").assert;
var Vue = require("vue");
var Percentage = require("../js/Percentage.js");

describe("Percentage component", function () {
    var Component = Vue.extend(Percentage);

    it("should calculate 0% correctly", function () {
        var component = new Component({
            propsData: {day: 0}
        });
        assert.equal(component.percent, 0);
    });

    it("should calculate 100% correctly", function () {
        var component = new Component({
            propsData: {day: 280}
        });
        assert.equal(component.percent, 100);
    });
});
