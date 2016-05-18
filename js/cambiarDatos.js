//Inicio todo el document o ya esta listo y se ejecuta
$(document).ready(function(){

	inicia();

	//dialog para agregar alumnos

});

function inicia () {
	$("#guardar").click(guardar);
	$("#guardar2").click(guardar2);
	//listar_empleado();
	
}

function mostrar_formulario () {
	$("#dialog-form").dialog("open");
	$("#cancelar").click(cerrar_formulario);
	
}

function guardar (argument) {
	 var datos={nombre:$("#nombre").val(),
	 apellido:$("#apellido").val(),
	 direccion:$("#direccion").val(),
	 telefono:$("#telefono").val()};

	 $.each(datos, function(index,val) {

	 });

	 $.ajax({
		async: true,
		type: "POST",
		dataType: "html",
		contentType:"application/x-www-form-urlencoded",
		url: "../php/guardarDatos.php",
		data: datos,
		beforeSend: function (e){  //antes de qe se manden los parametros, se hara algo
			$("#error").html("<img width='250px' src='img/loading.gif'>");
		},
		success: function (data){
			$("#error").html(data);
		},
		error: function (data){
			$("#error").html("Algo ocurrio mal");
		}
	});

	return false;

}

function guardar2 (argument) {
	 var datos={usuario:$("#usuario").val(),
	 contra:$("#contra").val()};

	 $.each(datos, function(index,val) {

	 });

	 $.ajax({
		async: true,
		type: "POST",
		dataType: "html",
		contentType:"application/x-www-form-urlencoded",
		url: "../php/CambiarUsuario.php",
		data: datos,
		beforeSend: function (e){  //antes de qe se manden los parametros, se hara algo
			$("#error2").html("<img width='250px' src='img/loading.gif'>");
		},
		success: function (data){
			$("#error2").html(data);
		},
		error: function (data){
			$("#error2").html("Algo ocurrio mal");
		}
	});

	return false;

}

function cerrar_formulario () {
	$("#dialog-form").dialog("close");
}


function listar_empleado (argument) {


	//Llamado Ajax
	
	$("#registrarse").click(mostrar_formulario);
	

	return false;

}
