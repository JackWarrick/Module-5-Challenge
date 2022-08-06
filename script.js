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

/*
var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
*/

 $("#8-item-save").on("click", function () {
    var userInput8 = $("#8-item").val(); 

localStorage.setItem("8-agenda-item", userInput8);

var stored8 = localStorage.getItem("8-agenda-item");


        var userInput8Print = $("<li>");
        userInput8Print.text(stored8); 
        userInput8Print.addClass("my-2 text-dark");
        $("#8-item-container").append(userInput8Print);
        $("#8-item").hide();
        $("#8-item-save").hide();

});

/* This didn't work but it is close I think
if (stored8 != null){
     $("#8-item-container").append(userInput8Print);
        $("#8-item").hide();
        $("#8-item-save").hide();
} else {
    return - idk i want this just to be the default when you would open the page
}

*/


$("#9-item-save").on("click", function () {
    var userInput9 = $("#9-item").val(); 

    localStorage.setItem("9-agenda-item", userInput9);

    var stored9 = localStorage.getItem("9-agenda-item");


    var userInput9Print = $("<li>");
    userInput9Print.text(stored9);
    userInput9Print.addClass("my-2 text-dark");
    $("#9-item-container").append(userInput9Print);
    $("#9-item").hide();
    $("#9-item-save").hide();
});


$("#10-item-save").on("click", function () {
    var userInput10 = $("#10-item").val(); 

    localStorage.setItem("10-agenda-item", userInput10);

    var stored10 = localStorage.getItem("10-agenda-item");

    var userInput10Print = $("<li>");
    userInput10Print.text(stored10);
    userInput10Print.addClass("my-2 text-dark");
    $("#10-item-container").append(userInput10Print);
    $("#10-item").hide();
    $("#10-item-save").hide();
});

$("#11-item-save").on("click", function () {
    var userInput11 = $("#11-item").val(); 

    localStorage.setItem("11-agenda-item", userInput11);

    var stored11 = localStorage.getItem("11-agenda-item");

    var userInput11Print = $("<li>");
    userInput11Print.text(stored11);
    userInput11Print.addClass("my-2 text-dark");
    $("#11-item-container").append(userInput11Print);
    $("#11-item").hide();
    $("#11-item-save").hide();
});

$("#12-item-save").on("click", function () {
    var userInput12 = $("#12-item").val(); 

    localStorage.setItem("12-agenda-item", userInput12);

    var stored12 = localStorage.getItem("12-agenda-item");

    var userInput12Print = $("<li>");
    userInput12Print.text(stored12);
    userInput12Print.addClass("my-2 text-dark");
    $("#12-item-container").append(userInput12Print);
    $("#12-item").hide();
    $("#12-item-save").hide();
});

$("#13-item-save").on("click", function () {
    var userInput13 = $("#13-item").val(); 

    localStorage.setItem("13-agenda-item", userInput13);

    var stored13 = localStorage.getItem("13-agenda-item");

    var userInput13Print = $("<li>");
    userInput13Print.text(stored13);
    userInput13Print.addClass("my-2 text-dark");
    $("#13-item-container").append(userInput13Print);
    $("#13-item").hide();
    $("#13-item-save").hide();
});

$("#14-item-save").on("click", function () {
    var userInput14 = $("#14-item").val(); 

    localStorage.setItem("14-agenda-item", userInput14);

    var stored14 = localStorage.getItem("14-agenda-item");

    var userInput14Print = $("<li>");
    userInput14Print.text(stored14);
    userInput14Print.addClass("my-2 text-dark");
    $("#14-item-container").append(userInput14Print);
    $("#14-item").hide();
    $("#14-item-save").hide();
});

$("#15-item-save").on("click", function () {
    var userInput15 = $("#15-item").val(); 

    localStorage.setItem("15-agenda-item", userInput15);

    var stored15 = localStorage.getItem("15-agenda-item");

    var userInput15Print = $("<li>");
    userInput15Print.text(stored15);
    userInput15Print.addClass("my-2 text-dark");
    $("#15-item-container").append(userInput15Print);
    $("#15-item").hide();
    $("#15-item-save").hide();
});

$("#16-item-save").on("click", function () {
    var userInput16 = $("#16-item").val(); 

    localStorage.setItem("16-agenda-item", userInput16);

    var stored16 = localStorage.getItem("16-agenda-item");

    var userInput16Print = $("<li>");
    userInput16Print.text(stored16);
    userInput16Print.addClass("my-2 text-dark");
    $("#16-item-container").append(userInput16Print);
    $("#16-item").hide();
    $("#16-item-save").hide();
});

$("#17-item-save").on("click", function () {
    var userInput17 = $("#17-item").val(); 

    localStorage.setItem("17-agenda-item", userInput17);

    var stored17 = localStorage.getItem("17-agenda-item");

    var userInput17Print = $("<li>");
    userInput17Print.text(stored17);
    userInput17Print.addClass("my-2 text-dark");
    $("#17-item-container").append(userInput17Print);
    $("#17-item").hide();
    $("#17-item-save").hide();
});




/* function localStorePrint8(){

    var Array8 = [ ];
    Array8.push(userInput8Store);
    localStorage.setItem("userInput8", JSON.stringify(Array8));
    
    var Array8 = JSON.parse(localStorage.getItem("userInput8"));

    var userInput8Print = $("<li>");
    userInput8Print.text(Array8); /* if this doesn't work try just .text(Array8)  */
    //userInput8Print.addClass("my-2");
    //$("#8-item-container").append(userInput8Print); 
//} 

// $('.8-hour .id').val(localStorage.getItem('8-item));

/* // use the function .getItems and use JSON.parse, and then when you do get it you can store it in a variable and then loop over all the data, and there in the loop you can add the bullet point
var someArray = JSON.parse(localStorage.getItem("userInput8"));


In your function where you're listening for button click, you need to have variables for the values of the time and the id of the input.
white_check_mark
eyes
raised_hands

12:57
Then you'll be able to save those values in your local storage with for instance localStorage.setItem(time, id-value);
Then to load the saved values from localstorage it would be something like $('.8-hour .id').val(localStorage.getItem('8-item));
1:00
Something along those lines. I'm just making up some of the values to illustrate. Try to work that into your code. and the getItem part of the localStorage would not need to be in a function.



*/