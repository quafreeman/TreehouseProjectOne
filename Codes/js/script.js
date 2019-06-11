// Quotes, Sources, Citation, Year

var quotes = [
{
  quote: 'If there is a struggle, there is no progress.',
  source: "Fredrick Douglass",
  citation: 'West India Emancipation, Canadaigua, New York',
  year: '1857',
  tag:'Speech' 
},
{
  quote: 'Its a marathon, not a sprint, but I still gotta win the race.',
  source: 'Drake',
  tag:'Inspiration'
},
{
  quote:'If you are walking down the right path and you are willng to  keep walking, eventually you will make progress',
  source:'Barack Obama',
  tag:'Inspiration'
},
{
  quote: 'The most alluring thing a woman can have is confidence.',
  source:'Beyonce',
  tag:'Women Empowerment'
},
{
  quote:'The best and most beautiful things in the world cannot be seen or even touched- they must be felt with the heart',
  source:'Helen Keller'

},
  

];


//This is the function I used to generate my getRandomQuote.

function getRandomQuote() {
  //** */This is my randomQuote generator
  var quoteIndex = Math.floor(Math.random() * quotes.length)
  //this variable returning my quoteIndex
  return quotes[quoteIndex];

}


//This function below is calling my printQuote

function printQuote() {
  //** */creating my "wrote" variable into my empty string  
  var wrote=""; 
  //** */assigning my message variable to my getRandomQuote
  var message = getRandomQuote();
  wrote+='<p class="quote">'+message.quote+'</p>';
  wrote+='<p class="source">'+message.source;
  // allowing citation, year, and tag on quotes without them to not be posted as "undefined"
 if (message.citation) {
    wrote+='<span class="citation">'+message.citation+'</span>' 
 };
 if (message.year) {
    wrote+='<span class="year">'+message.year+'</span>'
 }
    if (message.tag) {
      wrote+='<p class="tag">'+message.tag+'</p>'
    }
  wrote+="</p>";
  document.getElementById('quote-box').innerHTML=wrote
  random_bg_color();
}

//This function generates my background color

function random_bg_color() {
  //** */This is my background color generator
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
//This function Prints Quote every 30 seconds
setInterval(function(){ printQuote(); }, 3000);


//This listens for a click to load and print the quotes.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);