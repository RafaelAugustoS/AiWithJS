<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>AI com JS</title>
	<link rel="stylesheet" href="css/estilo.css">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700' rel='stylesheet' type='text/css'>
</head>
<body>

	<div class="scene">
		<div class="grass"></div>
		<div class="road">
			<div class="ai">
				<div class="sensor_1">1</div>
				<div class="sensor_2">2</div>
				<div class="sensor_3">3</div>
			</div>
			
			<div id="wall" class="wall"></div>
		</div>
		
		<div class="grass"></div>
	</div>

	<div class="debugArea">
    
	    <textarea id="debugTextarea" class="debugTextareaClass">N/A</textarea>  
	    <input type="text" id="PassosFeitos" value="0" style="width:50px">
	    <input type="button" id="iniciar" value="Iniciar" onClick="runSim('1')" />
	    <input type="button" id="parar" value="Parar" onClick="runSim('0')" />
	    
	</div>

	<script src="js/ai.js"></script>
</body>
</html>