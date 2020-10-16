var priklad = "";
var vysledek = "";

function ziskatPriklad(cast) {
    priklad += cast.innerHTML;
    document.getElementById("priklad").value = priklad;
}

function ziskejVysledek() {
    vysledek = eval(priklad);
    document.getElementById("priklad").value = vysledek;
}