2 ways to utilize JS with HTML and CSS:
    1. script tag- can be used anywhere b/c document feeder
        -so also inline or as needed
        -example: alert("Hello") in script tags
        -remember: order matters, can't call on an id before defining it
    2. external JS file
        -script.js; put it in head between script tags

FUNCTIONS  
    syntax:
        function.nameOfYourFunction(){
            //do something
            document.body.style.backgroundColor = "blue";
        }
    utilization of the function:
        1. declaration
        2. invocation

The Event HTML Elements
-form
-button
-input
==these trigger or invoke a function

difference between single = assignment
double == evaluate, compares the "value" of the given variable

Events-two things happen
    1. Event listeners
    2. Event handlers

    -ex: buttons have default a click event listener; onclick calls on event listeners tied to html element
        onclick="functionName()"
        functionName() is the event handler
        doesn't show immediately because tied to event listener now