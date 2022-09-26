function calcula(){
	var valorHoras = parseInt(document.getElementById("valorHoras").value);
	var quantidade = parseInt(document.getElementById("quantidadeHoras").value);
	var salarioBruto = valorHoras*quantidade;
	var INSS = (salarioBruto*10)/100;
	var FGTS = (salarioBruto*11)/100;
	var porcentagem = 0;
	var impostoDeRenda = (porcentagem*salarioBruto)/100;
	var descontos = INSS+impostoDeRenda;
	var salarioLiquido= salarioBruto-descontos;

	if(salarioBruto<=900){

		alert("Salário bruto ("+valorHoras+"*"+quantidade+")    R$"+salarioBruto+"\n"+
			"(-) IR("+porcentagem+"%)    R$"+impostoDeRenda+"\n"+
			"(-) INSS (10%)    R$"+INSS+"\n"+
			"FGTS (11%)    R$"+FGTS+"\n"+
			"Total de Descontos    R$"+descontos+"\n"+
			"Salário Líquido    R$"+salarioLiquido);
	}


	if(salarioBruto>900&&salarioBruto<=1500){
		
		porcentagem = 5;
		impostoDeRenda = (porcentagem*salarioBruto)/100;
		descontos = INSS+impostoDeRenda;
		salarioLiquido= salarioBruto-descontos;

		alert("Salário bruto ("+valorHoras+"*"+quantidade+")    R$"+salarioBruto+"\n"+
			"(-) IR("+porcentagem+"%)    R$"+impostoDeRenda+"\n"+
			"(-) INSS (10%)    R$"+INSS+"\n"+
			"FGTS (11%)    R$"+FGTS+"\n"+
			"Total de Descontos    R$"+descontos+"\n"+
			"Salário Líquido    R$"+salarioLiquido);
	}

	if(salarioBruto>1500&&salarioBruto<=2500){
		
		porcentagem = 10;
		impostoDeRenda = (porcentagem*salarioBruto)/100;
		descontos = INSS+impostoDeRenda;
		salarioLiquido= salarioBruto-descontos;

		alert("Salário bruto ("+valorHoras+"*"+quantidade+")    R$"+salarioBruto+"\n"+
			"(-) IR("+porcentagem+"%)    R$"+impostoDeRenda+"\n"+
			"(-) INSS (10%)    R$"+INSS+"\n"+
			"FGTS (11%)    R$"+FGTS+"\n"+
			"Total de Descontos    R$"+descontos+"\n"+
			"Salário Líquido    R$"+salarioLiquido);
	}
	if(salarioBruto>2500){
		
		porcentagem = 20;
		impostoDeRenda = (porcentagem*salarioBruto)/100;
		descontos = INSS+impostoDeRenda;
		salarioLiquido= salarioBruto-descontos;

		alert("Salário bruto ("+valorHoras+"*"+quantidade+")    R$"+salarioBruto+"\n"+
			"(-) IR("+porcentagem+"%)    R$"+impostoDeRenda+"\n"+
			"(-) INSS (10%)    R$"+INSS+"\n"+
			"FGTS (11%)    R$"+FGTS+"\n"+
			"Total de Descontos    R$"+descontos+"\n"+
			"Salário Líquido    R$"+salarioLiquido);
	}
}