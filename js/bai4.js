function change_background() {
    var content = document.getElementById("content");
    content.style.display = "block";

    var divContent = document.getElementsByClassName("divContent");
    for (var i = 0; i <= divContent.length; i++) {
        if ((i + 1) % 2 == 0) {
            divContent[i].style.background = "red"
        } else {
            divContent[i].style.background = "blue";
        }
    }
}
