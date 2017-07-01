'use strict';

var vuePath = function () {
    if (process.env.NODE_ENV === 'production') {
        return 'vue/dist/vue.min.js';
    }
    return 'vue/dist/vue.js';
};

module.exports = {
    resolve: {
        alias: {
            vue: vuePath()
        }
    }
};
