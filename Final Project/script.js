var modal = document.getElementById("modal");

var button = document.getElementById("subscribe-button");

var closeButton = document.getElementsByClassName("close")[0];

//when click on button, display modal
button.onclick = function() {
    modal.style.display = "block";
}

//close the modal with (x)
closeButton.onclick = function() {
    modal.style.display = "none";
}

// close the modal by clicking anywhere outside the modal
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

function replaceImage(imgs) {
    var expandedImage = document.getElementById("expandedImage");
    var imgText = document.getElementById("imgText");
    expandedImage.src = imgs.src;
    imgText.innerHTML = imgs.alt;
  }
  