async function showBreweries(){
    let response = await fetch('https://api.openbrewerydb.org/breweries');
    let breweriesJSON = await response.json();
    let breweriesSection = document.getElementById("breweries-section");
    
    //loop through the breweries
    for(i in breweriesJSON){
        let brewery = breweriesJSON[i];
        breweriesSection.append(getBreweryItem(brewery));
    }
}

function getBreweryItem(brewery){
    let brewerySection = document.createElement("section");
    brewerySection.classList.add("brewery");

    let aElem = document.createElement("a");
    let h3Elem = document.createElement("h3");
    h3Elem.innerText = brewery.name;
    aElem.append(h3Elem);
    aElem.href = brewery.website_url;
    brewerySection.append(aElem);

    // Brewery Type
    let pType = document.createElement("p");
    pType.textContent = `Type: ${brewery.brewery_type} brewery`;
    brewerySection.append(pType);

    // Phone number
    let pPhone = document.createElement("p");
    let num = brewery.phone.toString();
    let phoneNum = ["(", num.substr(0, 3), ") ", num.substr(3, 3), "-", num.substr(6)].join('');
    pPhone.textContent = `Call: ${phoneNum}`;
    brewerySection.append(pPhone);

    // Address
    brewerySection.append(getBreweryAddress(brewery));

    return brewerySection;
}

function getBreweryAddress(brewery){
    let pAddress = document.createElement("p");
    pAddress.innerHTML += `${brewery.street}<br> ${brewery.city}, ${brewery.state}<br> ${brewery.country} ${brewery.postal_code}`;
    return pAddress;
}

window.onload = function(){
    this.showBreweries();
}