const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const buttonEl = document.querySelector("#calculate");
const totalEl = document.querySelector("#total")


function calcaluteTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalEl.innerText = totalValue.toFixed(2);  /*use toFixed() to set the decimal digits in the number*/
} 
buttonEl.addEventListener("click", calcaluteTotal);