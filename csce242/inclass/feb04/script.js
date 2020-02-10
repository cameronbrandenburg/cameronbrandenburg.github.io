/* function showBoy() {
    console.log("Boy Fuction");
    title.innerHTML = "Boy Stuff";
    // or document.getElementById("title").innerHTML = "Boy Stuff";
    item1.innerHTML = "Trucks";
    item2.innerHTML = "Trains";
    item3.innerHTML = "Tools";
}

function showGirl() {
    console.log("Girl Fuction");
    title.innerHTML = "Girl Stuff";
    item1.innerHTML = "Dolls";
    item2.innerHTML = "Sparkles";
    item3.innerHTML = "Pink";
}

let btnBoy = document.getElementById("btn-boy");
let btnGirl = document.getElementById("btn-girl");
let title = document.getElementById("title");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");

btnBoy.onclick = showBoy;
btnGirl.onclick = showGirl; */

// 4 or more states that cycles through
/*function frownToSmile() {
    console.log(emoji.innerHTML);
    if (emoji.innerHTML == "&#128577") {
        emoji.innerHTML = "&#128578";
    }
    else if (emoji.innerHTML == "&#128578") {
        emoji.innerHTML = "&#128577";
    }

    //document.getElementById("emoji").innerHTML = "&#128578";
}*/

function emojiChanger() {
    console.log(emoji.innerHTML);
    let first = emojis.shift();
    emoji.innerHTML = first;
    emojis.push(first);
}

let emojis = ['&#128578', '&#128579', '&#128580', '&#128577']
let emoji = document.getElementById("emoji");

emoji.onclick = emojiChanger;

