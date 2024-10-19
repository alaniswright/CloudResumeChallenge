// Get the current visitor count from the localStorage.
var visitorCount = parseInt(localStorage.getItem("visitorCount")) || 0;

// Increment the visitor count.
visitorCount++;

// Update the localStorage with the new visitor count.
localStorage.setItem("visitorCount", visitorCount);

// Display the visitor count on the page.
document.getElementById("visitor-count").innerHTML = visitorCount;