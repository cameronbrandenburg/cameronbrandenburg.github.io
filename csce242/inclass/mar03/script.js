class Dog {

    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get details() {
        return `${this.title} is a  ${this.breed}`;
    }

    get item() {
        let dogSection = document.createElement("section");
        dogSection.classList.add("dog");
        
        // Create Image
        let dogImg = document.createElement("img");
        dogImg.src = `images/${this.pic}`;
        dogSection.append(dogImg);

        let infoSection = document.createElement("section");
        dogSection.append(infoSection);

        // Create title
        let h3Elem = document.createElement("h3");
        h3Elem.textContent = `${this.title}`;
        infoSection.append(h3Elem);

        // Create list
        let ulElem = document.createElement("ul");
        infoSection.append(ulElem);
        let liElem1 = document.createElement("li");
        liElem1.textContent = `Breed: ${this.breed}`
        ulElem.append(liElem1);
        let liElem2 = document.createElement("li");
        liElem2.textContent = `Color: ${this.color}`;
        ulElem.append(liElem2);
        let liElem3 = document.createElement("li");
        liElem3.textContent = `Age: ${this.age}`;
        ulElem.append(liElem3);
        let liElem4 = document.createElement("li");
        liElem4.textContent = `Size: ${this.size}`;
        ulElem.append(liElem4);

        return dogSection;
    }

}

// After DOM (Document Object Model) has been loaded
// After all the HTML elements have been rendered
window.onload = function() {
    let dogArr = [];
    dogArr.push(new Dog("Tipsy", "Yorkie", "Brown", 5, "small", "yorkie.jpg"));
    dogArr.push(new Dog("Fred", "Golden Retriever", "Yellow", 2, "medium", "golden-retriever.jpg"));
    dogArr.push(new Dog("Gerald", "Laborador Retriever", "Yellow", 1, "medium", "lab.jpg"));

    let dogListDiv = document.getElementById("dog-list");
    for (let i=0; i<dogArr.length; ++i) {
        dogListDiv.append(dogArr[i].item);
    }
}