function procurar() {

	var numero = parseInt(document.getElementById("numero").value);
	var divisor = 1;
	while(divisor<=numero){

		var resto = parseInt(numero%divisor);
		console.log(resto)
		console.log(divisor)
		if(resto==0){

			alert("divisores comuns = " +divisor);
			
		}
		divisor++;
	}

}	