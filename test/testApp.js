'use strict';

var assert = require('chai').assert;
var Vue = require('vue');
var appFactory = require('../js/App.js');
var Component = Vue.extend(appFactory(100, ''));

describe('App', function () {
    var component;

    beforeEach(function () {
        component = new Component();
    });

    it('should toggle visibility of settings', function () {
        assert.equal(component.displaySettings, false);
        component.toggleSettings();
        assert.equal(component.displaySettings, true);
    });
});
