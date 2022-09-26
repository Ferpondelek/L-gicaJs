function progressao() {
	
	var numeroInicial = parseInt(document.getElementById("numeroInicial").value);
	var razao = parseInt(document.getElementById("razao").value);
	var termo = parseInt(document.getElementById("termo").value);
	var PA = "";
	var resposta = document.getElementById("resposta");
	
	for(var contador = 1 ; contador <= termo ; contador++){	
		PA += "Termo "+contador+" = "+numeroInicial+"<br/>";
		numeroInicial += razao;

	}
	resposta.innerHTML = PA;
}

function fatorial() {
	var numeroFatorial = parseInt(document.getElementById("numeroFatorial").value);
	var resposta2 = document.getElementById("resposta2");
	var resultado = 1;
	for (var contador = 1 ; contador <= numeroFatorial ; contador++)
		
	resposta2.innerHTML = (resultado*=contador);
}

function fibonacci(){
	var resposta3 = document.getElementById("resposta3");
	var	termo = parseInt(document.getElementById("termoFibonacci").value);
	var ultimo = 1; penultimo = 0; resultado=""; 
	var auxiliar="";

	for(contador = 1 ; contador<=termo ; contador++){
		if (contador<=2) {
			auxiliar += "termo "+ contador +" : "+ (contador-1)+"<br/>" ;
		}else{
			auxiliar += "termo "+ contador + " : "+ (ultimo+penultimo)+"<br/>";
			resultado= ultimo+penultimo;
			penultimo = ultimo;
			ultimo = resultado;

		}
	}
	resposta3.innerHTML = auxiliar;
}

function primo(){
	
	var respostas4 = document.getElementById("respostas4");
	var numeroPrimo =  parseInt(document.getElementById("numeroPrimo").value);
	var divisores = 0;
	
	for(var contador = 1; contador<=numeroPrimo; contador++){
		if(numeroPrimo%contador==0){
			divisores++;
		}
		if(divisores == 2){
			respostas4.innerHTML = "É primo";
		}else{
			respostas4.innerHTML = " Não é primo";
		}
	}
		
}

function numerosPrimos(){

	var primeiroNumero = parseInt(document.getElementById("primeiroNumero").value);
	var segundoNumero = parseInt(document.getElementById("segundoNumero").value);
	var respostas5 = document.getElementById("resposta5");
	var div ;
	var text = "";

	for(var count = primeiroNumero; count <= segundoNumero; count++){
		div=0;
		for(var a = 0; a<=count; a++){
			if (count%a==0) 
				div++
			
		}
		if(div==2||div==1)
			text+= count+"<br/>";
		
	}
	respostas5.innerHTML = text;
}