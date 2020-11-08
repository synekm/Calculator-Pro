var _nula, _jedna, _dva, _tri, _ctyri, _pet, _sest, _sedm, _osm, _devet, _statistika;

function nastavit() {
    _nula = document.getElementById("0");
    _jedna = document.getElementById("1");
    _dva = document.getElementById("2");
    _tri = document.getElementById("3");
    _ctyri = document.getElementById("4");
    _pet = document.getElementById("5");
    _sest = document.getElementById("6");
    _sedm = document.getElementById("7");
    _osm = document.getElementById("8");
    _devet = document.getElementById("9");
    _statistika = document.getElementById("statistika");
}

function odeslat(a) {
    let cislice = "";

    if (a.innerHTML == 0 || a.innerHTML == 1 || a.innerHTML == 2 || a.innerHTML == 3 || a.innerHTML == 4 || a.innerHTML == 5 || a.innerHTML == 6 || a.innerHTML == 7 || a.innerHTML == 8 || a.innerHTML == 9) {
        cislice = a.innerHTML;
    }
    if (a.innerHTML == "CE" || a.innerHTML == "C") {
        cislice = "";
    }

    console.log(cislice);

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "php/kalkulacka.php", true);
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let odpoved = JSON.parse(this.responseText);

            console.log(odpoved);

            _statistika.innerHTML = "";

            let html = "";
            html += "<p>Číslice " + odpoved[0].cislice + " : " + odpoved[0].pocet + "</p>";
            html += "<p>Číslice " + odpoved[1].cislice + " : " + odpoved[1].pocet + "</p>";
            html += "<p>Číslice " + odpoved[2].cislice + " : " + odpoved[2].pocet + "</p>";
            html += "<p>Číslice " + odpoved[3].cislice + " : " + odpoved[3].pocet + "</p>";
            html += "<p>Číslice " + odpoved[4].cislice + " : " + odpoved[4].pocet + "</p>";
            html += "<p>Číslice " + odpoved[5].cislice + " : " + odpoved[5].pocet + "</p>";
            html += "<p>Číslice " + odpoved[6].cislice + " : " + odpoved[6].pocet + "</p>";
            html += "<p>Číslice " + odpoved[7].cislice + " : " + odpoved[7].pocet + "</p>";
            html += "<p>Číslice " + odpoved[8].cislice + " : " + odpoved[8].pocet + "</p>";
            html += "<p>Číslice " + odpoved[9].cislice + " : " + odpoved[9].pocet + "</p>";

            _statistika.innerHTML = html;
        }
    };
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if (cislice != "") {
        xhr.send("cislice=" + cislice);
    }
    if (cislice == "") {
        xhr.send();
    }
}
