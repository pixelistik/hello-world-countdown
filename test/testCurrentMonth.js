'use strict';

var assert = require('chai').assert;
var Vue = require('vue');
var CurrentMonth = require('../js/CurrentMonth.js');

describe('Current Month component', function () {
    var Component = Vue.extend(CurrentMonth);

    it('should calculate the first month correctly', function () {
        var component = new Component({
            propsData: {day: 1}
        });
        assert.equal(component.month, 1);
    });

    it('should calculate the end of the first month correctly', function () {
        var component = new Component({
            propsData: {day: 30}
        });
        assert.equal(component.month, 1);
    });

    it('should calculate the second month correctly', function () {
        var component = new Component({
            propsData: {day: 31}
        });
        assert.equal(component.month, 2);
    });
});
