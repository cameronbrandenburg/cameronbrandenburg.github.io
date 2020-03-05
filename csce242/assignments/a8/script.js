// Finds the position in the quote array and then displays the next quote
function loopQuotes() {
    let quoteNum = -1;
    for (let i=0; i<quoteArr.length; ++i) {
        if (quote.innerHTML == quoteArr[i])
            quoteNum = i;
    }
    console.log(quoteNum);
    if (quoteNum >= 4) {
        quote.innerHTML = quoteArr[0];
    }
    else {
        quote.innerHTML = quoteArr[++quoteNum];
    }
}

// An array of 5 quotes
const quoteArr = [
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. - Bernard M. Baruch",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "A room without books is like a body without a soul. - Marcus Tullius Cicero",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
    "Be the change that you wish to see in the world. - Mahatma Gandhi"
];

const quote = document.getElementById("quote");
// Displays the first quote on page load
quote.innerHTML = quoteArr[0];
// Loops through the quote array every 2 seconds
setInterval(loopQuotes, 2000);

function displayRainbow() {
    // Displays all colors from the color array
    if (colorArr.length > 0) {
        let color = colorArr.shift();
        let strand = document.getElementById(color);
        strand.classList.remove("hidden");
        strand.style.background = color;
    }
    // When the color array is out of colors, display the pot of gold image
    else {
        const gold = document.getElementById("gold");
        gold.classList.remove("hidden");
        return;
    }
    
    
}

// Used to start the displayRainbow function
// Needed because without it, the function starts without the button being clicked
function startRainbow() {
    setInterval(displayRainbow, 100);
}

// An array of colors - for some reason violet is not one of them
const colorArr = ["red", "orange", "yellow", "green", "blue", "indigo"];

const btnRainbow = document.getElementById("btn-rainbow");
btnRainbow.onclick = startRainbow;