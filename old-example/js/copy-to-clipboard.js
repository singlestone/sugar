// BEGIN JAVASCRIPT FOR COPY TO CLIPBOARD BUTTON //

const buttonCopyLink = document.getElementById("button-copy-link-to-clipboard");
const textCopiedToClipboard = document.getElementById(
  "text-copied-to-clipboard"
);

buttonCopyLink.onclick = function () {
  // console.log('Copy Button got clicked!');
  if (!buttonCopyLink.classList.contains("button-copy-to-clipboard-copied")) {
    // console.log('Here we go!');
    buttonCopyLink.classList.add("button-copy-to-clipboard-copied");
    textCopiedToClipboard.classList.remove("button-message-hidden");
    setTimeout(buttonCopyReset, 3000); // Reset the copy button to its default state after 3 seconds (3,000 milliseconds)
  }
};

function buttonCopyReset() {
  // console.log('Reset the copy button');
  buttonCopyLink.classList.remove("button-copy-to-clipboard-copied");
  textCopiedToClipboard.classList.add("button-message-hidden");
}
