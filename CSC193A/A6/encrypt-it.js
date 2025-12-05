(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Runs when the DOM has loaded, so that event listeners can be added to elements
   */
  function init() {
    const button = document.getElementById("encrypt-it");
    button.addEventListener("click", handleClick);

    const reset = document.getElementById("reset");
    reset.addEventListener("click", handleReset);
  }

  /**
   * Handles clicking the encrypt-it button.
   */
  function handleClick() {
    console.log("Button clicked!");
    const input = document.getElementById("input-text").value;

    const output = encrypt(input);

    const result = document.getElementById("result");
    result.textContent = output;
  }

  /**
   * Handles clicking the reset button.
   */
  function handleReset() {
    const entry = document.getElementById("input-text");
    entry.value = "";
  }

  /**
   * Encrypts a string using shift cipher
   * @param {string} input - The input string
   * @returns {string} The result of the cipher
   */
  function encrypt(input) {
    let output = "";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let char of input) {
      const i = lower.indexOf(char);
      if (i > -1) {
        output += lower.charAt((i + 1) % lower.length);
        continue;
      }
      const j = upper.indexOf(char);
      if (j > -1) {
        output += upper.charAt((j + 1) % upper.length);
        continue;
      }
      output += char;
    }
    return output;
  }


})();
