async function displayFoods(){
    let response = await fetch('api/foods/');
    let foodsJSON = await response.json();
    let foodsDiv = document.getElementById("food-list");
    foodsDiv.innerHTML = "";

    for(i in foodsJSON){
        let food = foodsJSON[i];
        foodsDiv.append(getFoodItem(food));
    }
}

function getFoodItem(food){
    let foodSection = document.createElement("section");
    foodSection.classList.add("food");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", food.id);
    aTitle.href = "#";
    aTitle.onclick = showFoodDetails;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = food.name;
    aTitle.append(h3Elem);
    foodSection.append(aTitle);

    return foodSection;
}

async function showFoodDetails(){
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/foods/${id}`);

    // Error
    if(response.status != 200){
        //display an error
        console.log("Error receiving food");
        return;
    }

    let food = await response.json();
    document.getElementById("food-id").textContent = food.id;
    document.getElementById("txt-name").value = food.name;
    document.getElementById("txt-calories").value = food.calories;
    document.getElementById("txt-protein").value = food.protein;
    document.getElementById("txt-carbs").value = food.carbs;
    document.getElementById("txt-fat").value = food.fat;
    
}

async function addFood(){
    let foodName = document.getElementById("txt-add-name").value;
    let foodCalories = document.getElementById("txt-add-calories").value;
    let foodProtein = document.getElementById("txt-add-protein").value;
    let foodCarbs = document.getElementById("txt-add-carbs").value;
    let foodFat = document.getElementById("txt-add-fat").value;

    let food = {"name":foodName, "calories":foodCalories, "protein":foodProtein, "carbs":foodCarbs, "fat":foodFat};
    
    let response = await fetch('/api/foods',{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(food),
    });

    // Notify the user of an error
    if(response.status != 200){
        console.log("ERROR posting data");
        let errorP = document.getElementById("add-notif");
        errorP.textContent = "Error adding new food - make sure information is formatted correctly"
        errorP.classList.remove('invisible')
        setTimeout(function(){errorP.classList.add('invisible')}, 3000);
        return;
    }

    // Notify the user of success
    let errorP = document.getElementById("add-notif");
    errorP.textContent = `${foodName} successfully added`;
    errorP.classList.remove('invisible')
    setTimeout(function(){errorP.classList.add('invisible')}, 3000);

    let result = await response.json();
    console.log(result);
    displayFoods();
}

async function editFood(){
    let foodId = document.getElementById("food-id").textContent;
    let foodName = document.getElementById("txt-name").value;
    let foodCalories = document.getElementById("txt-calories").value;
    let foodProtein = document.getElementById("txt-protein").value;
    let foodCarbs = document.getElementById("txt-carbs").value;
    let foodFat = document.getElementById("txt-fat").value;
    
    let food = {"name":foodName, "calories":foodCalories, "protein":foodProtein, "carbs":foodCarbs, "fat":foodFat};

    let response = await fetch(`/api/foods/${foodId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body: JSON.stringify(food)
    });

    // Notify the user of an error
    if(response.status != 200){
        console.log("Error updating food");

        let errorP = document.getElementById("edit-notif");
        errorP.textContent = "Error editing food - make sure a valid food is selected"
        errorP.classList.remove('invisible')
        setTimeout(function(){errorP.classList.add('invisible')}, 3000);
        return;
    }

    // Notify the user of success
    let errorP = document.getElementById("edit-notif");
    errorP.textContent = `${foodName} successfully edited`;
    errorP.classList.remove('invisible')
    setTimeout(function(){errorP.classList.add('invisible')}, 3000);

    let result = await response.json();
    displayFoods();
}

async function deleteFood(){
    let foodId = document.getElementById("food-id").textContent;
    
    let response = await fetch(`/api/foods/${foodId}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    // Notify the user of an error
    if(response.status != 200){
        console.log("Error deleting");

        let errorP = document.getElementById("edit-notif");
        errorP.textContent = "Error deleting food - make sure a valid food is selected"
        errorP.classList.remove('invisible')
        setTimeout(function(){errorP.classList.add('invisible')}, 3000);
        return;
    }

    // Notify the user of success
    let errorP = document.getElementById("edit-notif");
    errorP.textContent = `Food successfully deleted`;
    errorP.classList.remove('invisible')
    setTimeout(function(){errorP.classList.add('invisible')}, 3000);

    let result = await response.json();
    displayFoods();
}

window.onload = function(){
    this.displayFoods();

    let addBtn = document.getElementById("btn-add-food");
    addBtn.onclick = addFood;

    let editBtn = document.getElementById("btn-edit-food");
    editBtn.onclick = editFood;

    let deleteBtn = document.getElementById("btn-delete-food");
    deleteBtn.onclick = deleteFood;
}