//#region Global Variables
let answer = "";
let characterClass = "";
//#endregion


//#region Start
// runs the beginning of the game 1st input 
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
      "Pick Your Class: Barbarian, Rogue, Knight";
    console.log(answer);
  } else {
    document.getElementById("textbox").innerHTML = "How did you fail? Type OK";
    console.log("How did you fail? Type OK");
    console.log(answer);
  }
}
//#endregion


//#region Runs Picking a Class 
function classPick() {
  let answer = document.getElementById("textInput").value;
  if (
    (answer === "rogue") |
    (answer === "Rogue") | 
    (answer === "ROGUE")) {
    document.getElementById("textbox").innerHTML =
      "You have chosen the quick but fragile Rogue";
    health = 80;
    speed = 7;
    strength = 4;
    console.log("Pick Your Class: Barbarian, Rogue, Knight");
    console.log(answer);
    console.log("You have chosen the quick but fragile Rogue");
    console.log(
      "Health: " + health + " Speed: " + speed + " Strength: " + strength
    );
    document.getElementById("secondInput").style.display = "none";
    document.getElementById("thirdInput").style.display = "";
    characterClass = "Rogue"
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
    console.log("Pick Your Class: Barbarian, Rogue, Knight");
    console.log(answer);
    console.log("You have chosen the sturdy Knight");
    console.log(
      "Health: " + health + " Speed: " + speed + " Strength: " + strength
    );
    document.getElementById("secondInput").style.display = "none";
    document.getElementById("thirdInput").style.display = "";
    characterClass = "Knight"
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
    console.log("Pick Your Class: Barbarian, Rogue, Knight");
    console.log(answer);
    console.log("You have chosen the mighty Barbarian");
    console.log(
      "Health: " + health + " Speed: " + speed + " Strength: " + strength
    );
    document.getElementById("secondInput").style.display = "none";
    document.getElementById("thirdInput").style.display = "";
  } else {
    document.getElementById("textbox").innerHTML =
      "Type your class: Barbarian, Rouge, Knight";
    console.log("Type your class: Barbarian, Rouge, Knight");
    console.log(answer);
    characterClass = "Barbarian"
  }
}
//#endregion


//after character selection 3rd input 
function gamestart() {
  let answer = document.getElementById("textInput").value;
  document.body.style.backgroundImage = "url('images/background2.gif')"; 
  document.getElementById("textbox").innerHTML =
      "For all you have remembered for the past century is falling, falling from the skies. Reason given this punishment long forgotten. " + `All you remember is that you were a ${characterClass}. ` + "You always wondered when it would end. having no hope for the past dozen years you suddenly realize the ground is coming near. The impact makes the land shake and kicks up a thick cloud of dirt. You stand up to find yourself in a forest caked in fog. You see a dim fiery light nearby. Your goal is to find who did this to you and why.";
  document.getElementById("thirdInput").style.display = "none";
  document.getElementById("fourthInput").style.display = "";

//4th input 
    if (answer === 'examine area') {
     document.getElementById("textbox").innerHTML = 'You examine the area carefully, as you are sifting through the dirt you feel something tough. You dig away the dirt that surrounds a stone pedastal the pedastal is splathered with blood all over, You notice some text and read what it says "Those whom fell, those who do not belong. The collapsed. They are demonic beings of hatred filled with malice to the very soul" There is a statue of a human being on the pedastal. The human is holding some sort of sword. You return back to your earlier position '
   } else if(answer === 'walk to light'){
     //call another function
     document.getElementById("textbox").innerHTML = 'You start walking towards the light, although dimmed by the fog the ligh remains tracable. You walk for what feels like hours. You push through the leaves of a large tree. You walk to it to find about 10 standing torches wrapped in a circle in a clearing. You see many signs that there was activity here recently, you find abnormally sized footprints of some bipedal creature. In between the torches is a small wooden hatch. Yet there is also a path on the opposite side that you entered from, it is narrow and consist mostly of dirt and mud'
   }


}







 
