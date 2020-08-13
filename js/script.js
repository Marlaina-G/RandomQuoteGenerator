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
    citation: "Unknown", //where it's from
    year: "Unknown",
    image: "images/thomasSowell.jpg",
    tag: "Economy", //category
    bibliography: "https://www.goodreads.com/author/quotes/2056.Thomas_Sowell",
  },
  {
    quote:
      "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
    source: "Uknown", //who said it
    citation: "Uknown", //where it's from
    year: "Uknown",
    image: "images/unknown.jpg",
    tag: "Knowledge", //category
    bibliography:
      "https://www.treasurequotes.com/quotes/better-to-remain-silent-and-be-thought-a-fool",
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
      "https://www.sweetyhigh.com/read/tiana-princess-and-the-frog-quotes-captions-010419",
  },
  {
    quote: "I'm gonna make him an offer he can't refuse.",
    source: "Don Vito Corleone", //who said it
    citation: "The Godfather", //where it's from
    year: 1972,
    image: "images/donVitoCorleone.jpg",
    tag: "Movie", //category
    bibliography: "https://www.rottentomatoes.com/m/godfather/quotes/",
  },
  {
    quote: "This is business. Not personal.",
    source: "Tom Hagen", //who said it
    citation: "The Godfather", //where it's from
    year: 1972,
    image: "images/tomHagen.jpg",
    tag: "Movie", //category
    bibliography: "https://www.rottentomatoes.com/m/godfather/quotes/",
  },
  {
    quote:
      "I'm a Cajun, bro. Born and bred in the bayou! Y'all not from 'round here, are ya?",
    source: "Ray", //who said it
    citation: "The Princess and the Frog", //where it's from
    year: 2009,
    image: "images/ray.jpg",
    tag: "Movie", //category
    bibliography: "https://www.imdb.com/title/tt0780521/characters/nm0191906",
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote

/***
 * `printQuote` function
 ***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
