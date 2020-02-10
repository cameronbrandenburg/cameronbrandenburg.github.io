function displayEmotion() {
    // Gather all 3 pieces of information and write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    let displayInfo = document.getElementById("p-display");

    /*
    let price = parseFloat(document.getElementById("txt-price").value;
    parseInt(...);
    let tax = document.getElementById("tax-span").textContent(); // parenthesis or not
    */
    
    console.log(firstName + ", " + favColor + ", " + emotion);

    displayInfo.innerHTML = `${firstName} your fav color is  ${favColor} and you are ${emotion}`;
}

const btnDisplay = document.getElementById("btn-display");

btnDisplay.onclick = displayEmotion;

