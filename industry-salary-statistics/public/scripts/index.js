$(function () {
    $.getJSON('./data.json', function (data) {
        var keys = Object.getOwnPropertyNames(data[0]);
        var industry_12 = [];
        for (var i = 0; i < data.length; ++i) {
            if (data[i][keys[0]].indexOf('M') == -1) {
                industry_12.push(parseInt(data[i][keys[12]]));
            }
        }

        var config = {
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 1980
                }
            },
            series: [{
                name: '資訊業',
                data: industry_12
            }]
        };
        Highcharts.chart('container', config);
    })
})
