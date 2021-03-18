function onTabClick(event) {
  let activeTabs = document.querySelectorAll(".active");

  // deactivate existing active tab and panel
  activeTabs.forEach(function (tab) {
    tab.className = tab.className.replace("active", "");
  });

  // activate new tab and panel
  event.target.parentElement.className += " active";
  document.getElementById(event.target.href.split("#")[1]).className +=
    " active";
}

const element = document.getElementById("nav-tab");

element.addEventListener("click", onTabClick, false);

function calculateTip() {
  var billAmountElement = document.getElementById("billAmount");
  var billAmountValue = billAmountElement.value;
  var tipAmount = billAmountValue * 0.15;
  var outputElement = document.getElementById("output");
  outputElement.innerText = tipAmount;
}

function calculateSplitTip() {
  var allBillAmounts = document.getElementsByClassName("eachAmount");
  //returns an array in that one variable
  for (var counter = 0; counter < allBillAmounts.length; counter++) {
    //counter=0 because arrays start at 0 index;
      // as long as counter is less than length of array, perform logic
        //counter++ means go on to next counter
    var individualVal = allBillAmounts[counter].value;
      //use counter to update individual value at every iteration
      var individualTipAmount = individualVal * .15;
      var newlyCreatedOutput = document.createElement('h1');
      newlyCreatedOutput.innerText = individualTipAmount;
      document.getElementsByClassName("each")
      [counter].appendChild(newlyCreatedOutput);
  }

}
