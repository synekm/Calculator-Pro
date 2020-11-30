var _statistika;

function nastavit() {
    _statistika = $("#statistika");
}

function odeslat(a) {
    let cislice = 0;

    if (a.innerHTML == 0 || a.innerHTML == 1 || a.innerHTML == 2 || a.innerHTML == 3 || a.innerHTML == 4 || a.innerHTML == 5 || a.innerHTML == 6 || a.innerHTML == 7 || a.innerHTML == 8 || a.innerHTML == 9) {
        cislice = a.innerHTML;

        console.log(cislice);

        let xhr = new XMLHttpRequest();

        xhr.open("GET", "php/kalkulacka.php?cislice=" + cislice, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let odpoved = JSON.parse(this.responseText);

                console.log(odpoved);

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
            };
        };
        xhr.send();
    };
    if (a.innerHTML == "CE" || a.innerHTML == "C") {
        cislice = undefined;

        console.log(cislice);

        let xhr = new XMLHttpRequest();

        xhr.open("GET", "php/kalkulacka.php", true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let odpoved = JSON.parse(this.responseText);

                console.log(odpoved);

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
            };
        };
        xhr.send();
    };
}

$(document).ready(function() {
    statistika = $("#statistika");
})