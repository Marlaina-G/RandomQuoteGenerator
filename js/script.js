/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/**********************************************************************************************************************************
                                            I am looking to 'Exceed Expectations.'
**********************************************************************************************************************************/

// Objective: to create a web app that displays 5+ quotes in a specified format

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote:
      "I am remarkably likeable. Few people have ever been as likeable as I am. There is, frankly, no end to my likeability.",
    source: "Mr. Nancy", //who said it
    citation: "Anansi Boys by Neil Gaiman", //where it's from
    year: 2005,
    image: "images/mrNancy.jpeg",
    tag: "Literature", //category
    bibliography:
      "https://www.goodreads.com/work/quotes/1007964-anansi-boys?page=2", // don't display. for source reference only
  },
  {
    quote: "I think Eminem should use Auto-Tune.",
    source: "T-Pain", //who said it
    citation: "MTV Buzzworthy", //where it's from
    year: 2012,
    image: "images/t-pain.jpeg",
    tag: "Music", //category
    bibliography:
      "https://popcrush.com/t-pain-eminem-auto-tune/#:~:text=In%20a%20recent%20interview%20MTV,the%20mainstay%20of%20his%20songs.", // don't display. for source reference only
  },
  {
    quote:
      "One of the great mistakes is to judge policies and programs by their intentions rather than their results.",
    source: "Milton Friedman", //who said it
    citation: "Wall Street Journal", //where it's from
    year: 1975,
    image: "images/milton.jpg",
    tag: "Economy", //category
    bibliography:
      "https://www.wsj.com/articles/notable-quotable-milton-friedman-1444169267#:~:text=From%20an%20interview%20in%20December,intentions%20rather%20than%20their%20results.", // don't display. for source reference only
  },
  {
    quote:
      "It takes considerable knowledge just to realize the extent of your own ignorance.",
    source: "Thomas Sowell", //who said it
    image: "images/thomasSowell.jpg",
    tag: "Economy", //category
    bibliography: "https://www.goodreads.com/author/quotes/2056.Thomas_Sowell", // don't display. for source reference only
  },
  {
    quote:
      "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
    source: "Unknown Author", //who said it
    image: "images/unknown.jpg",
    tag: "Knowledge", //category
    bibliography:
      "https://www.treasurequotes.com/quotes/better-to-remain-silent-and-be-thought-a-fool", // don't display. for source reference only
  },
  {
    quote:
      "If you do your best each and every day, good things are sure to come your way.",
    source: "Princess Tiana", //who said it
    citation: "The Princess and the Frog", //where it's from
    year: 2009,
    image: "images/tiana.png",
    tag: "Movie", //category
    bibliography:
      "https://www.sweetyhigh.com/read/tiana-princess-and-the-frog-quotes-captions-010419", // don't display. for source reference only
  },
  {
    quote: "I'm gonna make him an offer he can't refuse.",
    source: "Don Vito Corleone", //who said it
    citation: "The Godfather", //where it's from
    year: 1972,
    image: "images/donVitoCorleone.jpg",
    tag: "Movie", //category
    bibliography: "https://www.rottentomatoes.com/m/godfather/quotes/", // don't display. for source reference only
  },
  {
    quote: "This is business. Not personal.",
    source: "Tom Hagen", //who said it
    citation: "The Godfather", //where it's from
    year: 1972,
    image: "images/tomHagen.jpg",
    tag: "Movie", //category
    bibliography: "https://www.rottentomatoes.com/m/godfather/quotes/", // don't display. for source reference only
  },
  {
    quote:
      "I'm a Cajun, bro. Born and bred in the bayou! Y'all not from 'round here, are ya?",
    source: "Ray", //who said it
    citation: "The Princess and the Frog", //where it's from
    year: 2009,
    image: "images/ray.jpg",
    tag: "Movie", //category
    bibliography: "https://www.imdb.com/title/tt0780521/characters/nm0191906", // don't display. for source reference only
  },
];

/***
 * `getRandomQuote` function
 ***/

function changeColors() {
  //changes background color with every refresh/reload
  const colors = [
    "#CD5C5C",
    "#F08080",
    "#FA8072",
    "#E9967A",
    "#FFA07A",
    "#000000",
    "#454545",
    "#999999",
    "#800000",
    "#808000",
    "#008080",
    "#800080",
    "#FAEBD7",
    "#FFEBCD",
    "#7FFFD4",
    "#F0F8FF",
    "#DEB887",
    "#3CB371",
  ];
  let color1 = colors.length - 1;
  let color2 = 0;
  let randomColor = Math.floor(Math.random() * (color1 - color2 + 1) + color2);
  let color = colors[randomColor]; //generates a random color based on the inputs provided in the 'colors' array
  document.body.style.backgroundColor = color; // used StackOverflow to aid in setup
  return color;
}

function getRandomQuote() {
  //this function provides a random quote & its properties from the quotes array
  let upperBounds = quotes.length - 1; //random number not to exceed max amount of entries in the 'quotes' array
  let lowerBounds = 0; //random number not to go below 0
  let randomNumber = Math.floor(
    Math.random() * (upperBounds - lowerBounds + 1) + lowerBounds
  );

  let quote = quotes[randomNumber];
  changeColors();

  return quote;
}

/***
 * `printQuote` function
 ***/

let html = "";

function printQuote() {
  //this function displays the quote properties in the specified format below on a web page //
  let quote = getRandomQuote();
  html = `
  <img src="${quote.image}" alt="${quote.source}">
    
  <a class="tag">#${quote.tag}</a>

  <p class="quote">${quote.quote}</p>
    
  <p class="source">${quote.source}  
  `;

  if (quote.citation !== undefined) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year !== undefined) {
    html += `<span class="year">${quote.year}</span>`;
  }

  document.querySelector("div").innerHTML = html;
}

printQuote();

setInterval(function () {
  // used StackOverflow to aid in setup
  //reloads the page with another quote every 15 seconds
  location = "";
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
