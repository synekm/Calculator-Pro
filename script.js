var cislo = "";
var predtimCislo = "";
var operace = "";
var staraOperace = "";
var pocetOperaci = 0;

function ziskatPriklad(cislice) {
    cislo += cislice.innerHTML;
    document.getElementById("priklad").value = cislo;
}

function ziskatOperator(operator) {
    staraOperace = operace;
    operace = "";

    operace = operator.innerHTML;
    pocetOperaci += 1;

    predtimCislo = cislo;
    if (staraOperace == "/" || staraOperace == "*" || staraOperace == "-" || staraOperace == "+" || staraOperace == "=") {
        cislo = "";
    }

    console.log("predchozi " + predtimCislo);
    console.log("operator " + operace);
}

function delejOperaci() {
    if (pocetOperaci >= 2) {
        switch (staraOperace) {

            case "/":
                cislo = predtimCislo / cislo;
                break;

            case "*":
                cislo = predtimCislo * cislo;
                break;

            case "-":
                cislo = predtimCislo - cislo;
                break;

            case "+":
                cislo = predtimCislo + cislo;
                break;

            case "=":
                cislo = cislo;
                break;
        }

        pocetOperaci = 0;
        document.getElementById("priklad").value = cislo;
    }

    if (pocetOperaci >= 1) {
        switch (staraOperace) {
            case "%":
                break;

            case "CE":
                cislo = "";
                predtimCislo = "";
                pocetOperaci = 0;
                operace = 0;
                staraOperace = 0;
                document.getElementById("priklad").value = "";
                break;

            case "C":
                cislo = "";
                predtimCislo = "";
                pocetOperaci = 0;
                operace = 0;
                staraOperace = 0;
                document.getElementById("priklad").value = "";
                break;

            case "DEL":
                cislo = "";
                break;

            case "1/x":
                cislo = 1 / predtimCislo;
                break;

            case "x^2":
                cislo = predtimCislo * predtimCislo;
                break;

            case "-/x":

                break;
        }

        pocetOperaci = 0;
        document.getElementById("priklad").value = cislo;
    }

}