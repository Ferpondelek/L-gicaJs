function compara(){

	var nota1 =parseFloat(document.getElementById("nota1").value);
	var nota2 = parseFloat(document.getElementById("nota2").value);
	var media = parseFloat((nota1+nota2)/2);
	console.log(media)
	
	if (media==10) {
		alert("Parbéns, aprovado com exíto");
	}else{
		if(media>7){
			alert("aprovado");
		}else{
			alert("reprovado");
		}
	}
}