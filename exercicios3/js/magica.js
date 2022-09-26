function Votar(){
	var idade = parseInt(document.getElementById("idade").value); 
	
	if( idade < 16 ){
		alert("Você não pode votar!");
	}
	else{
		
		if(idade < 18 || idade>65){
			alert("seu voto é facultativo");
		}
		else{
				alert("você é OBRIGADO a votar!")
			}
        }
    }
        