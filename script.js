var cislo = "";
var predtimCislo = "";
var jeOperator = false;
var operace = "";
var staraOperace = "";
var pocetOperaci = 0;

function ziskatCislo(cislice) {
    cislo += cislice.innerHTML;
    parseFloat(cislo);
    document.getElementById("priklad").value = cislo;
}

function ziskatOperator(operator) {
    operace = operator.innerHTML;
    jeOperator = true;
    pocetOperaci += 1;
    
    if (predtimCislo == "") {
        predtimCislo = cislo;
        cislo = "";
    }

    document.getElementById("priklad").value = "";

    console.log("predchozi " + predtimCislo);
    console.log("operator " + operace);
}

function delejOperaci() {
    if (pocetOperaci >= 1) {
        switch(operace) {

            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
        }
    }
}