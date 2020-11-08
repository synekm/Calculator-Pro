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
    let cislice = 0;

    if (a.value == 0 || a.value == 1 || a.value == 2 || a.value == 3 || a.value == 4 || a.value == 5 || a.value == 6 || a.value == 7 || a.value == 8 || a.value == 9) {
        cislice = a.value;
    }

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "php/kalkulacka.php", true);

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let odpoved = JSON.parse(this.responseText);

            let html = "";
            html += "<p>Cislice " + odpoved[1].cislice + " : " + odpoved[1].pocet + "</p>";
            html += "<p>Cislice " + odpoved[2].cislice + " : " + odpoved[2].pocet + "</p>";
            html += "<p>Cislice " + odpoved[3].cislice + " : " + odpoved[3].pocet + "</p>";
            html += "<p>Cislice " + odpoved[4].cislice + " : " + odpoved[4].pocet + "</p>";
            html += "<p>Cislice " + odpoved[5].cislice + " : " + odpoved[5].pocet + "</p>";
            html += "<p>Cislice " + odpoved[6].cislice + " : " + odpoved[6].pocet + "</p>";
            html += "<p>Cislice " + odpoved[7].cislice + " : " + odpoved[7].pocet + "</p>";
            html += "<p>Cislice " + odpoved[8].cislice + " : " + odpoved[8].pocet + "</p>";
            html += "<p>Cislice " + odpoved[9].cislice + " : " + odpoved[9].pocet + "</p>";
            html += "<p>Cislice " + odpoved[10].cislice + " : " + odpoved[10].pocet + "</p>";

            _statistika.innerHTML = html;
        }
    };
    
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("cislice=" + JSON.stringify(cislice));
}
