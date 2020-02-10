function round(value, decimals) {
    return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
}

function calculate() {
    console.log("Executing calculate function")
    
    const firstName = document.getElementById("txt-first-name").value;
    const lastName = document.getElementById("txt-last-name").value;
    const productName = document.getElementById("txt-product-name").value;
    const productCount = document.getElementById("txt-product-count").value;
    const productPrice = document.getElementById("txt-product-price").value;
    let orderMsg = document.getElementById("order-msg");
    let total = document.getElementById("total");

    const taxMultiplier = 1.07;
    let totalPrice = round(productPrice*productCount*taxMultiplier, 2);
    

    orderMsg.innerHTML = `${firstName} ${lastName} ordered ${productCount} ${productName}(s)`;
    total.innerHTML = `Totalling: $${totalPrice}`;
}

const btnCalculate = document.getElementById("btn-calculate");

btnCalculate.onclick = calculate;