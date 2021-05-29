Homework Assignment - 05 Third-Party APIs: Work Day Scheduler

## Description
The focus of this homework assignment for the University of Toronto SCS Coding Boot Camp was to create a simple calendar application that allows the user to save events for each hour of the work day. Starter code was provided including an HTML file with the day planner header without the current date displayed and a CSS style sheet. The app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

## Key Features
- jQuery event listener is used to identify when a save button is clicked by the user
- jQuery traverses the DOM and identifies the time block row that the button is in which the user wishes to save the data from
- Details of hourly scheduled events are saved to localStorage with the help of JSON and populate the day planner when the page is reloaded 
- No new elments were created within the starter HTML file, rather jQuery was used to create elements including rows and columns within them for time of day, event description and a save button
- The Bootstrap grid is used to set the width of each column within the time block rows
- Time block rows' text areas are colored based on if they are in the past, present or future which is done through use of Moment.js, jQuery DOM traversal and the jQuery method to add a CSS class.

## Link
Website can be found here: https://darylnauman.github.io/day-planner/

## Screenshot
The following image shows a snapshot of a portion of the webpage:

![Screenshot of a day planner including title with current date followed by rows for each hour of business day with hours and space for event descriptions.](./assets/images/day-planner-screenshot.png)