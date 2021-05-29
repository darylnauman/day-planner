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

        // create first column within row - lists time of time block
        var plannerTimeEl = $('<div>');
        plannerTimeEl.addClass('col-1 hour');
        plannerTimeEl.text(schedule[i].time);
        rowEl.append(plannerTimeEl);

        // create second column within row - provides text area that can show description of any events, color set if past, present, future
        var plannerDescriptionEl = $('<textarea>');
        plannerDescriptionEl.addClass('col-10 textarea');
        plannerDescriptionEl.attr('name', 'eventDescription')
        rowEl.append(plannerDescriptionEl);

        // create third column with row - provides a button to click to save text entered into to localStorage
        var plannerSaveButtonEl = $('<button>');
        plannerSaveButtonEl.addClass('col-1 saveBtn fa fa-lock');
        rowEl.append(plannerSaveButtonEl);
    };
}

function colorRowDescription() {
    for (var i = 0; i < schedule.length; i++) {
        // set background color of row planner description textbox
        // plannerDescriptionEl.addClass('past');
        // plannerDescriptionEl.addClass('present');
        // plannerDescriptionEl.addClass('future');
    };
}

function saveDescription(event) {
    var buttonEl = event.target;
    var descriptionEl = $(buttonEl).parent().find('textarea');
    var description = descriptionEl.val();

    // $(buttonEl).parent().find('textarea').css("background-color","red");
    
    console.log(buttonEl);
    console.log(description);
    console.log($(buttonEl).parent().attr('id'));

    for (var i=0; i < schedule.length; i++) {
        if (schedule[i].time === $(buttonEl).parent().attr('id')) {
            schedule[i].description = description;
        }
    };
    // $('input[name="eventDescription"]');
};

createRows();
colorRowDescription();

$("button").on('click', saveDescription);


// timeBlocksEl = rootEl.find('.textarea').addClass('future');

// var a = moment[]

// var a = moment(currentDate);
// console.log(a)
// var b = moment()

// rootEl.find('.textarea').css('background-color', 'red');

// timeBlocksEl[2].addClass('future');

// https://momentjs.com/docs/#/displaying/difference/