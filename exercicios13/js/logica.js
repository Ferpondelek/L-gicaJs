function mostra(){
	dia = parseInt(document.getElementById("dia").value)
	
	if(dia==1){
		alert("Domingo");
	}else{
		if(dia==2){
			alert("Segunda-feira");
		}else{
			if(dia==3){
				alert("Terça-feira");
			}else{
				if (dia==4) {
					alert("Quarta-feira");
				}else{
					if (dia==5) {
						alert("Quinta-feira");
					}else{
						if (dia==6){
							alert("Sexta-feira");
						}else{
							if (dia==7) {
								alert("Sábado");
							}else{
								alert("Valor inválido");
							}
						}
					}
				}
			}
		}
	}
}