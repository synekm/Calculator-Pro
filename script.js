var cislo = "";
var predtimCislo = "";
var jeOperator = false;
var operace = "";
var pocetOperaci = 0;

function ziskatCislo(cislice) {
    cislo += cislice.innerHTML;
    parseFloat(cislo);
    console.log(cislo);
}

function ziskatOperator(operator) {
    operace = operator.innerHTML;
    jeOperator = true;
    console.log(operace);
}

function aktualizacePrikladu() {
    document.getElementById("priklad").value = cislice;
    if (jeOperator == true) {
        predtimCislo = cislo;
        cislo = "";

        jeOperator = false;
    }

    if (cislo != "" && predtimCislo != "") {

    }
}