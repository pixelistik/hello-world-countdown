"use strict";

var Vue = require("vue");
var WeeksPlusDays = require('./WeeksPlusDays.js');
// var Timer = require("./timer.js")();

Vue.component("weeks-plus-days", WeeksPlusDays);

var app = new Vue({
    el: '#app',
    data: {
        day: 30
    }
});
