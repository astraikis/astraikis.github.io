var total = 0;

function addMeal(meal, price) {
    document.getElementById(meal).style.display = "none";
    document.getElementById(meal + "-selected").style.display = "block";

    total += price;
    document.getElementById("total").innerText = total;
}

function removeMeal(meal, price) {
    document.getElementById(meal).style.display = "block";
    document.getElementById(meal + "-selected").style.display = "none";

    const currQuantity = Number(document.getElementById(meal + "-quantity").innerText);
    total -= price * currQuantity;
    document.getElementById("total").innerText = total;
}

function incrementQuantity(meal, price) {
    const currQuantity = Number(document.getElementById(meal + "-quantity").innerText);
    document.getElementById(meal + "-quantity").innerText = currQuantity + 1;
    total += price;
    document.getElementById("total").innerText = total;
}