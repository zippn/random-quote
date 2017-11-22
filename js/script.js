// Store quotes
var quotes = [
    {
        quote: 'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times',
        source: 'Bruce Lee',
        tags: ['martial arts']

    },


    {
        quote: 'If a man looks at the world when he is 50 the same way he looked at it when he was 20 and it hasn’t changed, then be has wasted 30 years of his life',
        source: 'Muhammad Ali',
        citation: 'The Port Arthur News',
        year: 1974,
        tags: ['martial arts','life advice']

    },
    {
        quote: 'Like I told my last wife, Honey, I never drive faster than I can see, and besides that, it\'s all in the reflexes',
        source: 'Kurt Russell',
        citation: 'Big Trouble in Little China',
        year: 1986,
        tags: ['martial arts','humor']

    },
    {
        quote: 'Gogo may be young, but what she lacks in age, she makes up for in madness',
        source: 'Beatrix Kiddo',
        citation: 'Kill Bill',
        year: 2003,
        tags: ['martial arts','humor']
    },
    {
        quote: 'You don’t need diamonds in the bathroom',
        source: 'Jackie Chan',
        citation: 'Rumble in the Bronx',
        year: 1995,
        tags: ['martial arts','humor']

    }
];
var nInterval;
//returns a random quote in quotes
function getRandomQuote () {
    //get random index 0 to quotes.length
    var randomNum = Math.floor(Math.random()*(quotes.length));
    var quote = quotes[randomNum];
    var output = '<p class="quote">'+quote.quote+'</p>';//get quote
    output += '<p class="source">'+quote.source;//get source

    if(quote.citation!=null){
        output += '<span class="citation">'+quote.citation+'</span>';//add citation
    }
    if(quote.year!=null){
        output += '<span class="year">'+quote.year+'</span>';//add year
    }
    output +='</p>';


    return output;
}

function printQuote() {
    var message = '';
    var div1 = document.getElementById('quote-box');//get quote-box

    message = getRandomQuote();
    div1.innerHTML = message;//enter quotes
    document.body.style.backgroundColor = 'rgb(' + getRGB().join(', ') + ')';//set bgcolor

}
function setChange() {//set interval to printQuote
    nInterv = setInterval(printQuote, 30000);
}
function getRGB() {
    return [Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)];//return rgb
}
printQuote();//print a qutoe
setChange();//trigger change quote every 30 seconds

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, true);

