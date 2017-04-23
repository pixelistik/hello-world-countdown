'use strict';

var AppFactory = function (day, visibleMetrics) {
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
                this.touchTimer = setTimeout(this.longTouch, 500);
            },
            touchEnd: function () {
                if (this.touchTimer) {
                    clearTimeout(this.touchTimer);
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
        }
    };

    return App;
};

module.exports = AppFactory;
