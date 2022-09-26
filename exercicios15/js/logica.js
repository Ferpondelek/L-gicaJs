function mostra() {
	var lado1 = parseInt(document.getElementById("lado1").value);
	var lado2 = parseInt(document.getElementById("lado2").value);
	var lado3 = parseInt(document.getElementById("lado3").value);

	if(lado1+lado2>lado3||lado2+lado3>lado1||lado1+lado3>lado2){
		alert("É um triângulo");
	}
	if(lado1==lado2&&lado2==lado3){
		alert("Equilátero");
	}else{
		if(lado1==lado2||lado2==lado3||lado3==lado1){
			alert("Isósceles");
		}else{
			if(lado1!=lado2&&lado1!=lado3&&lado2!=lado3){
				alert("Escaleno");
			}
		}
	} 
}