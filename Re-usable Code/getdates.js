const date = new Date();
const year = date.getFullYear();

document.getElementById("currentYear").innerHTML = year;

const month = date.getMonth() + 1;
const day = date.getDate();

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;