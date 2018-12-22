// 1: Set the text of the <h1> element
const header = document.querySelector('h1');
header.innerHTML = "My Activities List";
// 2: Set the color of the <h1> to a different color
header.style.color = 'blue';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const paragraphp = document.querySelector("p.desc");
paragraphp.innerHTML = "A list of " + "<strong>fun</strong>" + " things I want to do today"

// 4: Set the class of the <ul> to 'list'
const ultag = document.querySelector("ul");
ultag.className = "list";
// 5: Create a new list item and add it to the <ul>
const li = document.createElement('li');
li.innerHTML = "<input> Eat ice cream";

ultag.appendChild(li);

// 6: Change all <input> elements from text fields to checkboxes
var input = document.getElementsByTagName('input');
for (i = 0; i < input.length; i++) {
    input[i].type = "checkbox";
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
var buttonvar = document.createElement("button");
buttonvar.className = "deleteButton";
buttonvar.innerHTML = "Delete";
var divtag = document.querySelector('.extra');
divtag.appendChild(buttonvar);


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
// var deleteB = document.getElementsByClassName('deleteButton');
buttonvar.addEventListener("click", () => {
divtag.style.display = "none";
});