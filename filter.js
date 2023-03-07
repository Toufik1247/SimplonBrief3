function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    // Add or remove the "default" class based on the selected filter
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
    // Add or remove the "show" and "hide" classes based on the selected filter
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

