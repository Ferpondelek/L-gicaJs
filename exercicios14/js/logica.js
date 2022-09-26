function compara(){
	var nota1 = parseFloat(document.getElementById("nota1").value);
	var nota2 = parseFloat(document.getElementById("nota2").value);
	var media = parseFloat(nota1+nota2)/2;


	if(media > 9.0){
		alert("Suas notas: "+nota1+" e "+nota2+"\n"+"Sua média = "+media+"\n"+"Conceito = A\n Parabéns, você está APROVADO!");
	}else{
		if(media > 7.5 && media <= 9.0){
		alert("Suas notas: "+nota1+" e "+nota2+"\n"+"Sua média = "+media+"\n"+"Conceito = B\n Parabéns, você está APROVADO!");		
		}else{
			if (media > 6 && media <= 7.5) {
				alert("Suas notas: "+nota1+" e "+nota2+"\n"+"Sua média = "+media+"\n"+"Conceito = C\n Parabéns, você está APROVADO!");
			}else{
				if(media > 4 && media <= 6){
					alert("Suas notas: "+nota1+" e "+nota2+"\n"+"Sua média = "+media+"\n"+"Conceito = D\n Você está REPROVADO!");
				}else{
					if (media<4) {
						alert("Suas notas: "+nota1+" e "+nota2+"\n"+"Sua média = "+media+"\n"+"Conceito = E\n Você está REPROVADO!");
					}
				}
			}
		}
	}

}