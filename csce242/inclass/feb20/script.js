let width = 100;

function displayEmotion() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    
    let displayP = document.getElementById("ex1-result");
    let displayEmotion = document.getElementById("ex1-emotion");

    //clear all errors before

    //validate data
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError) return;

    //display results
    displayP.innerHTML = `Welcome ${firstName}!<br>You are ${emotion} today`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red", "green", "yellow", "blue");
    displayEmotion.classList.add(favColor.toLowerCase());
}

function isBlank(data, errorSpanId){
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function getEmoji(emotion){
    const emoCI = emotion.toLowerCase();

    if(emoCI == "happy")
    {
        return ":)"
    }
    else if(emoCI == "sad"){
        return ":(";
    }
    else if(emoCI == "silly"){
        return ":p";
    }
    else if(emoCI == "angry"){
        return ">:|";
    }

    return "";
}

function isNotValidNum(data, errorSpanId){
    if(isNaN(data)) {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }
    return false;
}

function countTo() {
    let start = parseInt(document.getElementById("txt-start").value);
    let end = parseInt(document.getElementById("txt-end").value);
    //let countOutput = document.getElementById("ex3-display");
    console.log("Counting from: "+start+" to "+end);

    // Clears both errors
    document.getElementById("error-start").classList.add("hidden");
    document.getElementById("error-end").classList.add("hidden");

    // Clears the output
    //countOutput.innerHTML = ``;

    // If either number is not a number show errors
    if (isNotValidNum(start, "error-start") | isNotValidNum(end, "error-end")) return;

    // If the end is <= to the start, show an error
    if (start >= end) {
        countOutput.innerHTML = `End num must be larger than start num`;
        return;
    }

    /*countOutput.innerHTML = `Counting:<ul>`;
    for (let i=start; i<=end; ++i) {
        countOutput.innerHTML += `<li>${i}</li>`;
    }
    countOutput.innerHTML += `</ul>All done!`;*/

    let h3Elem = document.createElement("h3");
    h3Elem.textContent = "Counting:"
    btnCount.after(h3Elem);

    let ulElem = document.createElement("ul");
    h3Elem.after(ulElem);

    for (let i=start; i<=end; ++i) {
        let liElem = document.createElement("li");
        liElem.textContent = i;
        ulElem.append(liElem);
    }

    
}

const btnCount = document.getElementById("btn-count");
btnCount.onclick = countTo;

function doStuff() {
    // Creates the title and adds it
    let cookieTitle = document.createElement("h3");
    cookieTitle.textContent = "I love cookies";
    this.after(cookieTitle); // this refers to the object that called the function - the button here

    // Creates the ul and adds it
    let ulElem = document.createElement("ul");
    cookieTitle.after(ulElem);

    // Styles the list
    ulElem.classList.add("cookie-list");

    // Populates the list
    for (let i=5; i>0; --i) {
        let liElem = document.createElement("li");
        liElem.textContent = i;
        ulElem.append(liElem);
    }
    
    // Adds end paragraph
    let endTitle = document.createElement("p");
    endTitle.textContent = "Cookie Time!";
    ulElem.after(endTitle);

}

const btnStuff = document.getElementById("btn-stuff");
btnStuff.onclick = doStuff;

function growBox() {
    console.log(`growBox function`);
    width +=10;
    document.getElementById("box").style.setProperty('--dim', width + "px");
}

const btnGrow = document.getElementById("btn-grow");
btnGrow.onclick = growBox;

function shrinkBox() {
    console.log(`shrinkBox function`);
    width -= 10;
    document.getElementById("box").style.setProperty('--dim', width + "px");
}

const btnShrink = document.getElementById("btn-shrink");
btnShrink.onclick = shrinkBox;

function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;