async function getMotorcycles(){
    let response = await fetch("http://localhost:3000/api/motorcycles");
    let motoJSON = await response.json();
    let motoDiv = document.getElementById("motorcycle-list");

    for(i in motoJSON){
        let moto = motoJSON[i];
        motoDiv.append(getMotoItem(moto));
    }
}

function getMotoItem(moto){
    let motoSection = document.createElement("section");
    motoSection.classList.add("moto-section");

    let h3Elem = document.createElement("h3");
    h3Elem.textContent = moto.name;
    motoSection.append(h3Elem);

    let imgElem = document.createElement("img");
    imgElem.src = "http://localhost:3000/" + moto.img;
    motoSection.append(imgElem);

    let infoSection = document.createElement("section");
    motoSection.append(infoSection);
    infoSection.classList.add("info-section");

    let leftInfo = document.createElement("section");
    infoSection.append(leftInfo);
    leftInfo.classList.add("left-info");

    let pEngine = document.createElement("p");
    pEngine.textContent = `Engine Configuration: ${moto.engine}`;
    leftInfo.append(pEngine);

    let pCC = document.createElement("p");
    pCC.textContent = `CC: ${moto.cc}`;
    leftInfo.append(pCC);

    let pHP = document.createElement("p");
    pHP.textContent = `Horsepower: ${moto.hp}`;
    leftInfo.append(pHP);

    let rightInfo = document.createElement("section");
    infoSection.append(rightInfo);
    rightInfo.classList.add("right-info");

    let pDim = document.createElement("p");
    pDim.textContent = `Dimensions:`
    rightInfo.append(pDim);

    let ulElem = document.createElement("ul");
    rightInfo.append(ulElem);
    let dimArr = ["Length: ", "Width: ", "Height: "];
    for (i in moto.dimensions) {
        let liElem = document.createElement("li");
        liElem.textContent = `${dimArr[i]}${moto.dimensions[i]} in.`;
        ulElem.append(liElem);
    }

    return motoSection;
}

window.onload = function(){
    getMotorcycles();
}