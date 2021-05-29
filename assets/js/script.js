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

function init() {
    schedule = JSON.parse(localStorage.getItem("schedule")) || schedule;
    return;
}

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
        plannerDescriptionEl.text(schedule[i].description)
        rowEl.append(plannerDescriptionEl);

        // create third column with row - provides a button to click to save text entered into to localStorage
        var plannerSaveButtonEl = $('<button>');
        plannerSaveButtonEl.addClass('col-1 saveBtn fa fa-lock');
        rowEl.append(plannerSaveButtonEl);
    };
    return;
}

function colorRowDescription() {
    
    // $("#root").children().find('textarea').addClass('past'); // past
    // $("#root").children().find('textarea').addClass('present'); // present
    // $("#root").children().find('textarea').addClass('future'); // future

    // rootEl.children('textarea').css('background-color', 'blue');

    // $("#root").children().eq(2).find('textarea').addClass('present'); // WORKS!
    


    // for (var i = 0; i < schedule.length; i++) {
        
    //     if (// schedule array time < current time ) {
    //         $("#root").children(i).find('textarea').addClass('past');    
    //     } else if (// schedule array time is at same hour) {
    //         $("#root").children(i).find('textarea').addClass('present');
    //     } else {
    //         $("#root").children(i).find('textarea').addClass('future');    
    //     }
    // };

    // $("#root").children().eq(5).find('textarea').removeClass('future present');
    // $("#root").children().eq(5).find('textarea').addClass('past');

    return;
}

// on save button click update event description in schedule array & update localStorage
function saveDescription(event) {
    var buttonEl = event.target;
    var descriptionEl = $(buttonEl).parent().find('textarea');
    var description = descriptionEl.val();

    for (var i=0; i < schedule.length; i++) {
        if (schedule[i].time === $(buttonEl).parent().attr('id')) {
            schedule[i].description = description;
        }
    };
    
    // send revised schedule to localStorage
    localStorage.setItem("schedule", JSON.stringify(schedule));

    return;
}

init();
createRows();
colorRowDescription();

$("button").on('click', saveDescription);


// https://momentjs.com/docs/#/displaying/difference/