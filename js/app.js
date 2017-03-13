"use strict";

var Vue = require("vue");
var Timer = require("./timer.js")();

var app = new Vue({
    el: "#app",
    data: new Timer(),
    computed: {
        weekDay: function () {
            var projectedDateParam = this.extractDateFromUrl(window.location.hash);
            return this.fromDays(280 - this.daysUntilProjectedDate(projectedDateParam, Date.now()));
        }
    }
});
