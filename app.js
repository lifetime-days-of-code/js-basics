// console.log(window); //!NOTE--1.0 <- Holds information and functionality related to the active browser window.
// console.log({ document }); //!NOTE--1.1 <- Holds information and functionality related to the loaded website content

console.log(document);
console.dir(document); //!NOTE--2.0 <- logs the document object as object not as HTML( the build in behavior of CHROME.Prob not the case anymore because the console.log output is different every time!? )
console.log(document.body.children); // <- [h1, p, script]
console.log(document.body.children.length); // <- 3

// stinky stinky
document.body.children[1].children[0].href = 'https://google.com' // <- change the href value for the link element