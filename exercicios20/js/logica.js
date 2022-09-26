function compara(){
	var numero = parseInt(document.getElementById("numero").value);
	var unidade = parseInt(numero%10);
	console.log(unidade.value)
	var numero = (numero-unidade)/10;
	console.log(parseInt(numero).value);
	var dezena = parseInt(numero%10);
	var numero = (numero-dezena)/10;
	var centena = numero;
	alert(centena+" centenas, " + dezena + " dezenas, " + unidade+ " unidades");
}