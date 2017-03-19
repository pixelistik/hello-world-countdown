'use strict';

var Percentage= {
    props: ['day'],
    template: '<div class="info-box  percentage"> {{ percent }}% </div>',
    computed: {
        percent: function () {
            return Math.round((this.day / 280) * 100);
        }
    }
};

module.exports = Percentage;
