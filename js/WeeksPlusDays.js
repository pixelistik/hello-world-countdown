'use strict';

var WeeksPlusDays= {
    props: ['day'],
    template: '<div class="card"><div class="card-content weeks-plus-days">{{ weeks }}+{{ days }}</div></div>',
    computed: {
        weeks: function () {
            return Math.floor(this.day / 7);
        },
        days: function () {
            return this.day % 7;
        }
    }
};

module.exports = WeeksPlusDays;
