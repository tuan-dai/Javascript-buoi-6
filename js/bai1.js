function timSoNhoNhat() {
    var total = 0;
    var n = 0;

    while (total < 10000) {
        n++;
        total += n;
    }

    var soNhoNhat = document.getElementById("soNhoNhat");
    soNhoNhat.style.display = "block";
    soNhoNhat.innerHTML = n
}   
