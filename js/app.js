'use strict';

var Vue = require('vue');
var WeeksPlusDays = require('./WeeksPlusDays.js');
var Percentage = require('./Percentage.js');
var CurrentMonth = require('./CurrentMonth.js');
var SizeWeight = require('./SizeWeight.js');

var Timer = require('./timer.js')();
var timer = new Timer();
var day = timer.currentDayFromProjectedDate(timer.extractDateFromUrl(window.location.hash), Date.now());

Vue.component('weeks-plus-days', WeeksPlusDays);
Vue.component('percentage', Percentage);
Vue.component('current-month', CurrentMonth);
Vue.component('size-weight', SizeWeight);

var app = new Vue({
    el: '#app',
    data: {
        day: day,
        visibleMetrics: [
            'CurrentMonth',
            'WeeksPlusDays',
            'Percentage',
            'SizeWeight'
        ]
    },
    computed: {
        componentCount: function () {
            return this.$el.children.length;
        }
    }
});
