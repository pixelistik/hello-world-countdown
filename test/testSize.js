'use strict';

var assert = require('chai').assert;
var Vue = require('vue');
var Size = require('../js/Size.js');

describe('Size component', function () {
    var Component = Vue.extend(Size);

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
