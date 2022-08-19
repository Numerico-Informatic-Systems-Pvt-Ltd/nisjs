// Can Work on the js version <=2 need to check before read


function MultiStackWiseBarGraph(graphData) {
    var data = graphData;
    console.log(data);
    Highcharts.chart(data.container, {
        chart: {
            type: 'column',
            //                options3d: {
            //                    enabled: true,
            //                    alpha: 15,
            //                    beta: 15,
            //                    viewDistance: 25,
            //                    depth: 40
            //                }
            height: "65%"
        },

        title: {
            text: data.title
        },
        subtitle: {
            text: data.subtitle
        },

        xAxis: {
            categories: data.xAxis.cateogry,
            labels: {
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: '', //data.yaxistitle,
                skew3d: true
            }
        },

        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} '
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40,
                dataLabels: {
                    enabled: true
                }
            },

        },
        series: data.series
    });
}

function JurisdictionInMap(graphData) {
    var data = graphData;
    console.log(data);
    var lat = 22.2679298;
    var lang = 87.8961752;
    if (data.series.length > 0) {
        lat = lang = 0;
        for (i = 0; i < data.series.length; i++) {
            lat += data.series[i][1];
            lang += data.series[i][2];

        }
        lat = (lat / data.series.length).toFixed(8);
        lang = (lang / data.series.length).toFixed(8);
    }

    var mapOpts = {
        zoom: 10,
        center: new google.maps.LatLng(lat, lang),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $('#' + data.container).height(600);
    var map = new google.maps.Map(document.getElementById(data.container), mapOpts);
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < data.series.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(data.series[i][1], data.series[i][2]),
            icon: data.series[i][3],
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(data.series[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

function JurisdictionInSvgMap(graphData) {
    var data = graphData;
    console.log(data);
    var lat = 22.2679298;
    var lang = 87.8961752;
    $('#' + data.container).html(data.container_html);

    var array = [];
    for (i = 0; i < data.series.length; i++) {
        array[data.series[i][4]] = data.series[i][0];
        $('#' + data.series[i][4] + ' a').css('fill', data.series[i][3]);
    }
    var paths = document.querySelectorAll("#" + data.container + " g path");
    for (var p in paths) {
        let bgPath = paths[p];
        if (typeof bgPath.parentNode !== "undefined") {
            let labelText = array[bgPath.parentNode.parentNode.id];
            addLabelText(bgPath, labelText);
        }
    }
}

function addLabelText(bgPath, labelText) {
    let bbox = bgPath.getBBox();
    let x = bbox.x + bbox.width / 2;
    let y = bbox.y + bbox.height / 2;

    // Create a <text> element
    let textElem = document.createElementNS(bgPath.namespaceURI, "text");
    textElem.setAttribute("x", x);
    textElem.setAttribute("y", y);
    // Centre text horizontally at x,y
    textElem.setAttribute("text-anchor", "middle");
    // Give it a class that will determine the text size, colour, etc
    textElem.classList.add("label-text");
    textElem.classList.add("small");
    // Set the text
    textElem.textContent = labelText;
    // Add this text element directly after the label background path
    bgPath.after(textElem);
}

function JurisdictionWiseLineLabelGraph(graphData) {
    var data = graphData;
    console.log(data);
    Highcharts.chart(data.container, {
        chart: {
            type: 'line'
        },
        title: {
            text: data.title
        },
        subtitle: {
            text: data.subtitle
        },
        xAxis: {
            categories: data.xAxis.cateogry
        },
        yAxis: {
            title: {
                text: data.yAxis.title
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: data.series
    });

}


function JurisdictionWiseBarGraph(graphData) {
    var data = graphData;
    console.log(data);
    Highcharts.chart(data.container, {
        chart: {
            type: 'column',
            //                options3d: {
            //                    enabled: true,
            //                    alpha: 15,
            //                    beta: 15,
            //                    viewDistance: 25,
            //                    depth: 40
            //                }
            height: "40%"
        },

        title: {
            text: data.title
        },
        subtitle: {
            text: data.subtitle
        },

        xAxis: {
            categories: data.xAxis.cateogry,
            labels: {
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: '', //data.yaxistitle,
                skew3d: true
            }
        },

        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} '
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40,
                dataLabels: {
                    enabled: true
                }
            },

        },
        series: data.series
    });
}

function JurisdictionWiseMultiStackBarGraph(graphData) {
    var data = graphData;
    console.log(data);
    Highcharts.chart(data.container, {
        chart: {
            type: 'column',
            //                options3d: {
            //                    enabled: true,
            //                    alpha: 15,
            //                    beta: 15,
            //                    viewDistance: 25,
            //                    depth: 40
            //                }
            height: "40%"
        },

        title: {
            text: data.title
        },
        subtitle: {
            text: data.subtitle
        },

        xAxis: {
            categories: data.xAxis.cateogry,
            labels: {
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: '', //data.yaxistitle,
                skew3d: true
            }
        },

        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} '
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40,
                dataLabels: {
                    enabled: true
                }
            },

        },
        series: data.series
    });
}

function BarGraph(graphData) {
    var data = graphData;
    console.log(data);
    Highcharts.chart(data.container, {
        chart: {
            type: 'bar'
        },
        title: {
            text: data.title
        },
        subtitle: {
            text: data.source
        },
        xAxis: {
            categories: data.xAxis.cateogry,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },
                events: {
                    click: function (e) {
                        location.href = data.redirectUrl + '?' + e.point.series.userOptions.cond;
                        //   this.options.key;
                        //  console.log(e.point.series.userOptions.cond);
                        //   alert(e.point.y);
                    }
                }
            },
            series: {
                cursor: 'pointer',
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },

        series: data.series
    });

}

function PieGraph(graphData) {
    var data = graphData;
    console.log(data);
    Highcharts.chart(data.container, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: data.title
        },
        subtitle: {
            text: data.subtitle
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        plotOptions: {

            pie: {

                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y} '
                },
                events: {
                    click: function (e) {
                        location.href = data.redirectUrl + '?' + e.point.options.cond;
                        //   this.options.key;
                        console.log(e.point);
                    }
                },
                colors: ((data.colors.length === 0) ? Highcharts.getOptions().colors : data.colors)
            }
        },

        series: [{
                name: 'Total',
                colorByPoint: true,
                data: data.series
            }]
    });
}

function CylinderGraph(graphData) {
    var data = graphData;
    console.log(data);
    Highcharts.chart(data.container, {
        chart: {
            type: 'cylinder',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: data.title
        },
        plotOptions: {
            series: {
                depth: 25,
                colorByPoint: true,
                point: {
                    events: {
                        click: function (e) {
                            location.href = data.redirectUrl + '?' + e.point.options.cond;
                            //   this.options.key;
                            console.log(e.point.series.name);
                            //   alert(e.point.            y);
                        }
                    },
                }
            },

        },

        series: data.series

    });
}

function pyramidThreedGraph(graphData) {
    var data = graphData;
    console.log(data);
    Highcharts.chart(data.container, {
        chart: {
            type: 'pyramid3d',
            options3d: {
                enabled: true,
                alpha: 10,
                depth: 50,
                viewDistance: 50
            }
        },
        title: {
            text: data.title
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    allowOverlap: false,
                    x: 10,
                    y: -5
                },
                width: '60%',
                height: '80%',
                center: ['50%', '45%'],
                events: {
                    click: function (e) {
                        location.href = data.redirectUrl + '?' + data.cond[e.point.name];
                        //   this.options.key;
                        console.log(e.point);
                        //   alert(e.point.y);
                    }
                },
            }
        },
        series: [{
                name: 'Total',
                data: data.series
            }]
    });
}

function MultiColumnBarGraph(graphData) {
    var data = graphData;
    console.log(data);
    Highcharts.chart(data.container, {
        chart: {
            type: 'column',
            //                options3d: {
            //                    enabled: true,
            //                    alpha: 15,
            //                    beta: 15,
            //                    viewDistance: 25,
            //                    depth: 40
            //                }
        },

        title: {
            text: data.title
        },

        xAxis: {
            categories: data.xAxis.cateogry,
            labels: {
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: '', //data.yaxistitle,
                skew3d: true
            }
        },

        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} '
        },

        plotOptions: {
            column: {

                //Setting to represent In same Line
                //                    stacking: 'normal',
                //                    depth: 40

                //Setting to represent In differ Line
                pointPadding: 0.1,
                borderWidth: 0
            },
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function (e) {
                            location.href = data.redirectUrl + '?' + data.cond[this.category][e.point.series.name];

                            //  console.log(data.cond[this.category][e.point.series.name]); //category
                            //  console.log(e.point.series.name);
                            // alert('Category: ' + this.category + ', value: ' + this.y);
                        }
                    }
                }
            }
        },
        series: data.series
    });
}

function UserWiseBarGraph(graphData) {
    var data = graphData;
    console.log(data);
    Highcharts.chart(data.container, {
        chart: {
            type: 'column',
            //                options3d: {
            //                    enabled: true,
            //                    alpha: 15,
            //                    beta: 15,
            //                    viewDistance: 25,
            //                    depth: 40
            //                }
        },

        title: {
            text: data.title
        },

        xAxis: {
            categories: data.xAxis.cateogry,
            labels: {
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: '', //data.yaxistitle,
                skew3d: true
            }
        },

        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} '
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40
            },
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function (e) {
                            location.href = data.redirectUrl + '?' + data.cond[this.category][e.point.series.name];

                            //     console.log(data.cond[this.category][e.point.series.name]); //category
                            //  console.log(e.point.series.name);
                            // alert('Category: ' + this.category + ', value: ' + this.y);
                        }
                    }
                }
            }
        },
        series: data.series
    });
}

$(document).ready(function () {
    $('.js-example-basic-single').select2();
});
$('body').on('focus', '.js-example-basic-single', function () {
    // $('.js-example-basic-single').select2();
});

$(".js-select2-tags").select2({
    tags: true
});
$(document).ready(function () {
    $('.js-example-basic-single').select2();
});

$('body').on('focus', '.js-example-basic-single', function () {
    // $('.js-example-basic-single').select2();
});


/* Select 2 with All Select Option */

$(document).ready(function () {
    $('.select2-tags-with-select-all-option').select2({
        //            placeholder: 'colors',
        //            width: '100%',
        //            border: '1px solid #e4e5e7',
    });
});

$('.select2-tags-with-select-all-option').on("select2:select", function (e) {
    var data = e.params.data.id;
    if (data == -999) {
        $(".select2-tags-with-select-all-option > option").prop("selected", "selected");
        $(".select2-tags-with-select-all-option").trigger("change");
    }
});

/* End of Select 2 with All Select Option */
$(document).ready(function () {
    var wordLen = 80;
    // var len = 0; // Maximum word length
    $('.comment_body').keydown(function (event) {
        var word_left_span = $(this).next("span");

        len = $(this).val().split(/[\s]+/);
        if (len.length > wordLen) {
            if (event.keyCode == 46 || event.keyCode == 8) { // Allow backspace and delete buttons
            } else if (event.keyCode < 48 || event.keyCode > 57) { //all other buttons
                event.preventDefault();
            }
        }
        console.log(len.length + " words are typed out of an available " + wordLen);
        wordsLeft = (wordLen) - len.length;
        $(word_left_span).html(wordsLeft + ' words left');
        if (wordsLeft == 0) {
            $(word_left_span).css({
                'background': 'red',
                'color': 'white'
            }).prepend('<i class="fa fa-exclamation-triangle"></i>');
        }
    });
});

$(document).on("click", ".delete-alert", function (e) {

    var message = "Are you sure you want to delete this record? This process is irreversible. So think well before you proceed. ";

    var attr = $(this).attr('msg');

    if (typeof attr !== typeof undefined && attr !== false) {
        message = $(this).attr('msg');
    }


    var url = $(this).attr('url');
    bootbox.confirm({
        message: message,
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result) {

                window.location = url;
                console.log("User confirmed dialog");
            } else {
                console.log("User declined dialog");
            }
            //console.log('This was logged in the callback: ' + result);

        }
    });
});

$('.x_panel').click(function () {
    $('.child_menu').hide();
});

jQuery(function () {
    jQuery('#click-to-export').click(function () {
        var name = jQuery('#click-to-export').attr('filename');
        if (typeof name === 'undefined') {
            name = "data";
        }
        var table = jQuery('#click-to-export').attr('tableid');
        if (typeof table === 'undefined') {
            table = ".table";
        } else {
            table = '#' + table;
        }
        jQuery(table).table2excel({
            exclude: ".noExl",
            name: name,
            filename: name,
            fileext: ".xls",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true
        });
    });
});
jQuery(function () {
    jQuery('.click-to-export').click(function () {

        var name = jQuery(this).attr('filename');
        if (typeof name === 'undefined') {
            name = "data";
        }
        var table = jQuery(this).attr('tableid');
        if (typeof table === 'undefined') {
            table = ".table";
        } else {
            table = '#' + table;
        }
        jQuery(table).table2excel({
            exclude: ".noExl",
            name: name,
            filename: name,
            fileext: ".xls",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true
        });
    });
});


//    var regex = new RegExp("^[a-zA-Z0-9 !@,_()#$&:.-/'\"\-]+$"); // Allow only alphanuemetic and space character
//    $(':input').keypress(function (e) {
//        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
//        if (regex.test(str)) {
//            return true;
//        }
//
//        e.preventDefault();
//        alert('Only letter,viz. [A - Z], numbers and following spcial characters @ # $ & : . / allowed.')
//        return false;
//    });

$(":input").bind("paste", function (e) {
    // access the clipboard using the api
    var pastedData = e.originalEvent.clipboardData.getData('text');

    if (regex.test(pastedData)) {
        return true;
    }
    e.preventDefault();
    alert('The content you are trying to copy-paste contains invalid characters. Only letter,viz. [A - Z], numbers and following spcial characters @ # $ & : . / allowed. Please try again after replacing invalid characters.')
    return false;
});

$(document).ready(function () {
    //        $(document).ready(function () {
    //            $('[data-toggle="tooltip"]').tooltip();
    //        });
    $('[data-toggle="popover"]').popover({
        html: true,
        content: function () {
            return $(this).next('.popover-content').html();
        }
    });
    $(document).on('click', '.close', function () {
        // alert('fgfgf');
        //console.log('close triggered');
        $('[data-toggle="popover"]').popover('hide');
    });
    $(document).on('click', '.close_pop', function () {
        // alert('fgfgf');
        //console.log('close triggered');
        $('[data-toggle="popover"]').popover('hide');
    });

    $('body').on('click', function (e) {
        $('[data-toggle=popover]').each(function () {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
});

$(document).ready(function () {

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $.fn.dataTable.tables({
            visible: true,
            api: true
        }).columns.adjust();
    });


    //        var t = $('table').DataTable({
    //            fixedHeader: false,
    //            paging: false,
    //            searching: true,
    //            paging: false,
    //            info: false,
    //            responsive: true,
    //
    ////            scrollY: 400,
    ////            scrollX: 400,
    //            scrollCollapse: true,
    ////             buttons: [
    ////            'copy', 'csv', 'excel', 'pdf', 'print'
    ////        ]
    //
    //        });

    if ($('table').hasClass("listview")) {

        var table = $('.listview').DataTable({
            searching: false,
            paging: false,
            info: false,
            aaSorting: []

        });
        var buttons = new $.fn.dataTable.Buttons(table, {

            buttons: [{
                    extend: 'collection',
                    text: 'Export',
                    className: 'btn btn-default',
                    buttons: [
                        //                            'copy',
                        'excel',
                        'csv'
                                //                            {
                                //                                extend: 'pdfHtml5',
                                //                                orientation: 'landscape',
                                //                                pageSize: 'LEGAL'
                                //                            },
                                //                            'print'
                    ]
                }

            ]
        }).container().appendTo($('#buttons'));
    }

  

});

function popupmodal(url) {
    // $('#form_frame').attr('src', '');
    $('#ifmModal').modal('show');

    $('#form_frame').attr('src', url)
}



$('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
        return $(this).next('.popover-content').html();
    }
});

function displayReason(value) {
    $('.onoff').hide();


    $('.onoff').hide();
    if (value == "Cancle") {
        $('.onoff').show();
    } else {
        $('#remarks').val('NA');
    }
}
$(function () {
    $('.min_date_time_format').datetimepicker({
        format: 'DD-MM-YYYY HH:mm:ss'
    });

    $("#started").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true
    });

    $('body').on('focus', '.date_format', function () {
        //  alert("asa");
        $(this).datepicker({
            dateFormat: 'dd-mm-yy',
            changeMonth: true,
            changeYear: true,
            minDate: new Date(minDatemmddyy),
            maxDate: new Date(maxDatemmddyy)
        });
    });

    $("#ended").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true
    });
    $("#memo_date").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        maxDate: 0
    });
    $(".max_date_format").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        maxDate: "+72m"

    });
    $(".min_date_format").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        minDate: 0
    });

    $("#propose_date").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true
    });
    $("#chq_date").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true
    });
    $('[data-toggle="tooltip"]').tooltip();
});

function edit(lsitdata, rowid) {

    $('tr').removeClass('danger');
    $('#' + rowid).addClass('danger');
    var keys = Object.keys(lsitdata);
    keys.forEach(function (item, index) {

        if ($('#' + item).is('input:checkbox')) {
            if (lsitdata[item] == 'Yes' || lsitdata[item] == 1) {
                $('#' + item).prop("checked", true);
            } else {
                $('#' + item).prop("checked", false);
            }
        } else if ($('#' + item).is('select')) {
            console.log(lsitdata);
            strArray = '';
            if (lsitdata[item] != null) {
                if (!Number.isInteger(lsitdata[item])) {
                    var strArray = lsitdata[item].split("$#$");
                } else {
                    strArray = lsitdata[item];
                }
            }
            if ($('#' + item).hasClass('js-example-basic-single')) {
                $('#' + item).val(strArray).trigger('change');
                $('#' + item).attr('myselected', strArray);
                // console.log(strArray);

            } else if ($('#' + item).hasClass('js-select2-tags')) {
                $('#' + item).val(strArray).change();
                $('#' + item).select2().trigger('change');
                $('#' + item).attr('myselected', strArray);

            } else {
                for (var i = 0; i < strArray.length; i++) {
                    $('#' + item).attr('myselected', strArray[i]);
                    $('#' + item + ' option[value="' + strArray[i] + '"]').attr("selected", 'selected');
                }

            }

        } else if ($('#' + item).is('input:file')) {
            if (lsitdata[item])
                $('#file_' + item).html('<i class="green">  <i class="fa fa-check"></i>');
            else
                $('#file_' + item).html('<i class="red">  <i class="fa fa-times"></i>');
        } else
            $('#' + item).val(lsitdata[item]);
    });

    $('<input type="hidden" name="' + pk + '" id="' + pk + '" value="' + lsitdata[pk] + '" />').insertAfter('input:last');
    $('.nav-tabs a[href="#add"]').tab('show');
}
  function onChangeOptions(onchange_field, onchange_value, destination_id, second_onchange_field = null, second_onchange_value = null) {
        var next_params = '';
        if (second_onchange_field !== null && second_onchange_field !== '') {
            next_params = '/' + second_onchange_field + '/' + second_onchange_value;

            //            alert(next_params);

        }
//    $("#loadMe").modal({
//        backdrop: "static", //remove ability to close modal with click
//        keyboard: false, //remove option to close with keyboard
//        show: true //Display loader!
//    });

        $.ajax({
            url: onChangeOptions_url + onchange_field + '/' + encodeURIComponent(onchange_value) + next_params, //onChangeOptions_ajax($onchange_field = '', $onchange_value = '')
            type: 'POST',
            //            data: {sector: sector, ac_id: ac_id},
            success: function (response) {


               // $("#loadMe").modal("hide");
                //  alert('onChangeOptions');
                var data = JSON.parse(response);
                console.log(data);

                var keys = Object.keys(data)
                var values = Object.values(data)
                var len = values.length;


                $("#" + destination_id).empty();
                $("#" + destination_id).append("<option value=''>" + 'Select ' + "</option>");
                for (var i = 0; i < len; i++) {
                    var id = keys[i];
                    var name = values[i];
                    $("#" + destination_id).append("<option value='" + id + "'>" + name + "</option>");

                }

                var selected = '';
                var attr = $('#' + destination_id).attr("myselected");

                if (typeof attr !== typeof undefined && attr !== false) {
                    selected = $('#' + destination_id).attr('myselected').split(",");
                }

                for (var i = 0; i < selected.length; i++) {
                    $('#' + destination_id + ' option[value="' + selected[i] + '"]').attr("selected", 'selected');
                }

            }
        });
    }

function onChangeOptions(onchange_field, onchange_value, destination_id, second_onchange_field = null, second_onchange_value = null) {
        var next_params = '';
        if (second_onchange_field !== null && second_onchange_field !== '') {
            next_params = '/' + second_onchange_field + '/' + second_onchange_value;

            //            alert(next_params);

        }
    $("#loadMe").modal({
        backdrop: "static", //remove ability to close modal with click
        keyboard: false, //remove option to close with keyboard
        show: true //Display loader!
    });


        $.ajax({
            url: onChangeOptions_url + onchange_field + '/' + encodeURIComponent(onchange_value) + next_params, //onChangeOptions_ajax($onchange_field = '', $onchange_value = '')
            type: 'POST',
            //            data: {sector: sector, ac_id: ac_id},
            success: function (response) {


                 $("#loadMe").modal("hide");
                //  alert('onChangeOptions');
                var data = JSON.parse(response);
                console.log(data);

                var keys = Object.keys(data)
                var values = Object.values(data)
                var len = values.length;

                var first = $("#" + destination_id + " option:first").html();

                $("#" + destination_id).empty();
                $("#" + destination_id).append("<option value=''>" + first + "</option>");
                for (var i = 0; i < len; i++) {
                    var id = keys[i];
                    var name = values[i];
                    $("#" + destination_id).append("<option value='" + id + "'>" + name + "</option>");

                }

                var selected = '';
                var attr = $('#' + destination_id).attr("myselected");

                if (typeof attr !== typeof undefined && attr !== false) {
                    selected = $('#' + destination_id).attr('myselected').split(",");
                }

                for (var i = 0; i < selected.length; i++) {
                    $('#' + destination_id + ' option[value="' + selected[i] + '"]').attr("selected", 'selected');
                }

            }
        });
    }

// Fiel Zise

$('input:file').on('change', function () {
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].size > (maxFileSize * 1024*1024)) {
                swal("Max allowed file size exceeded.")
                        .then((value) => {                          
                            $(this).val("");
                        });
            }
        }
});
