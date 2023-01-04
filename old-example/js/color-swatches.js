// BEGIN JAVASCRIPT FOR CAPTURING COMPUTED CSS

const swatchAccentColor = document.querySelector(".swatch-accent-color");
const swatchAccentColorCaption = document.querySelector(
  ".swatch-accent-color .figure-caption"
);
const CSSForSwatchAccentColor = getComputedStyle(swatchAccentColor);
// console.log(CSSForSwatchAccentColor.backgroundColor);
swatchAccentColorCaption.innerHTML = CSSForSwatchAccentColor.backgroundColor;

// END JAVASCRIPT FOR CAPTURING COMPUTED CSS
