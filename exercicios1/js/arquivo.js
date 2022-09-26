
function areaEPerimetro(){
	var diametro = document.getElementById("diametro").value;
	//var diametro = parseFloat(prompt("digite o diâmetro do circulo"));
	var raio = diametro/2;
	var area = parseFloat(Math.PI*Math.pow(raio,2));
	//area = parseFloat(area);
	var perimetro = parseFloat(2*Math.PI*raio);
	//perimetro = parseFloat(perimetro);
	alert("a area do circulo é : "+area.toFixed(2)+" e o perimento é : "+ perimetro.toFixed(2));
}

function converteParaFahrenheit(){
	var celsius = document.getElementById("celsius").value;
	//var celsius = parseFloat(prompt("Digite quantos graus Celsius"));
	var fahrenheit = (celsius*9/5)+32;
	alert(fahrenheit +" Graus Fahrenheit");
}

function converteParaCelsius(){
	var fahrenheit = document.getElementById("fahrenheit").value;
	//var fahrenheit = parseFloat(prompt("Digíte Quantos graus Fahrenheit"));
	var celsius = (fahrenheit-32)*5/9;
	alert(celsius.toFixed(2) + " Graus Celsius");
}

function kmParaRodar(){
	var km = document.getElementById("kmPorLitro").value;
	//var km = parseFloat(prompt("Quantos quiômetros seu carro faz por litro ?"));
	var litros = document.getElementById("lParaRodar").value;
		//var litros = parseFloat(prompt("Quantos litros de gasolina ?"));
	var podeRodar = km*litros;
	alert("seu carro pode rodar ainda "+ podeRodar + "Kms");
}

function cigarrosFumados(){
	var cigarro = document.getElementById("cigarroPorDia").value;
	//var cigarro = parseInt(prompt("Quantos cigarrros você fuma por dia ?"));
	var ano = 365*cigarro;
	alert("em uma ano você fumou "+ano+" cigarros" );
}