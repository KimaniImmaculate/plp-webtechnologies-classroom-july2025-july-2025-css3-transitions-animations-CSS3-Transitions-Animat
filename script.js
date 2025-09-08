// Array of motivational quotes
const quotes = [
  "Believe in yourself 🌟",
  "Every day is a second chance ✨",
  "Dream big, work hard 💪",
  "Stay positive, work hard, make it happen 🌸",
  "The best time for new beginnings is now 🌿",
  "You are stronger than you think 💖"
];

// Function to get a random quote (returns a string)
function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length); 
  return quotes[index]; // Return value
}

// Function to create a floating quote element
function createFloatingQuote(text) {
  const quote = document.createElement("div");
  quote.classList.add("quote");

  // Randomly choose animation direction
  if (Math.random() > 0.5) {
    quote.classList.add("float-up");
  } else {
    quote.classList.add("float-down");
  }

  quote.innerText = text;

  // Add to quote area
  document.getElementById("quoteArea").appendChild(quote);

  // Remove after animation ends
  setTimeout(() => {
    quote.remove();
  }, 5000);
}

// Button click handler
document.getElementById("quoteBtn").addEventListener("click", () => {
  const quoteText = getRandomQuote(); // Call function
  createFloatingQuote(quoteText);     // Pass as parameter
});

