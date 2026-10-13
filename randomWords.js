const words = ["summit", "peak", "ridge", "glacier", "avalanche", "cliff", "boulder",
"trail", "basecamp", "altitude", "cliffside", "crevasse", "slope",
"sherpa", "expedition", "alpine", "rugged", "frostbite", "ascent", "trek"];
// list of words the generator picks from
function generateRandomWord() {
  
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex]; // pick a random number from 0 up to the number of words

  document.getElementById("wordDisplay").innerText = randomWord; // show the chosen word on the page

}
