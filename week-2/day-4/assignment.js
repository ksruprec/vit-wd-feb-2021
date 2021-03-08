var index = 0;

function prevImage() {
    if (index > 0) {
      index --;
      document.getElementById("imageSliderJS").style.transform = translateX(-600px*i); //couldn't figure this part out
      
    }
   
  }

function nextImage() {
    if (index < 4) {
        index ++;
        document.getElementById("imageSliderJS").style.transform = translateX(-600px*i);
    }
  }

