function tinhTong() {
    var numberX = document.getElementById("numberx").value;
    var numberN = document.getElementById("numbern").value;
    var tong = 0;

    for (var i = 1; i <= numberN; i++ ){
        tong += Math.pow(numberX, i);
    }
    var hienThi = document.getElementById("hienThi");
    hienThi.style.display = "block";
    hienThi.innerHTML = tong;
}