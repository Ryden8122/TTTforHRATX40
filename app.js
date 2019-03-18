//What if we made a for loop that drew out table for us?
//Try parentNode.append();

document.addEventListener("DOMContentLoaded", function(e){
  let targetDiv = document.getElementById("app");
  let greetingDiv = document.createElement("div");
  let newGreeting = document.createTextNode("Greetings from apps.js");

  greetingDiv.appendChild(newGreeting);

  targetDiv.appendChild(greetingDiv);
})