var cislice = "";
var predtimCislice = "";

function plus() {
    cislice = predtimCislice;
    
    parseFloat(predtimCislice) += parseFloat(cislice);
    predtimCislice = cislice;
}

function minus() {

}

function deleni() {

}

function nasobeni() {

}

function jednaDelenoX() {

}

function naDruhou() {

}

function odmocnina() {

}

function procento() {

}

function c() {

}

function ce() {

}

function del() {

}

function plusLomenoMinus() {

}

function carka() {

}

function vysledek() {

}

function cislo(a) {
    cislice += a.innerHTML;
    console.log(cislice);
}

function aktualizacePrikladu() {
    document.getElementById("priklad").value = cislice;
}