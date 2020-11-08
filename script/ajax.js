var _jmeno, _heslo, _formular;

function nastavit() {
    _jmeno = document.getElementById("jmeno");
    _heslo = document.getElementById("heslo");
    _formular = document.getElementById("formular");
}

function odeslat() {
    let data = {
        jmeno: _jmeno.value,
        heslo: _heslo.value
    }

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "php/ajax_json.php", true);

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let odpoved = JSON.parse(this.responseText);

            _jmeno.value = "";
            _heslo.value = "";

            let html = "";
            html += "<p>Jméno (JSON): " + odpoved["jmeno"] + "</p>";
            html += "<p>Heslo (JSON): " + odpoved["heslo"] + "</p>";
            html += "<p>Hash (JSON): " + odpoved["hash"] + "</p>";

            _formular.innerHTML = html;
        }
    };
    
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("data=" + JSON.stringify(data));
}
