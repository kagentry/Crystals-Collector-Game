$(document).ready(function(){

	// variables
	var wins = 0;
	var losses = 0;
	var score = 0;
	// random variables 
	var compNum = 19 + Math.floor(Math.random() * 120);
	var ruby = 1 + Math.floor(Math.random() * 12);
	var diamond = 1 + Math.floor(Math.random() * 12);
	var citrine = 1 + Math.floor(Math.random() * 12);
	var emerald = 1 + Math.floor(Math.random() * 12);

	// set initial values on screen
	$("#compNum").text(compNum);
	$("#score").text(score);
	$("#wins").text(wins);
	$("#losses").text(losses);

	// FUNCTIONS
	function setVariables(){
		// variables
		// wins = 0;
		// losses = 0;
		score = 0;

		// random variables 
		compNum = 19 + Math.floor(Math.random() * 120);
		ruby = 1 + Math.floor(Math.random() * 12);
		diamond = 1 + Math.floor(Math.random() * 12);
		citrine = 1 + Math.floor(Math.random() * 12);
		emerald = 1 + Math.floor(Math.random() * 12);

		// reseting compNum on screen
		$("#compNum").text(compNum);
		$("#score").text(score);
		$("#wins").text(wins);
		$("#losses").text(losses);
	}

	function win() {
		if (score === compNum){
			return true;
		}
		else {
			return false;
		}
	}

	// on click functions
	$("#ruby").on("click", function() {
		if(!win() && score < compNum){
			score += ruby;
			$("#score").text(score);
		}
		else if (score > compNum){
			losses++;
			$("#losses").text(losses);
			setVariables();
		}
		else if (score === compNum){
			wins++;
			$("#wins").text(wins);
			setVariables();
		}

	})

	$("#diamond").on("click", function() {
		if(!win() && score < compNum){
			score += diamond;
			$("#score").text(score);
		}
		else if (score > compNum){
			losses++;
			$("#losses").text(losses);
			setVariables();
		}
		else if (score === compNum){
			wins++;
			$("#wins").text(wins);
			setVariables();
		}

	})

	$("#citrine").on("click", function() {
		if(!win() && score < compNum){
			score += citrine;
			$("#score").text(score);
		}
		else if (score > compNum){
			losses++;
			$("#losses").text(losses);
			setVariables();
		}
		else if (score === compNum){
			wins++;
			$("#wins").text(wins);
			setVariables();
		}
	})

	$("#emerald").on("click", function() {
		if(!win() && score < compNum){
			score += emerald;
			$("#score").text(score);
		}
		else if (score > compNum){
			losses++;
			$("#losses").text(losses);
			setVariables();
		}
		else if (score === compNum){
			wins++;
			$("#wins").text(wins);
			setVariables();
		}
	})

});
