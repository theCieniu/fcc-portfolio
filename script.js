
var i = 0;
text = "My journey to become a web developer";

function typing() {
    if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

typing()


// document.addEventListener("scroll", alert("first test"))
