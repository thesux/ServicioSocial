window.onbeforeunload = confirmExit;
if (sessionStorage.getItem("datosTabla") == null) {
    var data = [];
} else {

    var data = JSON.parse(sessionStorage.getItem("datosTabla"));

}
if (sessionStorage.getItem("datosXAnio") == null) {
    var dataAnios = [];
} else {

    var dataAnios = JSON.parse(sessionStorage.getItem("datosXAnio"));

}

if (sessionStorage.getItem("empleados") == null) {
    var emp1 = [
        "Esmeralda",
        "Fortunata",
        "Jerónimo",
        0,
        0,
        0
    ];
    var emp2 = [
        "Paulino",
        "Baldo",
        "Irene",
        0,
        0,
        0
    ];
    var emp3 = [
        "Almudena",
        "Gil",
        "Chelo",
        0,
        0,
        0
    ];
    var emp4 = [
        "Régulo",
        "Aristides",
        "Salud",
        0,
        0,
        0
    ];
    var emp5 = [
        "Constanza",
        "Florentino",
        "Florentino",
        0,
        0,
        0
    ];
    var empleados = new Array(emp1, emp2, emp3, emp4, emp5);
} else {

    var empleados = JSON.parse(sessionStorage.getItem("empleados"));

}

if (sessionStorage.getItem("prendasStock") == null) {
  var pren1 = ["Tenis", "Converse", 0, 0];
  var prendasStock = new Array(pren1);
} else {

    var prendasStock = JSON.parse(sessionStorage.getItem("prendasStock"));

}

if (sessionStorage.getItem("prendasCompra") == null) {
  var prencomp1 = ["Tenis", "Converse", 700, 100];
  var prendasCompra = new Array(prencomp1);
} else {

    var prendasCompra = JSON.parse(sessionStorage.getItem("prendasCompra"));
}

if (sessionStorage.dinero) {
    dinero = Number(sessionStorage.dinero);
} else {

    dinero = 70000;

}

if (sessionStorage.dias) {
    dinero = Number(sessionStorage.dinero);
} else {

    dinero = 70000;

}
if (sessionStorage.dias) {
    dias = Number(sessionStorage.dias);
} else {

    dias = 0;

}
if (sessionStorage.semanas) {
    semanas = Number(sessionStorage.semanas);
} else {

    semanas = 0;

}
if (sessionStorage.meses) {
    meses = Number(sessionStorage.meses);
} else {

    meses = 0;

}
if (sessionStorage.anios) {
    anios = Number(sessionStorage.anios);
} else {

    anios = 0;

}
$("#tiempoJuego").text("Años: " + anios + " Meses: " + meses + " Semanas: " + semanas + " Dias: " + dias);

if (anios < 2) {
    totalPagaEmpleados = 0;
    for (var i = 0; i < empleados.length; i++) {
        var act = empleados[i];
        if (act[3] == 1) {

            totalPagaEmpleados = totalPagaEmpleados + act[5];
        }
    }
    var inter = setInterval(function() {

        if (anios == 2) {
            clearInterval(inter);
            dias = dias - 1;
        }

        if (dias >= 7) {
            dias = 0;
            semanas = semanas + 1;
            if (semanas >= 5) {
                semanas = 1;
                dinero = dinero - totalPagaEmpleados;
                meses = meses + 1;
                data.push(Math.floor(Math.random() * 100));
                if (meses >= 13) {
                    meses = 1;
                    anios = anios + 1;
                    var arrAux = new Array(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11]);
                    dataAnios.push(arrAux);
                    data.length = 0;
                    data.push(Math.floor(Math.random() * 100));
                }
            }
        }
        dias = dias + 1;
        $("#tiempoJuego").text("Años: " + anios + " Meses: " + meses + " Semanas: " + semanas + " Dias: " + dias);



    }, pasoDeTiempo);
}


function confirmExit() {
    if (typeof(Storage) !== "undefined") {
        sessionStorage.dias = dias;
        sessionStorage.semanas = semanas;
        sessionStorage.meses = meses;
        sessionStorage.anios = anios;
        sessionStorage.dinero = dinero;
        sessionStorage.setItem("datosTabla", JSON.stringify(data));
        sessionStorage.setItem("datosXAnio", JSON.stringify(dataAnios));
        sessionStorage.setItem("empleados", JSON.stringify(empleados));
        sessionStorage.setItem("prendasStock", JSON.stringify(prendasStock));
        sessionStorage.setItem("prendasCompra", JSON.stringify(prendasCompra));
    } else {
        return ("Actualize su navegador, o de lo contrario el juego no funcionará");
    }

}
