var header = "header";
var headerInv = "inverted";
var noheader = "noheader";
var logoInv = "logoInv";
var logo = "logo";
var nologo = "nologo";
var scrollTrigger = 100;
var hideTrigger = scrollTrigger + 750;
var lastScrollPosition = 0;
var lastScrollDownPos = 0; // nouvelle variable pour stocker la dernière position basse
var scrollTimeout;

// Activation de la fonction au moindre scroll
window.addEventListener("scroll", function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function () {
    // Definition des variables pour checker la presence de la class :
    var headerNormal = document.getElementsByClassName(header)[0];
    var headerInverted = document.getElementsByClassName(headerInv)[0];
    var logoNormal = document.getElementsByClassName(logo)[0];
    var logoInverted = document.getElementsByClassName(logoInv)[0];
    var hiddenHeader = document.getElementsByClassName(headerInv)[0];
    console.log("ScrollY :" + window.scrollY)
    var currentScrollPosition = window.scrollY;

    // Conditionne le changement de class à partir de X pixel en partant du top (scrollTrigger)
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {


      // verification du sens du sroll
      // SCROLL UP
      if (currentScrollPosition < lastScrollPosition) {
        document.getElementById("side-menu").checked = false;
        if (lastScrollDownPos - currentScrollPosition >= 100) {
          if (hiddenHeader && logoInverted) {
            document.getElementsByClassName(headerInv)[0].classList.remove(noheader);
            document.getElementsByClassName(logoInv)[0].classList.remove(nologo);

          }

          lastScrollDownPos = currentScrollPosition;
        }

        //SCROLL DOWN
      } else {
        document.getElementById("side-menu").checked = false;
        if (headerNormal && logoNormal) {
          document.getElementsByClassName(header)[0].classList.add(headerInv);
          document.getElementsByClassName(logo)[0].classList.add(logoInv);
          document.getElementsByClassName(header)[0].classList.remove(header);
          document.getElementsByClassName(logo)[0].classList.remove(logo);
        }
        if (window.scrollY >= hideTrigger || window.pageYOffset >= hideTrigger) {
          if (headerInverted) {
            document.getElementsByClassName(headerInv)[0].classList.add(noheader);
          } else if (headerNormal) {
            document.getElementsByClassName(header)[0].classList.add(noheader);
          }
          if (logoInverted) {
            document.getElementsByClassName(logoInv)[0].classList.add(nologo);
          } else if (logoNormal) {
            document.getElementsByClassName(logo)[0].classList.add(nologo);
          }



        } else if (window.scrollY <= hideTrigger || window.pageYOffset <= hideTrigger) {

        }
        lastScrollDownPos = currentScrollPosition;
      }
      lastScrollPosition = currentScrollPosition;

    } else if (headerInverted && logoInverted) {
      document.getElementsByClassName(headerInv)[0].classList.add(header);
      document.getElementsByClassName(headerInv)[0].classList.remove(headerInv);
      document.getElementsByClassName(logoInv)[0].classList.add(logo);
      document.getElementsByClassName(logoInv)[0].classList.remove(logoInv);
    }
  }, 5);
});

