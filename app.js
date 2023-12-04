// document.addEventListener("DOMContentLoaded", function () {
//     // Get the button and the space div
//     var launchButton = document.getElementById("launchButton");
//     var spaceDiv = document.getElementById("section-1");

//     // Add click event listener to button
//     launchButton.addEventListener("click", function () {
//     // Change background when button clicked
//         spaceDiv.style.backgroundImage = "url('space_destroyed.png')";
//     });
// });

// let creates the variable button1
let button1 = document.getElementById("nukeButton1");

// when button 1 is clicked change background image
button1.addEventListener("click", function() {
    document.querySelector(".space").style.backgroundImage = "url('./images/space_destroyed.png')";
} )

let button2 = document.getElementById("nukeButton2");

button2.addEventListener("click", function() {
    document.querySelector(".spaceship").style.backgroundImage = "url('./images/spaceship_destroyed.png')";
} )

let button3 = document.getElementById("nukeButton3");
button3.addEventListener("click", function() {
    document.querySelector(".astronaut").style.backgroundImage = "url('./images/astronaut_destroyed.png')";
} )