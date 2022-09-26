function valida() {
	var dia = parseInt(document.getElementById("dia").value);
	var mes = parseInt(document.getElementById("mes").value);
	var ano = parseInt(document.getElementById("ano").value);
	var resposta = document.getElementById("resposta");
	var bissexto = ano%4;

	switch(mes){
		
		case 1: case 3: case 5: case 7: case 8: case 10: case 12:
		
		if (dia<=31)
			resposta.innerHTML = "Data válida";
		
		else
			resposta.innerHTML = "Data inválida 1(veja se está correto o dia do mês)";
			break;
		
		case 4: case 6: case 9: case 11:
		if(dia<=30){
			resposta.innerHTML = "Data válida";
		}else{
			resposta.innerHTML = "Data inválida 2(veja se está correto o dia do mês)";
			break;	
		}
		
		case 2:
		if(bissexto==0){
			if(dia<=29){
				resposta.innerHTML = "Data válida";
			}
		}else{
			if(dia <= 28){
				resposta.innerHTML = "Data válida";	
			}else{
				resposta.innerHTML = "Data inválida 3(veja se está correto o dia do mês)";
			}
		}
	}
}