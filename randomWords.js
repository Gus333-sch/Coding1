const words = ["apple", "banana", "cherry", "orange", "abricot", "grape", "kiwi"];

function generateRandomWord() {
  
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];

  document.getElementById("wordDisplay").innerText = randomWord;

}
