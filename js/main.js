var showText = function (target, message, index, interval) {
    if (index < message.length) {
        document.querySelector(target).textContent += message[index++];
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var name = "Elizabeth Linthicum";
    // Phones: show the name right away; larger screens: type it out
    if (window.matchMedia("(max-width: 767px)").matches) {
        document.querySelector("#headerName").textContent = name;
    } else {
        showText("#headerName", name, 0, 150);
    }
});

function openFirstModal() {
    document.getElementById("resumeModalFirst").style.display = "block";
}
  
function closeFirstModal() {
    document.getElementById("resumeModalFirst").style.display = "none";
}

function openSecondModal() {
    document.getElementById("resumeModalSecond").style.display = "block";
}
  
function closeSecondModal() {
    document.getElementById("resumeModalSecond").style.display = "none";
}

function openThirdModal() {
    document.getElementById("resumeModalThird").style.display = "block";
}
  
function closeThirdModal() {
    document.getElementById("resumeModalThird").style.display = "none";
}
  
var slideIndex = 1;

function currentSlide(n, className) {
  showSlides(slideIndex = n, className);
}

function plusSlides(n, className) {
  showSlides(slideIndex += n, className);
}
  
function showSlides(n, className) {
    var i;
    var slides = document.getElementsByClassName(className);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}