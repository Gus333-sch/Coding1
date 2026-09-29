const words = ["summit", "peak", "ridge", "glacier", "avalanche", "cliff", "boulder",
"trail", "basecamp", "altitude", "cliffside", "crevasse", "slope",
"sherpa", "expedition", "alpine", "rugged", "frostbite", "ascent", "trek"];

function generateRandomWord() {
  
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];

  document.getElementById("wordDisplay").innerText = randomWord;

}
