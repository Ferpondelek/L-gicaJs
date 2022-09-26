function entrar(){
	var senha = '';

	do{
		senha = prompt("digite sua senha");
		if(senha=='naosei')
			alert("entrando no sistema");
		else
		alert("senha incorreta");
	}while(senha!='naosei');
}