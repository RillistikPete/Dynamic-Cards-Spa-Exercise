
var cardContainer = document.getElementById('domCards');

var grabText = document.getElementById('textbox');

//Counter variable that defines the id's for the delete buttons, making them unique.
var counter = 0;


document.getElementById('createButton').addEventListener("click", function(event){
	console.log("running", event);
	var createEle = document.createElement('div')

	createEle.innerHTML = `<p>This card is created</p>
							<h1>${grabText.value}</h1>
						<button id="delete--${counter}">Delete</button>`
	cardContainer.append(createEle);

document.getElementById(`delete--${counter}`).addEventListener("click", function(event){
	console.log("delete", event);
	cardContainer.removeChild(createEle);
});

//Every time you create a button inside the ``, the id is changed by adding one to it.
counter += 1;


});
