'use strict';

var AppFactory = function (window, document, day, visibleMetrics) {
    var App = {
        data: function () {
            return {
                day: day,
                displaySettings: false,
                visibleMetrics: visibleMetrics,
                touchTimer: false,
            };
        },
        methods: {
            toggleSettings: function () {
                this.displaySettings = !this.displaySettings;
            },
            touchStart: function () {
                this.touchTimer = window.setTimeout(this.longTouch, 500);
            },
            touchEnd: function () {
                if (this.touchTimer) {
                    window.clearTimeout(this.touchTimer);
                }
            },
            longTouch: function () {
                this.toggleSettings();
            }
        },
        watch: {
            visibleMetrics: function (newValue) {
                if (localStorage) {
                    localStorage.setItem('visibleMetrics', JSON.stringify(newValue));
                }
            }
        },
        mounted: function () {
            if ('serviceWorker' in window.navigator) {
                window.navigator.serviceWorker.register('/sw.js');
            }
        }
    };

    return App;
};

module.exports = AppFactory;
