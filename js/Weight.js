'use strict';
var dataPoints = [
    {
        day: 7,
        weight: 0
    }, {
        day: 14,
        weight: 0
    }, {
        day: 21,
        weight: 0
    }, {
        day: 28,
        weight: 0
    }, {
        day: 35,
        weight: 0
    }, {
        day: 42,
        weight: 0
    }, {
        day: 49,
        weight: 0
    }, {
        day: 56,
        weight: 0
    }, {
        day: 63,
        weight: 0
    }, {
        day: 70,
        weight: 3
    }, {
        day: 77,
        weight: 8
    }, {
        day: 84,
        weight: 16
    }, {
        day: 91,
        weight: 23
    }, {
        day: 98,
        weight: 40
    }, {
        day: 105,
        weight: 70
    }, {
        day: 112,
        weight: 100
    }, {
        day: 119,
        weight: 140
    }, {
        day: 126,
        weight: 175
    }, {
        day: 133,
        weight: 200
    }, {
        day: 140,
        weight: 300
    }, {
        day: 147,
        weight: 335
    }, {
        day: 154,
        weight: 400
    }, {
        day: 161,
        weight: 490
    }, {
        day: 168,
        weight: 550
    }, {
        day: 175,
        weight: 650
    }, {
        day: 182,
        weight: 750
    }, {
        day: 189,
        weight: 900
    }, {
        day: 196,
        weight: 1000
    }, {
        day: 203,
        weight: 1150
    }, {
        day: 210,
        weight: 1350
    }, {
        day: 217,
        weight: 1500
    }, {
        day: 224,
        weight: 1700
    }, {
        day: 231,
        weight: 1900
    }, {
        day: 238,
        weight: 2100
    }, {
        day: 245,
        weight: 2400
    }, {
        day: 252,
        weight: 2600
    }, {
        day: 259,
        weight: 2950
    }, {
        day: 266,
        weight: 3100
    }, {
        day: 273,
        weight: 3250
    }, {
        day: 280,
        weight: 3400
    }];

var interpolateValueFromDaySeries = function (normalizedDataPoints, day) {
    var lowerDataPoints = normalizedDataPoints.filter(function (dataPoint) {
        return dataPoint.day <= day;
    });

    var previousDataPoint = lowerDataPoints[lowerDataPoints.length - 1] || {day: 0, value: 0};
    var nextDataPoint = normalizedDataPoints[lowerDataPoints.length] || {value: 0};

    var growthPerDay = (nextDataPoint.value - previousDataPoint.value) / (nextDataPoint.day - previousDataPoint.day);

    var daysAfterPreviousDataPoint = day - previousDataPoint.day;

    return previousDataPoint.value + growthPerDay * daysAfterPreviousDataPoint;
};

var SizeWeight = {
    props: ['day'],
    template: '<div class="card col s12 m6"><div class="card-content weight">{{ weight }} g</div></div>',
    computed: {
        weight: function () {
            var daySeries = dataPoints.map(function (dataPoint) {
                return {
                    day: dataPoint.day,
                    value: dataPoint.weight
                };
            });

            return interpolateValueFromDaySeries(daySeries, this.day).toFixed(0);
        }
    }
};

module.exports = SizeWeight;
