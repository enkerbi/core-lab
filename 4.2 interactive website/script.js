// The lyrics to be animated
const lyrics = "To the left, to the left, everything you own in a box to the left.";

// Function to split the text into spans and apply animations
function splitTextAnimation(text) {
  const lyricsContainer = document.getElementById('lyrics-line');

  // Split the text into individual words
  const words = text.split(' ');

  // Iterate over each word
  words.forEach((word, index) => {
    // Create a new span element for each word
    const span = document.createElement('span');
    span.textContent = word + ' '; // Add a space after each word
    span.style.animationDelay = `${index * 0.3}s`; // Delay based on the word's position

    // Append the span to the container
    lyricsContainer.appendChild(span);
  });
}

// Call the function to split and animate the lyrics
splitTextAnimation(lyrics);
