'use strict';

var assert = require('chai').assert;
var Vue = require('vue');
var Weight = require('../js/Weight.js');

describe('Weight component', function () {
    var Component = Vue.extend(Weight);

    it('should show day 1 as 0', function () {
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
