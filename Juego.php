<!DOCTYPE html>

<html lang="en">

	<head>
	
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<title>Simulador de negocios</title>

		<!-- Bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet">

		<script src="js/jquery-1.12.0.min.js"></script>
		<script src="js/bootstrap.min.js"></script>

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

	</head>

	<style type="text/css">
		
		.iconosEscenario{

			position: relative;
			left: -215px;
			top: -140px;
			width:55px;
			height: 55px;
			background: transparent;
			border: none;
			color: transparent;

		}
		.iconosEscenario:hover{

			border: solid;
			border-color: rgb(0,120,185);

		}
	
		.iconosEscenario1{

			position: relative;
			left: -1000px;
			top: -300px;
			border: none;
		}
		.iconosEscenario1:hover{

			border: solid;
			border-color: black;

		}

		.iconosEscenario2{

			position: relative;
			left: -360px;
			top: -70px;
			width:55px;
			height: 55px;
			background: transparent;
			border: none;
			color: transparent;

		}
		.iconosEscenario2:hover{

			border: solid;
			border-color: red;

		}

	</style>
    
	<body>

		<!--Barra de navegación-->
		<nav class="navbar navbar-inverse">
			<div class="container-fluid">
				<div class="navbar-header">

					<p style="font-size: 18px;" class="navbar-text">Simulador</p>
					
                    <a class="navbar-brand" href="Index.php">
                        LogOut <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                    </a>
                    
                    <script>
                        
                        $('#Salir').on('click', function () {
                            
                            location.href='Index.php';

                        })
                        
                    </script>

				</div>
			</div>
		</nav>

		<!--Juego-->
        <div class="jumbotron" style="background-color: white;" align="center">
            <img style="position: relative;left:115px;top:-40px;" width="70%;" src="IMG/Escenario.jpg">
            
            <button class="iconosEscenario" data-toggle="modal" data-target="#OpcionesPublicidad">
            	
            </button>

            <button class="iconosEscenario1" data-toggle="modal" data-target="#DatosEmp">
            	Empresa
            </button>

            <button class="iconosEscenario2" data-toggle="modal" data-target="#EstadVentas">
            	
            </button>
		</div>

		<div class="jumbotron" style="background-color: white;" align="center">
			<table style="position: relative; top:-100px;">
				<tr>
					<td style="padding:50px;">
						<img width="300px" src="IMG/Graficas/1.png">
					</td>
					<td style="padding:50px;">
						<img width="300px" src="IMG/Graficas/2.jpg">
					</td>
					<td>
						<img width="300px" src="IMG/Graficas/3.png">
					</td>
				</tr>
				
			</table>			
		</div>


		<!--David-->

		<div class="modal fade" id="OpcionesPublicidad" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					<h2 align="center">Publicidad</h4>
				</div>
				<div class="modal-body">
				    <table  align="center">
				   		<tr>
				   			<td><h1><i class="fa fa-facebook-square fa-5x" style="color: #08088A"></i></h1></td>
				   			<td >

				   				<h5 align="center">La publicidad en Facebook funciona de una forma parecida 
				   					a Google Adwords, ya que también se basa en el sistema de 
				   					pago por click o en el pago por cada mil impresiones que 
				   					reciba tu anuncio. Se marca una impresión cada vez que se
				   				    muestra el anuncio en Facebook. Como decía su principal 
				   				    ventaja es la segmentación de los anuncios.</h5>
				   				<h5 align="right"><button class="btn btn-primary" data-toggle="modal" href="#stack2" > Detalle</button></h5>
				   			</td>
				   		</tr>	
				   		<tr>
				   			<td><h1><i class="fa fa-google fa-5x" style="color: blue"></i></h1></td>
				   			<td >

				   				<h5 align="center">Permita que los clientes vean su empresa 
				   					mientras buscan lo que ofrece en Google. Además, sólo se
				   					 le cobrará cuando hagan clic en su anuncio para visitar 
				   					 su sitio web o llamarlo.</h5>
				   				<h5 align="right"><button class="btn btn-primary" data-toggle="modal" href="#stack3" > Detalle</button></h5>
				   			</td>
				   		</tr>	
				    </table>
				    
				 </div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="stack2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					<IMG  align="center" SRC="IMG/Publicidad/facebook1.png" WIDTH=480 HEIGHT=100 BORDER=0>
				</div>
				<div class="modal-body">
						<table align="center">
							<tr>
								<td><h3 style="color: blue; font-size: 25px; font-family: Arial Black">Como empezar?</h3></td>
							</tr>
							<tr>
								<td>
									<IMG SRC="IMG/Publicidad/facebook.png" WIDTH=570 HEIGHT=600 BORDER=0>
								</td>
							</tr>
							<tr>
								<td><h3 style="color: blue; font-size: 25px; font-family: Arial Black">Costo</h3></td>
							</tr>
							<tr>
								<td>
									<IMG SRC="IMG/Publicidad/costofacebook.png" WIDTH=500 HEIGHT=400 BORDER=0>
								</td>
							</tr>
						</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary">Contratar</button>
				    <button type="button" data-dismiss="modal" class="btn btn-danger">Cerrar</button>
				 </div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="stack3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					<IMG  align="center" SRC="IMG/Publicidad/Google-AdWords-Advertising.png" WIDTH=480 HEIGHT=100 BORDER=0>
				</div>
				<div class="modal-body">
						<table>
							<tr>
								<td><h3 style="color: blue; font-size: 25px; font-family: Arial Black">Ventajas</h3></td>
							</tr>
							<tr>
								<td>
									<IMG SRC="IMG/Publicidad/googleAd.png" WIDTH=270 HEIGHT=180 BORDER=0>
								</td>
								<td align="top">
									<IMG SRC="IMG/Publicidad/googleAd2.png" WIDTH=270 HEIGHT=180 BORDER=0>
								</td>
							</tr>
							<tr>
								<td><IMG SRC="IMG/Publicidad/googleAd3.png" WIDTH=270 HEIGHT=180 BORDER=0></td>
							</tr>	
							<tr>
								<td><h3 style="color: blue; font-size: 25px; font-family: Arial Black">Costos</h3></td>
							</tr>
							<tr>
								<td>
									<IMG SRC="IMG/Publicidad/costogoogle.png" WIDTH=270 HEIGHT=180 BORDER=0>
								</td>
								<td align="top">
									<IMG SRC="IMG/Publicidad/costogoogle1.png" WIDTH=270 HEIGHT=180 BORDER=0>
								</td>
							</tr>
						</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary">Contratar</button>
				    <button type="button" data-dismiss="modal" class="btn btn-danger">Cerrar</button>
				 </div>
			</div>
		</div>
	</div>


	<!--SELENE-->
	<div class="container" style="margin-top: 100px;">
		<div class="modal fade" id="DatosEmp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<div class="alert alert-info" role="alert" align="center"><h2>Datos de la compañía  <span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span></h2></div>	
						<br>
						<div class="row">
							<div class="col-md-6" align="center">
								<table class="table table-striped" align="center">
									<tr><td>Nombre: </td><td align="center">Nombre compañía</td></tr>
									<tr><td>Localización:</td><td align="center">Ave. Potrero No.6</td></tr>
									<tr><td>Nombre: </td><td align="center">Nombre compañía</td></tr>
									<tr><td colspan="2" align="center"><b>Datos económicos<b></td></tr>
									<tr><td>Recursos: </td><td align="center">$33859.56</td></tr>
									<tr><td>Gastos: </td><td align="center">$6788.58</td></tr>
									<tr><td>Total: </td><td align="center">$28450.00</td></tr>
								</table>
							</div>
							<div class="col-md-6" align="center">
								<h5>Logo</h5>
								<div class="media">
								  <div class="media-left">
								   		<img style="border:1px dashed DarkSlateBlue;"  class="media-object" src="IMG/Inicio.png" width="170px;" height="140px;">
								  </div><br>
								  <div class="media-right"><button type="button" class="btn btn-info">Cambiar logo</button></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="modal fade" id="EstadVentas" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<div class="alert alert-info" role="alert" align="center"><h2>Porcentaje de Ventas  <span class="glyphicon glyphicon-usd" aria-hidden="true"></span></h2></div>	
						<br>
						<div class="row">
							<div class="col-md-6" align="center">
								<table class="table table-striped" align="center">
									<tr><td colspan="2" align="center"><b>Información<b></td></tr>
									<tr><td>Nombre: </td><td align="center">Nombre compañía</td></tr>
									<tr><td>Localización:</td><td align="center">Ave. Potrero No.6</td></tr>
									<tr><td>Nombre: </td><td align="center">Nombre compañía</td></tr>
									<tr><td>Recursos: </td><td align="center">$33859.56</td></tr>
									<tr><td>Gastos: </td><td align="center">$6788.58</td></tr>
									<tr><td>Total: </td><td align="center">$28450.00</td></tr>
								</table>
							</div>
							<div class="col-md-6" align="left">
								<div class="modal-body" align="right" style="position:absolute;left:45px;">
									<div id="ventas" style="height: 200px; width:70%; position: absolute;left:-45px;top:-40px;"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		


		<script type="text/javascript" style="height: 100px; width:10%;">
					var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
					window.onload = function () {
						var chart = new CanvasJS.Chart("ventas",
						{
							theme: "theme2",
				                        animationEnabled: true,
							title:{
								text: "Porcentaje de ventas",
								fontSize: 25
							},
							toolTip: {
								shared: true
							},			
							axisY: {
								title: "Ventas"
							},			
							data: [ 
							{
								type: "column",	
								name: "Deportiva",
								legendText: "Deportiva",
								showInLegend: true, 
								dataPoints:[
								{label: "1.Cuatrimestre", y: randomScalingFactor()},
								{label: "2.Cuatrimestre", y: randomScalingFactor()},
								{label: "3.Cuatrimestre", y: randomScalingFactor()},


								]
							},
							{
								type: "column",	
								name: "Informal",
								legendText: "Informal",
								showInLegend: true,
								dataPoints:[
								{label: "1.Cuatrimestre", y: randomScalingFactor()},
								{label: "2.Cuatrimestre", y: randomScalingFactor()},
								{label: "3.Cuatrimestre", y: randomScalingFactor()},


								]
							}
							
							],
				          legend:{
				            cursor:"pointer",
				            itemclick: function(e){
				              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				              	e.dataSeries.visible = false;
				              }
				              else {
				                e.dataSeries.visible = true;
				              }
				            	chart.render();
				            }
				          },
				        });

				chart.render();
				}
				</script>
	
	</div>

		
	</body>

</html>

