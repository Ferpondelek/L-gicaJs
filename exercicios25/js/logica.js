function mostra() {
 
 var paisA = 80000;
 var paisB = 200000;
 var ano =0;
 	do{
 		paisA+=paisA*0.03;
 		paisB+=paisB*0.015;
 		ano+=1;

 	}while(paisA<paisB)
 	console.log(ano)
}