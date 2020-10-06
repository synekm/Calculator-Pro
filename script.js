var cislice = "";
var predtimCislice = "";
var jeOperator = false;
var operace = "";

function cislo(cislo) {
    cislice += cislo.innerHTML;
    parseFloat(cislice);
    console.log(cislice);
}

function operator(operator) {
    operace = operator.innerHTML;
    jeOperator = true;
    console.log(operace);
}

function aktualizacePrikladu() {
    document.getElementById("priklad").value = cislice;
    if (jeOperator == true) {
        predtimCislice = cislice;
        cislice = "";
    }

    jeOperator = false;
}