let header = "header";
let headerInv = "inverted";
let noheader = "noheader";
let logoInv = "logoInv";
let logo = "logo";
let nologo = "nologo";
let scrollTrigger = 100; // Point( en pixel) à partir duquel le header et le logo sont inversés
let hideTrigger = scrollTrigger + 550; // Point (en pixel) à partir duquel le le header et le logo sont masqués
let lastScrollDownPos = 0;
let scrollTimeout;

// Activation de la fonction au moindre scroll
window.addEventListener("scroll", function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
        // Definition des letiables pour checker la presence de la class :
        let headerNormal = document.getElementsByClassName(header)[0];
        let headerInverted = document.getElementsByClassName(headerInv)[0];
        let logoNormal = document.getElementsByClassName(logo)[0];
        let logoInverted = document.getElementsByClassName(logoInv)[0];
        let hiddenHeader = document.getElementsByClassName(headerInv)[0];
        let currentScrollPosition = window.scrollY;

        // Conditionne le changement de class à partir de X pixels en partant du top (scrollTrigger)
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {


            // Verification du sens du sroll
            // SCROLL UP
            // Si la position actuelle est inferieure à la derniere position connue, alors le scroll est vers le haut
            if (currentScrollPosition < lastScrollDownPos) {
                // Fermeture du menu burger si scroll up
                document.getElementById("side-menu").checked = false;
                // Si le scroll up est d'au moins 100 pixels, alors le header apparait à nouveau
                if (lastScrollDownPos - currentScrollPosition >= 100) {
                    // Seulement si le header est déja masqué
                    if (hiddenHeader) {
                        document.getElementsByClassName(headerInv)[0].classList.remove(noheader);
                        document.getElementsByClassName(logoInv)[0].classList.remove(nologo);

                    }
                    // Definition du point le plus bas atteint lors d'un scroll (en pixels)
                    lastScrollDownPos = currentScrollPosition;
                }

                // SCROLL DOWN
                // Sinon le scroll est vers le bas
            } else {
                // Fermeture du menu burger si scroll down
                document.getElementById("side-menu").checked = false;
                // classes inversées pour le header et le logo
                if (headerNormal && logoNormal) {
                    document.getElementsByClassName(header)[0].classList.add(headerInv);
                    document.getElementsByClassName(logo)[0].classList.add(logoInv);
                    document.getElementsByClassName(header)[0].classList.remove(header);
                    document.getElementsByClassName(logo)[0].classList.remove(logo);
                }
                // Dispartion du header a partir de la valeur de la letiable hideTrigger
                if (window.scrollY >= hideTrigger || window.pageYOffset >= hideTrigger) {
                    if (headerInverted) {
                        document.getElementsByClassName(headerInv)[0].classList.add(noheader);
                    }
                    if (headerNormal) {
                        document.getElementsByClassName(header)[0].classList.add(noheader);
                    }
                    if (logoInverted) {
                        document.getElementsByClassName(logoInv)[0].classList.add(nologo);
                    }
                    if (logoNormal) {
                        document.getElementsByClassName(logo)[0].classList.add(nologo);
                    }



                }
                // Definition du point le plus bas atteint lors d'un scroll (en pixels)
                lastScrollDownPos = currentScrollPosition;
            }

            // Retour aux classes header et logo par defaut en cas de retour tout en haut de l'ecran
        } else if (headerInverted && logoInverted) {
            document.getElementsByClassName(headerInv)[0].classList.add(header);
            document.getElementsByClassName(headerInv)[0].classList.remove(headerInv);
            document.getElementsByClassName(logoInv)[0].classList.add(logo);
            document.getElementsByClassName(logoInv)[0].classList.remove(logoInv);
        }
        // Timeout de 10ms pour ne pas trop surcharger le dom
    }, 10);
});

