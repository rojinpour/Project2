// ------------------------ Game Functions are below ------------------------
$(document).ready(function () {	

	var url = window.location.search;
	var currentQuestion;
	if (url.indexOf("?charID=") !== -1) {
		charID = url.split("=")[1];
	}
	if (url.indexOf("&q=") !== -1) {
		currentQuestion = url.split("=")[2];
	}

	console.log ("currentQuestion=" + currentQuestion);

	// variable to store the current character made in main.html
	var curChar = {
		id: charID,
		name: "",
		reputation: 0,
		knowlege: 0,
		sanity: 0
	};

	// get the Character's Attributes from the database and display on the screen
	updatePlayerAttributesView();
	// hang events on the "next" buttons
	$("#next1").on("click", function () {
		handleQuestionSelection("question1");
	});
	$("#next2").on("click", function () {
		handleQuestionSelection("question2");
	});
	$("#next3").on("click", function () {
		handleQuestionSelection("question3");
	});
	$("#next4").on("click", function () {
		handleQuestionSelection("question4");
	});
	$("#next5").on("click", function () {
		handleQuestionSelection("question5");
	});
	$("#next6").on("click", function () {
		handleQuestionSelection("question6");
	});

	// Intialize the game with hidden Divs
	$("#question1").hide();
	$("#question2").hide();
	$("#question3").hide();
	$("#question4").hide();
	$("#question5").hide();
	$("#question6").hide();

	switch(currentQuestion) {
		case ("question2"):
			$("#question2").show();
			$(".stepImage").attr("src", "images/nick_the_lounge_singer.jpg");
			break;
		case ("question3"):
			$("#question3").show();
			$(".stepImage").attr("src", "images/McGill_Stapler.jpg");
			break;
		case ("question4"):
			$("#question4").show();
			$(".stepImage").attr("src", "images/tuxedo_cake.jpg");
			break;
		case ("question5"):
			$("#question5").show();
			$(".stepImage").attr("src", "images/copier.png");
			break;
		case ("question6"):
			$("#question6").show();
			$(".stepImage").attr("src", "images/dont-make-me-go-all-caps-on-you.jpg");
			break;
		case ("endGame"):
			$(".stepImage").remove();
		default:
			$("#question1").show();
			$(".stepImage").attr("src", "images/golden-parachute.gif");
			break;
	}

	function handleQuestionSelection(gameQuestion) {

		// store condition of checked radio options
		var Q1 = $('input:radio[name="Step1"]:checked').val();
		var Q2 = $('input:radio[name="Step2"]:checked').val();
		var Q3 = $('input:radio[name="Step3"]:checked').val();
		var Q4 = $('input:radio[name="Step4"]:checked').val();
		var Q5 = $('input:radio[name="Step5"]:checked').val();
		var Q6 = $('input:radio[name="Step6"]:checked').val();

		//show/hide the correct questions 
		switch (gameQuestion) {
			case "question1":
			
			currentQuestion = "question2";
				if (Q1 == "option1") {
					curChar.knowlege++;
					curChar.power--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				} else if (Q1 == "option2") {
					curChar.power++;
					curChar.sanity--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				} else if (Q1 == "option3") {
					curChar.sanity++;
					curChar.knowlege--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				}
				break;

			case "question2":				
				currentQuestion = "question3";

				if (Q2 == "option1") {
					curChar.knowlege++;
					curChar.power--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				} else if (Q2 == "option2") {
					curChar.power++;
					curChar.sanity--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				} else if (Q2 == "option3") {
					curChar.sanity++;
					curChar.knowlege--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				}

				break;

			case "question3":
				
				currentQuestion = "question4";

				if (Q3 == "option1") {
					curChar.knowlege++;
					curChar.power--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				} else if (Q3 == "option2") {
					curChar.power++;
					curChar.sanity--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				} else if (Q3 == "option3") {
					curChar.sanity++;
					curChar.knowlege--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				}

				break;

			case "question4":
				
				currentQuestion = "question5";

				if (Q4 == "option1") {
					curChar.knowlege++;
					curChar.power--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				} else if (Q4 == "option2") {
					curChar.power++;
					curChar.sanity--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				} else if (Q4 == "option3") {
					curChar.sanity++;
					curChar.knowlege--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				}

				break;

			case "question5":
				currentQuestion = "question6";

				if (Q5 == "option1") {
					curChar.knowlege++;
					curChar.power--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				} else if (Q5 == "option2") {
					curChar.power++;
					curChar.sanity--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				} else if (Q5 == "option3") {
					curChar.sanity++;
					curChar.knowlege--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, currentQuestion)
				}

				break;

			case "question6":
				if (Q6 == "option1") {
					curChar.knowlege++;
					curChar.power--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, "endGame")
				} else if (Q6 == "option2") {
					curChar.power++;
					curChar.sanity--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, "endGame")
				} else if (Q6 == "option3") {
					curChar.sanity++;
					curChar.knowlege--;
					updateCharacter(curChar.id, curChar.knowlege, curChar.sanity, curChar.power, "endGame")
				}
				endGame();
				break;
			default:
				//this should log an error **TODO**
				break;
		}
		return;
	}

	function updateCharacter(charID, knowlege, sanity, power, currentQuestion) {
		var updatedCharacter = {
			id: charID,
			name: name,
			power: power,
			knowlege: knowlege,
			sanity: sanity
		};

		updateCharacter.name = name;
		updateCharacter.power = power;
		updateCharacter.knowlege = knowlege;
		updateCharacter.sanity = sanity;

		if (currentQuestion === "endGame") {
			$.ajax({
				method: "PUT",
				url: "/api/updateCharacter",
				data: updatedCharacter
			});
		} else {
			$.ajax({
				method: "PUT",
				url: "/api/updateCharacter",
				data: updatedCharacter
			}).then($(location).attr('href',"/game?charID=" + curChar.id + "&q=" + currentQuestion));
		}
	}

	function updatePlayerAttributesView() {
		$.get("/api/character/" + curChar.id, function (data) {
			$("#characterName").text(data[0].name);
			$("#characterPower").text(data[0].power);
			$("#characterKnowledge").text(data[0].knowlege);
			$("#characterSanity").text(data[0].sanity);

			//update the curChar obj to be used by the rest of the app
			curChar.name = data[0].name;
			curChar.power = data[0].power;
			curChar.knowlege = data[0].knowlege;
			curChar.sanity = data[0].sanity;
		})
	}


	// Function to be run after the timer is up
	function endGame() {
		$(".stepImage").remove();
		$("#question1").hide();
		$("#question2").hide();
		$("#question3").hide();
		$("#question4").hide();
		$("#question5").hide();
		$("#question6").hide();
		$("#characterAttributesSection").hide();
		

		console.log("knowlege=" + curChar.knowlege);
		console.log("power=" + curChar.power);
		console.log("sanity=" + curChar.sanity);
		
		if ( curChar.power > curChar.knowlege && curChar.power > curChar.sanity) {
			$("#ending1").show();
			alert("That's a lot of power!!!")
		}
		if ( curChar.sanity > curChar.knowlege && curChar.sanity > curChar.power) {
			$("#ending3").show();
			alert("That's a lot of sanity!!!")
		}
		if ( curChar.knowlege > curChar.power && curChar.knowlege > curChar.sanity) {
			$("#ending4").show();
			alert("That's a lot of knowledge!!!")
		}
		if (curChar.knowlege === curChar.power && curChar.power === curChar.sanity) {
			$("#ending2").show();
			alert("I'm not sure who wins.  Probably your manager.")
		}
    }
});
