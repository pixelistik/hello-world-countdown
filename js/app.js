"use strict";

var Vue = require("vue");
var Timer = require("./timer.js")();

Vue.component("weeks-plus-days", {
    template: '<div class="weeks-days"> {{ weekDay.weeks }}+{{ weekDay.days }} </div>',
    data: function () {
        return new Timer();
    },
    computed: {
        weekDay: function () {
            var projectedDateParam = this.extractDateFromUrl(window.location.hash);
            return this.fromDays(280 - this.daysUntilProjectedDate(projectedDateParam, Date.now()));
        }
    }
});

var app = new Vue({
    el: '#app'
});
