var mybutton = document.getElementById("myBtn");
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {

  // For Navbar
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
  // Navbar Ends

  // scroll To Top

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll To Top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}