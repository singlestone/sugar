// BEGIN JAVASCRIPT FOR ANIMATED PEEKABOO SUCCESS MESSAGE //

const peekabooStarter = document.getElementById("peekaboo-starter");
const peekabooChecker = document.getElementById("peekaboo-checker");

peekabooStarter.onclick = function () {
  if (peekabooChecker.classList.contains("peekaboo-go-animate")) {
    peekabooChecker.classList.remove("peekaboo-go-animate");
    setTimeout(animateMyStuff, 400);
  } else {
    animateMyStuff();
    //console.log(peekabooChecker.classList);
  }
  //checker.classList.remove('checker-go-animate');
  //console.log('Start animating');
};

function animateMyStuff() {
  peekabooChecker.classList.add("peekaboo-go-animate");
}

// END JAVASCRIPT FOR ANIMATED PEEKABOO SUCCESS MESSAGE //
