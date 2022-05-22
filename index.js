let mainInput = document.getElementById("main-input");
let lengthP = document.getElementById("length-p");
let volumeP = document.getElementById("volume-p");
let massP = document.getElementById("mass-p");


function recalculate() {
    let mainValue = parseInt(mainInput.value, 10);
    let meters = mainValue / 3.28;
    let feet = mainValue * 3.28;
    let liters = mainValue / 0.264;
    let gallons = mainValue * 0.264;
    let kilograms = mainValue / 2.205;
    let pounds = mainValue * 2.205;
    lengthP.textContent = mainValue + " meters = " + feet.toFixed(3) + " feet | " + mainValue + " feet = " + meters.toFixed(3) + " meters";
    volumeP.textContent = mainValue + " liters = " + gallons.toFixed(3) + " gallons | " + mainValue + " gallons = " + liters.toFixed(3) + " liters";
    massP.textContent = mainValue + " kilograms = " + pounds.toFixed(3) + " pounds | " + mainValue + " pounds = " + kilograms.toFixed(3) + " kilograms";
}