const chatbotResponses = {
  "hello": "Hi there! How can I assist you?",
  "hi": "Hello! How can I help?",
  "hey": "Hey! What's up?",
  "how are you": "I'm just a chatbot, but I'm doing great!",
  "what is your name": "I'm Sherpa, your mountain guide chatbot!",
  "bye": "Goodbye! Happy trails!",
  "goodbye": "See you later!",
  "mountains": "Mountains are amazing - tall, rocky, and full of adventure!",
  "favorite mountain": "I love Mount Everest, the tallest mountain in the world!",
  "hiking": "Hiking is a great way to explore the mountains!",
  "weather": "It's always cold up in the mountains, bring a jacket!",
  "help": "Try saying hello, bye, or ask me about mountains!",
  "thank you": "You're welcome!",
  "thanks": "No problem!",
  "who made you": "I was made for a coding class project!",
  "default": "I'm not sure how to answer that. Would you like to talk about mountains?",
};

function handleUserInput(event){
  if (event.key === 'Enter') {
      const userInput = document.getElementById("userInput").value;
      const chat = document.getElementById("chat");

  // Clear the input field
  document.getElementById("userInput").value = "";

  // Display user's message
  chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

  // Get the chatbot response
  const response = chatbotResponses[userInput.toLowerCase()] || chatbotResponses["default"];

  // Display chatbot response
  chat.innerHTML += `<p><strong>Sherpa:</strong> ${response}</p>`;

  }
}
