function maior(){
var numero1 = parseInt(document.getElementById("num1").value);
var numero2 = parseInt(document.getElementById("num2").value);
var numero3 = parseInt(document.getElementById("num3").value);

	var maior = 0;
	
	if (numero1>numero2&&numero1>numero3){
		maior = numero1;
		
	}else{
		if(numero2>numero1&&numero2>numero3){
			maior = numero2;
			
		}else{
			if(numero3>numero1&&numero3>numero2){
				maior = numero3;
				
			}
		}
	}
alert("O maior número é o : "+maior);
}

function menor(){
var numero1 = parseInt(document.getElementById("num1").value);
var numero2 = parseInt(document.getElementById("num2").value);
var numero3 = parseInt(document.getElementById("num3").value);

	var menor = 0;
	if (numero1<numero2&&numero1<numero3){
		menor = numero1;
		
	}else{
		if(numero2<numero1&&numero2<numero3){
			menor = numero2;
			
		}else{
			if(numero3<numero1&&numero3<numero2){
				menor = numero3;
				
			}
		}
	}
alert("O  menor número é o "+menor);
}
