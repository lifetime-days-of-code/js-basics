// console.log(window); //!NOTE--1.0 <- Holds information and functionality related to the active browser window.


// console.log({ document }); //!NOTE--1.1 <- Holds information and functionality related to the loaded website content


console.log(document);


console.dir(document); //!NOTE--2.0 <- logs the document object as object not as HTML( the build in behavior of CHROME.Prob not the case anymore because the console.log output is different every time!? )


console.log(document.body.children); // <- [h1, p, script]


console.log(document.body.children.length); // <- 3


// stinky stinky
document.body.children[1].children[0].href = 'https://google.com' // <- change the href value for the link element


console.dir(document.body.firstChild) // <- #text //! NOTE--3.0 Access the first child NODE.(it can be eater TEXT or HTML element.The entire HTML content is translated to this NODES.
//!https://developer.mozilla.org/en-US/docs/Web/API/Node

//! =================== !!! NOTE--3.2 !!!! ===================
//* Whit NODES [element].childNodes we can access html element and its (text) content. With firstChild -> access to first child node

//! in the case of document.body.firstChid -> the reason #text is returned here and not h1 is because the empty space or the line break to be more specific is interpreted as node. You can see this by console logging document.body.firstChild.data -> /n

//* Whit HTML element [element].children we just get access to the html elements that are stored. With firstChildElement -> access to the first child html element

//! =================== !!! /NOTE--3.2 !!!! ===================

console.dir(document.body.firstElementChild) // <- h1 //! NOTE--3.1 Access the first child ELEMENT


console.log(document.body.childNodes) // <-NodeList(9) [text, h1, text, p, text, comment, text, script, text]