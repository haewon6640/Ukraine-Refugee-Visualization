let mapRoot = null;
var mapHeat = null;
const loadChart = () => {
    am5.ready(function () {
        // Create root
        var root = am5.Root.new("chartdiv");

        // Set themes
        mapRoot = root;
        root.setThemes([am5themes_Animated.new(root)]);

        // Create chart
        var chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "translateX",
                panY: "translateY",
                layout: root.horizontalLayout,
            })
        );

        // Create polygon series
        var polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_region_world_europeHigh,
                valueField: "value",
                calculateAggregates: true,
            })
        );
        polygonSeries.mapPolygons.template.setAll({
            tooltipText:
                "{name} \n Total Refugees: {value} \n Percent Refugees: {percent}",
        });
        polygonSeries.set("heatRules", [
            {
                target: polygonSeries.mapPolygons.template,
                dataField: "value",
                min: am5.color(0xff621f),
                max: am5.color(0x661f00),
                key: "fill",
            },
        ]);

        polygonSeries.mapPolygons.template.events.on(
            "pointerover",
            function (ev) {
                if (!Boolean(ev.target.dataItem.get("value"))) {
                    ev.target._settings.tooltipText = ""
                }
                heatLegend.showValue(ev.target.dataItem.get("value"));
            }
        );

        polygonSeries.data.setAll(data);

        var heatLegend = chart.children.push(
            am5.HeatLegend.new(root, {
                orientation: "vertical",
                startColor: am5.color(0xff621f),
                endColor: am5.color(0x661f00),
                startText: "Lowest",
                endText: "Highest",
                stepCount: 5,
            })
        );

        heatLegend.startLabel.setAll({
            fontSize: 12,
            fill: heatLegend.get("startColor"),
        });

        heatLegend.endLabel.setAll({
            fontSize: 12,
            fill: heatLegend.get("endColor"),
        });

        // change this to template when possible
        polygonSeries.events.on("datavalidated", function () {
            heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
            heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
        });
        mapHeat = heatLegend;
    }); // end am5.ready()
};

import { refugee_per_week as rpw, refugee_percentage as rp, total_refugee_count as tc } from "./data";
var total = document.getElementById('total-count');
var slider = document.getElementById("myRange");
var date = document.getElementById("date");
var dates = [
    "3/1/2022 - 3/7/2022",
    "3/8/2022 - 3/14/2022",
    "3/15/2022 - 3/21/2022",
    "3/22/2022 - 3/28/2022",
    "3/29/2022 - 4/4/2022",
    "4/5/2022 - 4/11/2022",
    "4/12/2022 - 4/18/2022",
    "4/19/2022 - 4/25/2022",
    "4/26/2022 - 5/2/2022",
    "5/3/2022 - 5/9/2022",
    "5/10/2022 - 5/16/2022",
    "5/24/2022 - 5/30/2022",
];

date.innerHTML = dates[slider.value];
total.innerHTML = `Total Number of Migrant Refugees: ${tc[slider.value].toLocaleString("en-US")}`;
let country_names = Object.keys(rpw[0]);
var data = [];
for (var i = 0; i < country_names.length; i++) {
    // console.log(rpw[0])
    // console.log({id: country_names[i], value: rpw[0][country_names[i]], percent: rp[0][country_names[i]]})
    data.push({
        id: country_names[i],
        value: rpw[0][country_names[i]],
        percent: `${(Math.round(rp[0][country_names[i]] * 10000) / 100).toFixed(
            2
        )}%`
    });
}
loadChart(data);

// Based on Slider
slider.oninput = function () {
    date.innerHTML = dates[this.value];
    total.innerHTML = `Total Number of Migrant Refugees: ${tc[slider.value].toLocaleString("en-US")}`;
    let country_names = Object.keys(rpw[this.value]);
    var data = [];
    for (var i = 0; i < country_names.length; i++) {
        // console.log(rpw[0])
        // console.log({id: country_names[i], value: rpw[0][country_names[i]], percent: rp[0][country_names[i]]})
        data.push({
            id: country_names[i],
            value: rpw[this.value][country_names[i]],
            percent: `${(Math.round(rp[this.value][country_names[i]] * 10000) / 100).toFixed(
                2
            )}%`,
        });
    }
    let root = mapRoot;
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    root.container.children.pop();
    var chart = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "translateX",
            panY: "translateY",
            layout: root.horizontalLayout,
        })
    );

    // Create polygon series
    // console.log(am5geodata_region_world_europeHigh)
    var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_region_world_europeHigh,
            valueField: "value",
            calculateAggregates: true,
        })
    );

    polygonSeries.mapPolygons.template.setAll({
        tooltipText:
            "{name} \n Total Refugees: {value} \n Percent Refugees: {percent}",
    });

    polygonSeries.set("heatRules", [
        {
            target: polygonSeries.mapPolygons.template,
            dataField: "value",
            min: am5.color(0xff621f),
            max: am5.color(0x661f00),
            key: "fill",
        },
    ]);

    polygonSeries.mapPolygons.template.events.on("pointerover", function (ev) {
        mapHeat.hideTooltip();
        mapHeat = heatLegend;
        heatLegend.showValue(ev.target.dataItem.get("value"));
    });
    polygonSeries.data.setAll(data);
    var heatLegend = chart.children.push(
        am5.HeatLegend.new(root, {
            orientation: "vertical",
            startColor: am5.color(0xff621f),
            endColor: am5.color(0x661f00),
            startText: "Lowest",
            endText: "Highest",
            stepCount: 5,
        })
    );

    heatLegend.startLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("startColor"),
    });

    heatLegend.endLabel.setAll({
        fontSize: 12,
        fill: heatLegend.get("endColor"),
    });

    // change this to template when possible
    polygonSeries.events.on("datavalidated", function () {
        heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
        heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
    });
};
