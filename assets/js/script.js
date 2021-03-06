var rootEl = $('#root');

// display current date within <header>
var currentDate = moment().format("dddd, MMM Do")
$("#currentDay").text(currentDate);

var schedule = [
    {
        time: '9 AM',
        description: ''
    },
    {
        time: '10 AM',
        description: ''
    },
    {
        time: '11 AM',
        description: ''
    },
    {
        time: '12 PM',
        description: ''
    },
    {
        time: '1 PM',
        description: ''
    },
    {
        time: '2 PM',
        description: ''
    },
    {
        time: '3 PM',
        description: ''
    },
    {
        time: '4 PM',
        description: ''
    },
    {
        time: '5 PM',
        description: ''
    }
];

// Check localStorage for schedule information, if present assign it to schedule array otherwise use schedule array provided
function init() {
    schedule = JSON.parse(localStorage.getItem("schedule")) || schedule;
    return;
}

// Create the time block rows of the day planner with text and classes
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
        plannerDescriptionEl.addClass('col-10 description textarea');
        plannerDescriptionEl.attr('name', 'eventDescription');
        plannerDescriptionEl.text(schedule[i].description);
        rowEl.append(plannerDescriptionEl);

        // create third column with row - provides a button to click to save text entered into to localStorage
        var plannerSaveButtonEl = $('<button>');
        plannerSaveButtonEl.addClass('col-1 saveBtn fas fa-lock');
        rowEl.append(plannerSaveButtonEl);
    };
    return;
}

// Color row text areas depending on if they are in the past, present or future
function colorRowDescription() {

    // get current hour of today to compare against time listed for each time block
    var todayHour = moment().format('HH');
    todayHour = parseInt(todayHour);
    

    for (var i = 0; i < schedule.length; i++) {
        
        var scheduleBlockHour = moment(schedule[i].time, 'ha').format('HH');
        scheduleBlockHour = parseInt(scheduleBlockHour);
        
        if (scheduleBlockHour < todayHour) {
            $("#root").children().eq(i).find('textarea').addClass('past');    
        } else if (scheduleBlockHour === todayHour) {
            $("#root").children().eq(i).find('textarea').addClass('present');
        } else {
            $("#root").children().eq(i).find('textarea').addClass('future');    
        };
    };
    return;
}

// Update event description in schedule array & localStorage
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

// Event listener on all button elements
$("button").on('click', saveDescription);