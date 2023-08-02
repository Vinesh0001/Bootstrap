$(function(){
  $("#importBootstrap").load("importBootstrap.html");
  $("#header").load("header.html");
});


// Function to toggle the follow button text
function toggleFollow(button) {
  if (button.textContent === "Follow") {
    button.textContent = "Following";
  } else if (button.textContent === "Following") {
    button.textContent = "Follow";
  }
}

const followButtons = document.querySelectorAll(".follow");
followButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault(); 
    toggleFollow(this); 
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

// dm
function onIconClick(iconType) {
    console.log('Icon clicked:', iconType);
}

function onUserClick(username) {
    console.log('User clicked:', username);
}

