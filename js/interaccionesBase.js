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

        generarVentasDia();

        if (dias >= 7) {
            dias = 0;
            semanas = semanas + 1;
            if (semanas >= 5) {
                semanas = 1;
                dinero = dinero - totalPagaEmpleados;
                for (var i = 0; i < prendasCompra.length; i++) {
                    masStock = Math.floor((Math.random() * 20) + 0);
                    prendasCompra[i][3] = prendasCompra[i][3] + masStock;
                }
                meses = meses + 1;
                data.push(0);
                if (meses >= 13) {
                    meses = 1;
                    anios = anios + 1;
                    var arrAux = new Array(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11]);
                    dataAnios.push(arrAux);
                    data.length = 0;
                    data.push(0);
                }
            }
        }
        dias = dias + 1;
        $("#tiempoJuego").text("Años: " + anios + " Meses: " + meses + " Semanas: " + semanas + " Dias: " + dias);



    }, pasoDeTiempo);
}

function generarVentasDia() {
    personas = Math.floor((Math.random() * 200) + 10);

    for (var y = 1; y <= personas; y++) {
        probEntrar = Math.random();

        if ((probEntrar >= 0) && (probEntrar <= 0.1)) {
            for (var i = 0; i < prendasStock.length; i++) {
                compra = 1;
                while (compra == 1) {
                    probComprar = Math.random();
                    if ((probComprar >= 0) && (probComprar <= 0.05)) {
                        if (prendasStock[i][2] > 0) {
                            data[meses - 1] = data[meses - 1] + 1;
                            prendasStock[i][2] = prendasStock[i][2] - 1;
                            dinero = dinero + prendasStock[i][3];
                            volverComprar = Math.random();
                            if ((volverComprar >= 0) && (volverComprar <= 0.02)) {
                                compra = 1;
                            } else {
                                compra = 0;
                            }

                        } else {
                            compra = 0;
                        }
                    }
                }

            }
        }

    }

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
