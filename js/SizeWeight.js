'use strict';
var dataPoints = [
    {
        day: 7,
        size: 0,
        weight: 0
    }, {
        day: 14,
        size: 0,
        weight: 0
    }, {
        day: 21,
        size: 0,
        weight: 0
    }, {
        day: 28,
        size: 0,
        weight: 0
    }, {
        day: 35,
        size: 0.2,
        weight: 0
    }, {
        day: 42,
        size: 0.4,
        weight: 0
    }, {
        day: 49,
        size: 0.5,
        weight: 0
    }, {
        day: 56,
        size: 1.5,
        weight: 0
    }, {
        day: 63,
        size: 1.95,
        weight: 0
    }, {
        day: 70,
        size: 2.5,
        weight: 3
    }, {
        day: 77,
        size: 4,
        weight: 8
    }, {
        day: 84,
        size: 5,
        weight: 16
    }, {
        day: 91,
        size: 7.4,
        weight: 23
    }, {
        day: 98,
        size: 8,
        weight: 40
    }, {
        day: 105,
        size: 10,
        weight: 70
    }, {
        day: 112,
        size: 11,
        weight: 100
    }, {
        day: 119,
        size: 12.5,
        weight: 140
    }, {
        day: 126,
        size: 13.5,
        weight: 175
    }, {
        day: 133,
        size: 24,
        weight: 200
    }, {
        day: 140,
        size: 25,
        weight: 300
    }, {
        day: 147,
        size: 26,
        weight: 335
    }, {
        day: 154,
        size: 27,
        weight: 400
    }, {
        day: 161,
        size: 28.8,
        weight: 490
    }, {
        day: 168,
        size: 31,
        weight: 550
    }, {
        day: 175,
        size: 34,
        weight: 650
    }, {
        day: 182,
        size: 35,
        weight: 750
    }, {
        day: 189,
        size: 36.3,
        weight: 900
    }, {
        day: 196,
        size: 37.5,
        weight: 1000
    }, {
        day: 203,
        size: 38,
        weight: 1150
    }, {
        day: 210,
        size: 40,
        weight: 1350
    }, {
        day: 217,
        size: 41,
        weight: 1500
    }, {
        day: 224,
        size: 42,
        weight: 1700
    }, {
        day: 231,
        size: 43,
        weight: 1900
    }, {
        day: 238,
        size: 44,
        weight: 2100
    }, {
        day: 245,
        size: 46,
        weight: 2400
    }, {
        day: 252,
        size: 47,
        weight: 2600
    }, {
        day: 259,
        size: 48,
        weight: 2950
    }, {
        day: 266,
        size: 49,
        weight: 3100
    }, {
        day: 273,
        size: 50,
        weight: 3250
    }, {
        day: 280,
        size: 51,
        weight: 3400
    }];

var SizeWeight = {
    props: ['day'],
    template: '<div class="info-box  size-weight"> {{ size }} cm</div>',
    computed: {
        size: function () {
            var lowerDataPoints = dataPoints.filter(function (dataPoint) {
                return dataPoint.day <= this.day;
            }.bind(this));

            var previousDataPoint = lowerDataPoints[lowerDataPoints.length - 1] || {day: 0, size: 0, weight: 0};
            var nextDataPoint = dataPoints[lowerDataPoints.length] || {size: 0, weight: 0};

            var growthPerDay = (nextDataPoint.size - previousDataPoint.size) / (nextDataPoint.day - previousDataPoint.day);

            var daysAfterPreviousDataPoint = this.day - previousDataPoint.day;

            return Math.round((previousDataPoint.size + growthPerDay * daysAfterPreviousDataPoint) * 10) / 10;
        }
    }
};

module.exports = SizeWeight;
