function calculateTip() {
  var billAmountValue = document.getElementById("billAmount").value;
  var tipAmount = billAmountValue * 0.15;
  var outputElement = document.getElementById("output");
  var tipPerPerson = document.getElementById("tipPerPerson").value; 
  //grab number of people
  var partyTip = tipAmount / tipPerPerson;
  //divide tip by number of people input
  var p = partyTip.toFixed(2);
  outputElement.innerText = "$" + tipAmount;
  //display tip amount
  if (tipPerPerson > 0) {
    output2Element.innerText = "$" + p + " Tip Per Person";
  //display tip amount per person
  }
  

}

//add input field
//have input field break out by number of people
//