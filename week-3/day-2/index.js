

// function submit() {
//     var entry = document.getElementById("tasks"); //grabs what person types
//     var ul = document.getElementById("toDoList");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(entry.value));
//     ul.appendChild(li);
//   }

  //determine the event that triggers the task
  //event: click the "add task" button
  //grab what the person typed
  var taskInputElement = document.getElementById("taskInput");
    //grab the input.value
  //store the value and display
  var whatUserTyped = taskInputElement.value;
      //create element and append new element
      var newlyCreatedLI = document.createElement("li");
      newlyCreatedLI.innerText = whatUserTyped;
  //ul and li
  var taskListElement =document.getElementById("taskList");
  taskListElement.appendChild("newlyCreatedLi");
 
  function submit() {
    var entry = document.getElementById("tasks"); //grabs what person types
    var ul = document.getElementById("toDoList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(entry.value));
    ul.appendChild(li);
  }