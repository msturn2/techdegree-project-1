/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// "quotes" is a variable that holds an array of Random Quote objects.
const quotes = [
  {
    quote: "You can observe a lot just by watching.",
    source: "Yogi Berra",
    citation: "The Yogi Book. New York: Workman Publishing. p. 9.",
    year: "1998"
  },
  {
    quote: "If you're going through hell, keep going.",
    source: "Winston Spencer Churchill",
    citation: "Robert M. Langworth. Finest Hour, The Journal of Winston Churchill",
    year: "1940"
  },
  {
    quote: "Cry 'Havoc!', and let slip the dogs of war.",
    source: "William Shakespeare",
    citation: "phrase spoken by Mark Antony in Act 3, Scene 1, line 273 of English playwright William Shakespeare's Julius Caesar",
    year: "1599 - 1600"
  },
  {
    quote: "VENI VINI VICI",
    source: "Julius Caesar",
    citation: "Suetonius",
    year: "46 B.C." 
  },
  {
    quote: "Now, I am become Death, the destroyer of worlds.",
    source: "Bhagavad Gita",
    citation: "https://en.wikipedia.org/wiki/J._Robert_Oppenheimer",
    year: null,
  }
];

// Function to produce a Random Quote.
function getRandomQuote() {
  // "randomQuote" variable generates a random number between 0 and the last index of the "quotes" array.
  const randomQuote = Math.floor(Math.random() * quotes.length);
  // Returns a random Quote from the "quotes" array.
  return quotes[randomQuote];
}

// Function that will pass "randomQuote" variable to index.html.
function printQuote() {
  // Created "selectedQuote" variable in order to pass it the getRandomQuote() function from above to printQuote() function.
  let selectedQuote = getRandomQuote();
  // Created "html" variable to select object iteration properties.
  let html = `<p class="quote">${selectedQuote.quote}</p><p class="source">${selectedQuote.source}`;
  // Created conditional to test if object property exists and build on "html" variable if true.
  if (selectedQuote.citation) {
    html += `<span class="citation">${selectedQuote.citation}</span>`;
  }
  // Ternanry takes into account the possibility of not having a year value.
  selectedQuote.year
  ? html += `<span class="year">${selectedQuote.year}</span></p>`
  : html += `</p>`;
   // Used to push text held in "html" variable to the DOM.
  document.getElementById("quote-box").innerHTML = html;
}
// Final step is to call the function so that it runs!
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);