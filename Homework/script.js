// Runs when the page loads (<body onload="addTabFocus()">).
// Adds tabindex="0" to every preview image so keyboard users can tab to them.
function addTabFocus() {
  console.log("addTabFocus triggered: page loaded");

  const pics = document.getElementsByClassName("preview");
  for (let i = 0; i < pics.length; i++) {
    pics[i].setAttribute("tabindex", "0");
    console.log("tabindex added to image " + (i + 1) + ": " + pics[i].alt);
  }
}

// Called on mouseover and focus. previewPic is the <img> that triggered it.
function upDate(previewPic) {
  console.log("upDate triggered: " + previewPic.alt);

  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = '<span class="caption">' + previewPic.alt + '</span>';
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Called on mouseleave and blur. Restores the original text and background.
function unDo() {
  console.log("unDo triggered");

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = '<span class="caption">Hover over an image below to display here.</span>';
}
