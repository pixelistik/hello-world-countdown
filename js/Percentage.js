'use strict';

var Percentage= {
    props: ['day'],
    template: '<div class="card col s12 m6"><div class="card-content percentage">{{ percent }}%</div></div>',
    computed: {
        percent: function () {
            return Math.round((this.day / 280) * 100);
        }
    }
};

module.exports = Percentage;
