define([], function () {
    return function (s) {
        return '(...' + s.toLowerCase() + '...)';
    };
});
