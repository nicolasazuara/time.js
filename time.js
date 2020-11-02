const Time = {
    format: function (ms = null) {
        if(typeof ms !== 'number') ms = 0;
        if(ms >= 86400000) ms = 86399000;
        let pad = function (n) {
                if(n === 0) return '00';
                return (n < 10 ? '0' : '') + n;
            },
            h = Math.floor(ms / 3600000),
            m = Math.floor(ms / 1000 % 3600 / 60),
            s = Math.floor(ms / 1000 % 60);
        ms = Math.floor(ms % 1000);
        return [pad(h), pad(m), pad(s)].join(':') + (ms > 0 ? (ms / 1000).toString().substring(1) : '');
    },
    parse: function (hms = null) {
        if(! /^([0-1][0-9]|[2][0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]{1,3})?$/.test(hms)) hms = '00:00:00';
        arr = hms.split(':');
        return (((parseInt(arr[0]) * 3600) + (parseInt(arr[1]) * 60)) * 1000) + parseInt(parseFloat(arr[2] * 1000));
    },
}