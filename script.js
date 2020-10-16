var priklad = "";

function ziskatPriklad(cast) {
    priklad += cast.innerHTML;
    document.getElementById("priklad").value = priklad;
}

function ziskatVysledek() {
    priklad = eval(priklad);
    document.getElementById("priklad").value = priklad;
}

function vymazat() {
    priklad = "";
    document.getElementById("priklad").value = priklad;
}

function naDruhou() {
    priklad = priklad * priklad;
    document.getElementById("priklad").value = priklad;
}