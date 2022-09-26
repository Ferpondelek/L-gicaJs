function mostra(){
	var numero = parseInt(document.getElementById("numero").value);
	var resposta = document.getElementById("resposta");
	var tabuada = "";

	for (var i = 1; i <= 10; i++) {
		
		tabuada += numero + "x" + [i] + "=" + numero*[i] + "<br/>";

		resposta.innerHTML = tabuada;

	}
}