const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

convertBtn.addEventListener("click", function(){
    let inputValue = inputEl.value
    renderResult(inputValue)
})

function renderResult(inputValue){
    let lengthString = ""
    let volumeString = ""
    let massString = ""
    lengthString = `
    
        ${inputValue} meters = ${metersToFeet(inputValue)} feet | 
        ${inputValue} feet = ${feetToMeters(inputValue)} meters
    
    `
    lengthResult.innerHTML = lengthString

    volumeString = `
    
        ${inputValue} liters = ${litersToGallons(inputValue)} gallons | 
        ${inputValue} gallons = ${gallonsToLiters(inputValue)} liters
    
    `
    volumeResult.innerHTML = volumeString

    massString = `
    
        ${inputValue} kilos = ${kilosToPounds(inputValue)} pounds | 
        ${inputValue} pounds = ${poundsToKilos(inputValue)} kilos
    
    `
    massResult.innerHTML = massString
}

/* Length(Meter/Feet) */
function metersToFeet(inputValue){
    let result = inputValue * 3.28084
    return result.toFixed(3)
}

function feetToMeters(inputValue){
    let result = inputValue * 0.3048
    return result.toFixed(3)
}

/* Volume(Liters/Gallons) */
function litersToGallons(inputValue){
    let result = inputValue * 0.264172
    return result.toFixed(3)
}

function gallonsToLiters(inputValue){
    let result = inputValue * 3.78541
    return result.toFixed(3)
}

/* Mass(Kilograms/Pounds) */
function kilosToPounds(inputValue){
    let result = inputValue * 2.20462
    return result.toFixed(3)
}

function poundsToKilos(inputValue){
    let result = inputValue * 0.453592
    return result.toFixed(3)
}