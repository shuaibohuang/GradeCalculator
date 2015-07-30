
var addButton = document.getElementById("add more");
var subButton = document.getElementById("submit");


var percentage = 0; //total percetage
var grade=0;
var numPercentageInput=1;
var numGradeInput=1;


addButton.addEventListener("click", addMore);
subButton.addEventListener("click", calculation);



function addMore(){
	//appending more input spaces
	var container = document.createElement("p");
	numPercentageInput++;
	numGradeInput++;
	container.innerHTML = "<li>Percentage: <input type=\"text\" name=\"percentage\" placeholder=\"e.g. 50\" class=\"percentage\" id=\"percentage"+ numPercentageInput+ "\">% Grade: <input type=\"text\" name=\"grade\" placeholder=\"e.g. 85\" class=\"grade\" id=grade" + numPercentageInput+ "></li>";
	document.getElementById("unordered list").appendChild(container); 
}

function calculation(){
	//calculating  the sum of the percentage
	while (numPercentageInput>0){
		percentage=percentage+ parseFloat(document.getElementById("percentage"+numPercentageInput).value);
		numPercentageInput--;
	}

	//calculating the percentage of final
	var finalPercentage = 100 - percentage;

	//score have already gotten
	while (numGradeInput>0){
		//console.log(numGradeInput);
		grade=grade+(parseFloat(document.getElementById("grade"+numGradeInput).value)*(parseFloat(document.getElementById("percentage"+numGradeInput).value)))/100;
		numGradeInput--;
		
	}

	for(var i=85; i>51; i=i-5){
		var gradeNeed=(i-grade)/(finalPercentage/100);
		var secondContainer = "<li>Total Percentag you need to get "+i+"% is "+gradeNeed+"</li>";
		document.getElementById("result").innerHTML(secondContainer);
	}
}