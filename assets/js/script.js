var rootEl = $('#root');

// display current date within <header>
var currentDate = moment().format("dddd, MMM Do")
$("#currentDay").text(currentDate);

var schedule = [
    {
        time: '9am',
        description: ''
    },
    {
        time: '10am',
        description: ''
    },
    {
        time: '11am',
        description: ''
    },
    {
        time: '12pm',
        description: ''
    },
    {
        time: '1pm',
        description: ''
    },
    {
        time: '2pm',
        description: ''
    },
    {
        time: '3pm',
        description: ''
    },
    {
        time: '4pm',
        description: ''
    },
    {
        time: '5pm',
        description: ''
    }
];


function createRows() {
    for (var i = 0; i < schedule.length; i++) {

        // create the rows of the day planner
        var rowEl = $('<div>');
        rowEl.addClass('row');
        rowEl.attr('id', schedule[i].time);
        rootEl.append(rowEl);

        var plannerTimeEl = $('<div>');
        plannerTimeEl.addClass('col-1 hour');
        plannerTimeEl.text(schedule[i].time);
        rowEl.append(plannerTimeEl);

        var plannerDescriptionEl = $('<textarea>');
        plannerDescriptionEl.addClass('col-10 textarea');
        rowEl.append(plannerDescriptionEl);

        var plannerSaveButtonEl = $('<button>');
        plannerSaveButtonEl.addClass('col-1 saveBtn fa fa-lock');
        rowEl.append(plannerSaveButtonEl);
    };
}

function colorRowDescription() {
    for (var i = 0; i < schedule.length; i++) {
        // set background color of row planner description textbox
        plannerDescriptionEl.addClass('past');
        //    plannerDescriptionEl.addClass('present');
        //    plannerDescriptionEl.addClass('future');
    };
}

createRows();
colorRowDescription();

// timeBlocksEl = rootEl.find('.textarea').addClass('future');

// var a = moment[]

// var a = moment(currentDate);
// console.log(a)
// var b = moment()

// rootEl.find('.textarea').css('background-color', 'red');

// timeBlocksEl[2].addClass('future');

// https://momentjs.com/docs/#/displaying/difference/