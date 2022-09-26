function compara() {
	var numero1 = parseInt(document.getElementById("num1").value);
	var numero2 = parseInt(document.getElementById("num2").value);
	var numero3 = parseInt(document.getElementById("num3").value);
	var aux = numero1;

	if(numero2>numero1){
		aux = numero2;
		numero2 = numero1;
		numero1 = aux;
	}

	if(numero3>numero1){
	aux = numero3;
	numero3 = numero1;
	numero1 = aux; 
	}

	if(numero3>numero2){
	aux = numero3;
	numero3 = numero2;
	numero2 = aux;
	}
		
alert(numero1+" - "+numero2+"-"+numero3)
}

