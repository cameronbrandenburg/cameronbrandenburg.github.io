function displayEmotion() {
    const color = document.getElementById("txt-color").value;
    let emotion = "";

    console.log(color);

    if (color == "red")
        emotion = "angry";
    else if (color == "blue")
        emotion = "sad";
    else if (color == "green") 
        emotion = "happy";

    let h3Elem = document.createElement("h3");
    h3Elem.textContent = `you are ${emotion}`;
    btnDisplay.after(h3Elem);
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

function displayAnimal() {
    const animal = document.getElementById("txt-animal").value.toLowerCase();
    let h3Elem = document.createElement("h3");
    let imgElem = document.createElement("img");

    if (animal == "horse") {
        h3Elem.textContent = `You like horses`;
        imgElem.src = "images/horse.jpg";
    }

    btnAnimal.after(h3Elem);
    h3Elem.after(imgElem);
}

const btnAnimal = document.getElementById("btn-animal");
btnAnimal.onclick = displayAnimal;