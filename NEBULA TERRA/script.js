let answer = "";

// runs the beginning of the game
function start() {
  let answer = document.getElementById("textInput").value;
  console.log("Type OK to start");
  if (
    answer === "ok" ||
    answer === "OK" ||
    answer === "Ok" ||
    answer === "oK"
  ) {
    document.getElementById("firstInput").style.display = "none";
    document.getElementById("secondInput").style.display = "";
    document.getElementById("textbox").innerHTML =
      "Pick Your Class: Barbarian, Rouge, Knight";
    console.log(answer);
  } else {
    document.getElementById("textbox").innerHTML = "How did you fail? Type OK";
    console.log("How did you fail? Type OK");
    console.log(answer);
  }
}

//pick a class here
function classPick() {
  let answer = document.getElementById("textInput").value;
  if (
    (answer === "rouge") |
    (answer === "Rouge") | 
    (answer === "ROUGE")) {
    document.getElementById("textbox").innerHTML =
      "You have chosen the quick but fragile Rouge";
    health = 80;
    speed = 7;
    strength = 4;
    console.log("Pick Your Class: Barbarian, Rouge, Knight");
    console.log(answer);
    console.log("You have chosen the quick but fragile Rouge");
    console.log(
      "Health: " + health + " Speed: " + speed + " Strength: " + strength
    );
  } else if (
    (answer === "knight") |
    (answer === "Knight") |
    (answer === "KNIGHT")
  ) {
    document.getElementById("textbox").innerHTML =
      "You have chosen the sturdy Knight";

    health = 100;
    speed = 5;
    strength = 5;
    console.log("Pick Your Class: Barbarian, Rouge, Knight");
    console.log(answer);
    console.log("You have chosen the sturdy Knight");
    console.log(
      "Health: " + health + " Speed: " + speed + " Strength: " + strength
    );
  } else if (
    (answer === "barbarian") |
    (answer === "Barbarian") |
    (answer === "BARBARIAN")
  ) {
    document.getElementById("textbox").innerHTML =
      "You have chosen the mighty Barbarian";
    health = 125;
    speed = 4;
    strength = 7;
    console.log("Pick Your Class: Barbarian, Rouge, Knight");
    console.log(answer);
    console.log("You have chosen the mighty Barbarian");
    console.log(
      "Health: " + health + " Speed: " + speed + " Strength: " + strength
    );
  } else {
    document.getElementById("textbox").innerHTML =
      "Type your class: Barbarian, Rouge, Knight";
    console.log("Type your class: Barbarian, Rouge, Knight");
    console.log(answer);
  }
}
