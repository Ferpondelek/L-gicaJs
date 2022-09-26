


function comparaIgualdade(){
	var number1 = parseInt(document.getElementById("number1")).value;
	var number2 = parseInt(document.getElementById("number2")).value;
	alert(number1==number2);
}

function comparaDiferente(){
	var number3 = parseInt(document.getElementById("number3")).value;
	var number4 = parseInt(document.getElementById("number4")).value;
	alert(number3!=number4);
}

function comparaMaior(){
	var number5 = parseInt(document.getElementById("number5")).value;
	var number6 = parseInt(document.getElementById("number6")).value;
	alert(number5>number6);
}

function comparaMenor(){
	var number7 = parseInt(document.getElementById("number7")).value;
	var number8 = parseInt(document.getElementById("number8")).value;
	alert(number7<number8);
}

function comparaMaiorOuIgual(){
	var number9 = parseInt(document.getElementById("number9")).value;
	var number10 = parseInt(document.getElementById("number10")).value;
	alert(number9>=number10);
}

function comparaMenorOuIgual(){
	var number11 = parseInt(document.getElementById("number11")).value;
	var number12 = parseInt(document.getElementById("number12")).value;
	alert(number11<=number12);
}