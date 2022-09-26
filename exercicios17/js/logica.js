function comparar() {
	var ano = parseInt(document.getElementById("ano").value);
	var bissexto = ano%4;
	if(bissexto==0){
		alert("É um ano bissexto");
	}else{
		alert("Não é ano bissexto");
	}
}