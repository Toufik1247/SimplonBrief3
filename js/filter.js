function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    // Ajoute ou supprime la class "default" selon le filtre selectionné
    if (c == "all") {
        for (i = 0; i < x.length; i++) {
            x[i].classList.add("default");
            x[i].classList.remove("show");
        }
    } else {
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove("default");
        }
    }
    // Ajoute ou supprime les class "show et hide" selon le filtre selectionné
    for (i = 0; i < x.length; i++) {
        if (x[i].classList.contains("default")) {
            x[i].classList.remove("hide");
        } else {
            x[i].classList.add("hide");
            x[i].classList.remove("show");
            if (x[i].classList.contains(c)) {
                x[i].classList.remove("hide");
                x[i].classList.add("show");
            }
        }
    }
}

