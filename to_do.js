$("#sortable").sortable();
$("#sortable").disableSelection();

countTodos();

// all done btn
$("#checkAll").click(function () {
    AllDone();
});


$('.add-todo').on('keypress', function (e) {
    e.preventDefault
    if (e.which == 13) {
        if ($(this).val() != '') {
            var todo = $(this).val();
            createTodo(todo);
            countTodos();

        } else {
            // some validation
        }
    }
});
// mark task as done
$('.todolist').on('change', '#sortable li input[type="checkbox"]', function () {
    if ($(this).prop('checked')) {
        var doneItem = $(this).parent().parent().find('p').text();
        $(this).parent().parent().parent().addClass('remove');
        done(doneItem);
        countTodos();
    }
});

//delete done task from "already done"
$('.todolist').on('click', '.remove-item', function () {
    removeItem(this);
});

// count tasks
function countTodos() {
    var count = $("#sortable li").length;
    $('.count-todos').html(count);
}

//create task
function createTodo(text) {

    var markup = '<li class="ui-state-default"><div class="checkbox"><div class="list"> <label><input type="checkbox" value="" /></label><p>' + text + '</p></div></div></li>';
    $('#sortable').append(markup);
    $('.add-todo').val('');
}

//mark task as done
function done(doneItem) {
    var done = doneItem;
    var markup = '<li> <div class="checkbox"> <div class="list"> <input type="checkbox" checked /><label></label><p>' + done + '</p></div></div></li>';
    $('#done-items').append(markup);
    $('.remove').remove();
}

//mark all tasks as done
function AllDone() {
    var myArray = [];

    $('#sortable li').each(function () {
        myArray.push($(this).text());
    });

    // add to done
    for (i = 0; i < myArray.length; i++) {
        $('#done-items').append('<li>' + myArray[i] + '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
    }

    // myArray
    $('#sortable li').remove();
    countTodos();
}

//remove done task from list
function removeItem(element) {
    $(element).parent().remove();
};


new Chartist.Line('.ct-chart', {
    labels: ['1st', '2st', '3st', '4st', '5st', '6st', '7st'],
    series: [
    [130, 130, 170, 160, 170, 190, 160],
    [50, 70, 80, 100, 150, 180, 130]
  ]

}, {
    low: 0,
    fullWidth: true,
    chartPadding: {
        right: 20
    },
    lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0.2
    }),
    height: 226


    //    ['screen and (max-width: 320px)', {}
});


var data = {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    series: [
    [4, 5, 8, 9, 8.5, 8, 9.5],
    [2.5, 3.5, 4.5, 5, 4.5, 5.5, 6]
  ]
};

var options = {
    seriesBarDistance: 25,
    low: 0,
    fullWidth: true,
    height: 226,
    axisY: {
        // Lets offset the chart a bit from the labels
        offset: 60,
        // The label interpolation function enables you to modify the values
        // used for the labels on each axis. Here we are converting the
        // values into million pound.
        labelInterpolationFnc: function (value) {
            return '$' + value + 'm';
        }
    }
};

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        },

  }]
];

new Chartist.Bar('.ct-bar', data, options, responsiveOptions);


//
//
//new Chartist.Pie('.ct-donut', {
//    series: [15, 65]
//}, {
//    donut: true,
//    donutWidth: 8,
//    donutSolid: true,
//    showLabel: false,
//    height: 95,
//    width: 95
//});
//new Chartist.Pie('.ct-donut2', {
//    series: [0, 100]
//}, {
//    donut: true,
//    donutWidth: 8,
//    donutSolid: true,
//    //    startAngle: 270,
//    showLabel: false,
//    height: 95,
//    width: 95
//});
//new Chartist.Pie('.ct-donut3', {
//    series: [20, 65]
//}, {
//    donut: true,
//    donutWidth: 8,
//    donutSolid: true,
//    //    startAngle: 270,
//    showLabel: false,
//    height: 95,
//    width: 95
//});
//new Chartist.Pie('.ct-donut4', {
//    series: [3, 65]
//}, {
//    donut: true,
//    donutWidth: 8,
//    donutSolid: true,
//    //    startAngle: 270,
//    showLabel: false,
//    height: 95,
//    width: 95
//});
