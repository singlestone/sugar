// EXTRA SEARCH ATTRIBUTE

const searchAttributeAddButton = document.querySelector(
  ".search-attribute-add-button"
);
const searchAttributeRemoveButton = document.querySelector(
  ".search-attribute-remove-button"
);

const searchAttributeFirst = document.querySelector(
  ".header-search-attribute-first"
);
const searchAttributeConjoiner = document.querySelector(
  ".conjoiner-disappeared"
);
const searchAttributeSecond = document.querySelector(
  ".header-search-attribute-second"
);

function searchSwitcher() {
  // console.log("Run the Search Switcher Function");
  searchAttributeAddButton.classList.toggle("button-disappeared");
  searchAttributeFirst.classList.toggle("header-search-attribute-wide");
  searchAttributeConjoiner.classList.toggle("conjoiner-disappeared");
  searchAttributeSecond.classList.toggle("header-search-attribute-narrow");
}
searchAttributeAddButton.onclick = function () {
  searchSwitcher();
};

searchAttributeRemoveButton.onclick = function () {
  searchSwitcher();
};
