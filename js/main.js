// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("cs-active");
  CSnavbarMenu.classList.toggle("cs-active");
  CSbody.classList.toggle("cs-open");
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector("#cs-expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");

  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}

// mobile nav toggle code
const dropDowns = Array.from(
  document.querySelectorAll("#cs-navigation .cs-dropdown")
);
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle("cs-active");
  };
  item.addEventListener("click", onClick);
}

function togglePlayButton() {
  // Select all elements with the .cs-picture class
  const pictures = document.querySelectorAll(
    "#why-choose-1876 .cs-video-wrapper"
  );

  // Add a click event listener to each .cs-picture element
  pictures.forEach((picture) => {
    picture.addEventListener("click", () => {
      // Select all elements with the .cs-play class
      const playButtons = document.querySelectorAll(
        "#why-choose-1876 .cs-play"
      );

      // Toggle the .cs-hide class on each .cs-play element
      playButtons.forEach((button) => {
        button.classList.toggle("cs-hide");
      });
    });
  });
}

// Call the function to activate the event listeners
togglePlayButton();

function toggleVideoPlayback() {
  // Select the video element
  const video = document.querySelector("#why-choose-1876 video");

  // Add a click event listener to the video
  video.addEventListener("click", () => {
    // Check if the video is paused
    if (video.paused) {
      video.play(); // Play the video if it is paused
    } else {
      video.pause(); // Pause the video if it is playing
    }
  });
}

// Call the function to activate the event listener
toggleVideoPlayback();
