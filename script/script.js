$(document).ready(function() {
    $(".vymazat").click(function() {
        priklad = "";
        $("#priklad").val(priklad);
    });

    $(".cislice, .znak").click(function() {
        priklad = $("#priklad").val();
        priklad += $(this).html();
        $("#priklad").val(priklad);
    });

    $("#rovnase").click(function() {
        priklad = $("#priklad").val();
        priklad = eval(priklad);
        $("#priklad").val(priklad);
    });

    $("#plusminus").click(function() {
        priklad = $("#priklad").val();
        priklad = eval(priklad);
        if (priklad > 0) {
            priklad = priklad - (priklad * 2);
        }
        else {
            priklad = priklad - (priklad * 2);
        }
        $("#priklad").val(priklad);
    });

    $("#procento").click(function() {
        priklad = $("#priklad").val();
        priklad = eval(priklad);
        priklad = priklad / 100;
        $("#priklad").val(priklad);
    });

    $("#druhaodmocnina").click(function() {
        priklad = $("#priklad").val();
        priklad = eval(priklad);
        priklad = Math.sqrt(priklad);
        $("#priklad").val(priklad);
    });

    $("#nadruhou").click(function() {
        priklad = $("#priklad").val();
        priklad = eval(priklad);
        priklad = priklad * priklad;
        $("#priklad").val(priklad);
    });

    $("#jednadelenox").click(function() {
        priklad = $("#priklad").val();
        priklad = eval(priklad);
        priklad = 1 / priklad;
        $("#priklad").val(priklad);
    });
});