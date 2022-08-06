//first add in today's day of the week

var today = moment()
$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentHour = moment().format("HH");


//write a function for each table row (10 of them) that uses the moment function to determine if it is before that hour, during the hour, or the hour is still coming - if (time is past 8:00){make background color gray with .past css class} else if (time is between 8:00 and 9:00){make background color red with .present css class} else {make background green with .future css class because it is the only other explanation}

if (currentHour >= 09){
    $("#8-row").addClass("past");
} else if (08 <= currentHour && currentHour < 09){
    $("#8-row").addClass("present")
} else {
    $("#8-row").addClass("future")
}

if (currentHour >= 10){
    $("#9-row").addClass("past");
} else if (09 <= currentHour && currentHour < 10){
    $("#9-row").addClass("present")
} else {
    $("#9-row").addClass("future")
}

if (currentHour >= 11){
    $("#10-row").addClass("past");
} else if (10 <= currentHour && currentHour < 11){
    $("#10-row").addClass("present")
} else {
    $("#10-row").addClass("future")
}

if (currentHour >= 12){
    $("#11-row").addClass("past");
} else if (11 <= currentHour && currentHour < 12){
    $("#11-row").addClass("present")
} else {
    $("#11-row").addClass("future")
}

if (currentHour >= 13){
    $("#12-row").addClass("past");
} else if (12 <= currentHour && currentHour < 13){
    $("#12-row").addClass("present")
} else {
    $("#12-row").addClass("future")
}

if (currentHour >= 14){
    $("#13-row").addClass("past");
} else if (13 <= currentHour && currentHour < 14){
    $("#13-row").addClass("present")
} else {
    $("#13-row").addClass("future")
}

if (currentHour >= 15){
    $("#14-row").addClass("past");
} else if (14 <= currentHour && currentHour < 15){
    $("#14-row").addClass("present")
} else {
    $("#14-row").addClass("future")
}

if (currentHour >= 16){
    $("#15-row").addClass("past");
} else if (15 <= currentHour && currentHour < 16){
    $("#15-row").addClass("present")
} else {
    $("#15-row").addClass("future")
}

if (currentHour >= 17){
    $("#16-row").addClass("past");
} else if (16 <= currentHour && currentHour < 17){
    $("#16-row").addClass("present")
} else {
    $("#16-row").addClass("future")
}

if (currentHour >= 18){
    $("#17-row").addClass("past");
} else if (17 <= currentHour && currentHour < 18){
    $("#17-row").addClass("present")
} else {
    $("#17-row").addClass("future")
}


//Now write a function that allows us to set text content for the agenda items - and also have some text there before we start typing that is gray like 'enter agenda item here'

//I am getting the value of the input now and I am able to alert it - i need to take that value and append it to the html as an html element and clear the input box again

//Now I can add list items under the text input - i need to take each of those list items and save them to local storage using the same function!

//CLEAR INPUT BOX IF WE CAN - figure that out after local storage

//I've stored the last user input but not every one that is entered - maybe we can ask this


$("#8-item-save").on("click", function () {
    var userInput8 = $("#8-item").val();
    var userInput8Print = $("<li>");
    userInput8Print.text(userInput8);
    userInput8Print.addClass("my-2");
    $("#8-item-container").append(userInput8Print);
    localStorage.setItem("8-agenda-item", userInput8);
});


/* // get the text
var text = $('#test').text();

// set the item in localStorage
localStorage.setItem('test', text)

*/