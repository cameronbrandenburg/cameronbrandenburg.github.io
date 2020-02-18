// Toggles the navBar
function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

// Starts the Nav Bar hidden
const navBar = document.getElementById("main-nav-items")
navBar.classList.add("hidden");

// Toggles the navBar when clicked
const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;

// Checks if a value is blank
function isBlank(data, errorSpanId){
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

// Returns true if a value is an integer
function isInt(value) {
    return !isNaN(value) && 
           parseInt(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
  }

// Sorts a 2D array by the 2nd column
function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

// Finds the and prints out a list of names from oldest to youngest
function findOldest() {
    console.log("findOldest function executed")
    
    const name1 = document.getElementById("txt-name1").value;
    const age1 = document.getElementById("txt-age1").value;
    const name2 = document.getElementById("txt-name2").value;
    const age2 = document.getElementById("txt-age2").value;
    const name3 = document.getElementById("txt-name3").value;
    const age3 = document.getElementById("txt-age3").value;

    let output = document.getElementById("ex1-result");

    // Check for errors
    const errorName1 = isBlank(name1, "error-name1");
    const errorAge1 = isBlank(age1, "error-age1");
    const errorName2 = isBlank(name2, "error-name2");
    const errorAge2 = isBlank(age2, "error-age2");
    const errorName3 = isBlank(name3, "error-name3");
    const errorAge3 = isBlank(age3, "error-age3");
    if (errorName1 || errorAge1 || errorName2 || errorAge2 || errorName3 || errorAge3) {
        output.innerHTML = `Inavlid Information`;
    }
    else if (!isInt(age1) || !isInt(age2) || !isInt(age3)) {
        output.innerHTML = `Inavlid Information`;
    }
    else {
        // Sort the information from oldest to youngest
        let nameArr = [[name1, age1], [name2, age2], [name3, age3]];
        nameArr.sort(sortFunction);

        output.innerHTML = `Oldest to youngest: ${nameArr[0][0]}, ${nameArr[1][0]}, ${nameArr[2][0]} `;
    }
    
    
}

// Calls the findOldest function when clicked
const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = findOldest;

// Changes the gradient thermometer display in increments of 25% inclusive
function displayFunds() {
    let grad = document.getElementById("grad");
    const funds = document.getElementById("txt-funds").value;
    console.log(funds);
    const goal = 10000.00;

    grad.classList.remove("quarter", "half", "threequarters", "full")

    if (funds >= goal) {
        grad.classList.add("full");
    }
    else if (funds >= goal*0.75) {
        grad.classList.add("threequarters");
    }
    else if (funds >= goal*0.5) {
        grad.classList.add("half");
    }
    else if (funds >= goal*0.25) {
        grad.classList.add("quarter");
    }
}

const btnDisplayFunds = document.getElementById("btn-display-funds");
btnDisplayFunds.onclick = displayFunds;
