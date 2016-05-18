<!DOCTYPE html>

<html lang="en">

	<head>
	
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<title>Simulador de Negocios</title>

		<!-- Bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet">

		<script src="js/jquery-1.12.0.min.js"></script>
		<script src="js/bootstrap.min.js"></script>

	</head>
	<style type="text/css">
		@import url("css/style.css");
	</style>
    
	<body>

		<!--Barra de navegación-->
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">

					<p style="font-size: 18px;" class="navbar-text">Simulador</p>
					
					<a class="navbar-brand" href="#ImagenPrincipal">
						<span class="glyphicon glyphicon-home" aria-hidden="true"></span>
					</a>
					<a class="navbar-brand" href="#QuienesSomos">
						¿Quiénes somos?
					</a>
					<a class="navbar-brand" href="#otra">
						Opción1
					</a>
					<a class="navbar-brand" href="#">
						Opción2
					</a>
					<a class="navbar-brand" href="#">
						Opción3
					</a>

					<p style="font-size: 16px;" class="navbar-text navbar-right"><a data-toggle="modal" data-target="#LogIn" class="navbar-link"><span style="padding:10px;" class="label label-default">LogIn</span></a></p>

				</div>
			</div>
		</nav>

		<!--Form LogIn-->
		<div id="LogIn" class="modal fade" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								&times;
							</span>
						</button>
						<br>
						<br>
					</div>

					<div class="modal-body">
						<div class="input-group">
							
							<span class="input-group-addon" id="sizing-addon1">
								<span class="glyphicon glyphicon-user" aria-hidden="true">
									
								</span>
							</span>
							<input type="text" class="form-control" placeholder="Username" id="Username" arial-describedby="basic-addon1">

						</div>
						<br>
						<div class="input-group">

							<span class="input-group-addon" id="sizing-addon1">
								<span class="glyphicon glyphicon-lock" aria-hidden="true">
									
								</span>
							</span>
							<input type="password" class="form-control" placeholder="Password" id="UserPassword" arial-describedby="basic-addon1">

						</div>

					</div>

					<div class="modal-footer">
						
                        <button type="button" id="Entrar" data-loading-text="Loading..." class="btn btn-primary" autocomplete="off">
                            Entrar
                        </button>
                        
                        <script>
                            $('#Entrar').on('click', function () {
                                
                                var $btn = $(this).button('loading');
                                var $user = $("#Username").val();
                                var $password = $("#UserPassword").val();
                                
                                if ($user == "Admin") {
                                    
                                    if ($password == "password"){
                                        
                                        location.href='Juego.php';
                                        
                                    }
                                    
                                }else{
                                    
                                    alert("No se pudo iniciar sesión!");
                                    
                                }
                                
                                $btn.button('reset');
                            })
                        </script>
						
                        <button type="button" class="btn btn-danger"  data-dismiss="modal" aria-label="Close">
                            Cancelar
                            <span aria-hidden="true"></span>
                        </button>
                        
					</div>
                    
				</div>
			</div>
		</div>

		<!--Documentación-->
		<div class="jumbotron" style="background-color: white;" id="ImagenPrincipal" align="center">
			<img src="IMG/Inicio.png" alt="" width="100%" height="100%;">
		</div>

		<div id="QuienesSomos">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="panel panel-info"><h1>¿Quiénes Somos?</h1></div>
						<p style="text-align: justify;">
							Somos una institución de educación superior comprometida en
							promover y lograr la igualdad de oportunidades entre hombres y mujeres
							y la no discriminación en el acceso a la educación y al empleo.
						</p>
					</div>
					<div class="col-md-6">
						
					</div>
				</div>
			</div>

			<br><br>
			
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="panel panel-info"><h3>Misión</h3></div>
						<p style="text-align: justify;">
							Formar profesionistas integrales; potencializando sus competencias,
							fortaleciendo los valores institucionales y contribuyendo al desarrollo de
							los diversos sectores de la sociedad.
						</p>
					</div>
					<div class="col-md-6">
						<div class="panel panel-info"><h3>Visión</h3></div>				
						<p style="text-align: justify;">
							En el 2018: Ser la primera opción educativa de Enseñanza Superior en la región.
						</p>
					</div>
				</div>
			</div>

			<br><br>

			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="panel panel-info"><h3>Política integral de calidad</h3></div>
						<p style="text-align: justify;">
							"Somos una institución de educación superior comprometida con la equidad, la
							calidad educativa, la prevención de la contaminación y la protección del ambiente,
							así como la seguridad de nuestra comunidad universitaria, para la formación
							de profesionistas mediante la generación, aplicación y difusión del conocimiento,
							la investigación aplicada y la cultura; con una visión de mejora continua
							y sustentabilidad, asegurando el cumplimiento de la legislación aplicable".
							Upemor cuenta con las certificaciones académicas de CIEES y CACEI, así como
							ISO 9001:2008. Somos una Sociedad Ambiental certificada en ISO 14001 – 2004
							y Calidad Ambiental de PROFEPA
						</p>
					</div>
					<div class="col-md-6">
						
					</div>
				</div>
			</div>
		</div>

		<br><br><br><br><br><br><br><br><br>
		<br><br><br><br><br><br><br><br><br>

		<div id="otra">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="panel panel-info"><h1>Otra parte</h1></div>
					</div>
				</div>
			</div>
			

			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="panel panel-info"><h1>Sección 1</h1></div>
					</div>
				</div>
			</div>

			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="panel panel-info"><h1>Sección 2</h1></div>
					</div>
				</div>
			</div>
			
			<br><br><br><br><br><br><br><br><br>
             
		</div>

		<footer>
			<div class="container-fluid" style="background: black;">
				<div class="navbar-header">

					<a class="navbar-brand" href="#QuienesSomos">
						Contactanos
					</a>
					
				</div>
			</div>
		</footer>

	</body>

	

</html>

