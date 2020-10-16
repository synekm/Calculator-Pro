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
    priklad = eval(priklad);
    priklad = priklad * priklad;
    document.getElementById("priklad").value = priklad;
}

function jednaDelenoX() {
    priklad = eval(priklad);
    priklad = 1 / priklad;
    document.getElementById("priklad").value = priklad;
}

function druhaOdmocnina() {
    priklad = eval(priklad);
    priklad = Math.sqrt(priklad);
    document.getElementById("priklad").value = priklad;
}

function plusMinus() {
    priklad = eval(priklad);
    if (priklad > 0) {
        priklad = priklad - (priklad * 2);
    }
    else {
        priklad = priklad - (priklad * 2);
    }
    document.getElementById("priklad").value = priklad;
}