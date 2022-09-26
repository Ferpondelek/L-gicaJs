function mostra() {
	var periodo = document.getElementById("turno").value;
	
	if(periodo == "M"||periodo=="m"){
		alert("Bom Dia");
	}

	if(periodo == "V"|| periodo=="v"){
		alert("Boa tarde");
	}
	
	if(periodo == "N"||periodo=="n"){
		alert("Boa noite");
	}
}