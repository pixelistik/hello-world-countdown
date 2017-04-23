'use strict';

var assert = require('chai').assert;
var sinon = require('sinon');
var Vue = require('vue');
var appFactory = require('../js/App.js');

var windowStub = {
    setTimeout: function (handler) {
        // Call immediately
        handler();
    }
};
var documentStub = {};

var Component = Vue.extend(appFactory(windowStub, documentStub, 100, ''));

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

    it('should toggle visibility on long tap', function () {
        sinon.spy(component, 'toggleSettings');

        component.touchStart();
        assert(component.toggleSettings.calledOnce);
    });
});
