async function displayRestaurants(){
    let response = await fetch('api/restaurants/');
    let restaurantsJSON = await response.json();
    let restaurantsDiv = document.getElementById("restaurants-list");
    restaurantsDiv.innerHTML = "";

    for(i in restaurantsJSON){
        let restaurant = restaurantsJSON[i];
        restaurantsDiv.append(getRestaurantItem(restaurant));
    }
}

function getRestaurantItem(restaurant){
    let restaurantSection = document.createElement("section");
    restaurantSection.classList.add("restaurant");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", restaurant._id);
    aTitle.href = "#";
    aTitle.onclick = showRestaurantDetails;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = restaurant.name;
    aTitle.append(h3Elem);
    restaurantSection.append(aTitle);

    return restaurantSection;
}

async function showRestaurantDetails(){
    let resInfo = document.getElementById("restaurant-info");
    resInfo.style.display = "flex";

    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/restaurants/${id}`);

    if(response.status != 200){
        //display an error
        console.log("Error reciving restaurant");
        return;
    }

    let restaurant = await response.json();
    document.getElementById("restaurant-id").textContent = restaurant._id;
    document.getElementById("txt-name").value = restaurant.name;
    document.getElementById("txt-address").value = restaurant.address;
    document.getElementById("txt-price-range").value = restaurant.priceRange;
    document.getElementById("txt-specialties").value = restaurant.specialties;
    document.getElementById("txt-rating").value = restaurant.rating;
    document.getElementById("txt-hours").value = restaurant.hours;

    document.getElementById("p-name").textContent = restaurant.name;
    document.getElementById("p-address").textContent = `Located at: ${restaurant.address}`;
    document.getElementById("p-price-range").textContent = `Price range: ${restaurant.priceRange}`;
    document.getElementById("p-specialties").textContent = `Known for: ${restaurant.specialties}`;
    document.getElementById("p-rating").textContent = `Rating: ${restaurant.rating} / 5 stars`;
    document.getElementById("p-hours").textContent = `Hours: ${restaurant.hours}`;
}

async function addRestaurant(){
    let restaurantName = document.getElementById("txt-add-name").value;
    let restaurantAddress = document.getElementById("txt-add-address").value;
    let restaurantPriceRange = document.getElementById("txt-add-price-range").value;
    let restaurantSpecialties = document.getElementById("txt-add-specialties").value.split(",");
    let restaurantRating = document.getElementById("txt-add-rating").value;
    let restaurantHours = document.getElementById("txt-add-hours").value;

    let restaurant = {
        "name":restaurantName,
        "address":restaurantAddress,
        "priceRange":restaurantPriceRange,
        "specialties":restaurantSpecialties,
        "rating":restaurantRating,
        "hours":restaurantHours
    };
    
    let response = await fetch('/api/restaurants',{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(restaurant),
    });

    if(response.status != 200){
        console.log("ERROR posting data");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayRestaurants();

    // Flushing the input fields after use
    document.getElementById("txt-add-name").value = "";
    document.getElementById("txt-add-address").value = "";
    document.getElementById("txt-add-price-range").value = "";
    document.getElementById("txt-add-specialties").value = "";
    document.getElementById("txt-add-rating").value = "";
    document.getElementById("txt-add-hours").value = "";

    // Hids the add new restaurant menu after use
    toggleAdd();
}

async function editRestaurant(){
    let restaurantId = document.getElementById("restaurant-id").textContent;
    let restaurantName = document.getElementById("txt-name").value;
    let restaurantAddress = document.getElementById("txt-address").value;
    let restaurantPriceRange = document.getElementById("txt-price-range").value;
    let restaurantSpecialties = document.getElementById("txt-specialties").value.split(",");
    let restaurantRating = document.getElementById("txt-rating").value;
    let restaurantHours = document.getElementById("txt-hours").value;
    
    let restaurant = {
        "name":restaurantName,
        "address":restaurantAddress,
        "priceRange":restaurantPriceRange,
        "specialties":restaurantSpecialties,
        "rating":restaurantRating,
        "hours":restaurantHours
    };

    let response = await fetch(`/api/restaurants/${restaurantId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body: JSON.stringify(restaurant)
    });

    if(response.status != 200){
        console.log("Error updating restaurant");
        return;
    }

    let result = await response.json();
    displayRestaurants();
}

async function deleteRestaurant(){
    let resInfo = document.getElementById("restaurant-info");
    resInfo.style.display = "none";

    let restaurantId = document.getElementById("restaurant-id").textContent;
    
    let response = await fetch(`/api/restaurants/${restaurantId}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error deleting");
        return;
    }

    let result = await response.json();
    displayRestaurants();
}

function toggleAdd() {
    let addDiv = document.getElementById("add-restaurant");
    if (addDiv.style.display === "none") {
        addDiv.style.display = "block";
    } else {
        addDiv.style.display = "none";
    }
}

function showEdit() {
    let submitBtn = document.getElementById("btn-submit-restaurant");
    submitBtn.classList.toggle("hidden");

    let displayInfo = document.getElementById("display-info");
    displayInfo.classList.toggle("hidden");
    
    let editInfo = document.getElementById("edit-info");
    editInfo.classList.toggle("hidden");
}



window.onload = function(){
    this.displayRestaurants();

    let addBtn = document.getElementById("btn-add-restaurant");
    addBtn.onclick = addRestaurant;

    let editBtn = document.getElementById("btn-edit-restaurant");
    editBtn.onclick = showEdit;

    let submitBtn = document.getElementById("btn-submit-restaurant");
    submitBtn.onclick = editRestaurant;

    let deleteBtn = document.getElementById("btn-delete-restaurant");
    deleteBtn.onclick = deleteRestaurant;

    let btnAdd = document.getElementById("btn-add-new-restaurant");
    toggleAdd();
    btnAdd.onclick = toggleAdd;
}