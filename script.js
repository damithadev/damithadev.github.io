// Array with text to type
var dataText = [ "We're launching soon!", "Stay Tuned."];

// Typing speed in milliseconds
var typingSpeed = 50;

// Set initial text to display
var text = "";
var i = 0;
var j = 0;

function typeText() {
  if (i < dataText[j].length) {
    text += dataText[j].charAt(i);
    document.getElementById("text").innerHTML = text;
    i++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (i > 0) {
    text = text.slice(0, -1);
    document.getElementById("text").innerHTML = text;
    i--;
    setTimeout(eraseText, typingSpeed / 2);
  } else {
    j++;
    if (j >= dataText.length) {
      j = 0;
    }
    setTimeout(typeText, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(typeText, 1000);
});
