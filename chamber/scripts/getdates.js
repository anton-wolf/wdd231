// output DOM elements
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// date object
const today = new Date();
year.innerHTML = ` ${today.getFullYear()}`
lastModified.innerHTML = `Last Modification: ${document.lastModified}`