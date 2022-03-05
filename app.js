let paragraphElement = document.querySelector("p");
let inputElement = document.querySelector("input");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
}

function handleInput(event) {
  let enteredText = inputElement.value;
  let enteredText2 = event.target.value;
  let enteredText3 = event.data; // => this is different thant the above

  console.log(enteredText2);
  // console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);

//! NOTE: input event essentially also react to keyup events but in addition it also pick ups dragging and dropping a value into the input field or pasting it into the input field this input event will fire. That is the event we typically listen to when we work with inputs
inputElement.addEventListener("input", handleInput);
