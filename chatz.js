const chatbotResponses = {
  "hello": "Hi there! How can I assist you?",
  "default": "I'm not sure how to answer that. Would you like to talk about Mountains.",
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
