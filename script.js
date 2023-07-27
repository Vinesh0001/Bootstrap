// follow or following
// function toggleFollow() {
//     const followButtons = document.getElementsByClassName("follow");

//     followButtons.forEach(button => {
//         if (followButtons.textContent === "Follow") {
//           followButtons.textContent = "Following";
//         } else if (followButtons.textContent === "Following") {
//           followButtons.textContent = "Follow";
//         }
//     });
// }


// Function to toggle the follow button text
function toggleFollow(button) {
  if (button.textContent === "Follow") {
    button.textContent = "Following";
  } else if (button.textContent === "Following") {
    button.textContent = "Follow";
  }
}

// Get all elements with class "follow"
const followButtons = document.querySelectorAll(".follow");

// Attach a click event listener to each button
followButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent any default behavior of the button (if it's inside a form, etc.)
    toggleFollow(this); // Pass the clicked button to the toggleFollow function
  });
});







// like button

function toggleLike(button) {
    button.classList.toggle("active");
}

// save button
function toggleLike(button){
    button.classList.toggle("active");
}



// pause play reel
const videoElements = document.querySelectorAll(".autoplay");

videoElements.forEach(videoElement => {
  videoElement.addEventListener("click", togglePlay);
});

function togglePlay() {
  if (this.paused || this.ended) {
    this.play();
  } else {
    this.pause();
  }
}

// purva
function onIconClick(iconType) {
    // Your code to handle the icon click
    console.log('Icon clicked:', iconType);
}

function onUserClick(username) {
    // Your code to handle the user click
    console.log('User clicked:', username);
}

