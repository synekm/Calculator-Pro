function aktualizovat(response) {
    let odpoved = JSON.parse(response);

    let html = "";
    for(let cislice in odpoved)
        html += "<p>Číslice " + odpoved[cislice].cislice + " : " + odpoved[cislice].pocet + "</p>";

    $("#statistika").html(html);
}

$(document).ready(function() {
    $(".vymazat").click(function() {
        $.get("php/kalkulacka.php", aktualizovat);
    });

    $(".cislice").click(function() {
        $.get("php/kalkulacka.php?cislice=" + $(this).html(), aktualizovat)
    });
});