'use strict';
var dataPoints = [
    {
        day: 7,
        size: 0,
    }, {
        day: 14,
        size: 0,
    }, {
        day: 21,
        size: 0,
    }, {
        day: 28,
        size: 0,
    }, {
        day: 35,
        size: 0.2,
    }, {
        day: 42,
        size: 0.4,
    }, {
        day: 49,
        size: 0.5,
    }, {
        day: 56,
        size: 1.5,
    }, {
        day: 63,
        size: 1.95,
    }, {
        day: 70,
        size: 2.5,
    }, {
        day: 77,
        size: 4,
    }, {
        day: 84,
        size: 5,
    }, {
        day: 91,
        size: 7.4,
    }, {
        day: 98,
        size: 8,
    }, {
        day: 105,
        size: 10,
    }, {
        day: 112,
        size: 11,
    }, {
        day: 119,
        size: 12.5,
    }, {
        day: 126,
        size: 13.5,
    }, {
        day: 133,
        size: 24,
    }, {
        day: 140,
        size: 25,
    }, {
        day: 147,
        size: 26,
    }, {
        day: 154,
        size: 27,
    }, {
        day: 161,
        size: 28.8,
    }, {
        day: 168,
        size: 31,
    }, {
        day: 175,
        size: 34,
    }, {
        day: 182,
        size: 35,
    }, {
        day: 189,
        size: 36.3,
    }, {
        day: 196,
        size: 37.5,
    }, {
        day: 203,
        size: 38,
    }, {
        day: 210,
        size: 40,
    }, {
        day: 217,
        size: 41,
    }, {
        day: 224,
        size: 42,
    }, {
        day: 231,
        size: 43,
    }, {
        day: 238,
        size: 44,
    }, {
        day: 245,
        size: 46,
    }, {
        day: 252,
        size: 47,
    }, {
        day: 259,
        size: 48,
    }, {
        day: 266,
        size: 49,
    }, {
        day: 273,
        size: 50,
    }, {
        day: 280,
        size: 51,
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
    template: '<div class="card col s12 m6"><div class="card-content size">{{ size }} cm</div></div>',
    computed: {
        size: function () {
            var daySeries = dataPoints.map(function (dataPoint) {
                return {
                    day: dataPoint.day,
                    value: dataPoint.size
                };
            });

            return interpolateValueFromDaySeries(daySeries, this.day).toFixed(1);
        }
    }
};

module.exports = SizeWeight;
