'use strict';

var CurrentMonth= {
    props: ['day'],
    template: '<div class="card"><div class="card-content current-month">{{ month }}. Monat</div></div>',
    computed: {
        month: function () {
            return Math.ceil(this.day / 30);
        }
    }
};

module.exports = CurrentMonth;
