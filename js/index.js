//Inicio todo el document o ya esta listo y se ejecuta
$(document).ready(function(){

	inicia();

	//dialog para agregar alumnos
	$("#dialog-form").dialog({
		autoOpen: false,
		height: 195,
		width: 300,
		modal: true
	});

});

function inicia () {
	listar_empleado();
	
}

function mostrar_formulario () {
	$("#dialog-form").dialog("open");
	$("#cancelar").click(cerrar_formulario);
	$("#guardar").click(guardar);
}

function guardar (argument) {
	 var datos={usuario:$("#usuario").val(),
	 contra:$("#pass").val()};

	 $.each(datos, function(index,val) {

	 });

	 $.ajax({
		async: true,
		type: "POST",
		dataType: "html",
		contentType:"application/x-www-form-urlencoded",
		url: "php/guardarUsuario.php",
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

function cerrar_formulario () {
	$("#dialog-form").dialog("close");
}


function listar_empleado (argument) {


	//Llamado Ajax
	
	$("#registrarse").click(mostrar_formulario);
	

	return false;

}
