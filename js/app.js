"use strict";

var Vue = require("vue");
var WeeksPlusDays = require('./WeeksPlusDays.js');
var Percentage = require('./Percentage.js');

var Timer = require("./timer.js")();
var timer = new Timer();
var day = timer.currentDayFromProjectedDate(timer.extractDateFromUrl(window.location.hash), Date.now());

Vue.component("weeks-plus-days", WeeksPlusDays);
Vue.component("percentage", Percentage);

var app = new Vue({
    el: '#app',
    data: {
        day: day
    }
});
