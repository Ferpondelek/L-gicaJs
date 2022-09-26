function trocar() {
var numero1 = parseInt(document.getElementById("number1").value);
var numero2 = parseInt(document.getElementById("number2").value);
	var troca = numero1;
	numero1=numero2;
	numero2=troca;
	alert(" numero 1 antes : "+document.getElementById("number1").value+
		" numero 2 antes "+document.getElementById("number2").value+" numero 1 depois : "+numero1+" numero 2 depois : "+numero2);

}