let anchorElement = document.getElementById("external-link");

anchorElement.href = "http://google.com";

// anchorElement = document.querySelector('#external-link');
anchorElement = document.querySelector("p a");

anchorElement.href = "http://amazon.com";

//! [TASK]: Insert an HTML element without touching your HTML code
//? [SCENARIO]: Maybe we want to insert it when a timer expired || click a button.
// ADD AN ELEMENT
// 1.Create the new element
let newAnchorElement = document.createElement("a"); //! create and store in memory
newAnchorElement.href = "google.com";
newAnchorElement.textContent = "This leads to google";
// 2.Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p"); //! gets the first encountered 'p' element in the document
// 3.Insert the new element into the parent element content
firstParagraph.append(newAnchorElement); // insert the new created <a> inside the first p

// REMOVE ELEMENT
// 1.Select element
let firstH1Element = document.querySelector("h1");
// 2.Remove element
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element); //! safer way will work also for older browser

// MOVE ELEMENT
firstParagraph.parentElement.append(firstParagraph); // <- Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

// innerHTML
firstParagraph.innerHTML = `
Hi! This is 
<strong>added with innerHTML as string</strong>.
Cowabunga`;
