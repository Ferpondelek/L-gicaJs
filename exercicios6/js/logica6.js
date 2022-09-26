
function compara6() {
var numero1 = parseInt(document.getElementById("num1").value);
var numero2 = parseInt(document.getElementById("num2").value);
var numero3 = parseInt(document.getElementById("num3").value);
	
	if (numero1>numero2&&numero1>numero3){
		alert("o numero "+numero1+" é o maior");
	}else{
		if (numero2>numero1&&numero2>numero3) {
			alert("o numero "+numero2+" é o maior");
		}else{
			if (numero3>numero1&&numero3>numero2) {
				alert("o numero "+numero3+" é o maior");
			}
		}
	}	
}