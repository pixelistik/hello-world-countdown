'use strict';

var Vue = require('vue');
var WeeksPlusDays = require('./WeeksPlusDays.js');
var Percentage = require('./Percentage.js');
var CurrentMonth = require('./CurrentMonth.js');
var Size = require('./Size.js');
var Weight = require('./Weight.js');

var Timer = require('./timer.js')();
var timer = new Timer();
var day = timer.currentDayFromProjectedDate(timer.extractDateFromUrl(window.location.hash), Date.now());

Vue.component('weeks-plus-days', WeeksPlusDays);
Vue.component('percentage', Percentage);
Vue.component('current-month', CurrentMonth);
Vue.component('size', Size);
Vue.component('weight', Weight);

var visibleMetrics = JSON.parse(localStorage.getItem('visibleMetrics')) || [
    'CurrentMonth',
    'WeeksPlusDays',
    'Percentage',
    'Size',
    'Weight'
];

var app = new Vue({
    el: '#app',
    data: {
        day: day,
        displaySettings: false,
        visibleMetrics: visibleMetrics
    },
    methods: {
        toggleSettings: function () {
            this.displaySettings = !this.displaySettings;
        }
    },
    watch: {
        visibleMetrics: function (newValue) {
            if (localStorage) {
                localStorage.setItem('visibleMetrics', JSON.stringify(newValue));
            }
        }
    }
});

// require('./node_modules/materialize-css/dist/js/materialize.js');
// require('materialize-css');
