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
const quotes = [
  {
    quote: "You can observe a lot just by watching.",
    source: "Yogi Berra",
    citation: "Berra, Yogi (1998). The Yogi Book. New York: Workman Publishing. p. 9.",
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
    citation: "phrase spoken by Mark Atony in Act 3, Scene 1, line 273 of English playwright William Shakespeare's Julius Caesar",
    year: "1599 - 1600"
  },
  {
    quote: "VENI VINI VICI",
    source: "Julius Caesar",
    citation: "According to Suetonius, Caesar displayed the words veni vidi vici in his triumph held over Pontus.",
    year: "46 B.C." 
  },
  {
    quote: "Now, I am become Death, the destroyer of worlds.",
    source: "Bhagavad Gita",
    citation: "https://en.wikipedia.org/wiki/J._Robert_Oppenheimer",
    year: "unknown"
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  for (let i = 0; i < quotes.length; i++) {
    return randomQuote = quotes[randomNumber];
  }
}
const result = getRandomQuote(quotes);
/***
 * `printQuote` function
***/
function printQuote() {
  let html = "";
  html = "<p class='quote'>" + result.quote + "</p>";
  html = "<p class='source'>" + result.source;
  html = "<spanp class='citation'>" + result.citation + "</span>";
  html = "<span class='year'>" + result.year + "</span>";
  html = "</p>";
}
printQuote(result);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);