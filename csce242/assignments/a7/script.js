let offset = 25;

// Function that moves an image across the screen and alternates between two images
function runFunction() {
    console.log("runFunction");
    const image = document.getElementById("running-man");
    offset += 25;

    let root = document.documentElement;
    root.style.setProperty('--rMargin', offset + "px");

    // Alternates the image every click
    if (offset % 2 == 0) {
        image.src = "images/running-man.png";
    }
    else {
        image.src = "images/walking-man.png";
    }
}

const runningMan = document.getElementById("running-man");
runningMan.onclick = runFunction;

// Function that displays a level on a gradient proportional to the amount entered in an input box
function thermometerDisplay() {
    console.log("thermometerDisplay");
    const goal = 10000.00;
    const funds = document.getElementById("txt-funds").value;

    let percentage = (funds/goal)*100.00;

    let root = document.documentElement;
    root.style.setProperty('--gradient', "linear-gradient(0deg, rgba(249,13,3,1) 0%, rgba(249,13,3,1) " + percentage + "%, rgb(255, 255, 255) " + percentage + "%, rgba(255,255,255,1) 100%)");
}

const btnDisplayFunds = document.getElementById("btn-display-funds");
btnDisplayFunds.onclick = thermometerDisplay;