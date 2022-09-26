function compara(){
	var numero = parseInt(document.getElementById("numero").value);
	var par = numero%2;
	if(par==0) {
		alert("é par");
	}else{
		alert("não é par");
	}
}