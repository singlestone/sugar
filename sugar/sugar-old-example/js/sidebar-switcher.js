// BEGIN JAVASCRIPT FOR SIDEBAR NAV SKINNY SWITCHER

const navModeButton = document.querySelector(".sidebar-switcher-button");
const navMode = document.querySelector(".sidebar-container");

navModeButton.onclick = function () {
  // console.log('Sidebar Switcher Button got clicked!');
  navModeButton.classList.toggle("sidebar-switcher-button-clicked");
  if (navModeButton.textContent.trim() === "Switch to Skinny Nav") {
    navModeButton.textContent = "Expand";
  } else {
    navModeButton.textContent = "Switch to Skinny Nav";
  }
  // navModeButton.innerHTML = 'Expand';
  // navModeButton.classList.add('sidebar-switcher-button-clicked');
  navMode.classList.toggle("sidebar-mode-skinny");
};

// END JAVASCRIPT FOR SIDEBAR NAV SKINNY SWITCHER
