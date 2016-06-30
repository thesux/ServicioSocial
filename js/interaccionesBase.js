window.onbeforeunload = confirmExit;
if (sessionStorage.getItem("datosTabla") == null) {
    var data = [];
} else {
    {
        var data = JSON.parse(sessionStorage.getItem("datosTabla"));
    }
}
if (sessionStorage.dias) {
    dias = Number(sessionStorage.dias);
} else {
    {
        dias = 0;
    }
}
if (sessionStorage.semanas) {
    semanas = Number(sessionStorage.semanas);
} else {
    {
        semanas = 0;
    }
}
if (sessionStorage.meses) {
    meses = Number(sessionStorage.meses);
} else {
    {
        meses = 0;
    }
}
if (sessionStorage.anios) {
    anios = Number(sessionStorage.anios);
} else {
    {
        anios = 0;
    }
}
$("#tiempoJuego").text("Años: " + anios + " Meses: " + meses + " Semanas: " + semanas + " Dias: " + dias);
var inter = setInterval(function() {

    if (dias >= 7) {
        dias = 0;
        semanas = semanas + 1;
        if (semanas >= 5) {
            semanas = 1;
            meses = meses + 1;
            data.push(Math.floor(Math.random() * 100));
            if (meses >= 13) {
                meses = 1;
                anios = anios + 1;
                data.length = 0;
                data.push(Math.floor(Math.random() * 100));
            }
        }
    }
    dias = dias + 1;
    $("#tiempoJuego").text("Años: " + anios + " Meses: " + meses + " Semanas: " + semanas + " Dias: " + dias);

    //clearInterval(inter);

}, pasoDeTiempo);

function confirmExit() {
    if (typeof(Storage) !== "undefined") {
        sessionStorage.dias = dias;
        sessionStorage.semanas = semanas;
        sessionStorage.meses = meses;
        sessionStorage.anios = anios;
        sessionStorage.setItem("datosTabla", JSON.stringify(data));
    } else {
        return ("Actualize su navegador, o de lo contrario el juego no funcionará");
    }

}
