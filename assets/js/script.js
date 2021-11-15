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
var calendarPlans = document.querySelectorAll("textarea")



  if (currentHour !== today.format("ha")) {
    for (var i = 0; i < calendarPlans.length; i++)
    calendarPlans[i].setAttribute("class", "past col-12 col-xl-8 time-block");
}

//this is going absolutely nowhere, moving on

//save the text in the textArea to local storage
var saveButton1 = document.querySelector("#saveBtn1")
var currentPlans1 = document.querySelector("#plans1")
var savedPlans1 = localStorage.getItem("plans1")

currentPlans1.textContent = savedPlans1

saveButton1.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans1.textContent = savedPlans1;
    localStorage.setItem("plans1", savedPlans1);
})



var saveButton2 = document.querySelector("#saveBtn2")
var currentPlans2 = document.querySelector("#plans2")
var savedPlans2 = localStorage.getItem("plans2")

currentPlans2.textContent = savedPlans2

saveButton2.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans2.textcontent = savedPlans2;
    localStorage.setItem("plans2", savedPlans2);
})



var saveButton3 = document.querySelector("#saveBtn3")
var currentPlans3 = document.querySelector("#plans3")
var savedPlans3 = localStorage.getItem("plans3")

currentPlans3.textContent = savedPlans3

saveButton3.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans3.textcontent = savedPlans3;
    localStorage.setItem("plans1", savedPlans3);
})



var saveButton4 = document.querySelector("#saveBtn4")
var currentPlans4 = document.querySelector("#plans4")
var savedPlans4 = localStorage.getItem("plans4")

currentPlans4.textContent = savedPlans4

saveButton4.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans4.textcontent = savedPlans4;
    localStorage.setItem("plans4", savedPlans4);
})



var saveButton5 = document.querySelector("#saveBtn5")
var currentPlans5 = document.querySelector("#plans5")
var savedPlans5 = localStorage.getItem("plans5")

currentPlans5.textContent = savedPlans5

saveButton5.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans5.textcontent = savedPlans5;
    localStorage.setItem("plans5", savedPlans5);
})



var saveButton6 = document.querySelector("#saveBtn6")
var currentPlans6 = document.querySelector("#plans6")
var savedPlans6 = localStorage.getItem("plans6")

currentPlans6.textContent = savedPlans6

saveButton6.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans6.textcontent = savedPlans6;
    localStorage.setItem("plans6", savedPlans6);
})



var saveButton7 = document.querySelector("#saveBtn7")
var currentPlans7 = document.querySelector("#plans7")
var savedPlans7 = localStorage.getItem("plans7")

currentPlans7.textContent = savedPlans7

saveButton7.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans7.textcontent = savedPlans7;
    localStorage.setItem("plans7", savedPlans7);
})



var saveButton8 = document.querySelector("#saveBtn8")
var currentPlans8 = document.querySelector("#plans8")
var savedPlans8 = localStorage.getItem("plans8")

currentPlans8.textContent = savedPlans8

saveButton8.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans8.textcontent = savedPlans8;
    localStorage.setItem("plans8", savedPlans8);
})



var saveButton9 = document.querySelector("#saveBtn9")
var currentPlans9 = document.querySelector("#plans9")
var savedPlans9 = localStorage.getItem("plans9")

currentPlans9.textContent = savedPlans9

saveButton9.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans9.textcontent = savedPlans9;
    localStorage.setItem("plans9", savedPlans9);
})



var saveButton10 = document.querySelector("#saveBtn10")
var currentPlans10 = document.querySelector("#plans10")
var savedPlans10 = localStorage.getItem("plans10")

currentPlans10.textContent = savedPlans10

saveButton10.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans10.textcontent = savedPlans10;
    localStorage.setItem("plans10", savedPlans10);
})



var saveButton11 = document.querySelector("#saveBtn11")
var currentPlans11 = document.querySelector("#plans11")
var savedPlans11 = localStorage.getItem("plans11")

currentPlans11.textContent = savedPlans11

saveButton11.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans11.textcontent = savedPlans11;
    localStorage.setItem("plans11", savedPlans11);
})



var saveButton12 = document.querySelector("#saveBtn12")
var currentPlans12 = document.querySelector("#plans12")
var savedPlans12 = localStorage.getItem("plans12")

currentPlans12.textContent = savedPlans12

saveButton12.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans12.textcontent = savedPlans12;
    localStorage.setItem("plans12", savedPlans12);
})



var saveButton13 = document.querySelector("#saveBtn13")
var currentPlans13 = document.querySelector("#plans13")
var savedPlans13 = localStorage.getItem("plans13")

currentPlans13.textContent = savedPlans13

saveButton13.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans13.textcontent = savedPlans13;
    localStorage.setItem("plans13", savedPlans13);
})



var saveButton14 = document.querySelector("#saveBtn14")
var currentPlans14 = document.querySelector("#plans14")
var savedPlans14 = localStorage.getItem("plans14")

currentPlans14.textContent = savedPlans14

saveButton1.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans14.textcontent = savedPlans14;
    localStorage.setItem("plans14", savedPlans14);
})



var saveButton15 = document.querySelector("#saveBtn15")
var currentPlans15 = document.querySelector("#plans15")
var savedPlans15 = localStorage.getItem("plans15")

currentPlans15.textContent = savedPlans15

saveButton15.addEventListener("click", function(event) {
    event.preventDefault();
    currentPlans15.textcontent = savedPlans15;
    localStorage.setItem("plans15", savedPlans15);
})


