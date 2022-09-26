function mostra(){
	var salario = parseInt(document.getElementById("salario").value);
	if(salario<=280){
		var reajuste = (salario*20)/100;
		var aumento = reajuste+salario;
	
		alert("O salário antes do reajuste era de: "+salario+"R$\n"+ 
			" O percentual de aumento foi 20%.\n"+
			" O reajuste foi de " +reajuste+ "R$\n"+ 
			 " O total do salário é: " +aumento+"R$");
	}

	if(salario>280&&salario<=700){
		var reajuste = (salario*15)/100;
		var aumento = reajuste+salario;

		alert("O salário antes do reajuste era de: "+salario+"R$\n"+ 
			" O percentual de aumento foi 15%.\n"+
			" O reajuste foi de " +reajuste+ "R$\n"+ 
			 " O total do salário é: " +aumento+"R$");	
	}

	if(salario>700&&salario<=1500){
		var reajuste = (salario*10)/100;
		var aumento = reajuste+salario;

		alert("O salário antes do reajuste era de: "+salario+"R$\n"+ 
			" O percentual de aumento foi 10%.\n"+
			" O reajuste foi de " +reajuste+ "R$\n"+ 
			 " O total do salário é: " +aumento+"R$");	
	}


	if(salario>1500){
		var reajuste = (salario*5)/100;
		var aumento = reajuste+salario;

		alert("O salário antes do reajuste era de: "+salario+"R$\n"+ 
			" O percentual de aumento foi 5%.\n"+
			" O reajuste foi de " +reajuste+ "R$\n"+ 
			 " O total do salário é: " +aumento+"R$");	
	}
}