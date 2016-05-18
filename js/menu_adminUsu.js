//Inicio todo el document o ya esta listo y se ejecuta
$(document).ready(function(){

	inicia();

	//dialog para agregar alumnos
	$("#dialog-form").dialog({
		autoOpen: false,
		height: 500,
		width: 400,
		modal: true
	});

	$("#dialog-form1").dialog({
		autoOpen: false,
		height: 500,
		width: 400,
		modal: true
	});

});

function inicia () {
	listar_empleado();
	$("#buscador").keyup(buscador);
	
}

function mostrar_formulario () {
	$("#dialog-form").dialog("open");
	$("#cancelar").click(cerrar_formulario);
	$("#guardar").click(guardar);
}

function guardar (argument) {
	 alert("Guardar");
	 var datos={usuario:$("#usu").val(),
	 contra:$("#contra").val(),
	 tipo:$("#tipo").val()};

	 $.each(datos, function(index,val) {

	 });

	 $.ajax({
		async: true,
		type: "POST",
		dataType: "html",
		contentType:"application/x-www-form-urlencoded",
		url: "../php/guardarUsu.php",
		data: datos,
		beforeSend: function (e){  //antes de qe se manden los parametros, se hara algo
			$("#error").html("Guardando...");
		},
		success: function (data){
			$("#error").html(data);
			listar_empleado();
		},
		error: function (data){
			$("#error").html("Algo ocurrio mal");
		}
	});

	return false;

}

function cerrar_formulario () {
	$("#dialog-form").dialog("close");
	$("#dialog-form1").dialog("close");
}

function buscador () {

	var nombre = {nombre:$("#buscador").val()};

	$.ajax({
		async: true,
		type: "POST",
		dataType: "html",
		contentType:"application/x-www-form-urlencoded",
		url: "php/buscador.php",
		data: nombre,
		beforeSend: function (e){  //antes de qe se manden los parametros, se hara algo
			$("#lista").html("<img width='300px' src='img/loading.gif'>");
		},
		success: function (data){
			$("#lista").html("");
			$("#lista").html(data);
			$("#agregar").click(mostrar_formulario);
			$(".eliminar").click(eliminar);
		},
		error: function (data){
			$("#lista").html("");
			alert("Mal");
		}
	});

	return false;

}

function listar_empleado (argument) {


	//Llamado Ajax
	var datos = {id:$("#nombre").val(),
	edad:$("#edad").val()};

	$.ajax({
		async: true,
		type: "POST",
		dataType: "html",
		contentType:"application/x-www-form-urlencoded",
		url: "../php/listaUsuarios.php",
		data: datos,
		beforeSend: function (e){  //antes de qe se manden los parametros, se hara algo
			//$("#lista").html("<img width='300px' src='img/loading.gif'>");
		},
		success: function (data){
			$("#lista").html("");
			$("#lista").html(data);
			$("#agregar").click(mostrar_formulario);
			$(".eliminar").click(eliminar);
			$(".mostrar_lista").click(mostrar_datos);
		},
		error: function (data){
			$("#lista").html("");
			alert("Mal");
		}
	});

	return false;

}

function eliminar () {
	//alert("Me voy a eliminar");
	var id=$(this).attr("eliminarid");
	alert(id);
	var fila=$(this).parents().get(1);
	var celdas=$(fila).find('td');
	var nombre=celdas.eq(1).text();
	var apellidop=celdas.eq(2).text();
	var apellidom=celdas.eq(3).text();
	if (confirm("Estas seguro de eliminar a "+nombre +" "+apellidop+" "+apellidom)) {
		

		//Llamado Ajax
		var datos = {id:id};

		$.ajax({
			async: true,
			type: "POST",
			dataType: "html",
			contentType:"application/x-www-form-urlencoded",
			url: "../php/eliminarUsu.php",
			data: datos,
		beforeSend: function (e){  //antes de qe se manden los parametros, se hara algo
			
		},
		success: function (data){
			if (parseInt(data)==1) {
				fila.remove();
			}else{
				alert("Error al eliminar");
			}
		},
		error: function (data){
			alert("Mal");
		}
	});

		return false;

	} 
	
}

function mostrar_datos () {
	var fila=$(this).parents().get(1);
	var celdas=$(fila).find("td");
	var id=celdas.eq(0).text();
	var usuario=celdas.eq(1).text();
	var contra=celdas.eq(2).text();
	var tipo=celdas.eq(3).text();

	$("#idm").val(id);
	$("#usum").val(usuario);
	$("#contram").val(contra);

	$("#dialog-form1").dialog("open");
	$("#cancelarm").click(cerrar_formulario);
	

	//para modificar es igual qe agregar
	$("#guardarm").click(modificar);
}


function modificar () {
		var id=$(this).attr("modificarid");

	var datos={id:$("#idm").val(),
		usuario:$("#usum").val(),
	 contra:$("#contram").val(),
	 tipo:$("#tipom").val()};

	$.ajax({
		async:true,
		url: '../php/modificarUsu.php', 
		type: 'POST', 
		dataType: 'html', 
		contentType: 'application/x-www-form-urlencoded',
		data:datos,
		beforeSend: function (e){  //antes de qe se manden los parametros, se hara algo
			$("#errorm").html("Modificando...");
		},
		success: function (data){
			$("#errorm").html(data);
			listar_empleado();
		},
		error: function (data){
			$("#errorm").html("Algo ocurrio mal");
		}

	});
	return false;

}