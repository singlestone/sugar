// BEGIN JAVASCRIPT FOR TOUCH INPUT
// Detect when the user is using a touch experience, then add a class to the body.

window.addEventListener(
  "touchstart",
  function onFirstTouch() {
    // Add a class when we detect that the user has touched the screen.
    document.body.classList.add("user-is-touching");

    // We only need to know once that a human touched the screen, so we can stop listening now.
    window.removeEventListener("touchstart", onFirstTouch, false);
  },
  false
);

// END JAVASCRIPT FOR TOUCH INPUT

// BEGIN JAVASCRIPT FOR KEYBOARD INPUT
// Detect when the user is using tabbing using a keyboard, then add a class to the body.

window.addEventListener("keydown", handleFirstTab);

function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add("user-is-tabbing");
    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove("user-is-tabbing");
  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
}

window.addEventListener("keydown", handleFirstTab);

// END JAVASCRIPT FOR KEYBOARD INPUT
