//I need to have the current date at the top of the page
var currentDate = document.querySelector("#currentDay");
var today = moment();
currentDate.textContent = today.format("MMM Do, YYYY");

//I need to build the time blocks for the calendar

//I need the timeblock containers to be the correct design
//I need there to be 16 timeblock containers for each hour of the waking day
//I need to apply the existing CSS to the containers