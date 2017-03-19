"use strict";

var WeeksPlusDays= {
    props: ['day'],
    template: '<div class="info-box  weeks-days"> {{ weeks }}+{{ days }} </div>',
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
