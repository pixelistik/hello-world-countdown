'use strict';

var CurrentMonth= {
    props: ['day'],
    template: '<div class="info-box  current-month"> {{ month }}. Monat</div>',
    computed: {
        month: function () {
            return Math.ceil(this.day / 30);
        }
    }
};

module.exports = CurrentMonth;
