'use strict';

var assert = require('chai').assert;
var Vue = require('vue');
var SizeWeight = require('../js/SizeWeight.js');

describe('Size and Weight component', function () {
    var Component = Vue.extend(SizeWeight);

    describe('Size', function () {
        it('should show day 1 as 0', function () {
            var component = new Component({
                propsData: {day: 0}
            });
            assert.equal(component.size, 0);
        });

        it('should show day 70 as 2.5, without interpolation', function () {
            var component = new Component({
                propsData: {day: 70}
            });
            assert.equal(component.size, 2.5);
        });

        it('should show day 203 as 38, without interpolation', function () {
            var component = new Component({
                propsData: {day: 203}
            });
            assert.equal(component.size, 38);
        });

        it('should show day 204 as 38.3, with interpolation', function () {
            var component = new Component({
                propsData: {day: 204}
            });
            assert.equal(component.size, 38.3);
        });

        it('should show day 205 as 38.6, with interpolation', function () {
            var component = new Component({
                propsData: {day: 205}
            });
            assert.equal(component.size, 38.6);
        });
    });

    describe("Weight component", function () {
        it("should show day 1 as 0", function () {
            var component = new Component({
                propsData: {day: 0}
            });
            assert.equal(component.weight, 0);
        });

        it('should show day 70 as 3, without interpolation', function () {
            var component = new Component({
                propsData: {day: 70}
            });
            assert.equal(component.weight, 3);
        });

        it('should show day 204 as 1179, with interpolation', function () {
            var component = new Component({
                propsData: {day: 204}
            });
            assert.equal(component.weight, 1179);
        });
    });
});
