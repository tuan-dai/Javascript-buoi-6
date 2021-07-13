function tinhGiaiThua() {
    var number3 = +document.getElementById("number3").value;
    var giaiThua = 1;
    for (var i = 1; i <= number3; i++){
        giaiThua *= i;
    }
    var divGiaiThua = document.getElementById("divGiaiThua");
    divGiaiThua.style.display = "block";
    divGiaiThua.innerHTML = "Giai thừa của " + number3 + ": " + giaiThua;    
}   
