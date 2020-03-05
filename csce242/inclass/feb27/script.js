function showToys() {
    let toysResult = document.getElementById("toys-result");
    toysResult.innerHTML = "";
    let toyArr = ["Drum", "Ball", "Car", "Bike"];
    let ulElem = document.createElement("ul");
    toysResult.append(ulElem);

    // Loop through and display each element of the toy array in a ul list
    for(let i in toyArr) {
        let liElem = document.createElement("ul");
        liElem.textContent = toyArr[i];

        // Highlight every other item
        if (i % 2 == 0) {
            liElem.classList.add("highlight");
        }
        ulElem.append(liElem);
    }

}

let color = "red";

function toggleToys() {
    let toysResult = document.getElementById("toys-result");
    toysResult.classList.toggle("hidden");
    toysResult.style.backgroundColor = color;

    if (color == "red" && !toysResult.classList.contains("hidden")) {
        color = "green";
    }
    else if (color == "green" && !toysResult.classList.contains("hidden")) {
        color = "red";
    }
    
}

//const btnToys = document.getElementById("btn-toys");
// Displays the toy array list on page load
showToys();
// Toggles displaying the toy array list when the button is clicked
//btnToys.onclick = toggleToys;

// Toggle the toy list every 2 seconds
setInterval(toggleToys, 2000);