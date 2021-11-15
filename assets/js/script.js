//I need to have the current date at the top of the page
var currentDate = document.querySelector("#currentDay");
var today = moment();
currentDate.textContent = today.format("MMM Do, YYYY");

//I need to build the time blocks for the calendar

//I need the timeblock containers to be the correct design
//I need there to be 16 timeblock containers for each hour of the waking day
//I need to apply the existing CSS to the containers

//The timeblock need to be color coded for the time of day in past/present/future by the hour

//I need to specify the current hour. I can use the today var to do this
//I need to create a target var for the timeblocks

var currentHour = document.querySelectorAll(".hour");
var calendarPlans = document.querySelectorAll("#plans");

function setHour() {
 for (var i = 0; i < currentHour.length; i++) {
  console.log(currentHour[i].textContent)
}
return result
}


if (setHour !== today.format("ha")) {
    for (var i = 0; i < calendarPlans.length; i++)
    calendarPlans[i].setAttribute("class", "past col-12 col-xl-8");
} else

console.log(setHour())
console.log(today.format("ha"))