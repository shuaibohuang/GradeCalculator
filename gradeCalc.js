
console.log("THIs");

var addButton = document.getElementById("add more");

addButton.addEventListener("click", addMore);

function addMore(){

	var container = document.createElement("p");
	container.innerHTML = "<li>Percentage: <input type=\"text\" name=\"percentage1\" placeholder=\"e.g. 50\" class=\"inputs\">% Grade: <input type=\"text\" name=\"percentage2\" placeholder=\"e.g. 85\" class=\"inputs\"></li>";
	document.getElementById("unordered list").appendChild(container); 

	//add.innerHTML += "<li>Percentage: <input type=\"text\" name=\"percentage1\" placeholder=\"e.g. 50\" class=\"inputs\">% Grade: <input type=\"text\" name=\"percentage2\" placeholder=\"e.g. 85\" class=\"inputs\"></li>";
}