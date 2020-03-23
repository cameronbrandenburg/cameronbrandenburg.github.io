class Toy {

    constructor(name, price, age, rating, pic) {
        this.name = name;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.pic = pic;
    }

    get item() {
        // Create section
        let toySection = document.createElement("section");
        toySection.classList.add("toy-section");

        // Create image
        let toyImg = document.createElement("img");
        toyImg.src = `images/${this.pic}`;
        toySection.append(toyImg);

        // Create info overlay
        let toyOverlay = document.createElement("div");
        toyOverlay.classList.add("overlay");
        toySection.append(toyOverlay);

        // Create toy name
        let h3Elem = document.createElement("h3");
        h3Elem.textContent = `${this.name}`;
        toyOverlay.append(h3Elem);

        // Create price
        let pElem1 = document.createElement("p");
        pElem1.textContent = `Price: ` + `${this.price}`;
        toyOverlay.append(pElem1);

        // Create age range
        let pElem2 = document.createElement("p");
        pElem2.textContent = `Age Range: ${this.age}`;
        toyOverlay.append(pElem2);
        

        // Create rating
        let pElem3 = document.createElement("p");
        pElem3.textContent = `Rating: ${this.price}`;
        toyOverlay.append(pElem3);

        return toySection;
    }
}

// After DOM (Document Object Model) has been loaded
// After all the HTML elements have been rendered
window.onload = function() {
    let toyArr = [];
    toyArr.push(new Toy("American Girl Doll", "$38.88", "5-7", "4 stars", "doll.jpg"));
    toyArr.push(new Toy("Play House", "$52.99", "3-5", "3 stars", "playHouse.jpg"));
    toyArr.push(new Toy("Tricycle", "$23.00", "4-8", "5 stars", "tricycle.jpg"));
    toyArr.push(new Toy("Lego Set", "$15.99", "7+", "4 stars", "legos.jpg"));
    toyArr.push(new Toy("Scooter", "$29.00", "5-9", "2 stars", "scooter.jpg"));
    toyArr.push(new Toy("T-Ball Set", "$45.00", "3-7", "4 stars", "tBall.jpg"));

    let toyDiv = document.getElementById("toys");
    for (let i=0; i<toyArr.length; ++i) {
        toyDiv.append(toyArr[i].item);
    }
}