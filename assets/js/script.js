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

var theTimeBox = document.querySelectorAll(".container")
var currentHour = document.querySelectorAll("h3");
var calendarPlans = document.querySelectorAll("#plans");


for (var i = 0; i < theTimeBox.length; i++) {
  if (currentHour !== today.format("ha")) {
    for (var i = 0; i < calendarPlans.length; i++)
    calendarPlans[i].setAttribute("class", "past col-12 col-xl-8");
}}

console.log($('.container').children(0).textContent)

//this is going absolutely nowhere, moving on

//save the text in the textArea to local storage
var saveButton = document.querySelector(".saveBtn")
var savedPlans = localStorage.getItem("Plans")

calendarPlans.textContent = savedPlans



saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    ``
    


}

)